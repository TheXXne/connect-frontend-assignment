import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Asset } from "./components/Asset";
import "./App.css";

function App() {
  const [keyword, setKeyword] = useState("");
  const [option, setOption] = useState("");

  const keywordHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setKeyword(lowerCase);
  };

  const optionHandler = (option) => {
    setOption(option);
  };

  return (
    <div className="main">
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={keywordHandler}
          variant="outlined"
          fullWidth
          label="Find the items you're looking for"
        />
      </div>
      <div className="filterItem">
        <input type="checkbox" onClick={() => {optionHandler(0)}}/>Paid
        <input type="checkbox" onClick={() => {optionHandler(1)}}/>Free
        <input type="checkbox" onClick={() => {optionHandler(2)}}/>View Only
      </div>
      <Asset input={{keyword, option}} />
    </div>
  );
}

export default App;
