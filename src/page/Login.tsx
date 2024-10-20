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
			console.log(name);
			setNext(false);
		}
	};
	return (
		<div>
			{next ? (
				<div className="bg-deepBlue h-screen w-screen flex flex-col items-center justify-start p-8">
					<div className="mb-32">
						<Header />
					</div>
					{/* Name Box */}
					<div className="h-72 w-80 bg-lightSkyBlue rounded-3xl p-8 flex flex-col items-center justify-center">
						<div className="w-full text-center py-4 text-2xl font-noto-serif-thai">
							Drop your name
						</div>
						<Input
							type="name"
							placeholder="Name"
							className="h-12 bg-white border-transparent text-center rounded-full mb-4"
							onChange={(e) => setName(e.target.value)}
						/>
						<Button
							onClick={() => handleNext(name)}
							type="submit"
							className="h-10 w-24 rounded-full bg-goldenYellow"
						>
							Next
						</Button>
					</div>
					<div className="mt-24">
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
