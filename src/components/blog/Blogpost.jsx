import { useParams } from "react-router-dom";
import { posts } from "./posts";

export default function BlogPost() {
	const { slug } = useParams();
	const post = posts.find((p) => p.slug === slug);

	if (!post) return;
	<p className="text-white text-center">Artículo no encontrado.</p>;

	return (
		<div>
			<article className="text-white prose prose-invert mx-auto py-10 px-4 pt-40 bg-logo-gradient">
				<div className=" max-w-6xl mx-auto">
					<h1 className="text-4xl font-bold text-center pb-20">
						{post.title}
					</h1>
					<p>{post.date}</p>
					<img
						src={post.image}
						alt={post.title}
						className="rounded my-4 "
					/>
					<div
						className="text-lg max-w-4xl mx-auto py-10"
						dangerouslySetInnerHTML={{ __html: post.content }}
					/>
				</div>
			</article>
		</div>
	);
}
