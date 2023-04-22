import React from 'react'
import { LogoContainer } from '../../components/Profile/Styles'
import Logo from "../../assets/images/logo.png";
import * as B from "./Styles";

function Bio() {
	return (
		<>
			<B.BioArea>
				<LogoContainer>
					<img src={Logo} alt="logo lucas" />
				</LogoContainer>
				<div className='bio-items'>
					<h3>Redes Sociais</h3>
					<div className='grid-items'>
						<div className='grid-item'>
							<img src="" alt=""/>
							<span>Linkedin</span>
						</div>
						<div className='grid-item'>
							<img src="" alt=""/>
							<span>Linkedin</span>
						</div>
						<div className='grid-item'>
							<img src="" alt=""/>
							<span>Linkedin</span>
						</div>
						<div className='grid-item'>
							<img src="" alt=""/>
							<span>Linkedin</span>
						</div>
					</div>
				</div>
			</B.BioArea>
		</>
	)
}

export default Bio