import { render } from '@testing-library/react';
import React, { Component } from 'react';
import "./Item.css"

class Item extends React.Component{

    constructor(props){
        super(props);
        this.state={
            isLoaded: false,
            stars: []        
        }
    }

    componentDidMount(){
        this.setState({
            stars: Array(parseInt(this.props.rate)).fill(0)
        })  
    }

    printStar = () => {
        const stars = this.state.stars;
        const listItems = stars.map((star, index) =>
        <img key={index} src="img/star.png" width="32"></img>
        );
        return (
          <React.Fragment>{listItems}</React.Fragment>
        );
    }

    setData =() => {
        const id = this.props.id
        const title = this.props.title
        const rate = this.props.rate
        const img = this.props.image
        const data = [id, title, rate, img]
        this.props.seeMore(data)
    }
    
    render(){
    return (
        // <div className="item">
        //     <a href="#">
        //     <div className="item-hover">
        //         <p className="item-title">{props.title}</p>
        //         <div className="item-rate">
        //             <p>*****</p>
        //         </div>
        //     </div>
        //     <img src={"img/covers/"+ props.image}></img>
        //     <p className="item-title">{props.title}</p>
        //     </a>
        // </div>
        <div onClick={this.setData} className="block">
        <a href="#" >
            <div className="overlay">
                <p className="stars">{
                    // this.state.stars.map(x =>
                    //     <img key={x++} src="img/star.png" width="32"></img>
                    // )
                    this.printStar()
                }</p>
            </div>

            <img className="imgCover" src={"img/covers/"+ this.props.image}></img>
            <p className="item-title">{this.props.title}</p>
        </a>
        </div>
    );
    }
}

export default Item;