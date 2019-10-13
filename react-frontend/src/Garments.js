/******************************************************************* */
      //      Garments component      //
/******************************************************************* */

import React from 'react';
import GarmentFront from './GarmentFront'
import GarmentBack from './GarmentBack'

class Garments extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeBody: 0,
            activeNeck: 0,
            activeSleeve: 0,
            activeTrouser: 0,
        }
    }
      // Arrow functions let you iterate thought the neck array
    increment = (type) => {
        if (type === 'neck') {
            this.setState((state) => ({
                activeNeck: state.activeNeck+1
            }))
        } if (type === 'sleeve') {
            this.setState((state) => ({
                activeSleeve: state.activeSleeve+1
            }))
        } if (type === 'trouser') {
            this.setState((state) => ({
                activeTrouser: state.activeTrouser+1
            }))
        }
    }
    decrement = (type) => {
        if (type === 'neck') {
            this.setState((state) => ({
                activeNeck: state.activeNeck-1
            }))
        } if (type === 'sleeve') {
            this.setState((state) => ({
                activeSleeve: state.activeSleeve-1
            }))
        } if (type === 'trouser') {
            this.setState((state) => ({
                activeTrouser: state.activeTrouser-1
            }))
        }
    }

    render() {
        let src = "./static/"
        return (
            <div>
            <div className = "left-centre">
            <GarmentFront garment={this.props} stateNum={this.state} increment={this.increment} decrement={this.decrement}/>
            </div>
            <div className = "right-centre">
            <GarmentBack garment={this.props} stateNum={this.state} increment={this.increment} decrement={this.decrement}/>
            </div>
            </div>
        )
            
        
    }
  
  }

export default Garments