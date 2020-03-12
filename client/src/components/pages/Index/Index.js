import React from 'react'

//ROUTER

import './Index.css';


const Index = props => {
    return (

        <section>
       
            <div className="quake">
            <h1>Quake</h1>
            <h4>Ten siempre a mano Quake: tu web para sentirte vivo.</h4>
            <h6> Una forma ágil y sencilla de tener una aventura siempre entre manos. Contacta con nuestras empresas de aventura  </h6>
            
            <a className="btnIndex" href='/getAllActivities'>Inspírame</a>

            </div>
        </section>
    )
}

export default Index