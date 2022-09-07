import { useState, } from "react"

function Add(props) {

    const [item, setItem] = useState(' ')

    const [price, setPrice] = useState(' ')

    const addShoppingItem = (() => {
      
        props.add(item, price);

    })




    return (
        <div>
            <input type="text" placeholder='Enter text' onChange={(event) => setItem(event.target.value)}/>
            <input type="text" placeholder='Enter price' onChange={(event) => setPrice(event.target.value)}/>
            <button onClick={addShoppingItem}>Add</button>
        </div>

    )
      }

      export default Add
