export default function FormInput({
  inputT,
  placeholderV,
  inputV,
  onChangeF,
  children,
}) {
  return (
    <>
      {children}
      <input
        type={inputT}
        placeholder={placeholderV}
        value={inputV}
        onChange={(e) =>
          onChangeF(
            inputT === "number" ? Number(e.target.value) : e.target.value
          )
        }
      ></input>
    </>
  );
}
