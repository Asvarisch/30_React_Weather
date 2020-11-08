import React, { useState } from 'react';

const FormControl = props => {
    const [city, setCity] = useState('');

    const handleClickButton = () => {
        props.getWeather(city);
        setCity('');
    }

    return (
        <div>
            <input
                value={city}
                onChange={event => setCity(event.target.value)}
                type='text'
                placeholder='city' />
            <button onClick={handleClickButton}>Get Weather</button>
        </div>
    );

}

export default FormControl;