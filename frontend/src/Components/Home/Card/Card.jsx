import React from "react";

function Card(props){
    const data = props.data
    return(
        <div style={{borderRadius: "10px", padding: "12px 0px", backgroundColor: "#E9E8FC", maxWidth: "30%", display: "inline-block", margin: "3%"}}>
            <h5 style={{padding: "0px 24px", textAlign:"start", margin: "0", color: "gray"}}>Provider</h5>
            <h2 style={{padding: "0px 24px", textAlign:"start", marginTop: "2px"}}>{data.provider}</h2>
            <img style={{width: "100%", zIndex: "0"}} src={process.env.REACT_APP_EXPRESS_SERVER_URL + "/" + data.image}/>
            <div style={{padding: "0px 24px", textAlign:"start", marginTop: "2px", display: "flex", flexDirection: "column"}}>
                <span style={{color: "black", marginTop: "5px"}}>{data.adType}</span>
                <span style={{color: "grey" , marginTop: "5px"}}>Location: {data.location}</span>
                <span style={{color: "green", marginTop: "5px"}}>₹{data.cost}/Month</span>
                <span style={{color: "black", marginTop: "5px"}}>{data.rating}/5</span>
                <button>Contact Provider</button>
            </div>
        </div>
    )
}

export default Card