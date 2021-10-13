import React from "react"

const RestoAddress = (props) => {
    return (
<p>Address: {props.address?.block} {props.address?.streetName}, {props.address?.floorNumber}-{props.address?.unitNumber}</p>
    )
}

export default RestoAddress