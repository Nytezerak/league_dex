import {Component} from 'react';

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
  
  render(){    
    const champFilter = this.state.champions.filter((champion) => {
      return champion.name.toLocaleLowerCase().includes(this.state.searchField);
    })

    return (
      <div className="App">
        <input 
          className='search-box' 
          type='search' 
          placeholder='Type champion name' 
          onChange={(event) => {
            const searchField = event.target.value.toLocaleLowerCase();
            this.setState(
              () => {
                return { searchField }
            })
      }}/>

        {champFilter.map((champion) => {
          return (
            <div key={champion.id}>
              <h1>{champion.id}</h1>
              <h2>{champion.title}</h2>
            </div>
          )
        })}
      </div>
    );
  }
}                       


export default App;