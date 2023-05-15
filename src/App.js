import React, { useState } from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { CSVLink } from 'react-csv';

function App() {
  const [content, setContent] = useState(null);
  const [wordCounts, setWordCounts] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://www.terriblytinytales.com/test.txt")
      .then((response) => response.text())
      .then((data) => {
        setContent(data);
        setWordCounts(countWords(data));
      })
      .catch((error) => console.log(error));
  };

  const countWords = (text) => {
    const words = text.toLowerCase().match(/\b\w+\b/g);
    const wordCounts = {};

    for (const word of words) {
      wordCounts[word] = (wordCounts[word] || 0) + 1;
    }

    return wordCounts;
  };

  const getTopWords = (counts, n=20) => {
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0,n)
      .map(([word, count]) => ({ name: word, count }));
  };

  const chartData = wordCounts ? getTopWords(wordCounts) : [];
  const csvData = chartData.map(({name, count}) => [name, count]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
      {content && (
        <div>
          <h1>Content:</h1>
          <p>{content}</p>
          <h1>Top 20 Words:</h1>
          <BarChart width={600} height={300} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
          <CSVLink data={csvData} filename={"top-20-words.csv"}>
            <button>Export as CSV</button>
          </CSVLink>
        </div>
      )}
    </div>
  );
}

export default App;
