import {useLoaderData, Link} from 'react-router-dom';
const Post = () => {
    const {post} =useLoaderData(); 
    return (
        <>
            <h2>{post.id}</h2>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link to="/blog">Volver</Link>
        </>
    );
}
export default Post;

export const loaderPost = async ({params})=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    if(!res.ok){throw({status:res.status,statusText:'No encontrado'})}
    const post = await res.json();
    return {post};
}