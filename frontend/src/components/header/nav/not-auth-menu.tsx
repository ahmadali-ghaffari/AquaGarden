import { Button } from '@mui/material';
import '../../../style/style.css';

export const NotAuthMenu: React.FC = () => {

    return (
        <ul className="nav-container">
            <Button className='login' variant='contained' href='/login'>
                Login
            </Button>
            <Button className='register' variant='contained' href='/register' style={{marginLeft:'1px' }}>
                Register
            </Button>
        </ul>
    );
};
