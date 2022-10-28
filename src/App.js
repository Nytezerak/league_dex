import {Component} from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      champions: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('http://ddragon.leagueoflegends.com/cdn/12.19.1/data/pt_BR/champion.json')
      .then((response) => response.json())
      .then((data) => 
        this.setState(
          () => {
            return { champions: Object.values(data.data) }; 
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }
  
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(
      () => {
        return { searchField }
    })
  }

  render(){  
    const { champions, searchField } = this.state;
    const { onSearchChange } = this
    
    const champFilter = champions.filter((champion) => {
      return champion.name.toLocaleLowerCase().includes(searchField);
    })

    return (
      <div className="App">
        <SearchBox 
          className='search-box' 
          onSearchHandler = { onSearchChange } 
          placeholder='Type champion name'
        />
        
        <CardList 
          champions = { champFilter }
        />
      </div>
    );
  }
}                       


export default App;