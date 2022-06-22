import { useState } from "react";

const NewArticle = ({dispatch, setShowAddArticle}) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handlePost = (e)=>{
        e.preventDefault()
        dispatch({type:"POST", data:{title, content}})
        setTitle('')
        setContent('')
        setShowAddArticle(false)
    }
    return (  
        <div>
            <form onSubmit={handlePost}>
                <label htmlFor="title">Article Title</label>
                <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" name="title" placeholder="Article Title" />
                <label htmlFor="content">Content</label>
                <input placeholder="Content..." value={content} onChange={(e)=>setContent(e.target.value)} type="text" name="content" />
                <button type="submit">Post</button>
            </form>
        </div>
    );
}
 
export default NewArticle;