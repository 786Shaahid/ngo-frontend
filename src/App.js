import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./contexts/appContext";
import { UserContextProvider } from "./contexts/userContext";
import AppRoutes from "./routes/routes";

function App() {
  return (
    // <UserContextProvider>
    // <AppContextProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    // </AppContextProvider>
    // </UserContextProvider>
  );
}

export default App;
