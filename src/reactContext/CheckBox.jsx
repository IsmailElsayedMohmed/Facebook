import React, { useState } from "react";
import styled from "styled-components";
import { UserGlobalContext } from ".";

export default function CheckBox({ name, gender, onCheckBox }) {
  return (
    <>
      <div className=" border-4 border-trueGray-300 bg-cyan-200 py-px px-3 rounded-md ml-2">
        <label htmlFor={name} className="pr-1 pt-4">
          {name}
        </label>
        <Input
          required
          onChange={onCheckBox}
          type="radio"
          id={name}
          name="gender"
          value={gender}
          className="before:bg-cyan-50"
        />
      </div>
    </>
  );
}
const Input = styled.input`
  filter: grayscale(2);
`;
