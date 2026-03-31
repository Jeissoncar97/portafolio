import Foto from "../assets/foto.jpg";
import Social from "./Socials";
import Copy from "../assets/copy.svg";
import Send from "../assets/send.svg";
import Project from "./Project";
import htb from "../assets/imgProjects/htb.webp";
import FoxpizzaProject from "../assets/imgProjects/paginaFox.png";
import ApisProject from "../assets/imgProjects/Apis.png";
import Tecnologias from "./Tecnologias";
import ReactIcon from "./icons/React";
import NodeIcon from "./icons/Node";
import FirebaseIcon from "./icons/Firebase";
import HtmlIcon from "./icons/Html5";
import CssIcon from "./icons/Css3";
import MongoDBIcon from "./icons/MongoDB";
import ContactForm from "./Contact";
import GithubMainIcon from "./icons/GithubMain";
import LinkedinIcon from "./icons/Linkedin";
import MailIcon from "./icons/MailIcon";
import Person from "./icons/Person";
import { Link } from "react-router-dom";
import Contact from "./icons/ContactIcon";
import Security from "./icons/security";
import { useState } from "react";
import Swal from "sweetalert2";
import Network from "./icons/Network";

const Hero = () => {
	const correoDefault = "jeissoncar97@gmail.com";
	const [copy, setCopy] = useState(correoDefault);

	const handleCopy = (event) => {
		setCopy(event.target.value);
	};
	const handleSubmit = () => {
		navigator.clipboard.writeText(copy);
		Swal.fire({
			text: "¡Correo compiado!",
			icon: "success",
			timer: 1500,
			customClass: {
				popup: "custom-swal-wide",
			},
		});
	};
	return (
		<>
			<section className="home" id="home">
				<div className="hero-home-inf">
					<h1>Hola, Soy Jeisson Cardenas el mejor</h1>
					<div className="hero-home-description">
						<p>
							Estudiante de ingenieria en sistemas, apasionado por
							el <span>DESARROLLO WEB. </span>
						</p>
					</div>
					<div className="hero-home-email">
						<input
							className="input-hero-home"
							type="text"
							name="email"
							id="text"
							value={copy}
							onChange={handleCopy}
							readOnly
						/>
						<div className="buttons-home">
							<button
								id="btn"
								className="btn-hero-copy"
								onClick={handleSubmit}
							>
								<img src={Copy} alt="Copy" />
							</button>
							<a
								href="mailto:jeissoncar97@gmail.com"
								className="btn-hero-copy"
							>
								<img src={Send} alt="Send" />
							</a>
						</div>
					</div>
					<div className="hero-home-button">
						<a href="#projects" className="button">
							PROYECTOS
						</a>
					</div>
				</div>
				<aside className="social">
					<Social
						img={<LinkedinIcon />}
						alt="Jeisson Cardenas Linkedin"
						link="https://www.linkedin.com/in/jeisson-cardenas/"
						title="Jeisson Cardenas Linkedin"
					/>
					<Social
						img={<GithubMainIcon />}
						alt="Jeisson Cardenas Github"
						link="https://github.com/Jeissoncar97"
						title="Jeisson Cardenas Github"
					/>
					<Social
						img={<MailIcon />}
						alt="Jeisson Cardenas Correo"
						link="mailto:jeissoncar97@gmail.com"
						title="Jeisson Cardenas correo"
						className="correo-color"
					/>
				</aside>
				<div className="home-hero__mouse-scroll-cont">
					<div className="mouse"></div>
				</div>
			</section>
			<section className="proyectos" id="projects">
				<h2>
					<Security /> Proyectos ciberdegiridad
				</h2>
				<div className="cont-linear">
					<div className="linea"></div>
				</div>
				<div className="projects-all">
					<Link to="/blog">
						<Project
							nameProject="Inicio de sesion"
							imgProject={htb}
							alt="Imagen proyecto inicio de sesión"
							skill1="React"
							skill2="Firebase"
							skill3="Mongo"
							skill4="Express"
							projectDescription="En este proyecto, hice un inicio de sesión con React y Firebase, donde se puede acceder de forma segura con clave encriptada. ¡Adentro tiene un juego increíble!"
						/>
					</Link>
					<Project
						nameProject="Fox Pizza Gourmet"
						imgProject={FoxpizzaProject}
						alt="Imagen Pagina Fox Pizza"
						skill1="Html"
						skill2="Css"
						skill3="Javascript"
						skill4="Bootstrap"
						projectDescription="En este proyecto, realicé la página web de una pizzería familiar, con el objetivo de obtener más visitas. En la página se pueden ver varias secciones como el menú, contacto, ubicación y otras más."
					/>
					<Project
						nameProject="Pagina de APISs"
						imgProject={ApisProject}
						alt="Imagen proyecto inicio de sesión"
						skill1="Html"
						skill2="Css"
						skill3="Javascript"
						skill4="Bootstrap"
						projectDescription="En este proyecto, realicé una página donde se podrán encontrar varias secciones con APIs como cócteles, Rick y Morty, películas y más"
					/>
				</div>
			</section>
			<section className="proyectos" id="projects">
				<h2>
					<Network /> Proyectos redes
				</h2>
				<div className="cont-linear">
					<div className="linea"></div>
				</div>
				<div className="projects-all">
					<Project
						nameProject="Inicio de sesion"
						imgProject={htb}
						alt="Imagen proyecto inicio de sesión"
						skill1="React"
						skill2="Firebase"
						skill3="Mongo"
						skill4="Express"
						projectDescription="En este proyecto, hice un inicio de sesión con React y Firebase, donde se puede acceder de forma segura con clave encriptada. ¡Adentro tiene un juego increíble!"
					/>
					<Project
						nameProject="Fox Pizza Gourmet"
						imgProject={FoxpizzaProject}
						alt="Imagen Pagina Fox Pizza"
						skill1="Html"
						skill2="Css"
						skill3="Javascript"
						skill4="Bootstrap"
						projectDescription="En este proyecto, realicé la página web de una pizzería familiar, con el objetivo de obtener más visitas. En la página se pueden ver varias secciones como el menú, contacto, ubicación y otras más."
					/>
					<Project
						nameProject="Pagina de APISs"
						imgProject={ApisProject}
						alt="Imagen proyecto inicio de sesión"
						skill1="Html"
						skill2="Css"
						skill3="Javascript"
						skill4="Bootstrap"
						projectDescription="En este proyecto, realicé una página donde se podrán encontrar varias secciones con APIs como cócteles, Rick y Morty, películas y más"
					/>
				</div>
			</section>
			<section className="aboutSection" id="about">
				<h2>
					<Person />
					Sobre mí
				</h2>
				<div className="cont-linear">
					<div className="linea"></div>
				</div>
				<div className="cont-about">
					<div className="about">
						<div className="about-description">
							<h3>Conóceme</h3>
							<div className="cont-foto">
								<img src={Foto} alt="Foto Jeisson Cardenas" />
							</div>
							<p>
								Estudiante de ingeniería en sistemas, enfocado
								en el <span>desarrollo de software</span>, con
								experiencia en administración de restaurantes y
								servicio al cliente.{" "}
								<span>Apasionado por la tecnología</span> y con
								un fuerte compromiso por servir a los demás.
							</p>
							<p>
								Soy una persona responsable, organizada y con
								capacidad de trabajo constante.{" "}
								<span>
									Estoy motivado por el aprendizaje y siempre
									busco nuevas oportunidades para mejorar mis
									habilidades.
								</span>
							</p>
						</div>
					</div>
					<div className="cont-skills">
						<h3>Tecnologías</h3>
						<div className="skills">
							<Tecnologias
								name="Html"
								icon={<HtmlIcon width={50} height={50} />}
							/>
							<Tecnologias
								name="Css"
								icon={<CssIcon width={50} height={50} />}
							/>
							<Tecnologias
								name="React"
								icon={<ReactIcon width={50} height={50} />}
							/>
							<Tecnologias
								name="Node JS"
								icon={<NodeIcon width={50} height={50} />}
							/>
							<Tecnologias
								name="firebase"
								icon={<FirebaseIcon width={50} height={50} />}
							/>
							<Tecnologias
								name="MongoDb"
								icon={<MongoDBIcon width={50} height={50} />}
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="contact" id="contact">
				<div className="contactContainer">
					<h2>
						<Contact />
						Contacto
					</h2>
					<div className="cont-linear">
						<div className="linea"></div>
					</div>
					<p>
						No dude en ponerse en contacto conmigo enviando el
						siguiente formulario y me comunicaré con usted lo antes
						posible.
					</p>
					<div className="contact-form">
						<ContactForm />
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
