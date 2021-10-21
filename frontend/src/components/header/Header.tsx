import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/style.css';

import { NotAuthMenu } from './nav/not-auth-menu';
import { UserMenu } from './nav/user-menu';

interface HeaderProps {
  isUser: boolean;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = (props) => {

  const isUser = props.isUser;

  return (
    <section className="Header-section">
      <header className="Header-container">
        <Link to="/" className="logo"></Link>

        {!isUser && (<NotAuthMenu />)}
        {isUser && (<UserMenu onLogOut={props.onLogout} />)}

      </header>
    </section>
  )
};
