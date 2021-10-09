import {React, useState} from "react";

import ModalLogin from "./components/LoginModal";
import ModalCadastro from "./components/ModalCadastro";

import {LoginContainer, FormsRow, FormFrame} from './style'


const Login = () => {

    const [IsCad, SetIsCad] = useState(false)

    return(
        <>
            
            <LoginContainer>
                <FormsRow Data={IsCad}>
                    <FormFrame>
                        <ModalLogin 
                        SetIsCad={SetIsCad}
                        IsCad={IsCad}/> 
                    </FormFrame>
                    <FormFrame>
                        <ModalCadastro
                        SetIsCad={SetIsCad}
                        IsCad={IsCad}/> 
                    </FormFrame>
                </FormsRow>
            </LoginContainer> 
              
        </>
    )
}

export default Login;
