import logo from './logo.svg';
import './App.css';

import Add from "./Components/add";

import {useState,} from "react"

import Display from './Components/display';



function App() {

  const [list, setList] = useState([])

  const addItem = (item, price)=>{
    if (item == ' ' && price == ' '){
      alert("Please enter items");
    } else {
      let shoppingItem = {
        item :item
    };
    setList((list)=> [...list, {item :item ,price :price}]) ;
     console.log(list);
     
 }


}
  
  return (
    <div className="App">
      
      <Add add={addItem} />
      
      <Display data={list}/>
      </div>


      );
  
}


    

export default App;
