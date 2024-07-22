import "./App.css";
import Accounts from "./Components/AccountsFeature/AccountsContainer";
import FileManager from "./Components/FileManager";
import Layout from "./Components/Layout";
import Login from "./features/auth/component/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <>
              <Accounts />
              <FileManager />
            </>
          }
        />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}
// function App() {
//   return (
//     <>
//       <Accounts />
//       <FileManager />
//     </>
//   );
// }

export default App;
