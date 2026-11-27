import Count from '../hooks/Count'
import Parent from '../components/Parent'
import { StudentsContext } from "../context/StudentsContext";

const About = () => {
  return (
    <div>
      <StudentsContext.Provider value="Tarunika">
        <Parent />
      </StudentsContext.Provider>
      <Count />
    </div>
  )
}

export default About