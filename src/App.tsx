import {Route, Routes} from "react-router-dom";
import './App.css'
import DefaultLayout from "./containers/defaultLayout";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";

function App() {
  
  return (
    <>
       <Routes>
            <Route path="/" element={<DefaultLayout/>}>
              <Route path="login" element={<SignIn/>}/>
              <Route path="register" element={<SignUp/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default App
