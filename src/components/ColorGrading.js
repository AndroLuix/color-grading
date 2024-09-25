import React, { useState } from 'react';
import Values from 'values.js';
import SingleColor from './SingleColor';
import { v4 as idColor } from "uuid";

const ColorGrading = () => {


    // prende l'input dell'utente
    const [colorInput, setColorInput] = useState({
        color: '',
        qty: 5
    })


    // gestisce il colore selezionato secondo l'input DOPO IL SUBMIT
    const [selectedColor, setSelectedColor] = useState([]);





    const handleSubmit = (e) => {
        e.preventDefault();

        if (colorInput.color && colorInput.qty) {
            let { color, qty } = colorInput; //predniamoci i valori direttamente

            if (!color.includes('#')) {
                color = '#' + color;
            }

            let newColore = new Values(color).all(Math.round(100 / parseInt(qty, 10)) * 2)
            setSelectedColor((prevSelectedColor) => [...prevSelectedColor, ...newColore]);

        }

    };




    const handleChange = (e) => {
        // console.log(e.target.value)

        const { name, value } = e.target
        setColorInput({
            ...colorInput,
            [name]: value
        })
    }


    return (
        <>
            <form
                action="form"
                className="space-y-4 bg-white p-4 shadow-md rounded-md"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-row  gap-3">
                <div className='flex flex-col'>
                <input
                        type="text"
                        name="color"
                        id="color"
                        value={colorInput.color}
                        maxLength={7}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <small>Hexadecimal</small>
                    </div>
                    <div className='flex flex-col'>
                    <input
                        type="number"
                        name='qty' id='qty'
                        value={colorInput.qty}
                        step={5}
                        max={100}
                        min={5}
                        onChange={handleChange}


                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <small>Gradients</small>

                    </div>
                    <button type="submit" className="text-white bg-gradient-to-br
                     from-green-400 to-blue-600  focus:ring-4 
                      dark:focus:ring-green-800
                      font-medium rounded-lg text-sm px-5  mx-2 my-0.5  text-cente">Add color</button>

                </div>


            </form>


            <div className=' flex flex-wrap ' >
                {
                    !selectedColor.lenght > 0
                        ?
                        (selectedColor.map((el) => <SingleColor key={idColor()} {...el} />))
                        :
                        (<h4>Loading...</h4>)
                }
                
            </div>


        </>
    )
}

export default ColorGrading