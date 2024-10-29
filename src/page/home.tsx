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
      className="bg-home flex flex-col items-center gap-8 "
	  initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}  
      exit={{ opacity: 0 }}     
      transition={{ duration: 2 }} 
      onClick={handleLogin}
    >
      <img
        className="w-20 h-20"
        src="../assets/logo white-border-yellow.svg"
      />
      <HeaderHome />
      <div className="text-center text-yellow-400 text-xl font-silverstone uppercase leading-7">
        Click to continue
      </div>
      <Sponser />
    </motion.div>
	);
  };
export { Home };
