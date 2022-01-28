import { useLoaderData, Link } from "remix";
import type { Post } from "~/post";
import { getPosts } from "~/post";

export const loader = () => {
    return getPosts();
};

export default function Posts() {
    const posts = useLoaderData<Post[]>();
    console.log(posts);

    return (
        <ul>
            {posts.map(post => (
                <li key={post.slug}>
                    <Link to={post.slug}>{post.title}</Link>
                </li>
            ))}
        </ul>
    );
}

