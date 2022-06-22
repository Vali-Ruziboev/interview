import { useContext, useState } from "react";
import Timestamp from "react-timestamp";
import { PostContext } from "../contexts/PostContext";
import EditArticle from "./EditArticle";

const Main = () => {
    const {posts, dispatch} = useContext(PostContext)
    const handleDelete = (id)=>{
        dispatch({type:"DELETE", id:id})
    }
    const [showEditArticle, setShowEditArticle] = useState(false)
    return (  
        <main>
            <div>
                {posts.map(({title, content, id, timestamp})=>(
                    <div key={id}>
                        <div>
                            <h1>{title}</h1>
                            <p><Timestamp relative  date ={timestamp} relativeTo={new Date} /> ago</p> 
                        </div>
                        <p>{content}</p>

                        <div>
                            <button onClick={setShowEditArticle(true)}>Edit</button>
                            <button onClick={()=>handleDelete(id)}>Delete</button>
                        </div>
                        {/* {showEditArticle&&<EditArticle title={title} content={content} id={id} timestamp={timestamp} setShowEditArticle={setShowEditArticle} dispatch={dispatch} />} */}
                        
                    </div>
                ))}
            </div>
        </main>
    );
}
 
export default Main;