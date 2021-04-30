import {Link} from "react-router-dom";

function Carte(props){
    return(
    
        <div className="col-6 col-sm-4 col-lg-3">
            <article className="bg-dark text-center text-white py-5 my-2">
                <h3>
                <Link className="nav-link text-primary" to={props.article} >{props.article}</Link>
                </h3>
            </article>
        </div>
       
    );
}

export default Carte;
