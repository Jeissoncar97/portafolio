import Profile from "../../assets/Fotojeisson.png";
import "./headerB.css";

import { Link } from "react-router-dom";

function Header() {
	return (
		<>
			<div className="header">
				<div className="header_content">
					<div className="header__logo-container">
						<div className="header__logo-img-cont">
							<img
								className="imagen-perfil"
								src={Profile}
								alt=""
							/>
						</div>
						<span className="header__logo-sub">
							JEISSON CARDENAS
						</span>
					</div>
					<nav className="header_main article-project">
						<ul className="header-links">
							<Link to="/" >
								<li className="header-link link" >
									<p>Portafolio</p>
								</li>
							</Link>
							
							
						</ul>
					</nav>
				</div>
			</div>
		</>
	);
}

export default Header;
