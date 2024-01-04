import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import "bootstrap/dist/css/bootstrap.css";
import Commune from "./pages/commune/Commune";
import Etablissement from "./pages/etablissement/Etablissement";
import Enseignant from "./pages/enseignant/Enseignant";
import Responsable from "./pages/responsable/Responsable";
import Absence from "./pages/absence/Absence";
import Document from "./pages/document/Document";
import Home from "./pages/home/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="commune" element={<Commune />} />
        <Route path="etablissement" element={<Etablissement />} />
        <Route path="enseignant" element={<Enseignant />} />
        <Route path="responsable" element={<Responsable />} />
        <Route path="absence" element={<Absence />} />
        <Route path="document" element={<Document />} />
       
      </Route>
      {/* <Route path="/etablissement" element={<Layout />}>
        <Route index element={<Etablissement />} />
      </Route>
      <Route path="/enseignant" element={<Layout />}>
        <Route index element={<Enseignant />} />
      </Route>
      <Route path="/responsable" element={<Layout />}>
        <Route index element={<Responsable />} />
      </Route>
      <Route path="/absence" element={<Layout />}>
        <Route index element={<Absence />} />
      </Route>
      <Route path="/document" element={<Layout />}>
        <Route index element={<Document />} />
      </Route> */}
    </Routes>
  );
}

export default App;
