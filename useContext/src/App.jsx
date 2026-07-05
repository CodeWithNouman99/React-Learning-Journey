import { createContext, useState } from "react";
import "./App.css";
import ChildA from "./components/ChildA";

//Step 1: Create Context
// const userContext = createContext();

//Step 2: Wrap all the child inside a provider
//Step 3: Pass value
//Step 4: Consumer ka ander ja kr value consume kr lo

const contextTheme=createContext()
function App() {
  // const [user, setuser] = useState({ name: "nouman" });
  const [theme,settheme]=useState("Light")
  return (
    <>
    <contextTheme.Provider value={{theme,settheme}}>
      <div id="container" style={{backgroundColor:theme==="beige"?"Light":"black"}}>
        <ChildA></ChildA>
      </div>
    </contextTheme.Provider>
    </>
  );
}

export default App;
// export { userContext };
export{contextTheme}
