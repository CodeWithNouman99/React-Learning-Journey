import UserCard from './Components/UserCard'
import dogpic from './assets/dogpic.jpg'
import Eaglepic from './assets/Eaglepic.jpg'
import Foximage from './assets/Foximg.jpeg'
import "./index.css"
function App() {
  return (
    <>
      <UserCard
        name="Eagle"
        description="A majestic bird of prey, symbolizing freedom and vision"
        image={Eaglepic}
      />

      <UserCard
        name="Dog"
        description="A loyal companion, friendly and full of energy."
        image={dogpic}
      />

      <UserCard
        name="Fox"
        description="A clever and agile animal, known for its cunning nature"
        image={Foximage}        
      />
    </>
  )
}

export default App
