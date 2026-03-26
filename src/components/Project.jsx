import propTypes from "prop-types";

const Project = (props) => {
	return (
		<article className="article-project">
			<div className="cont-img-project">
				<img
					src={props.imgProject}
					alt={props.alt}
					title={props.alt}
					className="img-project"
				/>
			</div>
			<div className="project-content-general">
				<h3>{props.nameProject}</h3>
				<div className="project-content">
					<ul className="skills">
						<li className="skill">{props.skill1}</li>
						<li className="skill">{props.skill2}</li>
						<li className="skill">{props.skill3}</li>
						<li className="skill">{props.skill4}</li>
					</ul>
					<div className="project-description">
						<p>{props.projectDescription}</p>
					</div>
					<footer className="project-footer"></footer>
				</div>
			</div>
		</article>
	);
};

Project.propTypes = {
	nameProject: propTypes.string.isRequired,
	imgProject: propTypes.string.isRequired,
	alt: propTypes.string.isRequired,
	skill1: propTypes.string.isRequired,
	skill3: propTypes.string.isRequired,
	skill2: propTypes.string,
	skill4: propTypes.string,
	projectDescription: propTypes.string.isRequired,
};

export default Project;
