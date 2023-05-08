import { useState } from "react";

function Card({id,name,info,image,price,removeTours}){
    const [readmore,setReadmore]= useState(false);
    const discription = readmore ? info : `${info.substring(0,200)}`;
    function readmoreHandler(){
        setReadmore(!readmore);
    }
    return (
        <div className="card">
            <img src={image} alt="" className="image"></img>
            <div className="tour-info">
                <div className="details">
                <h4 className="tourPrice">{price}</h4>
                <h4 className="tourPlace">{name}</h4>                
                </div>
                <div className="discription">
                {discription}
                <span className="grow" onClick={readmoreHandler}>
                    {readmore ? ` ...Show less` : ` ...Read more`}
                </span>
                </div>
            </div>
            <button className="intrestButton" onClick={() => removeTours(id)}>
                Not Intrested
            </button>
        </div>
    )
}

export default Card;