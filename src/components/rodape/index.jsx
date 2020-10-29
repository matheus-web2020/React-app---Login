//Igual ao Using(C#)
import React, {Component} from 'react'

//Renderiza HTML
class Rodape extends Component{
  render(){
    return (
        <footer>
              <h1>{this.props.texto}</h1>
        </footer>
    )
  }

}

//Deixa o webComponets visível para outros webComponents
export default Rodape