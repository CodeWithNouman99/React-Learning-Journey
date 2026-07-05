import DataFetcher from "./components/DataFetcher";
import Logger from "./components/Logger";
import Timer from "./components/Timer";

// import "./App.css";
function App() {
  // First => Side Effect  Function
  // Second=> Clean Up Function
  // Third => Comma Separated Dependency List

  // Variation 1:
  // Runs on every Render
  // Variation 2:
  // Runs on only first render
  // variation 3:
  // I will run on every time when count is updated
  // Variation 4:
  // Multiple Dependencies
  // Variation 5:
  // Let's add a clean up function
  // const [count, setCount] = useState(0);
  // const [total,settotal]=useState(0)
  //  useEffect(()=>
  //   {
  //     alert("i will run on each render")
  //   })
  // useEffect(() => {
  //   alert("I will run on first render only");
  // }, []);
  // useEffect(()=>
  // {
  //   alert("I will run on every time when count is updated")
  // },[count])

  // useEffect(()=>
  // {
  //   alert("I will run on every time when count/total is updated")
  // },[count,total])

  // useEffect(()=>
  // {
  //   alert("Count is updated")
  //   return()=>
  //   {
  //     alert("It runs when count is unmounted from UI")
  //   }
  // },[count])


  // function handleClick() {
  //   setCount(count + 1);
  // }
  // function handletotal()
  // {
  //   settotal(total+1)
  // }
  return (
    <>
    {/* <Logger></Logger> 
     <Timer></Timer>
    <DataFetcher></DataFetcher> */}
     {/* <p>Count is : {count}</p>
      <br />
      <br />
      <p>Total is {total}</p>
      <br />
      <br />
      <button
        onClick={handleClick}      >
        Update Count
      </button>
      <br />
      <br />

      <button onClick={handletotal}>Update Total</button> */}
    </>
  );
}
export default App;
