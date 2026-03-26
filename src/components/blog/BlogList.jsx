import { Link } from "react-router-dom";
import { posts } from "./posts";
function BlogList() {
	return (
		<div className="grid gap-6 md:grid-cols-2">
			{posts.map((post) => (
				<Link
					to={`/blog/${post.slug}`}
					key={post.id}
					className="border border-white/40 bg-zinc-700  rounded-xl p-4 hover:bg-zinc-700 transition"
				>
					<img
						src={post.image}
						alt={post.title}
						className="rounded mb-3"
					/>
					<h2 className="text-xl font-semibold text-[#ff4d4f]">
						{post.title}
					</h2>
					<p className="text-sm text-white">{post.summary}</p>
					<p className="text-gray-400 text-right">{post.date}</p>
				</Link>
			))}
		</div>
	);
}
export default BlogList;
