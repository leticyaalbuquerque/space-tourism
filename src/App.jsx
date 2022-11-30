import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Destination from "./pages/destination";
import Crew from "./pages/crew";
import Technology from "./pages/technology";
import Header from "./components/Header";
import { AnimatePresence, motion } from "framer-motion";

export default function App() {
  return (
    <>
      <Header />

      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/space-tourism" element={<Home />} />
          <Route path="/space-tourism/destination" element={<Destination />} />
          <Route path="/space-tourism/crew" element={<Crew />} />
          <Route path="/space-tourism/technology" element={<Technology />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
