import { v4 as uuidv4 } from 'uuid';
export const PostReducer = (state, action)=>{
    switch(action.type){
        case 'POST':
            return [...state, {
                title:action.data.title,
                content:action.data.content,
                id:uuidv4(),
                timestamp:new Date(),
            }]
        case "DELETE":
            return state.filter(post=>post.id !==action.id)

        // case "EDIT":
        //     // return state.map(data=>{
        //         // if(data.id === action.id){
        //         //     data = {
        //         //         title:action.data.editedTitle,
        //         //         content:action.data.editedContent,
        //         //         id:uuidv4(),
        //         //         timestamp:new Date(),
        //         //     }
        //         // }
        //     })
    }
}