import React from "react"
import {useEffect, useState} from "react"

const SearchFood = () => {
    const [restos, setRestos] = useState("")

    useEffect(() => {
        const url = "https://tih-api.stb.gov.sg/content/v1/food-beverages/search?keyword=haidilao&sortBy=cuisine&language=en&apikey=" + process.env.REACT_APP_TIH_API_KEY

        const fetchFood = async () => {
            const res = await fetch(url)
            const foodData = await res.json()
            console.log(foodData)
            const restoName = foodData?.data?.[0]?.name
            setRestos(restoName)
        }
        fetchFood()
    }, [])

    return (
        <h2>{restos}</h2>
    )
}

export default SearchFood