import * as React from "react";

const InputComponent = ({
  className,
  containerStyle,
  disabled,
  inputStyle,
  name,
  onChange,
  placeholder,
  readOnly,
  type,
  value,
  wrapperStyle,
}) => {
  const inputRef = React.useRef(null);

  const handleClick = () => {
    if (inputRef && inputRef.current) inputRef.current.focus();
  };

  return (
    <div className={className} style={wrapperStyle}>
      <div onClick={handleClick} className="container" style={containerStyle}>
        <input
          ref={inputRef}
          aria-label={name}
          data-testid={name}
          tabIndex={0}
          type={type}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          style={inputStyle}
          disabled={disabled}
          readOnly={readOnly}
        />
      </div>
    </div>
  );
};

export default InputComponent;
