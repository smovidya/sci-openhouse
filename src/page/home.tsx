import { useState } from 'react';
import { Login } from './login';
import { Sponser } from '../components/ui/elements/sponser';
import { HeaderHome } from '../components/ui/elements/header';

//หน้าแรกเมื่อเข้าสู่เว็บ
const Home = () => {
	//เก็บสถานะหน้าว่าเป็นหน้า Home หรือไม่
	const [home, setHome] = useState(true);
	const [animationEnd, setAnimationEnd] = useState(false);

	//เปลี่ยนสถานะหน้า Home
	const handleHome = () => {
		setAnimationEnd(true); // เริ่มเอฟเฟกต์
		setTimeout(() => setHome(false), 500); // รอ 500ms ให้ animation จบก่อน
	};

	return (
		<div>
			{home ? (
				<div
					className={`w-full h-full flex items-center justify-center transition-all duration-500 
        ${animationEnd ? 'opacity-0 -translate-y-10' : 'opacity-100 translate-y-0'}`}
					onClick={handleHome}
				>
					<div className="w-full min-h-screen bg-cover overflow-hidden relative px-[40px] py-[47px] bg-[url('../assets/HomeBG.svg')] rounded-[20px] flex flex-col justify-start items-center gap-[38px]">
						<img
							className="w-20 h-20"
							src="../assets/logo white-border-yellow.svg"
						/>
						<div className="h-48 p-5 rounded-md flex flex-col justify-center items-center gap-[18px]">
							<HeaderHome />
						</div>
						<div className="text-center text-Yellow text-xl font-SilverStone-Regular uppercase leading-7">
							Click to continue
						</div>
						<Sponser />
						
					</div>
				</div>
			) : (
				<div
					className={`w-full h-full flex items-center justify-center transition-all duration-500 
        ${!home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
				>
					<Login />
				</div>
			)}
		</div>
	);
};
export { Home };
