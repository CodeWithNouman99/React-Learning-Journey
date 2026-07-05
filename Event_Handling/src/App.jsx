import './App.css'
function App() {

  function HandleClick()
  {
    alert("I am Clicked")
  }
  function mouseover()
  {
    alert("para ka oper mouse le kr aye ho")
  }
  function onChange(e)
  {
    // console.log("input me value change hoi he")
    console.log("Value till now :",e.target.value)
  }
  function handleSubmit(e)
  {
    e.preventDefault()
    //I am writting my custom behavior
    alert("Form Submit")
  }

  return (
    <>
    <button onClick={alert("Click me")}>click Me</button>{/*This is immediate invoking concept means it runs withou click which is not good try to pass function  and this is a important question from interview perspective*/}
    <h1>Event Handling</h1>
    <button onClick={HandleClick}>click me</button>
    <p onMouseOver={mouseover}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, possimus?</p>
    <form action="#" onSubmit={handleSubmit}>
          <input type="text" onChange={onChange} />
          <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default App
