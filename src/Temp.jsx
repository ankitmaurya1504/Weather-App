import React, { useEffect, useState } from 'react';
import './index.css';
const Temp = () => {
    const [city, setCity] = useState();
    const [search, setSearch] = useState("Jehanabad");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5d78e9c609add345ae7d9b999ab9bca2`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);

        }

        fetchApi();
    }, [search])
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="Search"
                        className="inputField"
                        // value={search}
                        placeholder="Enter City Name"
                        onChange={(event) => {
                            setSearch(event.target.value);
                        }} />
                </div>
                {!city ? (
                    <p>Opps !! 😲 No Data Found 
                    <br />
                    Please Enter a Valid <br /> City Name</p>)
                    : (
                        <div>
                            <div className="info">
                                <h2 className="location">
                                    <i className="fa fa-street-view" aria-hidden="true"></i>{search}
                                </h2>
                                <h1 className="temp">
                                    {city.temp}
                                </h1>
                                <h3 className="tempmin_max">MinTemp : {city.temp_min}°cel | MaxTemp :{city.temp_max}°cel</h3>
                            </div>
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default Temp;


// MY API-5d78e9c609add345ae7d9b999ab9bca2 
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
