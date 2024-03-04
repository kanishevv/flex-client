export default function authHeader() {
  const token: string | null = localStorage.getItem('token')

  if (token) {
    return {
      authorization: `${token}`,
      'Content-Type': 'application/json'
    }
  } else {
    return {}
  }
}
