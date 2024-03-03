import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { basketConfig } from "./basketConfig";
import DynamicSection from "./components/DynamicSection";
function App() {
  const [basket, setBasket] = useState<string>("basket1");

  const handleChange = (event: SelectChangeEvent) => {
    setBasket(event.target.value as string);
  };

  return (
    <>
      <InputLabel id="Basket Type">Basket</InputLabel>
      <Select label="Basket" value={basket} onChange={handleChange}>
        {Object.keys(basketConfig).map((configKey) => {
          return (
            <MenuItem key={configKey} value={configKey}>
              {basketConfig[configKey].name}
            </MenuItem>
          );
        })}
      </Select>
      <DynamicSection configKey={basket} />
    </>
  );
}

export default App;
