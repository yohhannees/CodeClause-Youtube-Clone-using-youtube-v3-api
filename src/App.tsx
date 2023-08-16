import "./index.css";


import VideoList from "./component/VideoList";
import NavBar from "./component/NavBar";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
function App() {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <div className="my-16 ">
       
        <NavBar />
      </div>

      <VideoList />
      {/* <Sidebar /> */}
    </div>
  );
}

export default App;
