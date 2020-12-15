import React, { Component } from 'react';
import Item from "./Item";

class Lista extends Component {
    
    componentDidMount() {
        this.props.listUpdate();
    }

    render() {
        return (
            <div className="lista container">
                <div className="blocks">
                    {
                        this.props.items.map(item=> 
                            <Item
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.img}
                                rate={item.rating}
                                seeMore={this.props.seeMore}
                            />
                        )
                    }
                </div>
            </div>   
        );
    }
}

export default Lista;