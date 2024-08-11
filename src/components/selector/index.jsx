import PropTypes from "prop-types";

Selector.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  labelName: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

export default function Selector({
  name = "",
  options = [{ label: "", value: "" }],
  labelName = "",
  defaultValue = "",
  onChange = () => {},
}) {
  return (
    <div className="selector">
      <label htmlFor={name}>{labelName}</label>
      <span className="selector-wrapper">
        <select name={name} id={name} onChange={onChange} defaultValue={defaultValue}>
          {options.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </span>
    </div>
  );
}
