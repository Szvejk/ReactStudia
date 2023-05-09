import React from 'react';
import FontSizeChanger from 'react-font-size-changer';
import '../Text/Text.css'
const Text = () => {
	return (
		<>
		<div className="wrapperTextAction"> 

			<FontSizeChanger
				targets={['#target .content']}
				onChange={(element, newValue, oldValue) => {
					console.log(element, newValue, oldValue);
				}}
				options={{
					stepSize: 2,
					range: 3,
				}}
				customButtons={{
					up: <span style={{ fontSize: '36px' }}>+</span>,
					down: <span style={{ fontSize: '20px' }}>-</span>,
			
					buttonsMargin: 10,
				}}
			/>
			<div id='target'>
				
				<p className='content'>	Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, eum
				harum laudantium qui dignissimos soluta labore earum natus modi corporis
				id iste quibusdam non, nihil dolore, quo molestiae repellat architecto.</p>
			</div></div>
		</>
	);
};
export default Text;
