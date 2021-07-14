const Select = ({ name, onSelectChange, value }) => {
  console.log(value);
  const now = new Date().getFullYear();
  const year = Array.from({ length: now - 1980 + 2 }, (_, i) =>
    (i + 1980).toString()
  ).reverse();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = Array.from({ length: 32 }, (_, i) => i);
  const mapSelect = {
    year,
    months,
    days,
  };
  const onFocus = ({ target }) => {
    const headeing = target.previousSibling;
    headeing.style.transform = "translateY(-100%)";
  };
  const onBlur = ({ target }) => {
    const headeing = target.previousSibling;
    if (!target.value) headeing.style.transform = "translateY(0%)";
  };
  return (
    <div className="realtive  ">
      <h3 className="absolute  transition-all ml-2 pointer-events-none">
        {name}
      </h3>
      <select
        className="border-cyan-600 border-2 w-full rounded-sm "
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        onChange={onSelectChange}
        required
      >
        {mapSelect[name].map((e, index) => (
          <option key={index} value={index !== 0 ? e : ""}>
            {index !== 0 ? e : ""}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Select;
