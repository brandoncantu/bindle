import React, { Component } from 'react';
import "./AddPanel.css"


class AddPanel extends Component {

    constructor(props){
        super(props);
        this.state={
            title:'',
            img:'',
            rate:1
        }
    }

    onChange = (e, type) =>{
        if(type==='title'){
            this.setState({title: e.target.value})
        }
        if(type==='img'){
            this.setState({img: e.target.value})
        }
        if(type==='rate'){
            this.setState({rate: parseInt(e.target.value)})
        }
    }
    onSubmit = (e) =>{
        e.preventDefault();
        const title = this.state.title
        const img = this.state.img
        const rate = this.state.rate

        this.props.onAdd({title: title, rating: rate, img: img})
        this.props.onCancel()
    }

    render() {
        return (
            <div className="add container">
                <div className="add-form">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Titulo Libro</label>
                            <input onChange={(e) => {this.onChange(e, 'title')}} type="text" className="input-text" name="title"></input>
                        </div>
                        <div className="form-group">
                            <label>Nombre imagen</label>
                            <input onChange={(e) => {this.onChange(e, 'img')}} type="text" className="input-text" name="imagen"></input>
                        </div>
                        <div className="form-group">
                            <label>Rating</label>
                            <select onChange={(e) => {this.onChange(e, 'rate')}} name="rate" id="rate">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className="form-group group-actions">
                            <input type="submit" className="btn btn-dark" value="Add"></input>
                            <button onClick={this.props.onCancel} className="btn btn-white">Cancel</button>
                        </div>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default AddPanel;