import React from "react";

function Columns() {
  const items = [{ id: "1", title: "Titanic" }];
  return (
    <React.Fragment>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <td>Title</td>
          <td>{item.title}</td>
        </React.Fragment>
      ))}
      <td>Name</td>
      <td>Nipun</td>
    </React.Fragment>
  );
}

export default Columns;
