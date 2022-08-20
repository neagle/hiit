const Checkbox = ({ checked, disabled, ...otherProps }) => {
  return (
    <div className={`checkbox ${disabled ? "disabled" : "not-disabled"}`}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        {...otherProps}
      />
    </div>
  );
};

export default Checkbox;
