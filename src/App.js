import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  const Info = ['Karim ', 'Rahim', 'Tina'];
  const products = [
    
    {name:'Chiken', price: '$200'},
    {name:'lam', price:'$230'},
    {name:'Cow', price:'$3000' }
    

]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <MovieCounter></MovieCounter>
        <Product prd={products[0]}></Product>

        <Product prd={products[1]}></Product>
        <Product prd={products[2]}></Product>
        
        <ul>
       {

        
       Info.map(ActInfo => <li>{ActInfo}</li>)

         
       }
       </ul>
      </header>
    </div>
  );
}

function Nayok (props){

  return(

    <div>

      <h1> Nayoks: {props.ActInfo}</h1>
    </div>
  )
}
function Product(props){
  const ProductStyle={
    border:'2px solid red',
    margin:'10px',
    padding: '5px',
    width:'900px',
    height:'155px'

  }
const {name ,price} =props.prd
  return(

    <div style={ProductStyle}>

      <h2>product name : {name}</h2>
      <h3>PRODUCT_Price: {price}</h3>
    </div>
  )
}
// movie counter : 

function MovieCounter(){
const [count , setCount]=useState(0);
const handleincrase =()=>setCount(count+1);
const handleDecrase =()=>setCount(count-1);
return(

  <div>

  <h3>Movie_Count:{count}</h3>
  <h3>Movie_Count:{count+4}</h3>
  <h3>Movie_Count:{count-3}</h3>

  <button onClick ={handleincrase}>Incrase Movies </button>
  <button onClick ={handleDecrase}>Decrase Movies </button>

  </div>
)

}

export default App;
