import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useState } from 'react';
import { Sponser } from '../components/ui/elements/sponser';
import { Header } from '../components/ui/elements/header';
import { useSetAtom } from 'jotai';
import { motion } from 'framer-motion';
import { page } from '../app'; // Adjust the import path to your atom file

const Login = () => {
	const [name, setName] = useState(''); //เก็บชื่อ
	//เก็บสถานะหน้าว่าเป็นหน้า Home หรือไม่
	const setPage = useSetAtom(page); // Get the setter for the atom
	//เปลี่ยนสถานะหน้า Home
	const handleQuestion = () => {
		console.log({ name: name });
		setPage('sai');
	};
	return (
		<motion.div
  className="bg-login flex flex-col items-center gap-5 h-dvh"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}  
  exit={{ opacity: 0 }}    
  transition={{ duration: 0.5 }} 
>
			<img
				className="w-20 h-20 mb-5"
				src="../assets/logo white-border-yellow.svg"
			/>
			<Header />
			<div className="flex flex-col">
				<div className="text-center text-2xl text-Yellow font-ibm-plex-thai mb-4">
					DROP YOUR NAME
				</div>
				<Input
					type="text"
					placeholder="Your Name"
					className="w-72 h-12 bg-white border-transparent text-center rounded-md shadow-md mb-4"
					onChange={(e) => setName(e.target.value)}
				/>

					<Button
						onClick={handleQuestion}
						type="submit"
						className="self-end w-20 h-10 px-6 py-2 font-sans rounded-md bg-Yellow hover:bg-yellow-500 text-black font-medium">
						Next
					</Button>
				</div>
				<div className="mt-12">
					<Sponser />
				</div>
		</motion.div>
	);
};

export { Login };
