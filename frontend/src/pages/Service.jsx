import Students from "../components/Students";
import Users from "../hooks/Users";
import { Button } from "../components/ui/button";

const Service = () => {
  return (
    <div>
        <Button variant="destructive">Delete</Button>
        <Button variant="outline">outline</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="ghost">ghost</Button>
        <h1>This is {name}</h1>
        <Users />
        <Students name="user" age={20} />    

    </div>
  )
}

export default Service