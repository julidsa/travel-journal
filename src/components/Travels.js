import React from "react";
import Icon from "./images/icon.png"

export default function Travels(props) {
    return (
        <div className="travel-card">
            <img className="travel-img" src={props.imageUrl} alt='travels imgs' />
            <div className="top-info">
                 <img className="icon" src={Icon} alt='icon' width="18px" />
                 <p className="local" >{props.location}</p>
                 <h4 className="maps"> <a target="_blank" ref="noopener" href={props.googleMapsUrl}> View on Google Maps </a> </h4>
            </div>
            <div className="description">
                <h2 className="place" >{props.title}</h2>
                <p className="date" >{props.startDate}</p>
                <p>{props.description}</p>
            </div>
            <hr />
        </div>
    )
}
