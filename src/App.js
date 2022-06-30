import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Calender from "./Pages/Calender";
import CompletedTasks from "./Pages/CompletedTasks";
import ToDo from "./Pages/ToDo";
import SignUp from "./Pages/UserAuthentication/SignUp";
import SignIn from "./Pages/UserAuthentication/SingnIn";

function App() {
  return (
    <div>
      <Navbar>

        <Routes>
          <Route path="/" element={<Calender></Calender>}></Route>
          <Route path="/to-do" element={<ToDo></ToDo>}></Route>
          <Route path="/completed-tasks" element={<CompletedTasks></CompletedTasks>}></Route>
          <Route path="/signin" element={<SignIn></SignIn>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
        </Routes>

      </Navbar>
    </div>
  );
}

export default App;
