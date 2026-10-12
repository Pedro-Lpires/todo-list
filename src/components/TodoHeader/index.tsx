
import {themeConfig} from '../../contexts/theme';
import {ThemeContext} from '../../contexts/ThemeContext';
import { useContext } from 'react';
const TodoHeader = () => {

    //versão shortrend
    //const { theme, toggleTheme } = useContext(ThemeContext); 

//versao longa, mas da aula
     const context = useContext(ThemeContext);
    const { theme, toggleTheme } = context;
    
    return (
        <header className="flex justify-between items-center  mb-6 p-5" >
            <h1 className="text-white text-4xl sm:text-[2.5rem] font-bold tracking-[1rem] ">
                TODO
            </h1>

            <button  onClick={toggleTheme} className="cursor-pointer">
                <img className="w-8 h-8" src={`${themeConfig[theme].icon}`} alt="Alterar tema" />
            </button>
          
        </header>
    );
};

export default TodoHeader;