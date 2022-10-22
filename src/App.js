import {Component} from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      champions: [],
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
    console.log(this.state.champions)
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='Type champion name' onChange={(event) => {
        console.log(event.target.value);

        const searchToLower = event.target.value.toLowerCase();
        const champFilter = this.state.champions.filter((champion) => {
          return champion.name.toLowerCase().includes(searchToLower);
        })

        this.setState(() => {
          return {champions: champFilter}
        })
      }}/>

        {this.state.champions.map((champion) => {
          return (
            <div key={champion.key}>
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