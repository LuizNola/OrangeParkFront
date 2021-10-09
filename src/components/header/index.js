import { React, useState } from "react";
import { MenuDesktopContainer, AsideMenuMobile, BurguerMenu } from './style'


import { doLogout } from "../../services/AuthHandler";
import { useVeiculoValue } from "../../context/veiculoContext";

import VeiculoCadastro from "./veiculocad/index";

const HeaderMenu = () => {

    const { userData } = useVeiculoValue();

    const [cadVeiculo, setCadVeiculo] = useState(false);
    const [menuMobIsOpen, setMenuMobIsOpen] = useState(false);

    const openCadModal = () => {
        setCadVeiculo(true)
        setMenuMobIsOpen(false)
    }

    const openMobMenu = () => {
        setMenuMobIsOpen(!menuMobIsOpen)
    }


    return (
        <>
            <MenuDesktopContainer>
                <div>
                    <img src="/assets/logo.svg" />

                    <span>Motos {userData.qtd_motos_atual}/{userData.qtd_motos_max}</span>
                    <span>Carros {userData.qtd_carros_atual}/{userData.qtd_carros_max}</span>

                    <button onClick={openCadModal}>Adicionar</button>
                    <a onClick={doLogout}><img src="/assets/exit.svg" /></a>
                </div>
            </MenuDesktopContainer>

            <BurguerMenu onClick={openMobMenu}>
                <div></div>
                <div></div>
                <div></div>
            </BurguerMenu>

            <AsideMenuMobile isOpen={menuMobIsOpen}>


                <img src="/assets/logo.svg" />

                <span>Motos {userData.qtd_motos_atual}/{userData.qtd_motos_max}</span>
                <span>Carros {userData.qtd_carros_atual}/{userData.qtd_carros_max}</span>

                <button onClick={openCadModal}>+</button>
                <a onClick={doLogout}><img src="/assets/exit.svg" /></a>


            </AsideMenuMobile>


            <VeiculoCadastro visible={cadVeiculo} setVisible={setCadVeiculo} />
        </>
    )
}

export default HeaderMenu