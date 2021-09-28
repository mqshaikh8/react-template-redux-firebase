// put your actions related to user here

export const login = (credentials) => {
    return {
        type: 'login',
        payload: credentials
    }
    
}

export const logout = () => {
    return {
        type: 'login'
    }
    
}

export const error = (error) => {
    return {
        type: 'login',
        payload: error
    }
    
}
