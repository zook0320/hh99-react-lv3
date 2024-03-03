import React, { useState } from "react";
import styled, { css } from "styled-components";

function Select() {
  const [showOptions1, setShowOptions1] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState("");

  const [showOptions2, setShowOptions2] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState("");


  const options = ["리액트", "자바", "스프링", "리액트네이티브"];

  const toggleOptions1 = () => {
    setShowOptions1(!showOptions1);
    setShowOptions2(false); // 두 번째 박스가 열려있을 경우 닫기
  };

  const handleOptionClick1 = (value) => {
    setSelectedOption1(value);
    setShowOptions1(false);
  };

  const toggleOptions2 = () => {
    setShowOptions2(!showOptions2);
    setShowOptions1(false); // 첫 번째 박스가 열려있을 경우 닫기
  };

  const handleOptionClick2 = (value) => {
    setSelectedOption2(value);
    setShowOptions2(false);
  };

  return (
    <SelectBox >
      <h1>Select</h1>
      <All>
        <div>
          <LabelContainer>
            <Label onClick={toggleOptions1}>
              <div>{selectedOption1 || "리액트"}</div>
              <div>▼</div>
            </Label>
          </LabelContainer>
          {showOptions1 && (
            <SelectOptions>
              {options.map((option) => (
                <Option key={option} onClick={() => handleOptionClick1(option)}>
                  {option}
                </Option>
              ))}
            </SelectOptions>
          )}
        </div>
        <HiddenContainer>
          <LabelContainer>
            <Label onClick={toggleOptions2}>
              <div>{selectedOption2 || "리액트"}</div>
              <div>▼</div>
            </Label>
          </LabelContainer>
          {showOptions2 && (
            <SelectOptions>
              {options.map((option) => (
                <Option key={option} onClick={() => handleOptionClick2(option)}>
                  {option}
                </Option>
              ))}
            </SelectOptions>
          )}
        </HiddenContainer>
      </All>
    </SelectBox>
  );
}

const SelectBox = styled.div`
  border: 3px solid rgb(221, 221, 221);
  height: 200px;
  margin-top: 50px;
  overflow: hidden;

  
`;

const LabelContainer = styled.div`
  display: flex;
  position: relative;
  overflow: visible;
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
  position: relative;
  cursor: pointer;
`;

const SelectOptions = styled.div`
  list-style: none;
  width: 280px;
  display: block;
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

const All = styled.div`
  display: flex;
  & > div {
    position: relative;
    margin-left: 40px;
  }
`;

const HiddenContainer = styled.div`
  position: relative;
 

`;

export default Select;