import styled from 'styled-components'

export const ContainerCadModal = styled.div`
    width: 50vw;
    max-width: 612px;
    padding: 1rem 0;
    
    background-color: #fafafa;
    border-radius: 0.2rem;

    opacity: ${props => props.Data ? 1 : 0};
    transform: scale(${props => props.Data ? 1 : 0});
    

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    transition: all 0.2s ease;

    img{
       
        margin-bottom: 1rem;

        cursor: pointer;
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
export const ArrowContainer = styled.div`
    width: 95%;
`

export const FormCad = styled.form`
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

