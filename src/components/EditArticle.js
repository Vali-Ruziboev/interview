import { useState } from "react"

const EditArticle = ({title, content, id, timestamp, setShowEditArticle, dispatch }) => {
    const [editedTitle, setEditedTitle] = useState(title)
    const [editedContent, setEditedContent] = useState(content)


    // const handleSubmit = (e)=>{
    //     e.preventDefault()
    //     dispatch({type:"EDIT", data:{editedTitle, editedContent, id}})
    //     setEditedTitle('')
    //     setEditedContent('')
    //     setShowEditArticle(false)
    // }
    return (  
        <form onSubmit={handleSubmit}>
             <label htmlFor="title">Article Title</label>
                <input value={editedTitle} onChange={(e)=>setEditedTitle(e.target.value)} type="text" name="title" placeholder="Article Title" />
                <label htmlFor="content">Content</label>
                <input placeholder="Content..." value={editedContent} onChange={(e)=>setEditedContent(e.target.value)} type="text" name="content" />
                <button type="submit">Update</button>
        </form>
    );
}
 
export default EditArticle;