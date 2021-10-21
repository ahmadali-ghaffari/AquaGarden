import { Link } from "react-router-dom";

interface UserProps { 
    onLogOut: () => void;
  }

export const UserMenu: React.FC<UserProps> = (props) => {
    return (
        <ul className="nav-container active">
            <li onClick={props.onLogOut}> <Link to="/"><span className="logout">Logout</span></Link></li>
        </ul>
    );
};
