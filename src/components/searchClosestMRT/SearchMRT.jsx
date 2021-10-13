import React, {useState, useEffect} from "react"

const SearchMRT = (props) => {
    const selectStation = props.keyword
    const [input, setInput] = useState([])
    const [url, setUrl] = useState("https://tih-api.stb.gov.sg/content/v1/food-beverages/search?keyword=" +
    "food" +
    "&language=en&apikey=" +
    process.env.REACT_APP_TIH_API_KEY)
    
//     useEffect(() => {
//         const fetchFood = async () => {
//           const res = await fetch(url);
//           const data = await res.json();
//           console.log("unfiltered", data);
//           const restoData = data?.data.filter(search => (search.nearestMrtStation === (selectStation) || (search.nearestMrtStation === selectStation + " Station") || (search.nearestMrtStation === selectStation + " MRT Station")))
//           console.log("filtered", restoData)
//           setInput(restoData);
//         };
//         fetchFood();
//         if (input.length < 3) {
//             setUrl("https://tih-api.stb.gov.sg/content/v1/food-beverages/search?keyword=food&nextToken=" + data.nextToken +
//             "%3D&language=en&apikey=" +
//             process.env.REACT_APP_TIH_API_KEY);
//         }
//   }, [url, selectStation, input.length]);

    return (
        <>
        <p>searching by provided location...</p>
        <h2>{input?.[0]?.name}</h2>
        </>
    )
}

export default SearchMRT
