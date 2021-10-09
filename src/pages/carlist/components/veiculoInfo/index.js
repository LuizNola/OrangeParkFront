import {React, useState} from "react";

import { InfoConatainer, BoxInfo } from "./style";
import { DefButton } from '../../../../components/GeneralComponents/styled'

import { useVeiculoValue } from "../../../../context/veiculoContext";
import { DeleteMethodsEstacionamento } from "../../../../services/orangApiHandler/DeleteHandler";

const VeiculoInfoModal = (props) => {

    const {getVeiculos, setCurrentPage} = useVeiculoValue();

    const [disable, setDisable] = useState(false)

    const finish = () =>{
        props.setVisible(false)
    }

    const delVeic = async ()=>{
        setDisable(true)
        const res = await DeleteMethodsEstacionamento.deleteVeic(props.data.id)

        setDisable(false)
        if(res.status == 200){
            getVeiculos()
            setCurrentPage(0)
            finish()
        }
        
    }

    return(
        <>
        <InfoConatainer visible={props.visible}>
            <BoxInfo>
                
                <h1>Detalhes do Veiculo</h1>
                <div>
                   <span> Marca: {props.data.marca} </span>
                   <span> Modelo: {props.data.modelo} </span>
                   <span> Cor: {props.data.cor} </span>
                   <span> Placa: {props.data.placa} </span>
                   <span> Tipo: {props.data.tipo} </span>
                </div>
                <DefButton 
                onClick={delVeic}
                disabled={disable}>
                    {!disable &&
                        "Remover Veiculo"
                    }

                    {disable &&
                        <img src="/assets/load.gif"/>
                    }
                </DefButton>
                <DefButton onClick={finish}>Cancelar</DefButton>
            </BoxInfo>
           
        </InfoConatainer>

                </>
    )
}

export default VeiculoInfoModal