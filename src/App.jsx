import { Toaster } from "./components/ui/toaster";
import { Home } from "./pages/Home"
import { NotFound} from "./pages/NotFound"
import { FalconProject } from "./pages/FalconProject"; // For falcon detail page
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
    <Toaster/>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />}/>
      <Route path="/falcon" element={<FalconProject />} /> {/* 🆕 */}
      <Route path="*" element={<NotFound />}/>
    </Routes>
    </BrowserRouter>      
    </>
  );
}

export default App
