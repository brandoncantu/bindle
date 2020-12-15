import React, { Component } from 'react';

class Search extends Component {
    constructor(props){
        super(props);
    }

    onChangeEvent = e =>{
        const query = e.target.value.toString().toLowerCase();
        this.props.onSearch(query);
    }

    render() {
        return (
            <React.Fragment>
            <input type="text" placeholder="Search a book..." onChange={this.onChangeEvent}></input>
            <img src="img/svg/search.png"/>
            </React.Fragment>
        );
    }
}

export default Search;