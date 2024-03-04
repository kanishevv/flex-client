export const SERVER_PROTOCOL = import.meta.env.VITE_SERVER_PROTOCOL

export const SERVER_HOSTNAME = import.meta.env.VITE_SERVER_HOSTNAME

export const SERVER_PORT = import.meta.env.VITE_SERVER_PORT

export const SERVER = `${SERVER_PROTOCOL}://${SERVER_HOSTNAME}:${SERVER_PORT}`

export const API_URL = `${SERVER_PROTOCOL}://${SERVER_HOSTNAME}:${SERVER_PORT}/api`

export const STATIC_URL = `${SERVER_PROTOCOL}://${SERVER_HOSTNAME}:${SERVER_PORT}/static`
