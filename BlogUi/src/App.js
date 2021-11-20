
import HomeScreen from "./pages/HomeScreen";
import Navbar from "./components/Navbar"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import PostScreen from "./pages/PostScreen";
import NewPostScreen from "./pages/NewPostScreen";
import ProfileScreen from "./pages/ProfileScreen";
import LoginScreen from "./pages/LoginScreen";
import SignupScreen from "./pages/SignupScreen";

function App() {
  return (
    <Router>

      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>

        <Route path="/signup">
          <SignupScreen />
        </Route>
        <Route path="/login">
          <LoginScreen />
        </Route>
        <Route path="/create-post">
          <NewPostScreen />
        </Route>
        <Route path="/post">
          <PostScreen />
        </Route>
        <Route path="/profile">
          <ProfileScreen />
        </Route>

      </Switch>



    </Router>


  )
}

export default App
