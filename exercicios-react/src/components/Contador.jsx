import React, {Component} from 'react'

export default class Contador extends Component {

    state = {
        numero: this.props.numeroInicial
    }
    
    //Solução 1 - Função Bind
    /*constructor(props) {
        super(props)
        this.maisUm = this.maisUm.bind(this)
    }*/
    //Solução 2 -Função Arrow(onclick)
    /*
    <button onClick={() => this.maisUm()}></button>*/




    //Solução 3 - Função Arrow
    /*Respeita o texto léxico */
    maisUm = () => {
        this.setState({numero: this.state.numero + 1})
        /*this.state.numero ++;*/
    }

    render() {
        return (
            <div>
                <div>Número : {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>               
                <button>Dec</button>
            </div>
        )
    }
}