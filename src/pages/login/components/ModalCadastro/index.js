import {React, useState} from "react";
import {ContainerCadModal, FormCad, ArrowContainer} from './style'
import SucessModal from '../../../../components/sucessmodal/index'

import { ErrorStrip, DefButton, DefInput, AlingInputs } from '../../../../components/GeneralComponents/styled'
import { PostMethodsEstacionamento } from "../../../../services/orangApiHandler/PostHandler";

const ModalCadastro = ({SetIsCad, IsCad}) => {

    const [isFinished, setIsFinished] = useState(false)
    const [error, setError] = useState(null)
    const [nome, setNome] = useState(null)
    const [cnpj, setCnpj] = useState(null)
    const [senha, setSenha] = useState(null)
    const [cidade, setCidade] = useState(null)
    const [endereco, setEndereco] = useState(null)
    const [telefone, setTelefone] = useState(null)
    const [VgMotos, setVgMotos] = useState(null)
    const [VgCarros, setVgCarros] = useState(null)
    const [isDisabled, setIsDisabled] = useState(false)

    const NoCad = ()=>{
        SetIsCad(false)
    }

    const cadUser = async (event) => {
        event.preventDefault()
        setIsDisabled(true)
        const json = await PostMethodsEstacionamento.cadastrar
                                (nome, cnpj, senha, cidade, endereco, telefone, VgMotos, VgCarros)

        if(json.status == 201){
            setIsFinished(true)
        }
        if(json.status == 400){
            const errorList = await json.json()
        
            setError(errorList.msg)

            if(errorList.listaDeErros){
                setError(errorList.listaDeErros[0].msg)
               
            }
        }
        setIsDisabled(false)
    }

    return(
        <>
            <ContainerCadModal Data={IsCad}>

                <ArrowContainer>
                    <img src="/assets/arrow.svg" onClick={NoCad}/>
                </ArrowContainer>

                {error &&
                <ErrorStrip>
                    {error}
                </ErrorStrip>
                }

                <FormCad>

                    <DefInput 
                    type="text" 
                    placeholder="Nome do estabelecimento"
                    value={nome}
                    onChange={e=> { setNome(e.target.value)}} 
                    required
                    />

                    <DefInput 
                    type="text" 
                    placeholder="CNPJ"
                    value={cnpj}
                    onChange={e=> { setCnpj(e.target.value)}} 
                    required
                    />
                    
                    <DefInput 
                    type="password" 
                    placeholder="Senha"
                    value={senha}
                    onChange={e=> { setSenha(e.target.value)}} 
                    required
                    />
                    
                    <AlingInputs>
                        <DefInput 
                        type="text" 
                        placeholder="Cidade"
                        value={cidade}
                        onChange={e=> { setCidade(e.target.value)}} 
                        required
                        />
                        
                        <DefInput 
                        type="text" 
                        placeholder="Endereço"
                        value={endereco}
                        onChange={e=> { setEndereco(e.target.value)}} 
                        required
                        />
                        
                    </AlingInputs>
                    
                    <DefInput 
                    type="text" 
                    placeholder="Telefone"
                    value={telefone}
                    onChange={e=> { setTelefone(e.target.value)}} 
                    required
                    />
                    
                    <AlingInputs>
                        <DefInput 
                        type="number" 
                        placeholder="Vagas Carro"
                        value={VgCarros}
                        onChange={e=> { setVgCarros(e.target.value)}} 
                        required
                        />
                        
                        <DefInput 
                        type="number" 
                        placeholder="Vagas Moto"
                        value={VgMotos}
                        onChange={e=> { setVgMotos(e.target.value)}} 
                        required
                        />
                        
                    </AlingInputs>

                    <DefButton 
                    onClick={cadUser}
                    disabled={isDisabled}>
                        {!isDisabled &&
                            "CADASTRAR"
                        }

                        {isDisabled &&
                            <img src="/assets/load.gif"/>
                        }
                    </DefButton>
                </FormCad>
                
            </ContainerCadModal>
            <SucessModal 
            msg = "Sucesso ao cadastrar" 
            visible = {isFinished} 
            setVisible = {setIsFinished}
            />
        </>
    )
}

export default ModalCadastro