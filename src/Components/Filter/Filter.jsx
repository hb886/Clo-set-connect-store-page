import React, { useContext } from 'react';
import { CheckboxGroup, CheckboxLabel, FilterContainer, Reset } from './Filter.style';
import AppContext from '../../Context';

const Filter = () => {

    const { selectedOptions, setSelectedOptions } = useContext(AppContext);

    console.log(selectedOptions);
    
    

    const handleCheckboxChange = (value) => {
      console.log(value);
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  const handleReset = () => {
    setSelectedOptions([]);
  };

  return (
     <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <FilterContainer>
        <CheckboxGroup>
          <div style={{color:"grey", fontSize:"12px"}}>Pricing Option</div>

          <CheckboxLabel>
            <input
              type="checkbox"
              style={{ cursor: "pointer" }}
              checked={selectedOptions.includes("Paid")}
              onChange={() => handleCheckboxChange("Paid")}
            />
            <div style={{color:"grey", fontSize:"14px"}}>Paid</div>
          </CheckboxLabel>

          <CheckboxLabel>
            <input
              type="checkbox"
              style={{ cursor: "pointer" }}
              checked={selectedOptions.includes("Free")}
              onChange={() => handleCheckboxChange("Free")}
            />
            <div style={{color:"grey", fontSize:"14px"}}>Free</div>
          </CheckboxLabel>

          <CheckboxLabel>
            <input
              type="checkbox"
              style={{ cursor: "pointer" }}
              checked={selectedOptions.includes("View Only")}
              onChange={() => handleCheckboxChange("View Only")}
            />
            <div style={{color:"grey", fontSize:"14px"}}>View Only</div>
          </CheckboxLabel>
        </CheckboxGroup>

        <Reset onClick={handleReset}>RESET</Reset>
      </FilterContainer>
    </div>
  );
};

export default Filter;
