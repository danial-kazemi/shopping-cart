import { Routes, Route } from "react-router-dom";
import { CardProvider } from './context/CardContext';
import Shop from "./pages/Shop";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
function App() {
  return(
    <CardProvider>
      <Container>
        <Navbar />
        <Routes>
          <Route index element={<Shop />} />
        </Routes>
      </Container>
    </CardProvider>
  );
}
export default App;