import React, { useState } from 'react'

function ColorPicker() {

    const [color, setColor] = useState('#696969');
    const styles = {
        backgroundColor: color,
        width: '250px',
        height: '250px',
        textAlign: 'center',
    }

    const handleColorChange = (event) => {
        setColor(event.target.value);
    }

    return (
        <>
            <div style={styles}>
                <h2>Color picker</h2>
                <p>Color : {color}</p>
            </div>
            <label htmlFor="colorPicker">Select your color: </label>
            <input id='colorPicker' type="color" value={color} onChange={handleColorChange} />
        </>
    );
}

export default ColorPicker