import {useLoaderData, Link} from 'react-router-dom';
const Blog = () => {
    const {posts} =useLoaderData();
    return(
        <>
            <h1>Blogs</h1>
            <ul className="list-group">
            {
                posts.map(item=>(
                    <Link className="list-group-item" to={`/blog/${item.id}`} key={item.id}>{item.id}-{item.title}</Link>
                ))
            }
            </ul>
        </>
    )
}

export default Blog

export const loaderBlog = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if(!res.ok){throw({status:res.status,statusText:'No encontrado'})}
    const posts = await res.json();
    return {posts}
}