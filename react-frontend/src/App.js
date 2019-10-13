import React from 'react';
import logo from './logo.svg';
import './App.css';
import Garments from './Garments'
import GarmentList from './GarmentList'
import LoginPage from './LoginPage'

class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          garments: [
              {
                  id: 1,
                  garmentType: 'Shirt',
                  active: true,
                  design: {
                      bodyFront: ['Body front1.svg',],
                      bodyBack: ['Body Back.svg'],
                      neckFront: ['front neck1.svg','front neck2.svg'],
                      neckBack: [],
                      sleeveFront: ['front slv long.svg','front slv short.svg'],
                      sleeveBack: [],
                  }
              },
              {
                  id: 2,
                  garmentType: 'Dress',
                  active: false,
                  design: {
                      bodyFront: ['Body front2.svg',],
                      bodyBack: ['Body Back.svg'],
                      neckFront: ['front neck2.svg','front neck1.svg'],
                      neckBack: [],
                      sleeveFront: ['front slv long.svg','front slv short.svg'],
                      sleeveBack: [],
                  }
              },
              {
                  id: 3,
                  garmentType: 'Trouser',
                  active: false,
                  design: {
                      trouserFront: ['Basic pants Front.svg', 'Pajama front.svg', 'Short Front.svg', 'Skinny Front.svg', 'Straight pants front.svg'],
                      trouserBack: ['Basic pants Back.svg', 'Pajama Back.svg', 'Short Back.svg', 'Skinny Back.svg', 'Straight pants Back.svg']
                  }
              },
              {
                  id: 4,
                  garmentType: 'Jumper',
                  active: false,
              }
          ]
      }
  }
  // This function toggles the active state of a garment it loops through all garments 
  // and set all active garments to false first, then set the clicked garment to true
  // the "id" is passed from GarmentListItem component
  changeGarment = (id) => {
      this.setState({
          garments: this.state.garments.forEach(garment => garment.active = false),
          garments: this.state.garments.map(garment => {
              if (garment.id === id) {
                  garment.active = !garment.active;
              }
              return garment;
          })
      })
  }
  render() {

      return (
          <div>
          <LoginPage />
          <div className = "main">
          <div className = "left-panel">
              <form>
                  <input></input>
                  <input></input>
                  <input></input>
                  <input></input>
                  <input></input>
                  <input></input>
              </form>
          </div>
          <div className = "right-panel">
              <ul className="garment-list">
                  <GarmentList garments={this.state.garments} changeGarment={this.changeGarment} />
              </ul>
          </div>
            <Garments garment={this.state.garments.find(garment => {
                if (garment.active === true) {
                    return garment
                }
            }) }/>
          </div>
          </div>
      )
  }

}

export default App;
