import "./styles.css";
import { useState, useEffect } from "react";
const limit = 1;
export default function App() {
  const [one, setOne] = useState([]);
  const [two, setTwo] = useState(0);
  useEffect(() => {
    fetch(`https://api.api-ninjas.com/v1/facts?limit=${limit}`, {
      headers: { "X-Api-Key": "aud+/ADm0hP02/m7VGefpA==qRebVkAecQuW02sV" },
      contentType: "application/json"
    })
      .then((res) => {
        return res.json();
      })
      .then((e) => {
        // console.log(e);
        // console.log(e[1].fact);
        console.log(typeof e[0].fact);

        setOne([...one, e[0].fact]);
        console.log(one);
        // console.log(e[0].fact);
      });
  }, [two]);
  const fun = () => {
    setTwo(two === 1 ? 0 : 1);
  };
  return (
    <div className="App">
      <button onClick={fun}>add elment</button>
      {one.map((ele) => {
        return <li>{ele}</li>;
      })}
    </div>
  );
}
