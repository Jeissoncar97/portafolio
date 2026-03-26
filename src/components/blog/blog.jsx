import Header from "./HeaderB";
import BlogList from "./BlogList";

function Blog() {
	return (
		<div>
			<Header></Header>
			<div style={{ paddingTop: "120px" }}>
				<h1>🧠 Mini Blog - Hack The Box</h1>
				<p>
					Aquí publico mis writeups y aprendizajes en ciberseguridad.
				</p>

				<div style={{ marginTop: "20px" }}>
					<div
						key={2}
						style={{
							border: "1px solid #333",
							padding: "15px",
							marginBottom: "15px",
							borderRadius: "10px",
						}}
					>
						<h2>sdfdsfsdf</h2>
						<p>sdfsdfsdf</p>
					</div>
				</div>
			</div>
			<BlogList></BlogList>
		</div>
	);
}

export default Blog;
