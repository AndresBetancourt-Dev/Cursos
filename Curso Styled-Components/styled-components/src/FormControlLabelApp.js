import "styled-components/macro";
import React from "react";
import { GlobalStyles } from "./styles/global.styles";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

const App = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <GlobalStyles />
      <RadioGroup>
        <FormControlLabel
          control={<Radio />}
          label={
            <label
              dangerouslySetInnerHTML={{ __html: "<b>Bold</b> Normal text" }}
            ></label>
          }
        />
        <FormControlLabel control={<Radio />} />
      </RadioGroup>
    </div>
  );
};

export default App;
