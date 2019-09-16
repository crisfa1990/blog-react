import React, {Component} from 'react';
import Router from './componentes/Router';

class App extends Component {
  //Se va a utilizar para este proyecto una API llamada JSONPlaceHolder
  render(){
    return (
      <div className="App">
      <Router />
      </div>
    )
  }

}

export default App;
