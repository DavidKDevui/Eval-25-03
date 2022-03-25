import { Menu } from "./composants/Menu";
import { Outlet } from "react-router-dom";
import { UserProvider } from "./context/userContext";


function App() {
  
 
  return (
    <div className="App">
        <UserProvider>
          <Menu ></Menu>
            <Outlet />
        </UserProvider>
    </div>
  );
}

export default App;