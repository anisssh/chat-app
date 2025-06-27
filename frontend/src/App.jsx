import { Link } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Home from "./pages/Home";

function App() {
  return <div className="p-4 h-screen flex  items-center justify-center">
      {/* <Login/> */}
      {/* <SignUp/> */}
      <Home/>
  </div>;
}

export default App;
