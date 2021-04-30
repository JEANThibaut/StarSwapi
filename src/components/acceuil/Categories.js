import React from "react"; 
import Axios from "axios";
import Carte from "./cartes/Carte"

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            loaded: false,
            error: false,
            data : null,
            articles: null
        }
    }

    componentDidMount(){
        Axios.get("https://swapi.dev/api/")
        .then((response) => {
            console.log(response)
            let categoriesArray = Object.keys(response.data)
            let categories = categoriesArray.map((article) =>{
               
            return <Carte article={article} />
        });
            this.setState({
                loaded: true,
                data: response.data,
                articles : categories
            })
        })

        .catch((error) => {
            this.setState({
                loaded: true,
                error: error
            })
        })
    }
    render(){
        if(this.state.loaded ){
            if(this.state.error){
                return(
                    <p>Une erreur est survenue :-(. Message : {this.state.error.message}</p>
                );
            }

            return(
                <section>
                    <h2>Les Catégories</h2>
                    <div className="row">
                        {this.state.articles}
                    </div>
                    
                </section>
            );
        }
        return(
            <p>Vos données sont en cours de chargement</p>
        );
    }
}
export default Categories;