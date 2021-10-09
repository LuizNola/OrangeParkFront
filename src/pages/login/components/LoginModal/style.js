import styled from 'styled-components'

export const ContainerLoginModal = styled.div`
    width: 50vw;
    max-width: 612px;
    padding: 10px;

    opacity: ${props => props.Data ? 0 : 1};
    transform: scale(${props => props.Data ? 0 : 1});
    
    background-color: #fafafa;
    border-radius: 0.2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    transition: all 0.2s ease;

    img{
        width: 9rem;
        margin-bottom: 1rem;
    }

    a{
            text-decoration: none;
            color: #545454;

            margin-top: 0.3rem;
            margin-bottom: 1rem;
        }

    @media(max-width: 767px){
        width: 100vw;
    }
`

export const FormLogin = styled.form`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 90%;

        input[type="password"]{
            margin-bottom: 2rem;
        }

        button{
            padding: 1rem;
        }

    
`