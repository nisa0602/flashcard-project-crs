import { Component } from "react";
import RegularCard from "./RegularCard";
import MultiCard from "./MultiCard";
import RandomWeighted from "./RandomWeighted";
import axios from "axios";

import '../flashCard.css'

export default class FlashCard extends Component{
    constructor(){
        super();
        this.apiHostRoot = `https://aws-services.robertbunch.dev/services`;
        this.state ={
            flipClass: "",
            questionData: "",
            ready: false
        }
    }

    componentDidMount(){
        // this.newCard();
    }

    flip = (e)=>{
        const newFlip = this.state.flipClass === "" ? "flip" : ""
        this.setState({
            flipClass: newFlip
        })
    }

    newCard = ()=>{
        //fetch a new card
        console.log(this.props.cardStyle)
        let path;
        const cardStyle = this.props.cardStyle;
        if((cardStyle === "Random") || (cardStyle === "Regular")){
            path = this.apiHostRoot+'/all'
        } else if(cardStyle === "Weighted"){
            path = this.apiHostRoot+'/weighted'
        } else {
            path = this.apiHostRoot+'/multi'
        }
        axios.get(path).then((res)=>{
            this.setState({
                questionData: res.data,
                ready: true
            })
        })
    }

    render(){
        if(!this.state.ready){
            this.newCard();
            return(
                <div className="spinner-wrapper">
                    <box-icon size="lg" name='loader-circle' rotate='270' color='#f29999' animation="spin"></box-icon>
                </div>
            )
        }
        return(
           <>
                <div className="row align-items-center card-holder">
                    <div onClick={this.flip} className={`col-sm-6 offset-sm-3 card mb-3 ${this.state.flipClass}`}>
                        <RegularCard questionData={this.state.questionData}/>
                    </div>
                </div>
                <button onClick={this.newCard} className="btn btn-primary btn-lg">Next Question</button>
           </>
        )
    }
}