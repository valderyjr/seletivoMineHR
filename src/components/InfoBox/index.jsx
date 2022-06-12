import React, {useState} from 'react'
import style from './InfoBox.module.scss';

function InfoBox({ refName, link }) {
	return (
		<div className={style.caixa__icone}>
			<p className={style.fonte}>
				Fonte:
				<a href={link} target={'_blank'}>
					{refName}
				</a>
			</p>
		</div>
	)
}

export default InfoBox