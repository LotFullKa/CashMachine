import React, { useState } from "react";
import { Item } from "../menuItem/MenuItem";

export function MenuList(props) {
    
    const [ListOfDrinks, SetList] = useState(['Капучино', 'Латте'])
    
    return (
        <div>
            {ListOfDrinks.map(val => <Item text={val}/>)}
        </div>
    )
}
