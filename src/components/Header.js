import { useContext, useState } from "react";
import { PostContext } from "../contexts/PostContext";
import NewArticle from "./NewArticle";

const Header = ( ) => {

    const [showAddArticle, setShowAddArticle] = useState(false)

    const {dispatch} = useContext(PostContext)

    return (  
        <header>
            <button onClick={()=>setShowAddArticle(!showAddArticle)}>
            Create New Article
            </button>
            {showAddArticle&& <NewArticle dispatch={dispatch} setShowAddArticle={setShowAddArticle} />}
            
        </header>
    );
}

export default Header;