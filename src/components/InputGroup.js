import React from "react";

export default function InputGroup({
  label,
  type,
  leftTitle,
  data,
  onchangeX,
  onchangeY,
}) {
  return (
    <div className="input-group">
      <div className="title-group">
        <p>{leftTitle}</p>
      </div>
      <div className="input-group-item">
        <div className="form-item">
          <label htmlFor={label}>X</label>
          <input type={type} value={data.coordinateX} onChange={onchangeX} />
        </div>
        <div className="form-item">
          <label htmlFor={label}>Y</label>
          <input type={type} value={data.coordinateY} onChange={onchangeY} />
        </div>
        <div className="form-item">
          <label htmlFor={label}>Z</label>
          <input type={type} value={0} id={label} />
        </div>
      </div>
    </div>
  );
}
