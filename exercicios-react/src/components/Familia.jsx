import React from 'react'
import {filhosComProps as Utils} from '../utils/utils'

export default props => 
    <div>
        <h1>Família</h1>
        {Utils(props)}
        {/*React.Children.map(props.children, filho => {
            return React.cloneElement(filho,
                { ... props})
        })*/}
        {/*React.cloneElement(props.children,
            { ... props})*/}
        {/*React.cloneElement(props.children,
            {sobrenome: props.sobrenome})*/}
        {/*{props.children}*/}
    </div>