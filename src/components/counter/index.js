import React, { useState } from "react"
import "./styles.css";
import Minus from "../../../assets/img/minus.svg";
import MinusDisable from "../../../assets/img/minus-disabled.svg";
import Plus from "../../../assets/img/plus.svg";

export default function Counter() {
    const [ valueSticker, setValueSticker ] = useState(0);

    function handlePlus(){
        setValueSticker(valueSticker + 1);
    }

    function handleMinus(){
        setValueSticker(valueSticker - 1);
    }

    return (
        <div className="counter">
            <img 
                src={valueSticker === 0 ? MinusDisable : Minus} 
                alt="Minus SVG" 
                onClick={valueSticker > 0 ? handleMinus : undefined}
            />
            <input 
                type="text" 
                placeholder="0" 
                onChange={(e) => setValueSticker(e.target.value)}
                value={valueSticker}
            />
            <img 
                src={Plus} 
                alt="Plus SVG" 
                onClick={handlePlus}
            />
        </div>
    )
}