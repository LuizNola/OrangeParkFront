import {React, useState} from "react";

import { SucessConatainer, BoxSucess } from "./style";

const SucessModal = (props) => {


    const finish = () =>{
        props.setVisible(false)
        window.location.reload()
    }

    return(
        <>
        <SucessConatainer visible={props.visible}>
            <BoxSucess>
                <img src="/assets/sucessmodal/sucess.svg"/>
                <span>{props.msg}</span>
                <button onClick={finish}>OK</button>
            </BoxSucess>
        </SucessConatainer>

                </>
    )
}

export default SucessModal