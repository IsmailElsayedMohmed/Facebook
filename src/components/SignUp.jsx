import React from "react";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { UserGlobalContext } from "../reactContext";
export default function SignUp({ input, onClose }) {
  const {
    yourEmail,
    yourPassword,
    firstName,
    lastName,
    select,
    birthDate,
    checkBox,
    gender,
  } = UserGlobalContext();
  console.log(gender);

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container className="fixed top-0 left-0 w-full h-full flexs z-20 ">
      <Cart
        onSubmit={onSubmit}
        className="p-2  rounded-lg font-bold text-trueGray-600  relative  shadow-md text-sm md:text-base "
      >
        <h1 className="text-center border-b border-cyan-900 bg-cyan-100  ">
          SignUp a new Account
        </h1>
        <div
          onClick={() => onClose(false)}
          className="absolute -top-3 -left-3 cursor-pointer text-4xl text-cyan-900 bg-cyan-50 rounded-full"
        >
          <AiOutlineCloseCircle />
        </div>
        <hr />
        <Grid className="grid grid-cols-2 gap-5 mt-8 ">
          {input("firstName")}
          {input("lastName")}
          {input("yourEmail")}
          {input("yourPassword", null, "password")}
        </Grid>
        <Birth className="grid gap-4 grid-cols-3  gap-x-2 gap-y-8 items-center py-8 ">
          <h1 className="col-span-3 text-center bg-cyan-50 ">Your BirthDate</h1>
          {select("year")}
          {select("days")}
          {select("months")}
        </Birth>
        <Gender>
          <h1 className=" text-center bg-cyan-50 ">Pick Up Your Gender </h1>
          <div className="flexs pt-2">
            {checkBox("male")}
            {checkBox("female")}
          </div>
        </Gender>
        <button className="btn border-4 border-gray-300 font-serif block text-center bg-cyan-300 transition-all hover:bg-cyan-400 py-2 px-4 text-cyan-900 font-bold mt-8 w-full">
          Sign Up
        </button>
        <div className="text-xs font-serif text-center my-5">
          Have an email ?{" "}
          <span
            className="font-bold cursor-pointer text-base text-cyan-700"
            onClick={() => onClose(false)}
          >
            Log In
          </span>
        </div>
      </Cart>
    </Container>
  );
}

const Gender = styled.div``;
const Birth = styled.div``;
const Grid = styled.div``;
const Cart = styled.div`
  width: 500px;
  max-width: 90vw;
  height: 500px;
  background-color: #eee;
  animation: playy 0.4s ease-in;
  @keyframes playy {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
`;
