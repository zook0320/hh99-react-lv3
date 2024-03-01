import React, { useState } from "react";
import { PrimaryButton } from "./Button";
import styled from "styled-components";

function Input() {
  const [nameValue, setName] = useState('');
  const [priceValue, setPrice] = useState('');

  const onClickSave = () => {
    if (nameValue || priceValue) {
      window.alert(`name: ${nameValue || ''}, price: ${priceValue || ''}`);
    } else
      window.alert("이름과 가격을 모두 입력하세요!");
    
  };

  const savename = event => {
    setName(event.target.value)
  };

  const saveprice = event => {
    const numberCheck = event.target.value;
    const format = numberCheck.replace(/[^0-9]/g,'').replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    setPrice(format);
  };

  return (
    <>
      <h1>Input</h1>
      <Container>
        <div>
          이름
          <MyInput type="text" value={nameValue} onChange={savename} />
        </div>
        <div>
          가격
          <MyInput type="text" value={priceValue} onChange={saveprice} />
        </div>
        <PrimaryButton size="small" onClick={onClickSave}>저장</PrimaryButton>
      </Container>
    </>
  );
}

export const Container = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const MyInput = styled.input`
  width: 200px;
  height: 35px;
  border-radius: 8px;
  border: 1px solid #bdbdbd;
`;

export default Input;
