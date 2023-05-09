import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home/Home/Home';
import Sypialnia from './Sypialnia/Sypialnia';
import Łazienka from './Home/Łazienka/Łazienka';
import Switch from './Switch/Switch';
import Wrapper from './Wrapper/Wrapper';
import Dot from './Dot/Dot';

export default function App() {
	return (
		<>
			<Router>
				<Wrapper />


				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/sypialnia' element={<Sypialnia />} />
					<Route path='/Łazienka' element={<Łazienka />} />

					<Route path='*' element={<h1>Page not found</h1>} />
				</Routes>
				<Dot />
			</Router>
		</>
	);
}
