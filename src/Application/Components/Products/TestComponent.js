import React, { Component } from "react";

const NestedComp = ({ data, addChild }) => {
  const addNestedChildN = (data1, level) => {
    let newData = { ...data1 };
    newData.child.push({
      title: level + 1,
      level: level + 1,
      child: [],
    });
    addChild(newData);
  };
  const addNestedChildR = (data2, data3, data4) => {
    let data33 = { ...data3, child: data4 };
    let data22 = [...data2];
    let item = { ...data33, child: data4 };
    data22.map((i) => (i.id === data3.id ? item : i));
    addChild(data22);
  };

  return (
    <div style={{ marginLeft: 20, marginTop: 10 }}>
      {data.map((item) => (
        <div>
          <li>
            {item.title}{" "}
            <button onClick={() => addNestedChildN(item, item.level)}>
              Add
            </button>
          </li>
          {item.child.length !== 0 ? (
            <NestedComp
              addChild={(d) => addNestedChildR(data, item, d)}
              data={item.child}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
};

class TestComponent extends Component {
  state = {
    data: [
      {
        id: "0",
        title: "Level 0",
        level: 0,
        child: [
          {
            id: "01",
            title: "Level 1",
            level: 1,
            child: [
              //   {
              //     title: "Level 2",
              //     level: 2,
              //     child: [],
              //   },
            ],
          },
        ],
      },
      {
        id: "1",
        title: "Level 0",
        level: 0,
        child: [
          {
            id: "11",
            title: "Level 1",
            level: 1,
            child: [
              //   {
              //     title: "Level 2",
              //     level: 2,
              //     child: [],
              //   },
            ],
          },
        ],
      },
    ],
    addedData: [],
  };
  render() {
    const { data } = this.state;
    return (
      <div>
        <NestedComp
          addChild={(newData) => this.setState({ data: newData })}
          data={data}
        />
      </div>
    );
  }
}

export default TestComponent;
