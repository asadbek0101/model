import React, { useState } from "react";
import Button from "./Button";
import InputComponent from "./Input";
import InputPlus from "./InputPlus";

export default function Header({ data, increment, count, setData, setCount }) {
  const dataLine = {
    lineTitle: "",
    dataChart: [],
  };
  const [coordinataCount, setCoordinataCount] = useState(0);

  const submitAdd = () => {
    if (coordinataCount !== 0) {
      console.log("count", coordinataCount);
      for (let i = 0; i < coordinataCount; i++) {
        dataLine.dataChart.push({
          coordinateX: null,
          coordinateY: null,
        });
      }
      setShow(true);
      setData((old) => [...old, dataLine]);
      console.log("data", data);
      increment();
    }
  };

  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="text-center mt-2">
        <p className="fs-3 p-0 m-0">y=ax+by+c</p>
      </div>
      <div className="row m-0 p-0">
        <div className="col-12">
          <div
            style={{
              display: "flex",
              gap: "10px",
              overflowX: "auto",
              whiteSpace: "nowrap",
              alignItems: "center",
            }}
            className="for-scroll my-1"
          >
            {!show ? (
              <div className="d-flex justify-content-center align-items-center gap-2">
                <InputComponent
                  type="number"
                  value={coordinataCount}
                  onChange={(event) => setCoordinataCount(event.target.value)}
                />
                <Button onclick={submitAdd} title="Nuqtalar qo'shish" />
              </div>
            ) : (
              <div className="d-flex justify-content-center align-items-center gap-2">
                {data.map((elementInArray, index) => (
                  <div className="" key={index}>
                    <Button
                      onclick={() => {
                        setCount(index);
                      }}
                      bgColor={`${count === index ? "gray" : ""}`}
                      title={`Line ${index < 10 ? "0" : ""}${index + 1} `}
                    />
                  </div>
                ))}
                <InputPlus onclick={submitAdd} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
