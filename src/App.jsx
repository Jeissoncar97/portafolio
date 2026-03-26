import "./Estilos/projects.css";
import "./App.css";
import "./Estilos/section-hero-home.css";
import "./Estilos/about.css";
import "./Estilos/contact.css";
import Header from "./components/Header";
import GithubIcon from "./components/icons/Github";
import { Routes, Route } from "react-router-dom";
import CV from "./assets/CVJeissonCardenas.pdf";
import Blog from "./components/blog/Blog.jsx";
import Hero from "./components/Hero.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import "./Estilos/footer.css";

function App() {
	return (
		<>
			<ScrollToTop />
			<Header />
			<Routes>
				<Route path="/" element={<Hero></Hero>} />
				<Route path="/blog" element={<Blog />} />
			</Routes>
			<footer className="footerMain">
				<div className="cont-footer">
					<div className="footer-description">
						<h4>JEISSON CARDENAS</h4>
						<p>
							Estudiante de ingenieria en sistemas, apasionado por
							el <span>DESARROLLO WEB.</span> Aprendiendo nuevas
							tecnologias dia a dia y enfocado en{" "}
							<span>frontend</span>
						</p>
						<div className="footer-button">
							<a
								href={CV}
								target="_blank"
								rel="noopener noreferrer"
								className="button"
							>
								Descargar CV
							</a>
						</div>
					</div>
					<div className="footer-repository">
						<h4>Repositorio</h4>
						<a
							href="https://jeissoncar97.github.io/portafolio5/"
							className="repository"
							title="Repositorio portafolio"
						>
							<GithubIcon />
						</a>
					</div>
				</div>
				<footer className="main-footer__lower">
					<div className="linear-footer"></div>
					<p>
						©2024{" "}
						<a href="#home">Jeisson Andres Cardenas Verdugo.</a>
					</p>
				</footer>
			</footer>
		</>
	);
}

export default App;
