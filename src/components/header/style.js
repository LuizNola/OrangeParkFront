import styled from 'styled-components'

export const MenuDesktopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.3rem 0;

    background-color: #fff;

    div{
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        img{
            width: 7.5rem;
        }

        span{
            font-size: 1.5rem;
        }
    
        button{
            width: 30%;
            max-width: 28.8rem;
            height: 3rem;

            background-color: #FF5C00;
            color: #fff;
            font-size: 2.25rem;

            border: none;
            cursor: pointer;
        }

        a{
            img{
                width: 4rem;
                cursor: pointer;
            }
        }

    }

    @media(max-width: 768px){
        display: none;
    }

`



export const BurguerMenu = styled.div`
    display: none;
    padding: 1rem;
    width: 100vw;

    background-color: #fff  ;
        div{
            height: 0.2rem;
            width: 1rem;

            background-color: #000;
            margin-top: 0.1rem;
            
        }

    @media(max-width: 768px){
        display: block;
    }
    
`

export const AsideMenuMobile = styled.aside`

    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;

    margin-left: ${props => props.isOpen ? '0' : '-100vw'};

    padding: 2rem;

    height: 100%;
    width: 80vw;

    position: absolute;

    img{
            width: 7.5rem;
        }

        span{
            font-size: 1.5rem;
        }
    
        button{
            width: 30%;
            max-width: 28.8rem;
            height: 3rem;

            background-color: #FF5C00;
            color: #fff;
            font-size: 2.25rem;

            border: none;
            cursor: pointer;
        }

        a{
            img{
                width: 4rem;
                cursor: pointer;
            }
        }

        transition: all ease 0.2s;
    

    @media(max-width: 768px){
        display: flex;
    }
`