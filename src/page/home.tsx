import { useState } from 'react';
import { Login } from './login';
import { Sponser } from '../components/ui/elements/sponser';
import { HeaderHome } from '../components/ui/elements/header';

//หน้าแรกเมื่อเข้าสู่เว็บ
const Home = () => {
	//เก็บสถานะหน้าว่าเป็นหน้า Home หรือไม่
	const [home, setHome] = useState(true);

	//เปลี่ยนสถานะหน้า Home
	const handleHome = () => {
		setHome(false);
	};

	return (
		<div>
			{home ? (
				<div
					className="absolute left-1/2 flex min-h-dvh w-full max-w-md -translate-x-1/2"
					onClick={handleHome} //เมื่อกดหน้าจอจะเปลี่ยนเป็นอีกหน้านึง
				>
					<div className="w-full h-screen bg-cover overflow-hidden relative p-[18px] bg-[url('../assets/defaultBG.svg')] rounded-[20px] flex-col justify-start items-center gap-[38px] inline-flex">
						<div className="h-[386px] flex-col justify-start items-center gap-7 inline-flex">
							<img
								className="w-20 h-20"
								src="https://via.placeholder.com/80x80"
							/>
							<div className="h-48 p-5 rounded-md flex-col justify-center items-center gap-[18px] flex">
								<HeaderHome />
							</div>
						</div>
						<Sponser />
					</div>
				</div>
			) : (
				<Login />
			)}
		</div>
	);
};
export { Home };
