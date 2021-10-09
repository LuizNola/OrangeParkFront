import styled from 'styled-components'

export const LoginContainer = styled.div`
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), url("/assets/login/Bg.svg");
   
    background-position: center;
    background-size: cover;

    overflow: hidden;
    
    height: 100vh;
    width: 100vw;
`

export const FormsRow = styled.div`
    width:  200vw;
    height: 100vh;

    margin-left: ${props => props.Data ? -100 : 0}vw;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 1s ease;
`

export const FormFrame = styled.div`
    width: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
`