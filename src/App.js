import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";
import "./App.scss";
import { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  //const [isLogedIn, setIsLogedIn] = useState(false);
  // const counter = useSelector((state) => state.login.isLogedIn);
  // return (
  //   <div>
  //     isLogedIn:
  //     {String(counter)}
  //   </div>
  // );

  return (
    <div className={"App"}>
      <Header
      // isLogedIn={isLogedIn}
      // setIsLogedIn={setIsLogedIn}
      />
      <Main
      // isLogedIn={isLogedIn}
      // setIsLogedIn={setIsLogedIn}
      />
    </div>
  );
}

export default App;
