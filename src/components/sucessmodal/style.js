import styled from 'styled-components'

export const SucessConatainer = styled.div`
    position: absolute;
    top: 0;

    display: ${props => props.visible ? 'flex' : 'none' };
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.6);

`

export const BoxSucess = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #fff;
    padding: 1rem 3rem;

    span{
        font-size: 36px;
        margin-bottom: 1.5rem;
    }

    button{
        background-color: #FF5C00;
        border: none;
        
        font-size: 1.5rem;
        color: #fff;

        padding: 0.3rem;

        cursor: pointer;
    }
`