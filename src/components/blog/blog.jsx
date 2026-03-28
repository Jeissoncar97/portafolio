import Header from "./HeaderB";
import BlogList from "./BlogList";
import "./blog.css";
import "./headerB.css";

function Blog() {
	return (
		<div>
			<Header></Header>
			<div className="hero" style={{ paddingTop: "120px" }}>
				<h1>🧠 Mini Blog - Hack The Box</h1>
				<p>
					Aquí publico mis writeups y aprendizajes en ciberseguridad.
				</p>

				<div style={{ marginTop: "20px" }}>
					<div key={2}>
						<h2>sdfdsfsdf</h2>
						<p>sdfsdfsdf</p>
					</div>
				</div>
				<BlogList></BlogList>
			</div>
		</div>
	);
}

export default Blog;
