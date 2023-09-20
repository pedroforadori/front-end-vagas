import React from "react"
import Button from "./src/components/button"
import "./global.css"
import Counter from "./src/components/counter"

export default function App(){
    return(
        <div className="box">
            <div className="header">
                <div className="title">Formulário<br />para compra de<br /><span>Pacote de Stickers</span></div>
            </div>
            <div className="space"></div>
            <div className="form">
                <div className="space"></div>
                <div className="fieldset">
                    <div className="label">Quais stickers:</div>
                    <div className="space"></div>
                    <div><input type="checkbox" /> React</div>
                    <div><input type="checkbox" /> Vue</div>
                    <div><input type="checkbox" /> Angular</div>
                </div>
                <div className="space-md"></div>
                <div className="fieldset">
                    <div className="label">Quantos stickers de cada?</div>
                    <div className="space"></div>
                    <Counter />
                </div>
                <div className="space-md"></div>
                <div className="fieldset">
                    <div className="label">Observações:</div>
                    <div className="space"></div>
                    <textarea name="descricao" placeholder="Alguma dúvida? Recado?"></textarea>
                </div>
                <div className="space-md"></div>
                <div className="footer">
                    <Button text="Enviar" />
                </div>
            </div>
	    </div>
    )
}