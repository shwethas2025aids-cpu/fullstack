import React from "react";
import Students from "./components/Students";
import { Button } from "./components/ui/button";
import Count from "./hooks/Count";
import Register from "./hooks/Register";

const App = () => {
  const name = "Shwetha";

  return (
    <>
      <div className="bg-blue-500 text-white p-4">App</div>
      <Register />
      <Count />
      <Button variant="destructive">Delete</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>

      <h1>Welcome {name}</h1>
      <Students name="user" age={19} />
    </>
  );
};

export default App;