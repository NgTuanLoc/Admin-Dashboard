import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotificationLine } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { toggleMenu } from '../features/adminSlice';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
	return (
		<TooltipComponent content={title} position='BottomCenter'>
			<button
				type='button'
				onClick={customFunc}
				style={{ color }}
				className='relative text-xl rounded-full p-3 hover:bg-light-gray mx-3'>
				<span
					style={{ background: dotColor }}
					className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
				/>
				{icon}
			</button>
		</TooltipComponent>
	);
};

const Navbar = () => {
	const { activeMenu } = useSelector((store) => store.admin);
	const dispatch = useDispatch();

	return (
		<nav className='flex justify-between p-2 md:ml-6 md:mr-6 relative'>
			<NavButton
				title='Menu'
				customFunc={() => dispatch(toggleMenu())}
				color='blue'
				icon={<AiOutlineMenu />}
			/>

			<div className='flex'>
				<NavButton
					title='Cart'
					customFunc={() => dispatch(toggleMenu())}
					color='blue'
					icon={<FiShoppingCart />}
				/>
				<NavButton
					title='Chat'
					customFunc={() => dispatch(toggleMenu())}
					color='blue'
					dotColor='#03C9D7'
					icon={<BsChatLeft />}
				/>
				<NavButton
					title='Notification'
					dotColor='rgb(254, 201, 15)'
					customFunc={() => dispatch(toggleMenu())}
					color='blue'
					icon={<RiNotificationLine />}
				/>
				<TooltipComponent content='Profile' position='BottomCenter'>
					<div
						className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
						onClick={() => {}}>
						<img
							className='rounded-full w-8 h-8'
							src={avatar}
							alt='user-profile'
						/>
						<p>
							<span className='text-gray-400 text-14'>Hi,</span>{' '}
							<span className='text-gray-400 font-bold ml-1 text-14'>
								Michael
							</span>
						</p>
						<MdKeyboardArrowDown className='text-gray-400 text-14' />
					</div>
				</TooltipComponent>
			</div>
		</nav>
	);
};

export default Navbar;
