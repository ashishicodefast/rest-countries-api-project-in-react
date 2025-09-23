import Header from "./components/header";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./contexts/Theme";


const App = () => {

  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
};

export default App;
