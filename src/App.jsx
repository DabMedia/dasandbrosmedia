import { Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import "./App.css";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact "
import Breadcrumb from "./component/Breadcrumb";
import AboutUs from "./pages/Aboutus";
import ScrollToTop from "./component/BackToTop";
import Hiring from "./pages/Hiring";
import BlogPage from "./pages/Blogs";
function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<>
          <Breadcrumb />
          <AboutUs />
        </>} />
        <Route path="/services" element={<h1 className="p-10">Services Page</h1>} />
        <Route path="/blog" element={<>
          <Breadcrumb />
          <BlogPage />
        </>

        } />
        <Route path="/contact" element={<>
          <Breadcrumb />
          <Contact />
        </>} />
        <Route path="/hiring" element={
          <><Breadcrumb />
            <Hiring />
          </>} />
      </Routes>
    </Layout>
  );
}

export default App;
