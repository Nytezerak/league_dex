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
        {this.state.champions.map((champion) => {
          return (
            <div key={champion.key}>
              <h1>{champion.id}</h1>
              <h2>{champion.title}</h2>
              <h3>{champion.blurb}</h3>
            </div>
          )
        })}
      </div>
    );
  }
}                       


export default App;