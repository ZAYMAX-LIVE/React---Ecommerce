import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import CardFull from './pages/CardFull'
import Header from "./components/Header";
import './css/style.css'
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      product: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/products")
      .then((respons) => {
        return respons.json();
      })
      .then((product) => {
        this.setState({ product });
        console.log(product)
      })
      .catch((error) => {
        console.log("Error");
      });
  }
  render(){
    return (
      <div className="App">
        <Header/>
        <Routes>
          <Route exact path="*" element={<Home post={this.state.product}/>} />
          <Route path="card/:name" element={<CardFull post={this.state.product}/>}/>
        </Routes>
      </div>
    );
  }
}

export default App;
