import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useState } from 'react';
import { Question } from './question';
import { Sponser } from '../components/ui/elements/sponser';
import { Header } from '../components/ui/elements/header';

const Login = () => {
	const [next, setNext] = useState(true); //ปุ่มข้างหน้าถัดไป
	const [name, setName] = useState(''); //เก็บชื่อ
	const handleNext = (name: string) => {
		if (name != '') {
			console.log({ name: name });
			setNext(false);
		}
	};
	return (
		<div>
			{next ? (
				<div className="bg-login flex flex-col items-center gap-5">
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
							onClick={() => handleNext(name)}
							type="submit"
							className="self-end w-20 h-10 px-6 py-2 rounded-md bg-Yellow text-black font-medium"
						>
							Next
						</Button>
					</div>

					<div className="mt-10">
						<Sponser />
					</div>
				</div>
			) : (
				<Question />
			)}
		</div>
	);
};

export { Login };
