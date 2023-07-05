import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout";
import { Home } from "./pages";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route path="/" element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
