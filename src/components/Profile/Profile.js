import React from 'react'

import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';
import './Profile.scss';

import Social from './Social';
import Image from '../Image';
     
const data = [
    {
        title: "Teléfono: ",
        info: "+52 33 2495 4452",
    },
    {
        title: "Email: ",
        info: "krivozznova@gmail.com"
    },
  
]

const Profile = ({neon}) => {
    return (
        <div id="start" className={neon ? 'profile__neon animate__animated animate__fadeInDown' 
                             : 'profile animate__animated animate__fadeInDown'}>
            <div className="wallpaper" />
            <div className="dark" />

            <Container className="box">
                <Row className="info">
                    <Col xs={12} md={4}>
                        <Image fileName='avatar.png' alt="Bokkoa" />
                    </Col>

                    <Col xs={12} md={8} className="info__data">
                        <span>¡Saludos!</span>
                        <p>Felipe Cruz</p>
                        <p>Fullstack developer</p>

                        <hr />

                        {data.map( (item, key) => {
                            return(
                                <div key={key} className="more-info">
                                    <div className="item">
                                            <p style={{ marginRight: '20px'}}>{item.title}</p>
                                            <p>{item.info}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </Col>
                </Row>
                <Social neon={neon}/>
            </Container>
        </div>
    )
}

export default Profile
