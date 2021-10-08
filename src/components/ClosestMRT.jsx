import React, { useEffect} from "react"

const ClosestMRT = () => {
    const stationUrl =
    "https://api.airtable.com/v0/appN2sFwiYIFlAIlH/MRT%20Stations?api_key=" + process.env.REACT_APP_AIRTABLE_API_KEY;

    useEffect(() => {
        const fetchStations = async () => {
          const res = await fetch(stationUrl);
          const data = await res.json();
          console.log(data);
        };
        fetchStations();
      }, []);

    return(
        <p>Closest MRT selection</p>
    )
}

export default ClosestMRT