import "./App.css";
import Blog from "./Blog";
import Navbar from "./Navbar";

const App: React.FC = () => {
  return (
    <div className="font-pop">
      <Navbar />
      <Blog />
    </div>
  );
};

export default App;
