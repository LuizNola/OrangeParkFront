import {React, useState} from "react";

import { ErrorStrip, DefButton, AlingInputs, DefInput } from "../../GeneralComponents/styled";
import { CadConatainer, BoxCad, FormCad } from "./style";

import { PostMethodsEstacionamento } from "../../../services/orangApiHandler/PostHandler";

import { useVeiculoValue } from "../../../context/veiculoContext"

const VeiculoCadastro = (props) => {

    const {getVeiculos} = useVeiculoValue();

    const [error, setError] = useState("")
    const [marca, setMarca] = useState(null)
    const [modelo, setModelo] = useState(null)
    const [cor, setCor] = useState(null)
    const [tipo, setTipo] = useState(null)
    const [placa, setPlaca] = useState(null)
    const [disable, setDisable] = useState(false)

    const finish = () =>{    
        props.setVisible(false)
        setMarca("")
        setModelo("")
        setCor("")
        setTipo("")
        setPlaca("")

    }

    const cadVeiculo = async (event)=>{
        event.preventDefault();
        setDisable(true)
        const json = await PostMethodsEstacionamento.cadastroVeiculo(cor, marca, modelo, tipo, placa);

        if(json.status == 201){
            getVeiculos()
            setError("")
            finish()
        }else{
            const errorList = await json.json()    
            setError(errorList.msg)

            if(errorList.listaDeErros){
                setError(errorList.listaDeErros[0].msg)
            }
        }
        setDisable(false)
    }

    return(
        <>
        <CadConatainer visible={props.visible}>
        
            <BoxCad>
                {error &&
                    <ErrorStrip> 
                        {error} 
                    </ErrorStrip>}
                <FormCad>
                    <DefInput 
                    type="text" 
                    placeholder="marca"
                    value = {marca}
                    onChange={e=> { setMarca(e.target.value)} } 
                    required
                    />

                    <DefInput 
                    type="text"
                    placeholder="Modelo"
                    value = {modelo}
                    onChange={e=> { setModelo(e.target.value)}} 
                    required
                    />

                    <DefInput 
                    type="text" 
                    placeholder="Cor"
                    value = {cor}
                    onChange={e=> { setCor(e.target.value)}} 
                    required
                    />

                    <AlingInputs>
                        <select 
                        id="tiposDeVeiculo" 
                        placeholder="tipo"
                        value={tipo}
                        onChange={(e)=>{setTipo(e.target.value)}}
                        >
                            <option value=""></option>
                            <option value="Carro">Carro</option>
                            <option value="Moto">Moto</option>
                        </select>

                        <DefInput 
                        type="text" 
                        placeholder="Placa"
                        value = {placa}
                        onChange={e=> { setPlaca(e.target.value)}} 
                        required
                        />

                    </AlingInputs>

                    <DefButton 
                    onClick={cadVeiculo} 
                    disabled={disable}
                    >
                        {!disable &&
                            "CADASTRAR"
                        }

                        {disable &&
                            <img src="/assets/load.gif"/>
                        }
                       
                        
                    </DefButton>
                   
                </FormCad>
                <DefButton 
                onClick={finish}
                disabled={disable}
                >CANCELAR</DefButton>
                
            </BoxCad>
        </CadConatainer>

                </>
    )
}

export default VeiculoCadastro