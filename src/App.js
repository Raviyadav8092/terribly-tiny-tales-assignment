import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbar/Navbar.js';
import About from './Components/About/About.js';
import Posts from './Components/Posts/Posts.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Posts/>
    </div>
  );
}

export default App;
