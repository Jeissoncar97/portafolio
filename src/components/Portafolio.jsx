import CV from "../assets/CVJeissonCardenas.pdf";
import Header from "./Header";
import Hero from "./Hero.jsx";
import GithubIcon from "../components/icons/Github";

const Portafolio = () => {
	return (
		<>
			<Header />
			<Hero />
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
};

export default Portafolio;
