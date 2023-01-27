
import { useSelector } from "react-redux";
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Chat from "./pages/chat/chat";

import Home from "./pages/home/Home";
import Information from "./pages/information/information";
import Login from "./pages/login/login";
import Profile from "./pages/profile/Profile"
import Auth from "./pages/SignUp/Auth"

function App() {
  const user = useSelector((state) => state.user.user)
  return (
    <>

      <Routes>
        <Route path="/" element={user ? <Navigate to="/home" /> : <Navigate to="auth" />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="../auth" />} />
        <Route path="/auth" element={user ? <Navigate to="../information" /> : <Auth />} />
        <Route path="/profile/:username" element={user ? <Profile /> : <Navigate to="..auth" />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/information" element = {<Information/>}/>
        <Route path="/chat" element = {<Chat/>}/>
      </Routes>
    </>
  );
}

export default App;
