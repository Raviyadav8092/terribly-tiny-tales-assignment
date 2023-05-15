# Terribly Tiny Tales Word Count App

This is a simple web application built using React that allows users to count the words in a text file from https://www.terriblytinytales.com and display the top 20 most frequently occurring words in a bar chart. The user can also export the data as a CSV file.


### `Live link`
  https://tinytalesassignmentravi.netlify.app/


### `Libraries and Plugins Used`

*React - a JavaScript library for building user interfaces
*recharts - a charting library for React that makes it easy to create reusable charts
*react-csv - a library for creating CSV files from data in React applications




### `Components`

The App component contains all the main logic and functionality of the app. It has three states:

content: This state holds the contents of the text file fetched from the API.
wordCounts: This state holds an object containing the word counts for each word in the text file.
error: This state holds any error that occurs during the fetch operation.




### `Explanation`

The handleSubmit function is called when the user clicks the "Submit" button. It uses the fetch method to fetch the content of the text file and then calls the countWords function to get the word counts for the text. If successful, it updates the content and wordCounts states with the fetched data.

The countWords function takes the content of the text file as input and returns an object containing the frequency of each word in the text.

The getTopWords function takes the word count object and returns an array of the top 20 words, sorted by frequency.

The chartData variable stores the data required to generate the bar chart using recharts. The CSVLink component allows the user to download the data as a CSV file.






