const key = 'pc-key'

const getToken = (): string | null => localStorage.getItem(key)

const setToken = (token: string): void => localStorage.setItem(key, token)

const removeToken = (): void => localStorage.removeItem(key)

export {
  getToken,
  setToken,
  removeToken
}