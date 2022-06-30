import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Calender from "./Pages/Calender";
import CompletedTasks from "./Pages/CompletedTasks";
import ToDo from "./Pages/ToDo";

function App() {
  return (
    <div>
      <Navbar>

        <Routes>
          <Route path="/" element={<Calender></Calender>}></Route>
          <Route path="/to-do" element={<ToDo></ToDo>}></Route>
          <Route path="/completed-tasks" element={<CompletedTasks></CompletedTasks>}></Route>
        </Routes>

      </Navbar>
    </div>
  );
}

export default App;
