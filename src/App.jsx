import "./Estilos/projects.css";
import "./App.css";
import "./Estilos/section-hero-home.css";
import "./Estilos/about.css";
import "./Estilos/contact.css";
import { Routes, Route } from "react-router-dom";
import Blog from "./components/blog/Blog.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Portafolio from "./components/Portafolio.jsx";
import BlogPost from "./components/blog/BlogPost.jsx";

import "./Estilos/footer.css";

function App() {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Portafolio></Portafolio>} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/blog/:slug" element={<BlogPost />} />
			</Routes>
		</>
	);
}

export default App;
