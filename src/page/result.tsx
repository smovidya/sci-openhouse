import { Sponser } from '../components/ui/elements/sponser';
import Sun from '/assets/sun.svg';
import { Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import { FC } from 'react';
import dataJson from '../deparment.json'
type ResultProps = {
	sai: number; // เพิ่ม prop sai
};

const downloadImageFromURL = (imageUrl: string, fileName: string) => {
	const link = document.createElement('a');
	link.href = imageUrl;
	link.download = fileName;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};

const Result: FC<ResultProps> = ({ sai }) => {
	const Data = dataJson.find(department => department.sai === sai);
	if (!Data) {
		return
	}
	return (
		<div className="bg-question flex relative justify-center items-center ">
			<div
				key={Data.sai}
				className="flex flex-col items-center text-white rounded-[30px] w-[340px] gap-2 h-fit px-6 py-8 border-4 border-Yellow bg-gradient-to-b from-black via-[#172854] to-[#000102] relative">
				<img
					src={Sun}
					alt="sun"
					className="absolute overflow-hidden min-w-[630px] h-auto top-[-200px] right-[-310px]" />
				<div className="flex flex-col mb-6">
					<p className="font-SilverStone-Regular text-[48px] text-Yellow text-center">
						SCIASTRAL
					</p>
					<p className="font-SilverStone-Regular text-[24px] text-Yellow text-center uppercase">
						scichula open house
					</p>
				</div>
				<img
					width={140}
					height={140}
					src={Data.imagePath}
					alt={`${Data.name}`} />
				<p className="font-bold text-[20px]">{Data.name}</p>
				<p className="font-medium text-[16px]">{Data.quote}</p>
				<p className="font-medium text-[16px] ">{Data.explanation}</p>
				<div className="flex self-center mt-4">
					<Sponser />
				</div>
				<div className='flex justify-center items-center gap-4 mt-4'>
					<div className='flex-grow border-t-2 border-white'></div>
					<p className=' text-[16px] text-white uppercase'>download image</p>
					<div className='flex-grow border-t-2 border-white'></div>
				</div>

				<Button variant={'outline'}
					onClick={() => {
						console.log('Button clicked!');
						downloadImageFromURL('math-com.png', 'aasd');
					}}
					className='flex justify-center items-center bg-transparent bg-Yellow hover:bg-yellow-100 self-center w-full'>
					<Download />
				</Button>
			</div>
		</div>
	)
};
export { Result };
