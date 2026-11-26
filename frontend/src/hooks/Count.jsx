import { Button } from "../components/ui/button";
import { useEffect, useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    console.log("From useEffect");
  }, []);  

  return (
    <div>
      <h3>Count: {count}</h3>
      <Button onClick={() => setCount((prev) => prev + 1)}>Increase</Button>
      <Button variant="destructive" onClick={() => setCount(0)}>
        Reset
      </Button>

      <br />

      <Button onClick={() => setIsVisible((prev) => !prev)}>Toggle</Button>

      {isVisible && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod!
        </p>
      )}
    </div>
  );
};

export default Count;












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