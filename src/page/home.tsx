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
					className={`transition-all duration-500 bg-home relative flex flex-col items-center gap-10 ">
						${animationEnd ? 'opacity-0 -translate-y-10' : 'opacity-100 translate-y-0'}`}
					onClick={handleHome}
				>
					<img
						className="w-20 h-20"
						src="../assets/logo white-border-yellow.svg"
					/>
					<HeaderHome />
					<div className="text-center text-Yellow text-xl font-SilverStone-Regular uppercase leading-7">
						Click to continue
					</div>
					<Sponser />
				</div>
			) : (
				<Login />
			)}
		</div>
	);
};
export { Home };
