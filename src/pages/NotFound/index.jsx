import React from 'react'
import { useNavigate } from "react-router-dom";
import style from './NotFound.module.scss'
import {IoMdArrowRoundBack} from 'react-icons/io'


function NotFound() {
	const navigate = useNavigate()
	return (
		<main className={style.principal}>
			<IoMdArrowRoundBack className={style.icon} fontSize={'2rem'} onClick={() => {navigate('/')}}/>
			<h2>Esta página não existe!</h2>
		</main>
	)
}

export default NotFound