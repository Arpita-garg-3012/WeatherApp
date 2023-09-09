import React from 'react'

const Details = ({ tempInfo }) => {
    const {
        temp,
        pressure,
        humidity,
        weathermood,
        speed,
        name,
        sunset
    } = tempInfo;

    const sec = sunset;
            const date = new Date(sec * 1000);
            const timestr = `${date.getHours()}:${date.getMinutes()}`;

    return (
        <>
            <div className="details">
                <span>{timestr}<br/>⛅   sunset</span>
                <span>{humidity}<br/>💧  humidity</span>
                <span>{pressure}<br/><i className="fa-solid fa-cloud-arrow-up"></i>  pressure</span>
                <span>{speed}<br/><i className="fa-solid fa-wind"></i>  speed</span>
                {/* <span>{sunset}</span> */}
                {/* <span>💧</span>
                <span>{humidity}</span>
                <span><i className="fa-solid fa-cloud-arrow-up"></i></span>
                <span>{pressure}</span>
                <span><i className="fa-solid fa-wind"></i></span>
                <span>{speed}</span> */}
            </div>
        </>
    )
}

export default Details
