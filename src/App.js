import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Calender from "./Pages/Calender";
import CompletedTasks from "./Pages/CompletedTasks";
import ToDo from "./Pages/ToDo";
import ResetPass from "./Pages/UserAuthentication/ResetPass";
import SignUp from "./Pages/UserAuthentication/SignUp";
import SignIn from "./Pages/UserAuthentication/SingnIn";
import PrivateRoute from "./Route/PrivateRoute";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useLoading from "./Hooks/useLoading";
import Loading from "./Components/Shared/Loading";
import style from './Style/style.css'

function App() {

  const [loading] = useLoading()

  return (
    <div>
      {loading ?
        <div className="w-screen h-screen grid justify-center items-center">
          < Loading ></Loading >
        </div >
        :
        <>
          <Navbar>
            <Routes>
              <Route element={<PrivateRoute></PrivateRoute>}>
                {/* <Route path="/" element={<Calender></Calender>}></Route> */}
                <Route path="/" element={<Calender></Calender>}></Route>
                <Route path="/to-do" element={<ToDo></ToDo>}></Route>
                <Route path="/completed-tasks" element={<CompletedTasks></CompletedTasks>}></Route>
              </Route>
              <Route path="/signin" element={<SignIn></SignIn>}></Route>
              <Route path="/sigin/forgetpassword" element={<ResetPass></ResetPass>}></Route>
              <Route path="/signup" element={<SignUp></SignUp>}></Route>
            </Routes>
          </Navbar>
            <div className="mt-16">
              <ToastContainer />
            </div>
        </>
      }
    </div>
  );
}

export default App;
