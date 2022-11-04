import './Login.css'
import Api from '../Api'

import {FaFacebookF} from 'react-icons/fa'


export default ({onReceive}) => {

    const handleFacebookLogin = async () => {
        let result = await Api.fbPopup();
        if(result) {
            onReceive(result.user);
        } else {
            alert("Erro!");
        }
    }

    return(
        <div className="login">
            <div className="login-button">
                
                <div className="login-icon-area">
                    <FaFacebookF className="login-icon" />
                    
                </div>
                <button onClick={handleFacebookLogin} >LogIn with Facebook</button>

            </div>

            <footer ><a href="https://www.vitorconceicao.com" target={'blank'} ><small>© Code by Vítor Conceição</small></a></footer>
           
        </div>
    )

    
}