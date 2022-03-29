import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import FriendDetail from "./Components/FriendDetail/FriendDetail";
import Friends from "./Components/Friends/Friends";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <h1>Hello, React Router.</h1>
      <h3>Play with It</h3>
      <Header />
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/about" element={<About />}/>
        <Route path="/friends" element={<Friends />} />
        <Route path="/friends/:friendId" element={<FriendDetail/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
