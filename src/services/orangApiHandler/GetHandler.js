import Cookies from 'js-cookie'
const BASEAPI = 'https://op-api.herokuapp.com/'

const apiFetchGet = async (endpoint, body = []) => {

    const header= {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': Cookies.get('token')
    }

    const res = await fetch(BASEAPI+endpoint, {
        method: 'GET',
        headers: header,
        })

    const json = await res.json()

    if(json.status == 403) {
        window.location.href = '/'
        
        return
    }

    return json
}

export const GetMethodsEstacionamento = {
    GetPerfil: async () => {
        const json = await apiFetchGet(`estacionameto/${Cookies.get('idUsuario')}`)

        return json
    }, 

    GetVeiculos: async (page) => {
        const json = await apiFetchGet(`veiculo/${Cookies.get('idUsuario')}?page=${page}`)

        return json
    }
}