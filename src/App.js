import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  var person = {
    name: "Sherlock Holmes",
    job:"Detective",
    address: "221 B, Baker Street",
  }
  var person2 = {
    name: "John Watson",
    job:"Doctor",
  }
  const products = [
    {name:"Lightroom", price:"$90.99"},
    {name:"Illustrator", price:"$9.99"},
    {name:"Photoshop", price:"$20.90"},
    {name:"PDF Reader", price:"$9.39"},                
    {name:"PDF Converter", price:"$21.39"},                
    {name:"Premiere Elements", price:"$290.39"},                
]
const productNames = products.map(product => product.name)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>The name's {person.name}</h1>
        <h3>And the address is {person.address}</h3>
        <p style={{backgroundColor:'steelblue'}}>My friend {person2.name} is a {person2.job}.</p>
        <Users></Users>
        <Counter></Counter>
        <h1>Our Product List</h1>
        <ul>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    setCount(count + 1);
    // or
    // const newCount = count + 1;
    // setCount(newCount);
  };
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={ () => setCount(count + 1)}>Increase</button>
      <button onClick={ () => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'1px solid lightgray',
    borderRadius:'10px',
    color:'darkgray',
    backgroundColor:'whitesmoke',
    width:'400px',
    height:'200px',
    float:'left'
  }
  return (
    <div style={productStyle}>
      <h2>{props.product.name}</h2>
      <h4>{props.product.price}</h4>
      <button>Book Now</button>
    </div>
  )
}

export default App;
