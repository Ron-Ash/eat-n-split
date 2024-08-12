// options -> [{id:<>, value:<>}, ...]
export default function FormSelect({ options, onChangeF, children }) {
  return (
    <>
      {children}
      <select onChange={(e) => onChangeF(e.target.value)}>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </>
  );
}
