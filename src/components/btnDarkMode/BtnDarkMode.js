
import { useState, useEffect } from "react";
import sun from "./../../img/icons/sun.svg";
import moon from "./../../img/icons/moon.svg";
import './style.css'

const BtnDarkMode = () => {

    const [darkMode, setDarkMode] = useState('light')//вызывая setDarkMode меняем состояние

    useEffect(()=>{
        // console.log('Use effect fired');
        // console.log(darkMode);

        if(darkMode === 'dark'){
            document.body.classList.add('dark')
        }else{
            document.body.classList.remove('dark');
        }

    }, [darkMode]);

    const toggleDarcMode = () =>{//нажали=вызвали
        setDarkMode((currentValue)=>{//здесь меняем сост на состояние
            return currentValue === 'light' ? 'dark': 'light';
        })

        // console.log('toggleDarcMode')
    }

    return (
        <button className="dark-mode-btn" onClick={toggleDarcMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
    );
}

export default BtnDarkMode;