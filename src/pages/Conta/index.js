import React from "react";
import { List, ListGroup, ListGroupItem } from "reactstrap";

const Item = ({onChange, onDelete, value}) => {
    return(
        <div className="Item">
            <input className="Item" value={value} onChange={onChange}/>
            <button onClick={onDelete}>Excluir</button>
        </div>
    );
};

export default Item;