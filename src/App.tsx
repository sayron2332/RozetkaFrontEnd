import {Route, Routes} from "react-router-dom";
import './App.css'
import DefaultLayout from "./containers/defaultLayout";
import DefaultDashboard from "./containers/defaultDashboard";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import NotFound from "./pages/notFound";
import { useTypedSelector } from "./hooks/useTypedSelector";





function App() {
  const {isAuth, user} = useTypedSelector(store => store.UserReducer)
  return (
    
    <Routes>
      {isAuth && (
        <>
          {user.role === "admin" && (
            <Route path="/dashboard" element={<DefaultDashboard/>} >
          
            </Route>
          )}
         
        </>
      )}

      <Route path="/" element={<DefaultLayout/>} >
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    
  );
}

export default App
