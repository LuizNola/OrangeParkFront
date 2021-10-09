import {react, createContext, useContext, useState} from "react";

import { GetMethodsEstacionamento } from "../services/orangApiHandler/GetHandler";

export const VeiculoContext = createContext();





export const VeiculoProvider = (({children}) => {

    const [veiculoList, setVeiculoList] = useState([])
    const [maxPage, setMaxPage] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)

    const [userData, setUserData] = useState({})
    

    const VeiculosBase = {
        veiculoList,
        maxPage,
        currentPage,
        setCurrentPage,
        userData,
        getVeiculos: async () => {
            let json = await GetMethodsEstacionamento.GetPerfil()
            setUserData(json)

            json = await GetMethodsEstacionamento.GetVeiculos(currentPage)
            setMaxPage(json.totalPages)
            setVeiculoList(json.content)
        }
    }

    return (
    <VeiculoContext.Provider value={VeiculosBase}>
        {children}
    </VeiculoContext.Provider>
    )
})

export const useVeiculoValue = () => useContext(VeiculoContext)
