import React, {useState} from "react"
import KeywordSearch from "./KeywordSearch"
import SearchFood from "./SearchFood"

const Keyword = () => {
    const [keyword, setKeyword] = useState("thai")

const handleSubmit = (input) => {
  console.log("submitting from app", input)
  setKeyword(input)
}
    return(
        <>
<div className="top">
      <h1>Nom nom for us</h1>
      <KeywordSearch handleSubmit={handleSubmit}/>
      {/* <p>OR</p>
      <p>Select from the following options</p> */}
      </div>
      <br />
      <div className="results">
      <p>Fetching food from...</p>
      <SearchFood keyword={keyword}/>
      </div>
      </>
    )
}

export default Keyword