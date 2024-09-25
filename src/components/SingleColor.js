import React, { useState } from 'react';
import { hexToRGB } from '../utilis/helpers';



const SingleColor = ({ rgb, type, weight }) => {

    const [copy,setCopy] = useState(false);

    console.log(type, rgb, weight)
   const bgColor= hexToRGB(rgb)

   const classe = `font-bold p-2 text-2xl  ${type}`

   const copyRGB = (bgColor) =>{
    setCopy(true);
    setTimeout(() => {
        setCopy(false)
    }, 3000);

    clearInterval(setTimeout)
    return navigator.clipboard.writeText(bgColor);

   }
    return (
        <div
            className='p-20 w-96  cursor-pointer' 
            style={{ backgroundColor: bgColor, margin:'40px' }} >
                {
                    copy ? (<div className='bg-white rounded'>copiato</div>): ''
                }
            <h2 className={classe} onClick={() => copyRGB(bgColor)}>{bgColor}</h2>
            
        </div>
    )
}

export default SingleColor