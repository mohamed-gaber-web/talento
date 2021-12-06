import React from 'react';

import './splash-screen.page.css';

import Container from '@mui/material/Container';

import styled from 'styled-components';

import { Navbar } from '../../components/navbar/navbar.component';


export function SplashScreen() {

    const ButttonStyle = styled.button`
        border : 1px solid #707070!important;
        color: #E8CB69!important;
        font-size : 30px!important;
        width: 350px!important;
        height: 70px!important;
        border-radius : 20px!important;
        background: transparent!important;
        max-width: 100%;
        transition: all 0.3s ease-in-out;
        &:hover {
            background-color: #E8CB69!important;
            color: #232323!important;
        }
    `;

    return(
        <>
        <Navbar /> 
        <div className="splash-screen text-center">
            <Container>
                <div className="logo"> 
                    <img src={require('../../assets/images/final_talento-06.png').default} alt="" />
                </div>
                <ButttonStyle>Log in</ButttonStyle>
            </Container>
        </div>
        </>
    );
}