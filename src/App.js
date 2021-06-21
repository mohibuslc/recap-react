import logo from './logo.svg';
import './App.css';
import React, {useState , useEffect} from 'react';

function App() {
// using useEffect  and use useState;

const [naykos , setNaykos]=useState([]);

useEffect(() =>{
fetch ('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then (data => setNaykos(data))


}, [])

  const products = [
    
    {name:'Chiken', price: '$200'},
    {name:'lam', price:'$230'},
    {name:'Cow', price:'$3000' }
    

]
const NaykosStyle={
  border:'2px solid red',
  margin:'10px',
  padding: '5px',
  width:'900px',
  height:'155px'
}

  return (
    <div className="App">
    
        <header>
        <MovieCounter></MovieCounter>
          <div >
          <h1>Dynamic User: {naykos.length}</h1>
          {

            naykos.map(nk =><div style={NaykosStyle}> name: {nk.name} 
                          
            <br></br>
                         
              Email: {nk.email}
              
              
              </div>)
          }
          </div>
        
        <Product prd={products[0]}></Product>

        <Product prd={products[1]}></Product>
        <Product prd={products[2]}></Product>
       
      
      </header>
    </div>
  );
}


function Product(props){
  const ProductStyle={
    border:'2px solid red',
    margin:'10px',
    padding: '5px',
    width:'400px',
    height:'155px'

  }
const {name ,price} =props.prd
  return(

    <div style={ProductStyle}>

      <h2>product name : {name}</h2>
      <h3>PRODUCT_Price: {price}</h3>
    </div>
  );
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
