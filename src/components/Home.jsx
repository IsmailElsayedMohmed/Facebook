import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { UserGlobalContext } from "../reactContext";
import { useDispatch, useSelector } from "react-redux";
import { checkLogIn, emptyError } from "../reducers/authAndSign";
import { ImSpinner2 } from "react-icons/im";
import SignUp from "./SignUp";

export default function Home() {
  const dispatch = useDispatch();
  const errorInput = useSelector(
    (state) => state.entites.authAndSign.errorInputs
  );
  const submitButtonWaiting = useSelector(
    (state) => state.entites.authAndSign.submitButtonWaiting
  );
  const { password, email, input, removeAfter, onInputChange } =
    UserGlobalContext();
  const [clickItems, setClickItems] = useState({
    user: false,
    pass: false,
    signUp: false,
  });
  const { userEmail, pass, signUp } = clickItems;
  const onClose = (signUp) => {
    setClickItems({ ...clickItems, signUp });
  };
  useEffect(() => {
    return () => removeAfter({ email: "", password: "" });
  }, []);
  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(checkLogIn({ email, password }));
  };
  useEffect(() => {
    setTimeout(() => {
      dispatch(emptyError());
    }, 3000);
  }, [errorInput]);
  return (
    <div className="flex justify-start flex-col items-start py-8  bg-cyan-50 w-screen h-screen ">
      <Logo className="font-bold  mx-auto relative w-auto text-cyan-900 text-3xl md:text-5xl font-serif py-2 px-8 bg-cyan-100  border-fuchsia-800 border-4  border-double	rounded-lg shadow-lg">
        Connect-Me
        <BorderLogo className="absolute top-0 left-0 mr-2 "></BorderLogo>
      </Logo>
      <div className="container py-48 md:py-40 flex justify-center md:justify-between  items-start flex-col md:flex-row gap-12">
        <Cart
          onSubmit={onSubmitForm}
          className="flex flex-1 items-center justify-center  z-10 md:-ml-12  flex-col gap-6   bg-cyan-100 py-4 font-bold rounded-lg shadow-md text-cyan-900"
        >
          <h3 className="text-xl md:text-2xl text-cyan-900 border-b-2 border-cyan-400 rounded-sm py-1 px-2">
            Log in
          </h3>
          {errorInput && (
            <div className="bg-rose-200  w-full text-center text-rose-900 font-bolds rounded-sm shadow-lg mb-2">
              UserName or Password Is wrong ,try again
            </div>
          )}
          <div className="relative w-full text-center">
            <Heading
              userEmail={userEmail}
              className="absolute top-1 left-16 ml-2 pointer-events-none transition-all "
            >
              UserName
            </Heading>
            <input
              required
              type="email"
              value={email || ""}
              name="email"
              onChange={onInputChange}
              className="py-1 px-2 w-2/3 mx-auto inline-block border-2 border-cyan-300 rounded-sm focus:outline-none"
              onFocus={() => setClickItems({ ...clickItems, userEmail: true })}
              onBlur={() =>
                setClickItems({
                  ...clickItems,
                  userEmail: email ? true : false,
                })
              }
            />
          </div>
          <div className="relative w-full text-center">
            <Heading
              pass={pass}
              className="absolute top-1 left-16 ml-2 pointer-events-none transition-all "
            >
              Password
            </Heading>
            <input
              required
              type="password"
              value={password || ""}
              name="password"
              onChange={onInputChange}
              className="py-1 px-2 w-2/3 mx-auto inline-block border-2 border-cyan-300 rounded-sm focus:outline-none"
              onFocus={() => setClickItems({ ...clickItems, pass: true })}
              onBlur={() =>
                setClickItems({ ...clickItems, pass: password ? true : false })
              }
            />
          </div>
          <div className="font-semibold -my-4">
            Forget paswword ? click{" "}
            <span className="font-bold cursor-pointer underline">Here</span>
          </div>
          <button className=" focus:outline-none hover:bg-cyan-500 hover:border-cyan-300 transition-all border-4 font-bold bg-cyan-400 border-cyan-200  py-1 px-3 rounded-sm ">
            {submitButtonWaiting ? (
              <div className="flexs">
                <Spinner>
                  <ImSpinner2 className="spinner mr-2" />
                </Spinner>
                Log in
              </div>
            ) : (
              "Log in"
            )}
          </button>
          <div className="font-semibold -mt-4">
            Haven't an account?
            <a
              onClick={() => setClickItems({ ...clickItems, signUp: true })}
              className="ml-2 font-bold cursor-pointer underline"
            >
              signUp
            </a>
          </div>
        </Cart>
        <Image className="hidden md:block md:flexs relative">
          <img src="/images/MainPageIcon.png" alt="" />
          <Background className="absolute top-0 left-0 w-full h-full bg-transparent border-double border-8 border-cyan-100 "></Background>
        </Image>
      </div>
      {signUp && <SignUp input={input} onClose={onClose} />}
    </div>
  );
}
const BorderLogo = styled.div`
  border: 30px solid transparent;
  border-left: 20px double #164e6324;
  height: 100%;
  width: 28px;
  box-shadow: -3px 0 #164e635c;
`;
const Cart = styled.form`
  max-width: 400px;
  width: 90vw;
  margin: auto;
`;
const Image = styled.div`
  max-width: 300px;
  animation: play2 5s ease-in-out infinite alternate-reverse;
  @keyframes play2 {
    from {
      transform: scale(1.1);
    }
    to {
      transform: scale(1.6);
    }
  }
`;
const Background = styled.div`
  transform: rotate(0);
  @media (min-width: 765px) {
    animation: play 14s ease-in-out infinite alternate-reverse;
  }
  @keyframes play {
    0% {
      transform: rotate(20deg);
      background-color: transparent;
    }
    100% {
      transform: rotate(180deg);
      background-color: #706f2d53;
    }
  }
`;
const Logo = styled.div``;
const Heading = styled.h3`
  top: ${({ userEmail, pass }) => (userEmail ? "-25px" : pass ? "-25px" : "0")};
`;
const Wait = styled.div`
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #cef;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #cef transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const Spinner = styled.div`
  & > .spinner {
    animation: spinner 1s ease-in-out infinite forwards;
    @keyframes spinner {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;
