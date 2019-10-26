import React from "react";
import InfoSetBar from "./InfoSetBar";

import Boxes from "./Boxes";

function App(props) {
  const [receivedData, setReceivedData] = React.useState([]);
  function receive(searchObject) {
    console.log(searchObject);
    let s = "www.baidu.com";
    fetch(s)
      .then(data => {
        console.log("in then");
        console.log(data);
        //setReceivedData(data);
      })
      .catch(r => {
        console.log(r);
      });
  }
  return (
    <div>
      <InfoSetBar action={receive} />
      <Boxes data={receivedData} size={{ width: 300, height: 400 }} />
    </div>
  );
}

export default App;
