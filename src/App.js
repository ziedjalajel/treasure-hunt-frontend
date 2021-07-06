import "./App.css";
import { Route, Switch } from "react-router";
import GarbageList from "./components/GarbageList";
import NavBar from "./components/NavBar";
import SigninForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import TreasureList from "./components/TreasureList";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/signin">
          <SigninForm />
        </Route>
        <Route path="/signup">
          <SignUpForm />
        </Route>
        <Route path="/treasures">
          <TreasureList />
        </Route>
        <Route path="/garbages">
          <GarbageList />
        </Route>
      </Switch>
    </>
  );
}

export default App;
