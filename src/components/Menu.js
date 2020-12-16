import React, { Component } from 'react';
import Search from "./Search";
import AddPanel from "./AddPanel";
import BookPanel from "./BookPanel"
import Lista from "./Lista";

class Menu extends Component {

    constructor(props){
        super(props);
        this.state= {
            newItemPanel: false,
            bookPanel: false,
            id: -1,
            title: "",
            rate: 1,
            img: ""
        }
    }

    onAdd = () =>{
        this.setState({newItemPanel: true})
        //console.log(this.state.newItemPanel)
    }
    onCancel = () =>{
        this.setState({newItemPanel: false, bookPanel: false})
        //console.log(this.state.newItemPanel)
    }
    seeMore = (data) =>{
        this.setState({
            bookPanel: true,
            id: data[0],
            title: data[1],
            rate: data[2],
            img: data[3]
        })
    }

    addBtnText = () => {
        if(window.innerWidth>480){
            return "Add new book"
        }else{ if(window.innerWidth<=480){
            return "+"
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="bar">
                    <div className="logo">
                        <img src="img/logo.png"/>
                    </div>
                    <div className="search">
                        <Search
                          onSearch= {this.props.onSearch}
                        />
                    </div>
                    <div className="actions">
                        <button onClick={this.onAdd} className="btn btn-sec btn-white">{this.addBtnText()}</button>
                    </div>
                </div>
                {
                        (this.state.newItemPanel)?
                        <AddPanel
                          onCancel= {this.onCancel}
                          onAdd={this.props.onAdd}
                        />
                        :
                        (this.state.bookPanel)?
                        <BookPanel
                          onCancel= {this.onCancel}
                          seeMore={this.props.seeMore}
                          id={this.state.id}
                          title={this.state.title}
                          rate={this.state.rate}
                          img={this.state.img}
                          onUpdate={this.props.onUpdate}
                          onDelete={this.props.onDelete}
                        />
                        :
                        <Lista 
                          items= {this.props.books}
                          listUpdate={this.props.listUpdate}
                          seeMore={this.seeMore}
                        />
                    }
            </React.Fragment>
        );
    }
}

export default Menu;