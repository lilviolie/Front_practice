import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [search, setSearch] = useState("");

  console.log("I run all the time");

  useEffect(() => {
    console.log(`${search} has been searched`);
  }, [search]);

  useEffect(() => {
    console.log("I run counter is change");
  }, [counter]);

  useEffect(() => {
    console.log("I run search & counter is change");
  }, [search, counter]);

  function onClick() {
    return setCounter((a) => a + 1);
  }

  const onSearch = (event) => setSearch(event.target.value);

  return (
    <div>
      <input onChange={onSearch} type="text" placeholder="Search Here!"></input>
      <h1 className={styles.title}>{counter}</h1>
      <Button onClick={onClick} text="Click me!" />
    </div>
  );
}

export default App;
