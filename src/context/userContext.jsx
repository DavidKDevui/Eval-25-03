import { createContext , useState } from "react" ;
export const UserContext = createContext()
// créer le Provider => founisseur
// c'est un composant
export const UserProvider = (props) =>{
    const localStorageData = localStorage.getItem("profil")
    let user = {
        login : "alain",
        password : "12345",
        isLogged : false
    }
    if(localStorageData) user = JSON.parse(localStorageData) ; 
    const [profil , setProfil] = useState(user)
    return <UserContext.Provider value={{...profil , setProfil}}>
        {props.children}
    </UserContext.Provider>
}