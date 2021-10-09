import styled from 'styled-components'

export const CadConatainer = styled.div`
    position: absolute;
    top: 0;

    display: ${props => props.visible ? 'flex' : 'none' };
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.6);
`
export const BoxCad = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #fff;
    padding: 3rem;
    padding-bottom: 2rem;
    
    width: 40%;

    @media(max-width: 767px){
        width: 100vw;
        padding: 3rem 0;
    }


`

export const FormCad = styled.form`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 90%;
     
         select{
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
        }

`
