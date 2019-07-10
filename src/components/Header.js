import React from 'react';
import logo from '../assets/images/facebook-logo.svg';

const Header = () => {
	return (
		<header className="app-header">
			<div className="app-logo">
				<img src={logo} />
			</div>
			<div className="app-user">
				<span>Meu Perfil</span>
			</div>
		</header>
	);
};

export default Header;
