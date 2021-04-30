import React from "react";
import Axios from "axios";
import List from "./List";

class People extends React.Component {
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
        Axios.get("https://swapi.dev/api/people")
        .then((response) => {
           
            let peoplesArray = response.data.results
            
            let articles = peoplesArray.map((people) =>{
                return(
                    <List people={people.name}/>
                   
                )      
            });
            
            this.setState({
                loaded: true,
                data: response.data,
                articles : articles
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
                    <h2 className="text-center">Les Personnages</h2>
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
export default People;