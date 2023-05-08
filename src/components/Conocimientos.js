import React from 'react'

const Conocimientos = ({imagen, descripcion}) =>
    <div className='elementoCarrousel'>
        <img src={require('../img/logosConocimientos/'+imagen)}></img>
    </div>;


export default Conocimientos;