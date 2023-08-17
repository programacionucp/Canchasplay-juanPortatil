import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../Components/Logout";
import React from "react";
import FooterPropietario from "../Components/FooterNavigation";
import '../Assets/Css/Background.css'




export default function Home(){

    const { user} = useAuth0();

    return(
        <>
            <div className="BackgroundHomePropietario">
                {/*<img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>*/}
            </div>
            <FooterPropietario></FooterPropietario>



             
        </>
    
    )
}
