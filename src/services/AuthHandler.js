import cookie from 'js-cookie'

export const isLogged = () =>{
    let token = cookie.get('token');
    return (token) ? true : false;
}

export const doLogin = (token, id) => {
    cookie.set('token', token)
    cookie.set('idUsuario', id)
}

export const doLogout = () => {
    cookie.remove('token')
    cookie.remove('idUsuario')
    window.location.href = '/'
}