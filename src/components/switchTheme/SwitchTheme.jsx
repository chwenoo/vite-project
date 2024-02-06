import React, { useState } from 'react'

const SwitchTheme = () => {
    const [isdark, setIsDark] = useState(false);
    const [changeTxt, setChangeTxt] = useState('dark');
    
    const changeThemeHandler = () => {

        if(!isdark) {
            document.body.style.backgroundColor = "black";
            setIsDark(true);
            setChangeTxt('white');
        } else {
            document.body.style.backgroundColor = "white";
            setIsDark(false);
            setChangeTxt('dark');
        }
    }
  return (
    <div>
        <button onClick={changeThemeHandler}>change {changeTxt} </button>
    </div>
  )
}

export default SwitchTheme