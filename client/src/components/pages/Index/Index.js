import React from 'react'
//CSS
import './Index.css';


const Index = props => {
    const button = props && props.user ? (<a className="btnIndex" href='/getAllActivities'>Inspírame</a>):null

    return (

        <section>
       
            <div className="quake">
            <h1>Quake</h1>
            <h4>Ten siempre a mano Quake: tu web para inyectarte adrenalina .</h4>
            <h6> Una forma ágil y sencilla de tener una aventura siempre entre manos. Date prisa y reserva algunas de las actividades que te harán temblar </h6>
      {button}
     
            </div>
        </section>
    )
}

export default Index