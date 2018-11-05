import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {

  constructor(props){

    super(props);

    this.filterCartElement = this.filterCartElement.bind(this);

    
  }  
  state = {

      cart :[],

      defaultCart :[
        {'id':'1' , 'name':'jason'},
        {'id':'2' , 'name':'jack'},
        {'id':'3' , 'name':'john'},
        {'id':'4' , 'name':'jim'}
      ],


  };

  componentWillMount(){
    this.setState({cart:this.state.defaultCart});
  }

  filterCartElement(event){
      let searchText = event.target.value;
     
      let defaultCart = this.state.defaultCart;
      let updatedCartElements = defaultCart.filter(function(item){
        return item.name.toLowerCase().search(
          event.target.value.toLowerCase()) !== -1;
      });
      
      this.setState({cart: updatedCartElements});

  }
  
  render() {
    return (
      <div className="App container">
        <div className="search-container">
          <input type="text" name="txtSearch" defaultValue="" placeholder="Search Box" onKeyUp={this.filterCartElement} className="form-control form-control-lg" />
        </div>
        <div className="cart_section row">
          {this.state.cart.map((cartitem,index) => (
            <div key={cartitem.id} className="col-lg-3 col-sm-3 col-xs-12 cart_boxes"><span>{cartitem.name}</span></div>
          ) )}
        </div>
      </div>
    );
  }
}

export default App;
