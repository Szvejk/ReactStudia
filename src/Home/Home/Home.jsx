import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Łazienka from '../Łazienka/Łazienka';
import styles from './Home.css';
import Switch from '../../Switch/Switch';
import Text from '../../Text/Text'
const Home = () => {
	return (<> 
	<div className='wrapperLinks'>


			<Link to='/'>Home</Link>
			<Link to='/sypialnia' className='linksMenu'>
				Sypialnia
			</Link>
			<Link to='/łazienka' className='linksMenu'>
				Łazienka
			</Link>
		</div>

<Text />
</>
	);
};

export default Home;
