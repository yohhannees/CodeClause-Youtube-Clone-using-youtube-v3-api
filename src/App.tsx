import "./index.css";

import VideoList from "./component/VideoList";
import NavBar from "./component/NavBar";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <NavBar />
      <div className="flex">
        <div className="flex-1">
          <Sidebar />
        </div>
        <div className="w-5/6 my-28">
          <VideoList />
        </div>
      </div>
    </div>
  );
}

export default App;
