import React, { 
    createContext, 
    // useCallback, 
    useRef, 
    useEffect, 
    useState
} from "react";
import ApiServices from '../services'

export const UserContext = createContext<any>(null)


export const UserContextProvider: React.FC = ({ children }: any) => {
    const [users, setUsers] = useState<any>([])
    const [loading, setLoading] = useState(false)
    const mounted = useRef(false)


    useEffect(() => {
        mounted.current = true
        const getUsers = async () => {
            try {
                setLoading(true)
                const data = await ApiServices.fetchUsers()
                setUsers(data)
                setLoading(false)
            } catch (error) {
                
            }
        }
        getUsers()

        return () =>  {
            mounted.current = false
        }

    }, [])

    return (
        <UserContext.Provider 
        value={{ 
          users,
          loading
        }}>
            {children}
        </UserContext.Provider>
      )
}

export default UserContextProvider;