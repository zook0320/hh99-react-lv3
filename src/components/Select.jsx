import React, { useState } from "react";
import styled from "styled-components";

function Select() {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (value) => {
    setSelectedOption(value);
    setShowOptions(false);
  };

  return (
    <SelectBox>
      <h1>Select</h1>
      <LabelContainer onClick={toggleOptions}>
        <Label>
          <div>{selectedOption || "리액트"}</div>
          <div>▼</div>
        </Label>
      </LabelContainer>
      {showOptions && (
        <SelectOptions>
          <Option onClick={() => handleOptionClick("리액트")}>리액트</Option>
          <Option onClick={() => handleOptionClick("자바")}>자바</Option>
          <Option onClick={() => handleOptionClick("스프링")}>스프링</Option>
          <Option onClick={() => handleOptionClick("리액트네이티브")}>
            리액트네이티브
          </Option>
        </SelectOptions>
      )}
    </SelectBox>
  );
}

const SelectBox = styled.div`
  border: 3px solid rgb(221, 221, 221);
  height: 200px;
  margin-top: 50px;
`;

const LabelContainer = styled.div`
  display: flex;
  position: relative;
`;

const Label = styled.div`
  font-size: 14px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 220px;
  padding: 0 30px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 15px;
  margin-left: 40px;
  position: relative;
  cursor: pointer;
`;

const SelectOptions = styled.div`
  list-style: none;
  width: 280px;
  display: block;
  position: absolute;
  left: 55px;
`;

const Option = styled.div`
  font-size: 12px;
  line-height: 40px;
  width: 280px;
  height: 40px;
  border-radius: 10px;
  background-color: #ffffff;
  z-index: 99;
  &:hover {
    background-color: #eee;
  }
`;

export default Select;
