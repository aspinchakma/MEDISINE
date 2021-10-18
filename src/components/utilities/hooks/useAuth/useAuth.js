import { useContext } from "react"
import { AuthenticationContext } from "../../AuthProvider/AuthProvider"

const useAuth = () => {
    return useContext(AuthenticationContext)
}
export default useAuth;

