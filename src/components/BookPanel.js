import React, { Component } from 'react';
import "./AddPanel.css"

class BookPanel extends Component {
    constructor(props){
        super(props);
        this.state={
            id: this.props.id,
            title:this.props.title,
            img:this.props.img,
            rate:this.props.rate,
            action: 'cancel'
        }
    }

    // action = (type) =>{
    //     this.setState({action: type})
    // }

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

    onSubmit = (e) => {
        e.preventDefault();
        const id = this.state.id
        const title = this.state.title
        const img = this.state.img
        const rate = this.state.rate

        if(this.state.action==='update'){
            this.props.onUpdate({id: id, title: title, rating: rate, img: img})
        }else if(this.state.action==='delete'){
            this.props.onDelete({id: id})
        }
        this.props.onCancel();
    }

    render() {
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
          };
        return (
            <div className="detail container" style={{height: "calc( 100vh - 100px"}}>
                <div className="detail-form">
                    <div className="bookCover" style={{backgroundImage: "url(img/covers/" + this.state.img + ")"}}></div>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>ID: <span style={{color: '#32324e', marginLeft: "1rem"}}>{this.props.id}</span></label>
                        </div>
                        <div className="form-group">
                            <label>Titulo Libro</label>
                            <input onChange={(e) => {this.onChange(e, 'title')}} type="text" className="input-text" name="title" value={this.state.title}></input>
                        </div>
                        <div className="form-group">
                            <label>Nombre imagen</label>
                            <input onChange={(e) => {this.onChange(e, 'img')}} type="text" className="input-text" name="imagen" value={this.state.img}></input>
                        </div>
                        <div className="form-group">
                            <label>Rating</label>
                            <select onChange={(e) => {this.onChange(e, 'rate')}} name="rate" id="rate" value={this.state.rate}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className="form-group group-actions">
                            <input  onClick={() => this.setState({action: 'update'})} type="submit" name="update" className="btn btn-yellow" value="Update"/>
                            <input  onClick={() => this.setState({action: 'delete'})} type="submit" name="delete" className="btn btn-dark" value="Delete"/>
                            <button onClick={this.props.onCancel} className="btn btn-white">Go Back</button>
                        </div>
                    </form>
                </div>
                
            </div>
        );
    }
}
export default BookPanel;