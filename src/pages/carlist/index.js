import { React, useEffect, useState, useContext } from "react";

import { ContainerCarList, SwitchPage } from './style'

import HeaderMenu from "../../components/header";
import VeiculoCard from "./components/veiculocard";

import { useVeiculoValue } from "../../context/veiculoContext";

const CarList = () => {

    const { veiculoList,
        maxPage,
        currentPage,
        setCurrentPage,
        getVeiculos} = useVeiculoValue();

    useEffect(()=>{
        getVeiculos()
    }
    , [currentPage])


    let pagination = []
    for (let i = 1; i <= maxPage; i++) {
        pagination.push(i)
    }

    return (
        <>
            <HeaderMenu />

            <SwitchPage onChange={e=>setCurrentPage(e.target.value - 1)}>
                    {pagination.map((i, k)=>{
                        return  <option key ={k} value={i} >Pagina {i}</option>
                    })}
            </SwitchPage>
            
            <ContainerCarList>

                    {veiculoList.map((i, k) => {
                        return <VeiculoCard data={i} />
                    })}
            </ContainerCarList>
           
        </>
    )
}

export default CarList