import React from 'react'

class TrouserFront extends React.Component {

    render() {
      const type = 'trouser'
        let src = "./static/"
        let info = this.props.trouser
        let str = src+info[this.props.num.activeTrouser]
        return (
          <div>
          <i onClick={this.props.increment.bind(this, type)} id="neck-i-left" className="fa fa-caret-square-o-left" aria-hidden="true"></i>
          <img className="neckImg" src={str} alt="Trouser Front"></img>
          <i onClick={this.props.decrement.bind(this, type)} id="neck-i-right" className="fa fa-caret-square-o-right" aria-hidden="true"></i>
          </div>
        )
        
    }
  
  }

export default TrouserFront