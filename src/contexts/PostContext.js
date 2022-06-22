import { createContext, useEffect, useReducer } from "react";
import { PostReducer } from "../reducers/PostReducer";


export const PostContext = createContext()


const PostContextProvider = (props)=>{
        const [posts, dispatch] = useReducer(PostReducer, [], ()=>{
            const data = localStorage.getItem('articles')
            return data?JSON.parse(data):[]
        })

        useEffect(()=>{
            localStorage.setItem('articles', JSON.stringify(posts))
        },[posts])
    return (
        <PostContext.Provider value={{posts, dispatch}}>
            {props.children}
        </PostContext.Provider>
    )
}

export default PostContextProvider