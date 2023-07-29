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
      <h1>React Search</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={keywordHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <div className="filterItem">
        <ul>
          <li>
            <button onClick={() => {optionHandler(0)}}>Paid</button>
          </li>
          <li>
            <button onClick={() => {optionHandler(1)}}>Free</button>
          </li>
          <li>
            <button onClick={() => {optionHandler(2)}}>View Only</button>
          </li>
        </ul>
      </div>
      <Asset input={{keyword, option}} />
    </div>
  );
}

export default App;
