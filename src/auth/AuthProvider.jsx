import { createContext, useContext, useEffect, useState } from "react"



const AuthContext = createContext({
    isAuthenticated: false,
});

export const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(true)

  return (
    
    <AuthContext.Provider value={{ isAuthenticated }}>
        { children }
    </AuthContext.Provider>
  )
}


export const useAuth = () => {
    return (
      useContext( AuthContext )
    )
  }
  