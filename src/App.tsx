import "./App.css";
import Blog from "./Blog";
import Example from "./Example";
import Navbar from "./Navbar";

const App: React.FC = () => {
  return (
    <div className="font-pop">
      <Navbar />
      <Blog />
      {/* <Example /> */}
    </div>
  );
};

export default App;
