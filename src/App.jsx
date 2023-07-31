import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Asset } from "./components/Asset";
import "./App.css";

const PricingOption = {
  PAID: 0,
  FREE: 1,
  VIEW_ONLY: 2,
}

function App() {
  const [keyword, setKeyword] = useState("");
  const [checkedOption, setCheckedOption] = useState([]);

  const keywordHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setKeyword(lowerCase);
  };

  const checkedOptionHandler = (checked, id) => {
    if (checked) {
      setCheckedOption([...checkedOption, id]);
    } else {
      setCheckedOption(checkedOption.filter((el) => el !== id));
    }
  };

  const optionResetHandler = () => {
    setCheckedOption([]);
  };

  return (
    <div className="App">
      <div className="asset-wrapper">
        <div className="search">
          <TextField
            className="search-text"
            id="outlined-basic"
            onChange={keywordHandler}
            label="Find the items you're looking for"
          />
        </div>
        <div>
          <div className="filterItem">
            <span className="pricing-option">Pricing Options</span>
            <div>
              <input id={PricingOption.PAID} type="checkbox" 
                onChange={(e)=>{
                  checkedOptionHandler(e.currentTarget.checked, PricingOption.PAID)
                }}
                checked={checkedOption.includes(PricingOption.PAID) ? true : false}
              />
              <span>Paid</span> 
            </div>
            <div>
              <input id={PricingOption.FREE} type="checkbox" 
                onChange={(e)=>{
                  checkedOptionHandler(e.currentTarget.checked, PricingOption.FREE)
                }}
                checked={checkedOption.includes(PricingOption.FREE) ? true : false}
              />
              <span>Free</span> 
            </div>
            <div>
              <input id={PricingOption.VIEW_ONLY} type="checkbox" 
                onChange={(e)=>{
                  checkedOptionHandler(e.currentTarget.checked, PricingOption.VIEW_ONLY)
                }}
                checked={checkedOption.includes(PricingOption.VIEW_ONLY) ? true : false}
              />
              <span>View Only</span>
            </div>
          </div>
          <div className="reset-div">
            <button className="reset-btn" onClick={optionResetHandler}>Reset</button>
          </div>
        </div>
        <div>
          <Asset input={{keyword, checkedOption}} />
        </div>
      </div>
    </div>
  );
}

export default App;
