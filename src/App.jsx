import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import './app.css';

function App() {
	const activeMenu = false;
	return (
		<div>
			<Router>
				<div className='flex relative dark:bg-main-dark-bg'>
					<div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
						<TooltipComponent content='Settings' position='TopCenter'>
							<button
								type='button'
								style={{ background: 'blue', borderRadius: '50%' }}
								className='text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray'>
								<FiSettings />
							</button>
						</TooltipComponent>
					</div>
					{activeMenu ? (
						<div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
							Sidebar
						</div>
					) : (
						<div className='w-0 dark:bg-secondary-dark-bg'>Sidebar w-0</div>
					)}
					<div
						className={`dark:bg-main-bg bg-main-bg min-h-screen  w-full ${
							activeMenu ? 'md:ml-72' : 'flex-2'
						}`}></div>
				</div>
			</Router>
		</div>
	);
}

export default App;
