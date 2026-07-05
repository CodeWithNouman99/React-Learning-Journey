<<<<<<< HEAD
import "./App.css";
// import { useForm } from "react-hook-form";
import JobApplicationForm from "./components/JobApplicationForm";

// function App() {
//   const { register, handleSubmit, error,watch } = useForm();

//   function onSubmit(data) {
//     console.log("Submitted the form", data);
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label>First Name</label>
//           <input
//             type="text"
//             {...register("firstName", {
//               required: true,
//               minLength: { value: 3, message: "Minimum length should be 3" },
//               maxLength: 20,
//             })}
//           />
//           {error.firstName && <p>{error.firstName.message}</p>}
//         </div>
//         <div>
//           <label>Middle Name</label>
//           <input type="text" {...register("middleName")} />
//         </div>
//         <div>
//           <label>Last Name</label>
//           <input type="text" {...register("lastName")} />
//         </div>
//         <br />
//         <input type="submit" /> {/* ✅ ab submit hoga */}
//       </form>
//     </>
//   );
// }

// export default App;

function App() {
  return (
    <div className="App">
      <h1>Job Portal</h1>
      <h2>Submit Your Application</h2>
      <JobApplicationForm />
    </div>
  );
}
export default App;
=======
import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
function App() {
//Manage State
//Create State
//Change State
//Sabhi child me state ko sync karwadonga
const [name,setname]=useState("")
  return (
    <>
      <h1 className='bg-amber-300 text-4xl border-4 mt-15 w-full text-center'>State Lifting!</h1>
      <Card name={name} setname={setname}></Card>
      <p>I am inside Parent Component value of name is: {name}</p>
    </>
  )
}

export default App
>>>>>>> 9dfb8518ea913279ca648ef4779c4a81e733bfb3
