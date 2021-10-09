import React, { useState } from "react";

import {CardContainer} from './style'
import VeiculoInfoModal from "../veiculoInfo";

import { DefButton } from '../../../../components/GeneralComponents/styled'


const VeiculoCard = (props)=>{

    const [isOpenDetails, setIsOpenDetails] = useState(false)

    const openDatails = () => {
        setIsOpenDetails(true)
    }

    return(
        <>
            <CardContainer>
                <img src={`/assets/carlist/${props.data.tipo}.svg`}/>
                <h2>Placa: {props.data.placa}</h2>
                <DefButton onClick={openDatails}>Detalhes</DefButton>   
            </CardContainer>
            <VeiculoInfoModal 
            data={props.data} 
            visible={isOpenDetails} 
            setVisible={setIsOpenDetails}/>
        </>
    )
}

export default VeiculoCard