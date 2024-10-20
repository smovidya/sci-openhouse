import { useState } from 'react';
import { Login } from './Login';
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
					className={`absolute inset-0 flex items-center justify-center transition-all duration-500 
		${animationEnd ? 'opacity-0 -translate-y-10' : 'opacity-100 translate-y-0'}`}
					onClick={handleHome}
				>
					<div className="w-full h-screen bg-cover overflow-hidden relative px-[40px] py-[47px] bg-[url('../assets/defaultBG.svg')] rounded-[20px] flex-col justify-start items-center gap-[38px] inline-flex">
						<div className="relative w-full h-full p-[18px] rounded-[20px] border-4 border-[#f9cd2f] flex-col justify-start items-center gap-[38px] inline-flex">
							<img
								src="../assets/moon.svg"
								className="absolute top-[-100px] right-[-120px] -rotate-45 scale-150 z-10"
							/>

							<img
								className="w-20 h-20"
								src="../assets/logo white-border-yellow.svg"
							/>
							<div className="h-48 p-5 rounded-md flex-col justify-center items-center gap-[18px] flex">
								<HeaderHome />
							</div>
							<div className="text-center text-[#f9cd2f] text-xl font-SilverStone-Regular uppercase leading-7">
								Click to continue
							</div>
							<Sponser />

							<img
								src="../assets/butterfly2.svg"
								className="absolute bottom-[-120px] left-[-150px] rotate-45 z-10 scale-125"
							/>
						</div>
					</div>
				</div>
			) : (
				<div
					className={`absolute inset-0 flex items-center justify-center transition-all duration-500 
	${!home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
				>
					<Login />
				</div>
			)}
		</div>
	);
};
export { Home };
