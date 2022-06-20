import React from "react";



export default class PlayerCharacterList extends React.Component {
    state ={
        allHeroes: "https://best-overwatch-api.herokuapp.com/heroes",
        player: "https://best-overwatch-api.herokuapp.com/player"
      }
    }

  const axios.get('https://best-overwatch-api.herokuapp.com/')
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
})