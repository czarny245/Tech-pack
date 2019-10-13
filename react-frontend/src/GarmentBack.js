import React from 'react';
import TrouserBack from './TrouserBack'


class GarmentBack extends React.Component {

    render() {
        let src = "./static/"
        console.log(this.props)
        if (this.props.garment.garment.garmentType === 'Trouser') {
            return (
                <TrouserBack
                trouser={this.props.garment.garment.design.trouserBack} 
                increment={this.props.increment} 
                decrement={this.props.decrement} 
                num={this.props.stateNum}/>
            )
        } else {
        return (
            <div>
            <img className="bodyImg" src={src+this.props.garment.garment.design.bodyBack[0]} alt="Body Back"></img>
            <BackNeck neck={this.props.garment.garment.design.neckBack} increment={this.props.increment} decrement={this.props.decrement} num={this.props.stateNum}/>
            <BackSleeve sleeve={this.props.garment.garment.design.sleeveBack} increment={this.props.increment} decrement={this.props.decrement} num={this.props.stateNum}/>
            </div>
        )
            
        }
    }
  
  }
  class BackNeck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {num: 0};
      }
  
    render() {
        const type = 'neck'
        let src = "./static/"
        let info =  this.props.neck
        let str = src+info[this.props.num.activeNeck]
        return (
            <div>
            <i onClick={this.props.increment.bind(this, type)} id="neck-i-left" className="fa fa-caret-square-o-left" aria-hidden="true"></i>
            <img className="neckImg" src={str} alt="neck Back"></img>
            <i onClick={this.props.decrement.bind(this, type)} id="neck-i-right" className="fa fa-caret-square-o-right" aria-hidden="true"></i>
            </div>
        )
    }
  }
  class BackSleeve extends React.Component {
    constructor(props) {
        super(props);
        this.state = {num: 0};
      }
  
    render() {
        const type = 'sleeve'
        let src = "./static/"
        let info =  this.props.sleeve
        let str = src+info[this.props.num.activeSleeve]
        return (
            <div>
            <i onClick={this.props.increment.bind(this, type)} id="sleeve-i-left" className="fa fa-caret-square-o-left" aria-hidden="true"></i>
            <img className="sleeveImg" src={str} alt="sleeve Back"></img>
            <i onClick={this.props.decrement.bind(this, type)} id="sleeve-i-right" className="fa fa-caret-square-o-right" aria-hidden="true"></i>
  
            </div>
        )
    }
  }

export default GarmentBack