import React, { useState } from "react";
import "./components.lists.donelist.css";

function DoneList() {
  const [listOfDone, setDone] = useState(["Hello", "Hi", "hfkldsaj"]);

  return (
    <div>
      <div className="doneTitle">다했다~</div>
      <div className="doneList">
        <ul className="dones" type="square">
          {listOfDone.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DoneList;
