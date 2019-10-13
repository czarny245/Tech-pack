/******************************************************************* */
      //      GarmentList components      //
/******************************************************************* */
import React from 'react'

class GarmentList extends React.Component {
    render() {
        return this.props.garments.map((garment) => (
            <GarmentListItem key={garment.id} garment={garment} changeGarment = { this.props.changeGarment }/>
        ))
    }
  }
  class GarmentListItem extends React.Component {
    render() {
        const {id, garmentType} = this.props.garment
        return (
            <li onClick={this.props.changeGarment.bind(this, id)} className="garment-type" >{garmentType}</li>
        )
    }
  }

export default GarmentList