import axios from "axios"

// const domain = "http://localhost:8080/api"
const domain = "https://internal-remarkably-blowfish.ngrok-free.app/api"

export const UserAPI = axios.create({
    baseURL: `${domain}/users`
})

export const ClaimHistoryAPI = axios.create({
    baseURL: `${domain}/claimhistory`
})

export const FreeTokenAPI = axios.create({
    baseURL: `${domain}/freetoken`
})

export const FriendsAPI = axios.create({
    baseURL: `${domain}/friends`
})

export const GameHistoryAPI = axios.create({
    baseURL: `${domain}/gamehistory`
})
