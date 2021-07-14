import { createContext, useContext, useState } from "react";
import CheckBox from "./CheckBox";
import Select from "./Select";
const AppContext = createContext();
export default function FormStuff({ children }) {
  const inital = {
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    yourEmail: "",
    yourPassword: "",
    birthDate: { year: "", days: "", months: "" },
    gender: "",
  };
  const [items, setItmes] = useState(inital);
  const {
    firstName,
    lastName,
    password,
    email,
    birthDate,
    gender,
    yourEmail,
    yourPassword,
  } = items;
  const onInputChange = ({ target }) => {
    console.log(target);
    const { name, value } = target;
    setItmes({
      ...items,
      [name]: value,
    });
  };
  const removeAfter = (inputs) => {
    setItmes({ ...items, inputs });
  };
  const input = (name, style, type = "text") => {
    const onFocus = ({ target }) => {
      const headeing = target.previousSibling;
      headeing.style.transform = "translateY(-100%)";
    };
    const onBlur = ({ target }) => {
      const headeing = target.previousSibling;
      if (!items[name]) headeing.style.transform = "translateY(0%)";
    };
    return (
      <div>
        <div className="relative">
          <h1
            className={`absolute top-0 left-2 transition-all  pointer-events-none`}
          >
            {name}...
          </h1>
          <input
            type={type}
            required
            value={items[name]}
            name={name}
            onChange={onInputChange}
            onFocus={onFocus}
            onBlur={onBlur}
            className={`btn  border-2 w-full px-2 py-px ${style}`}
          />
        </div>
      </div>
    );
  };
  const select = (name) => {
    const onSelectChange = ({ target: { value } }) => {
      birthDate[name] = value;
      setItmes({ ...items });
    };
    return (
      <Select
        name={name}
        value={items["birthDate"][name]}
        onSelectChange={onSelectChange}
      />
    );
  };
  const checkBox = (name) => {
    return <CheckBox name={name} value={gender} onCheckBox={onInputChange} />;
  };

  return (
    <AppContext.Provider
      value={{
        firstName,
        lastName,
        password,
        email,
        birthDate,
        gender,
        onInputChange,
        yourEmail,
        yourPassword,
        input,
        removeAfter,
        select,
        birthDate,
        checkBox,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const UserGlobalContext = () => {
  return useContext(AppContext);
};
