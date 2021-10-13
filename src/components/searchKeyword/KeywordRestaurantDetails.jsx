import React from "react"
import {useParams} from "react-router-dom"

const KeywordRestaurantDetails = (props) => {
    const { restoName } = useParams();

    // let restoDetails = props.data.filter((data) => data.name === restoName).map((data)=>{
    //     return (
    //     <>
    //     <h2>{data.name}</h2>
    //     <h5>Address:</h5>
    //     </>
    // )})
    return(
        <>
        <div>
        <p>test</p>
        <p>Resto details for {restoName}</p>
        {/* {restoDetails} */}
        </div>
        </>
    )
}

export default KeywordRestaurantDetails