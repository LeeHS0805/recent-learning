axios.defaults.baseURL = ''

const url = {
    login: '/login'
}

axios.interceptors.request.use(config => {
    if (process.env.NODE_ENV === "development") {

    } else {

    }
    return config
})

export default url
