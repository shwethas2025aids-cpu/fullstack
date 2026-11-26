import React from "react";
import Students from "./components/Students";
import { Button } from "./components/ui/button";
import Count from "./hooks/Count";
import Register from "./hooks/Register";
import Users from "./hooks/Users";

const App = () => {
  const name = "test";

  return (
    <>
      <div className="pl-24">App</div>
      <Register />
      <Count />
      <div className="flex gap-2 p-4">
        <Button variant="destructive">Delete</Button>
        <Button variant="outline">outline</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="ghost">ghost</Button>
      </div>
      <div className="flex h-96 justify-around items-center bg-emerald-600 shadow">
        <h3>1</h3>
        <h3>2</h3>
        <h3>3</h3>
      </div>
      <h1>This is {name}</h1>
      <Users />
      <Students name="user" age={20} />
    </>
  );
};

export default App;