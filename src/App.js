import { Link } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <h1>Hello, React Router.</h1>
      <h3>Play with It</h3>
      <nav>
        <Link to={"/"}>Home </Link>
        <Link to={"/about"}>About </Link>
        <Link to={"/friends"}>Friend</Link>
      </nav>
      <Header />
    </div>
  );
}

export default App;
