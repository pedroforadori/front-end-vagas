import React, { useState } from "react";
import Swal from 'sweetalert2'
import Checkbox from "../checkbox"
import Button from "../button"
import Minus from "../../../assets/img/minus.svg";
import MinusDisable from "../../../assets/img/minus-disabled.svg";
import Plus from "../../../assets/img/plus.svg";    
import "./styles.css";

export default function Form(){
    const [ swalProps, setSwalProps ] = useState({});
    const [ react, setReact ] = useState(false)
    const [ vue, setVue ] = useState(false)
    const [ angular, setAngular ] = useState(false)
    const [ valueSticker, setValueSticker ] = useState(0);
    const [ obs, setObs ] = useState("");
    const [ errorCheckbox, setErrorCheckbox ] = useState(false)

    function handlePlus(){
        setValueSticker(valueSticker + 1);

        if(errorCheckbox){
            setErrorCheckbox(false)
        } 
    }

    function handleMinus(){
        setValueSticker(valueSticker - 1);
    }

    function validateCheckbox(){
        if(react === false && vue === false && angular === false){
           var validate = true
        }

        return validate
    }
    
    function resetForm(){
        setReact(false)
        setVue(false)
        setAngular(false)
        setValueSticker(0)
        setObs("")
    }

    function buySticker(e){
        e.preventDefault()

        if(validateCheckbox()){
            setErrorCheckbox(true)
            return
        } 

        Swal.fire({
            title: "Realizar compra?",
            text: `Voce está comprando: \n 
                    ${valueSticker} Sticker(s) de \n 
                    ${react === true ? "React" : ""} \n 
                    ${vue === true ? "Vue" : ""} \n 
                    ${angular === true ? "Angular" : ""} \n
                    `,
            icon: "warning",
            showCancelButton: true,
            showConfirmButton: true,
            confirmButton: 'Ok',
            cancelButton: 'Cancelar',
            dangerMode: true,
            confirmButtonColor: "#2f3676",
          }).then((isConfirm) => {
            if (isConfirm) {
                resetForm()
            }else{
                return
            }
          });
    }

    return(
        <form onSubmit={buySticker}>
             <div className="fieldset">
                 <label className="label">Quais stickers:</label>
                 <Checkbox 
                    id="React"
                    text="React" 
                    value={react}
                    onChange={() => setReact(!react)}    
                    style={errorCheckbox ? {backgroundColor: "#F59393", color: "#F33232"} : undefined}

                />
                 <Checkbox 
                    id="Vue"
                    text="Vue" 
                    value={vue}
                    onChange={() => setVue(!vue)} 
                    style={errorCheckbox ? {backgroundColor: "#F59393", color: "#F33232"} : undefined}
                />
                 <Checkbox 
                    id="Angular"
                    text="Angular" 
                    value={angular}
                    onChange={() => setAngular(!angular)}
                    style={errorCheckbox ? {backgroundColor: "#F59393", color: "#F33232"} : undefined}
                />
             </div>
                    
             <div className="fieldset">
                 <label className="label">Quantos stickers de cada?</label> 
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
             </div>
                    
             <div className="fieldset">
                 <label className="label">Observações:</label>
                 <textarea 
                    name="descricao" 
                    placeholder="Alguma dúvida? Recado?"
                    value={obs}
                    onChange={(e) => setObs(e.target.value)}
                >
                </textarea>
             </div>
                    
             <footer className="footer">
                 <Button 
                    text="Enviar" 
                    type="submit"
                    disabled={valueSticker === 0 ? true : false}
                />
             </footer>  
        </form>
    )
}