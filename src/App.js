import './App.css';
import axios from 'axios';
import Home from './Pages/Home';
import React, {useState, useEffect} from 'react'



function App() {
const [player,setPlayer] = useState()

const URL = ('http://owapi.io/profile/pc/us/Jay3-11894')
useEffect(() => {
axios.get(URL)
  .then(function (response) {
    setPlayer(response)
    console.log(response);
  });
},[]);

  return <div className='Home'> 
  <Home/>
<p>{player?.data?.username}</p>
  </div>
}

export default App;
