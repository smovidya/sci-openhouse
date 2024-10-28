import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useState } from 'react';
import { Sponser } from '../components/ui/elements/sponser';
import { Header } from '../components/ui/elements/header';
import { useSetAtom } from 'jotai';
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
		<div className="bg-mobile">
			<div className='flex flex-col items-center font-SilverStone-Regular rounded-[30px] h-[92%] w-[90%] px-4 py-4'>

				<img
					className="w-24 h-24 mt-1 mb-[-21px]"
					src="/assets/logo white-border-yellow.svg" />
				<div className='pt-[62px]'>
					<Header /></div>
				<div className="flex flex-col ">
					<div className="text-center text-2xl mt-[1px] text-Yellow lowercase mb-4">
						DROP YOUR NAME
					</div>
					<Input
						type="text"
						placeholder="Your Name"
						className="w-72 h-12 font-sans bg-white border-transparent text-center rounded-md shadow-md mb-4"
						onChange={(e) => setName(e.target.value)} />

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
			</div>
		</div>

	);
};

export { Login };
