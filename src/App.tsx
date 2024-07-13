import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Accounts from "./Components/AccountsFeature/AccountsContainer";
import FileManager from "./Components/FileManagerFeature/FileManager";

function App() {
  return (
    <>
      <Accounts />
      <FileManager />
    </>
  );
}

export default App;
