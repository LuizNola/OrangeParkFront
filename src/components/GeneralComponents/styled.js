import styled from 'styled-components'

export const ErrorStrip = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem;
    width: 80%;

    background-color: rgba(255, 150, 150, 0.3);
    color: #FF0000;
    
    margin-bottom: 1rem;   

`

export const DefButton = styled.button`
        background-color: #FF5C00;
        border: none;
        
        font-size: 1.5rem;
        color: #fff;

        padding: 0.3rem;
        margin-bottom: 1rem;
        cursor: pointer;

        img{
            width: 1.5rem;
        }
`

export const DefInput = styled.input`
            width: 100%;
            height: 2.5rem;
            margin-bottom: 1.5rem;

            font-size: 2rem;
            color: #000;
            
            border: none;
            border-bottom: 1px solid #868686;
            border-radius: 0.2rem;
            
            outline: none;
            ::placeholder{
                color: #868686;
            }
`

export const AlingInputs = styled.div`
    display: flex;
    gap: 0.5rem;
`