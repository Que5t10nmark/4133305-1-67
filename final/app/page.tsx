import Basic from "@/components/Basic";
import React from "react";
import Hook from "../components/Hook";
const App: React.FC = ()=>{
  return(
    <>
    <h1>Wellcome To IT Woi!!!</h1>
    <p>Hello TypeScript</p>

    <Basic initVal='1'  />

    <Hook initHook="5"/>

    </>
  );

};

export default App;