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
			console.log({name:name});
			setNext(false);
		}
	};
	return (
		<div className="flex justify-center items-center w-full max-w-md mx-auto">
			{next ? (
				<div className="w-full min-h-screen bg-cover overflow-hidden relative px-[40px] py-[47px] bg-[url('../assets/LoginBG.svg')] rounded-[20px] flex flex-col justify-start items-center gap-[38px]">
					<div className="w-full h-full p-[18px] flex flex-col gap-[28px] items-center">
						<img
							className="w-20 h-20"
							src="../assets/logo white-border-yellow.svg"
						/>
						<div className="mt-5">
							<Header />
						</div>
						<div className="w-full">
							<div className="w-full text-center text-2xl text-Yellow font-ibm-plex-thai mb-4">
								DROP YOUR NAME
							</div>
							<Input
								type="text"
								placeholder="Your Name"
								className="w-full h-12 bg-white border-transparent text-center rounded-md shadow-md mb-4"
								onChange={(e) => setName(e.target.value)}
							/>

							<div className="flex justify-end w-full">
								<Button
									onClick={() => handleNext(name)}
									type="submit"
									className="h-10 px-6 py-2 rounded-md bg-Yellow text-black font-medium"
								>
									Next
								</Button>
							</div>
						</div>

						<div className="mt-10">
							<Sponser />
						</div>
					</div>
				</div>
			) : (
				<Question />
			)}
		</div>
	);
};

export { Login };
