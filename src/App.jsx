import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <>
      <h1 className="text-center pt-5">Session Handling</h1>
      <Register />
      <Login />
    </>
  );
}

export default App;
