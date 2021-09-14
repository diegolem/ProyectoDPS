import { useContext } from "react";
import AuthContext from "../context/AuthContext";

//Hook personalizado para devolver los datos del AuthContext
export default () => useContext(AuthContext);