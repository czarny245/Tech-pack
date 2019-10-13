import React from 'react';
import TrouserFront from './TrouserFront'

class GarmentFront extends React.Component {

    render() {
        let src = "./static/"
        if (this.props.garment.garment.garmentType === 'Trouser') {
            return (
            <TrouserFront 
                trouser={this.props.garment.garment.design.trouserFront} 
                increment={this.props.increment} 
                decrement={this.props.decrement} 
                num={this.props.stateNum}/>
            )
        } else {
        return (
            <div>
            <img className="bodyImg" src={src+this.props.garment.garment.design.bodyFront[0]} alt="Body Front"></img>
            <FrontNeck 
                neck={this.props.garment.garment.design.neckFront} 
                increment={this.props.increment} 
                decrement={this.props.decrement} 
                num={this.props.stateNum}/>
            <FrontSleeve 
                sleeve={this.props.garment.garment.design.sleeveFront} 
                increment={this.props.increment} 
                decrement={this.props.decrement} 
                num={this.props.stateNum}/>
            </div>
        )
        }
        
    }
  
  }
  class FrontNeck extends React.Component {
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
            <img className="neckImg" src={str} alt="neck Front"></img>
            <i onClick={this.props.decrement.bind(this, type)} id="neck-i-right" className="fa fa-caret-square-o-right" aria-hidden="true"></i>
            </div>
        )
    }
  }
  class FrontSleeve extends React.Component {
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
            <img className="sleeveImg" src={str} alt="sleeve Front"></img>
            <i onClick={this.props.decrement.bind(this, type)} id="sleeve-i-right" className="fa fa-caret-square-o-right" aria-hidden="true"></i>
  
            </div>
        )
    }
  }

export default GarmentFront