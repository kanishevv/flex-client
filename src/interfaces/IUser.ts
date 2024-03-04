interface IUser {
  id: string
  email: string
  firstName: string
  lastName: string
  permissions: []
  created: Date | null
  updated: Date | null
  viewed: Date | null
}

export { type IUser }
