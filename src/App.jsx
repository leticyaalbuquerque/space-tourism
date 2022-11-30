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

      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
