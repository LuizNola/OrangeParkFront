import Cookies from 'js-cookie'
const BASEAPI = 'https://op-api.herokuapp.com/'

const apiFetchDel = async (endpoint) => {
    
    const header= {

        "Content-Type": "application/json",
        'Authorization': Cookies.get('token'),
        'Access-Control-Allow-Origin': '*'
    }

    const res = await fetch(BASEAPI+endpoint, {
        method: 'DELETE',
        headers: header
    }) 

    if(res.status == 403) {
        window.location.href = '/'
        
        return
    }
    return res
}

export const DeleteMethodsEstacionamento = {
    deleteVeic: async (idVeiculo) => {
        const json = await apiFetchDel(`veiculo/${Cookies.get('idUsuario')}/${idVeiculo}`)
        
        return json
    }
}