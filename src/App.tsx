import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import { Nav } from "./layouts/nav/Nav";
import { About } from "./views/about/About";
import { Contact } from "./views/contact/Contact";
import { Home } from "./views/home/Home";
function App() {
  return (
    <div className={styles.flex}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
