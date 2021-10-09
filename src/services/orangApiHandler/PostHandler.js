import Cookies from 'js-cookie'
const BASEAPI = 'https://op-api.herokuapp.com/'

const apiFetchPost = async (endpoint, body) => {
    
    const header= {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': Cookies.get('token')
    }

    const res = await fetch(BASEAPI+endpoint, {
        method: 'POST',
        headers: header,
        body: JSON.stringify(body)
    }) 

    if(res.status == 403) {
        window.location.href = '/'
        
        return
    }

    return res
}

export const PostMethodsEstacionamento = {
    login: async (cnpj, senha) => {
        const json = await apiFetchPost('login', {cnpj, senha})

        return json
    },
    cadastrar: async (nome, cnpj, senha, cidade, endereco, telefone, qtd_motos_max, qtd_carros_max) => {
        const json = await apiFetchPost
            ('estacionameto', 
            {nome, cnpj, senha, cidade, endereco, telefone, qtd_motos_max, qtd_carros_max})

        return json
    } ,
    cadastroVeiculo: async (cor, marca, modelo, tipo, placa) => {
        const json = await apiFetchPost
            (`veiculo/${Cookies.get('idUsuario')}`,
            {cor, marca, modelo, tipo, placa})

        return json

    }
}