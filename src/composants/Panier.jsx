import { useState , useContext } from "react"
import { UserContext } from "../context/userContext"
import { useNavigate } from "react-router-dom"
export const Panier = () => {
    const profil  = useContext(UserContext)
    const navigate = useNavigate();
    const [form , setForm] = useState({login : "" , password : ""})
    function handleChange(e){
        const {name , value} = e.target;
        setForm({...form , [name] : value})
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log(form);
    }

    
    return <div>
        <h2>Vos articles</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="Nom" value={form.login} onChange={handleChange} placeholder="Nom"/>
            <input type="text" name="Email" value={form.password} onChange={handleChange} placeholder="Email"/>
            <input type="text" name="Adresse" value={form.login} onChange={handleChange} placeholder="Adresse"/>
            <input type="text" name="Commentaire" value={form.password} onChange={handleChange} placeholder="Commentaire"/>
            <div> 
                <input type="submit" value="Commander"/>
            </div>
        </form>
    </div>
}