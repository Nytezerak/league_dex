    import { Component } from "react";

    class CardList extends Component {
        render(){
            const {champions} = this.props
             
            return(
                <div>
                    {champions.map((champion) =>
                    <h1>{champion.name}</h1>)}
                </div>
            )
        }
    }

    export default CardList