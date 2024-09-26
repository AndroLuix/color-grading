import React, { useEffect, useState } from 'react';
import { StringRGB } from '../utilis/helpers';
import ConvertRGBtoHex from '../utilis/RGBtoHEX';

// utilitis inventati da me. 

const SingleColor = ({ rgb, type, weight }) => {

    const [copy, setCopy] = useState(false); // copia il singolo rgb
    const [statusColor, setStatusColor] = useState(ConvertRGBtoHex(...rgb))


    // console.log(type, rgb, weight)
    let bgColor = statusColor // versione testuale rgb per lo style css e testo


    

    // converti in HEX
  

    // func arrow per pop-up copia
    const copyRGB = (bgColor) => {
        setCopy(true);
        setTimeout(() => {
            setCopy(false)
        }, 3000);

        clearInterval(setTimeout)
        return navigator.clipboard.writeText(bgColor);

    }

    /**
     * Sezione per cambiare la tipologia colore con onclick
     */

   

    // funzione per cambiare la tipologia colore in view
    const setBackgroundType =()=>{
        if(bgColor.includes('#')){
            setStatusColor(StringRGB(rgb));

        }else{
           setStatusColor(ConvertRGBtoHex(...rgb));
        }
    
    }

    
    useEffect(()=>{
        bgColor = statusColor
    },[statusColor])



    const StateColorButton = () => {
        return (


            <div className='flex justify-center flex-row w-30  gap-10 pt-10'>
                
                    <button 
                    onClick={()=>setBackgroundType()}
                    type="button" class=" text-white bg-gradient-to-r from-blue-500 via-blue-600 
                to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
                focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 
                py-2.5 text-center me-2 mb-2 px-20">{bgColor.includes('#') ? 'RGB': '#HEX'}</button>

            </div>

        )
    }


    const classe = `font-bold p-2 text-2xl  ${type}`

    return (
        <article>

            <StateColorButton />
            <div
                onClick={() => copyRGB(bgColor)}
                className='p-20 w-96    cursor-pointer'
                style={{ backgroundColor: bgColor, margin: '40px', marginTop: '0px' }} >
                {
                    copy ? (<h2 className={classe}>Copiato</h2>) : <h2 className={classe} >{bgColor}</h2>
                }


            </div>
        </article>

    )



}

export default SingleColor