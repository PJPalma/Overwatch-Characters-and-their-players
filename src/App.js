import './App.css';
import axios from 'axios';
import Home from './Pages/Home';

const URL = ('https://best-overwatch-api.herokuapp.com/')
axios.all([
  axios.get(URL)
])
.then ((res) => console.log(res))

function App() {
  return <div className='Home'> 
  <Home/>
  </div>

}

export default App;
