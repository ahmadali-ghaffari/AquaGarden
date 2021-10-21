import { useState, FormEvent, ChangeEvent } from "react";
import apiService from "../../services/apiService";

const Login = () => {

    const [email, setNewEmail] = useState('');
    const [password, setNewPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const login = async () => {

        const body = {
            email,
            password,
        }

        const manageToOtherFrontendSite: string = (process.env.REACT_APP_BASE_FRONTEND_URL as string) + 'home';
        const data = await  apiService.postData(`api/login`, body);

        if (data.status === 'ok') {
            setErrorMessage('')
            localStorage.setItem("token", JSON.stringify(data.token));
            window.location.href = manageToOtherFrontendSite
        } else {
            setErrorMessage(data.message);
        }
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login()
    }

    return (
        <div className='log-container'>
            <form onSubmit={onSubmit} className="loginBody">
                <br />
                <div className="title">
                    Login
                </div>
                <div className="inputBox">
                    <input
                        type="text"
                        id="email"
                        placeholder="e-mail"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setNewEmail(e.target.value)}
                        value={email}
                    ></input>
                    <input
                        type="password"
                        className='password'
                        placeholder="password"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)}
                        value={password}
                    ></input>
                </div>
                <button className="submitButton">LOGIN</button>
                <div>
                    {errorMessage && (
                        <p className="error"> {errorMessage} </p>
                    )}
                </div>
            </form >
        </div>
    )
};

export default Login;
