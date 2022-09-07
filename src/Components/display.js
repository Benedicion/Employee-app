import React from 'react'


function Display(props) {
    return(
        <div>

            {props.data.map((shoppingItem)=>(
                <h1>
                    {shoppingItem.item}  {shoppingItem.price}
                </h1>
            ))}

        </div>
    )
}

export default Display