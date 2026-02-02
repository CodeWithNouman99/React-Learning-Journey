import { useState } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
function App() {
  const [state,setState]=useState(5)
  function HandleClick()
  {
    setState(state+1)
  }
  return (
    <>
      <Card name="Nouman Aslam">
        <h1>React Course</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem recusandae quo, numquam ipsa hic placeat, quaerat cum, suscipit reiciendis dicta explicabo corporis tempore. Inventore odit ipsum, commodi voluptas temporibus maiores.</p>
        <button>Click Me</button>
      </Card>
      <Card children="This is a children">
      </Card>
      <Button HandleClick={HandleClick} text="Click">
        <h1>{state}</h1>
      </Button>
    </>
  );
}

export default App;
