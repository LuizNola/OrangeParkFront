import styled from 'styled-components'

export const InfoConatainer = styled.div`
    position: fixed;
    top: 0;

    display: ${props => props.visible ? 'flex' : 'none' };
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.6);

`

export const BoxInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #fff;
    padding: 3rem;
    
    width: 40vw;

            h1{
            text-align: center;
        }

    div{
        display: flex;
        flex-direction: column;
        

        padding: 1rem 2rem 0 2rem;
     
        
        margin-bottom: 2rem;

        border: 1px solid #FF5C00;
        width: 80%;


        span{
            font-size: 1.5rem;
            color: #868686;
        }
        
    }

    span{
        font-size: 36px;
        margin-bottom: 1.5rem;
    }

    @media(max-width: 767px){
        width: 100vw;
    }
`