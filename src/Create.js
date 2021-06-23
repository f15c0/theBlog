import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const history= useHistory();
    const [title, setTitle]= useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Dennis Fisco');
    const [isPending, setIsPending]= useState(false);

    //form submit function
    const handleSubmit= (e)=>{
        e.preventDefault();
        const blog = {title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
                setIsPending(false);
                history.push('/');
        });
    }
    
    return (  
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input 
                required
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                >
                </input>
                <label>Blog Body</label>
                <textarea required
                    cols="10"
                    rows="10"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                
                ></textarea>
                <label>Author</label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Dennis Fisco">Dennis Fisco</option>
                    <option value="Pablo Escobar">Pablo Escobar</option>
                    <option value="Melcom X">Melcom X</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Post...</button>}
             
            </form>
           
        </div>
    );
}
 
export default Create;