import { useState, FormEvent, ChangeEvent, FC } from "react";
import  apiService  from "../../services/apiService";

const Register: FC = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const registration = async () => {
        const body = {
            email,
            name,
            password,
        }

        const data = await apiService.postData(`api/register`, body);

        const manageToOtherFrontendSite: string = (process.env.REACT_APP_BASE_FRONTEND_URL as string) + `login`
        if (data?.id) {
            setErrorMessage('')
            window.location.href = manageToOtherFrontendSite;
        } else {
            setErrorMessage(data.message);
        }
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        registration()
    }

    return (
        <div className="reg-container">
            <form onSubmit={onSubmit} className="formBody">
                <br />
                <div className="title">
                    Registration
                </div>
                <div className="inputBox">
                    <input
                        type="text"
                        id="email"
                        placeholder="e-mail"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        value={email}
                    ></input>
                    <input
                        type="text"
                        id="name"
                        placeholder="name"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                        value={name}
                    ></input>
                    <input
                        type="password"
                        className={password.length < 8 && password.length > 0 ? 'shortPassword' : 'password'}
                        placeholder="password"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        value={password}
                    ></input>
                </div>
                <div>
                    <p className={password.length < 8 && password.length > 0 ? "shortPasswordMessage" : 'passwordMessage'}>{'Password is too short. It must be at least 8 characters.'}</p>
                </div>
                <button className="submitButton">SUBMIT</button>
                <div>
                    {errorMessage && (
                        <p className="error"> {errorMessage} </p>
                    )}
                </div>
            </form >

        </div>
    )
};

export default Register;
