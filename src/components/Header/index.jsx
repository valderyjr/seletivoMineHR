import React from 'react'
import Logo from '../../assets/logoMineHR.png'
import style from './Header.module.scss'

function Header() {
	return (
		<header className={style.cabecalho}>
			<img src={Logo} alt="Logo da MINEHR" />
		</header>
	)
}

export default Header