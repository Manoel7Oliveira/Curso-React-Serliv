import { useContext } from "react"
import { UserContext } from "../../Contexts/UserContext"

export default function Profile() {

    const { user, setUser } = useContext(UserContext);

    return (

        <div>
            {user ? (`Profile: ${user?.nome} - ${user?.email}`) : ("Faça login")}
        </div>

    )
}