import "./index.css";


import VideoList from "./component/VideoList";
import NavBar from "./component/NavBar";

function App() {
  return (
    <div className="container mx-auto p-4">
      <NavBar />
      <VideoList />
    </div>
  );
}

export default App;
