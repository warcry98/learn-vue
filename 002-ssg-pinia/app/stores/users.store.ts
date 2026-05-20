import { defineStore } from "pinia";

export interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
}

export const useUsersStore = defineStore('users', () => {
  /**
   * State
   */
  const list = ref<User[]>([])
  const fetched = ref(false)

  /**
   * Action
   */
  const fetchUsers = async () => {
    try {
      const data = await $fetch<User[]>(
        'https://jsonplaceholder.typicode.com/users',
      )

      list.value = data
      fetched.value = true
    } catch (error) {
      console.error('Failed to fetch users:', error)
    }
  }

  /**
   * Getters
   */
  const userById = (id: number | string) => {
    return list.value.find(user => user.id == Number(id))
  }

  const isFetched = computed(() => {
    return fetched.value
  })

  return {
    // state
    list,
    fetched,

    // actions
    fetchUsers,

    // getters
    userById,
    isFetched,
  }
})