
import { useEffect, useRef } from "react";
import { useLocalStorage } from './../../utils/useLocalStorage';
import detectDarkMode from "../../utils/detectDarkMode";

import sun from "./../../img/icons/sun.svg";
import moon from "./../../img/icons/moon.svg";
import './style.css'


const BtnDarkMode = () => {
    // const [darkMode, setDarkMode] = useState('light')//вызывая setDarkMode меняем состояние
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode())//вместо useState используем useLocalStorage

    const btnRef = useRef(null);

    useEffect(() => {//выполняется один раз

        if (darkMode === 'dark') {
            document.body.classList.add('dark')
            // btnRef.current.classList.add('dark-mode-btn--active')
        } else {
            document.body.classList.remove('dark');
            // btnRef.current.classList.remove('dark-mode-btn--active')
        }
    }, [darkMode]);

    // Если меняются системные настройки, меняем тему
    useEffect(() => {
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (event) => {
                const newColorScheme = event.matches ? "dark" : "light";
                setDarkMode()
            });

    }, [])

    const toggleDarcMode = () => {//нажали=вызвали
        setDarkMode((currentValue) => {//здесь меняем сост на состояние
            return currentValue === 'light' ? 'dark' : 'light';
        })
    }

    const btnNormal = "dark-mode-btn";
    const btnActive = "dark-mode-btn dark-mode-btn--active";

    return (//при клике toggleDarcMode
        <button ref={btnRef} className={darkMode==='dark'? btnActive:btnNormal} onClick={toggleDarcMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
    );
}

export default BtnDarkMode;