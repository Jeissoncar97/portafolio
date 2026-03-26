function Blog() {
	return (
		<div
			style={{
				padding: "50px",
				width: "60%",
				margin: "0 auto",
				height: "100vh",
				paddingTop: "100px",
			}}
		>
			<h1>🧠 Mini Blog - Hack The Box</h1>
			<p>Aquí publico mis writeups y aprendizajes en ciberseguridad.</p>

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
	);
}

export default Blog;
