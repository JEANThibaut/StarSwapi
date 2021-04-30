import React from "react";


class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:""
        }
    }

    handleChange= (e) => {
        this.setState({
            value: e.target.value
        });
        //Valeur recuper dans le champ 
        console.log(this.state.value)
    }

    handleClick =()=>{
        // this.props.searchItem(this.state.value);
        this.setState({
            value:""
        })
    }

    render(){
        return(
            <div className="my-5">
                <input onChange={this.handleChange} value={this.state.value} type="text" className="form-control d-inline w-50 me-3" />
                <input onClick={this.handleClick} type="submit" className="btn btn-warning" value="Rechercher"/>
            </div>
        );
    }

}

export default SearchBar;

