import {React, useState} from "react";
import { PostMethodsEstacionamento } from "../../../../services/orangApiHandler/PostHandler";

import { doLogin } from "../../../../services/AuthHandler";

import {ContainerLoginModal, FormLogin} from './style'
import {ErrorStrip, DefButton, DefInput} from '../../../../components/GeneralComponents/styled'

const ModalLogin = ({SetIsCad, IsCad}) => {

    const [error, setError] = useState("")
    const [isDisabled, setIsDisabled] = useState(false)

    const [cnpj, setCnpj] = useState("")
    const [senha, setSenha] = useState("")

    const GoCad = ()=>{
        SetIsCad(true)
    }

    const Login = async (event) =>{
        event.preventDefault()
        setError("")
        setIsDisabled(true)

        const json = await (await PostMethodsEstacionamento.login(cnpj, senha)).json()

        if(json.error){
           setError(json.message)
         }else{
            doLogin(json.Token, json.IdUser)
             window.location.href = '/carlist'
         }

        setIsDisabled(false)
       
    }

    return(
        <ContainerLoginModal Data={IsCad}>
            <img src="/assets/logo.svg"/>

            {error &&
            <ErrorStrip>
                {error}
            </ErrorStrip>}

            <FormLogin>
                <DefInput type="text"
                value={cnpj}
                onChange={e=> { setCnpj(e.target.value)}} 
                disabled={isDisabled}
                required
                placeholder="CNPJ"/>

                <DefInput type="password" 
                value={senha} 
                onChange={e=>setSenha(e.target.value)} 
                disabled={isDisabled}
                required
                placeholder="Senha"/>

                <DefButton 
                onClick={Login} 
                disabled={isDisabled}>
                    {!isDisabled &&
                        "ENTRAR"
                    }

                    {isDisabled &&
                        <img src="/assets/load.gif"/>
                    }
                       
                </DefButton>
            </FormLogin>
            <a href="#" onClick={GoCad}>Cadastre-se</a>

        </ContainerLoginModal>
    )
}

export default ModalLogin
