import React from 'react'
import GoogleMapReact from 'google-map-react'
//CSS
import Marker from './Marker'

const Map = ({lat,leng, name }) =>{


        return (
            <div style={{ height: '400px', width: '80%' }}>
                {lat ?
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
                        center={[lat,leng]}
                        zoom={16}

                    >
                        <Marker
                            lat={lat}
                            lng={leng}
                            text={name}
                            color="blue"

                        />


                    </GoogleMapReact>
                    :
                    null
                }
            </div>
        )
    }


export default Map