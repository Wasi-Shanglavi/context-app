import React, {createContext} from "react";
import ComA from "./ComA"

const Firstname = createContext();
const Lastname = createContext();

const App=() => {
  return (
    <>
    <Firstname.Provider value="Abdul">
    <Lastname.Provider value="wasi">
      <ComA />
      </Lastname.Provider>
    </Firstname.Provider> 
    </>
   
  );
}

export default App;
export {Firstname, Lastname}
