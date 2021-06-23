import { useParams, Link, useHistory } from "react-router-dom";
import useFetch from "./usefetch";


const BlogDetails = () => {
    const { id }= useParams();
    const { data:blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();

    const handleDelete = ()=>{
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: "DELETE"
        }).then(()=>{
            history.push('/');
        }); 
    }


    return ( 
        <div className="blogDetails">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <h5>By {blog.author}</h5>
                    <div>{blog.body}</div>
                </article>
            )}
            
            <Link to="/">
            <button>
                -Back-
            </button >
            </Link>
            <button className="btn" onClick={handleDelete}>
                Delete
            </button>
        </div>
     );
}
 
export default BlogDetails;