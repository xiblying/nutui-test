import { defineStore } from 'pinia'

interface UserInfo {
  id: string | number
  name: string
  realName: string
  avatar: string
}

interface UserState {
  name: string
  token: string
  userInfo: Nullable<UserInfo>
}

// 用户状态
export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    name: '',
    token: '',
    userInfo: null
  }),
  actions: {
    // 设置token
    setToken(token: string) {
      this.token = token
    },
    // 设置用户名
    setName(name: string) {
      this.name = name
    },
    // 设置用户信息
    setUserInfo(userInfo: UserInfo) {
      this.userInfo = userInfo
    }
  }
})
