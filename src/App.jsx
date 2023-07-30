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
        <input id={PricingOption.PAID} type="checkbox" 
          onChange={(e)=>{
            checkedOptionHandler(e.currentTarget.checked, PricingOption.PAID)
          }}
          checked={checkedOption.includes(PricingOption.PAID) ? true : false}
        />Paid
        <input id={PricingOption.FREE} type="checkbox" 
          onChange={(e)=>{
            checkedOptionHandler(e.currentTarget.checked, PricingOption.FREE)
          }}
          checked={checkedOption.includes(PricingOption.FREE) ? true : false}
        />Free
        <input id={PricingOption.VIEW_ONLY} type="checkbox" 
          onChange={(e)=>{
            checkedOptionHandler(e.currentTarget.checked, PricingOption.VIEW_ONLY)
          }}
          checked={checkedOption.includes(PricingOption.VIEW_ONLY) ? true : false}
        />View Only
      </div>
      <Asset input={{keyword, checkedOption}} />
    </div>
  );
}

export default App;
