import {Button} from "../components/ui/button";
import { useState } from "react";
const Count = () => {
    const [count,setCount] = useState(0);
    const[isElementVisible,setIsElementVisible]=useState(true);
  return (
    <div>
        <h3> Count:{count}</h3>
        <Button onClick={()=>setCount(count+1)}>Increase</Button>
        <Button varient="destructive" onClick={()=>setCount(0)}>reset</Button>

      <br />
        <Button onClick={()=>setIsVisible(!isVisible)}>Toggle</Button>

        { isVisible && (
          <p>
            Lorom ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod!
          </p>
          
        )}

    </div>
  )
}
export default Count












//const Count = () => {
//  let count=0;
   // const increase=()=> {
     //   count++;
       // console.log(count);
    //}
   // return (
     //   <div>
       //      <h2>Count: {count}</h2>
         //    <Button onClick={increase}>Increase</Button>
         //</div>
    //)
     //}
    //export default Count