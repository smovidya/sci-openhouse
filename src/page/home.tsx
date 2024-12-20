import { Sponser } from '../components/ui/elements/sponser';
import { HeaderHome } from '../components/ui/elements/header';
import { useSetAtom } from 'jotai';
import { page } from '../app'; // Adjust the import path to your atom file
import { motion } from 'framer-motion';

//หน้าแรกเมื่อเข้าสู่เว็บ
const Home = () => {
	//เก็บสถานะหน้าว่าเป็นหน้า Home หรือไม่
	const setPage = useSetAtom(page);
	//เปลี่ยนสถานะหน้า Home
	const handleLogin = () => {
	  setPage('login');
	};
  
	return (
<motion.div
      className="bg-mobile flex flex-col items-center gap-8 relative h-dvh"
	  initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}  
      exit={{ opacity: 0 }}     
      transition={{ duration: 1 }} 
      onClick={handleLogin}
    >
      <div className="flex flex-col items-center font-ibm-plex-thai text-white rounded-[30px] h-[92%] w-[90%] px-4 py-4 border-4 border-Yellow bg-gradient-to-b">
				<div className='flex flex-col justify-center items-center'>
					<img className="w-24 h-24" src="/assets/logo white-border-yellow.svg" />
					<HeaderHome />
					<p className="mt-10 text-center text-Yellow text-3xl font-SilverStone-Regular uppercase leading-7">
						Click to continue
					</p>
					<div className='mt-20 z-10'>
						<Sponser />
					</div>
				</div>
				
			</div>
    </motion.div>
	);
  };
export { Home };
