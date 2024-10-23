import { Sponser } from '../components/ui/elements/sponser';
import { HeaderHome } from '../components/ui/elements/header';
import { useSetAtom } from 'jotai';
import { page } from '../app'; // Adjust the import path to your atom file

//หน้าแรกเมื่อเข้าสู่เว็บ
const Home = () => {
	//เก็บสถานะหน้าว่าเป็นหน้า Home หรือไม่
	const setPage = useSetAtom(page); // Get the setter for the atom
	//เปลี่ยนสถานะหน้า Home
	const handleLogin = () => {
		setPage('login');
	};

	return (
		<div
			className="transition-all duration-500 bg-home relative flex flex-col items-center gap-8 "
			onClick={handleLogin}
		>
			<img className="w-20 h-20" src="../assets/logo white-border-yellow.svg" />
			<HeaderHome />
			<div className="text-center text-Yellow text-xl font-SilverStone-Regular uppercase leading-7">
				Click to continue
			</div>
			<Sponser />
		</div>
	);
};
export { Home };
