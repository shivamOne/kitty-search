import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.comp';
import { SearchBox } from './components/search-box/search-box-component';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      slayer: [],
      searchField: ''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user =>this.setState({slayer: user}));
  }

  render() {
        const {slayer, searchField } = this.state;
        const filteredSlayer = slayer.filter(slayer =>
          slayer.name.toLowerCase().includes(searchField.toLowerCase())
          );
      return (
        <div className="App">
          <h1>Kitty search</h1>
           <SearchBox 
           placeholder='search kitty'
           handleChange={e => { 
            this.setState({ searchField: e.target.value}, () => 
              console.log( this.state)
           );
          }} 
           />
          <CardList slayer={filteredSlayer}/>
          
        </div> 
      );
    
  }
}
export default App;
