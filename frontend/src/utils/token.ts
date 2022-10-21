const uid = 'uid'

const getUid = (): string | null => localStorage.getItem(uid)

const setUid = (token: string): void => localStorage.setItem(uid, token)

const removeUid = (): void => localStorage.removeItem(uid)

export {
  getUid,
  setUid,
  removeUid
}