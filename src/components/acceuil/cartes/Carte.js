function Carte(props){
    return(
    
        <div className="col-6 col-sm-4 col-lg-3">
            <article className="bg-dark text-center text-white py-5 my-2">
                <h3 className="text-primary">{props.article}</h3>
                <span>{props.article.birth_year}</span>
                {/* <p>{props.article.contenu}</p> */}
            </article>
        </div>
       
    );
}

export default Carte;