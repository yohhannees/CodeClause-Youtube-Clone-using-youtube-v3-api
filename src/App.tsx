import "./index.css";


import VideoList from "./component/VideoList";
import NavBar from "./component/NavBar";
import Header from "./component/Header";

function App() {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <NavBar />
      <VideoList />
    </div>
  );
}

export default App;
