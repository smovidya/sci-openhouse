import { Sponser } from '../components/ui/elements/sponser';
import Sun from '/assets/sun.svg';
import { Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import { FC } from 'react';
import dataJson from '../deparment.json'
type ResultProps = {
	major: number; // เพิ่ม prop sai
};

const downloadImageFromURL = (imageUrl: string, fileName: string) => {
	const link = document.createElement('a');
	link.href = imageUrl;
	link.download = fileName;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};

const Result: FC<ResultProps> = ({ major: major }) => {
	const Data = dataJson.find(department => department.major === major);
	if (!Data) {
		return
	}
	return (
		<div className="bg-mobile flex relative justify-center items-center">
			<div
				key={Data.major}
				className="flex flex-col items-center justify-between font-ibm-plex-thai text-white rounded-[30px] h-[90%]  w-[90%] px-4 py-4 border-4 border-Yellow bg-gradient-to-b from-black via-[#172854] to-[#000102] relative">
				<img
					src={Sun}
					alt="sun"
					className="absolute overflow-hidden min-w-[630px] h-auto top-[-200px] right-[-310px]" />
				<div className="flex flex-col mb-6">
					<p className="font-SilverStone-Regular text-[48px] text-Yellow text-center">
						SCIASTRAL
					</p>
					<p className="font-SilverStone-Regular text-[32px] text-Yellow text-center uppercase">
						scichula open house
					</p>
				</div>
				<img className='h-[140px]'
					src={Data.imagePath}
					alt={`${Data.name}`} />
				<p className="font-bold text-[16px] uppercase">{Data.name}</p>
				<p className="font-medium text-[1rem] indent-8">{Data.quote}</p>
				<p className="font-medium text-[1rem] indent-8">{Data.explanation}</p>
				<div className="flex self-center">
					<Sponser />
				</div>
				<Button variant={'outline'}
					onClick={() => {
						console.log('Button clicked!');
						downloadImageFromURL(`/assets/share-image/${Data.name}.png`, `${Data.name}`);
					}}
					className='flex justify-center items-center gap-2 bg-transparent bg-Yellow hover:bg-yellow-200 self-center w-full'>
					<Download className='' />
					<p className='text-[16px]'>Download Image</p>
				</Button>
			</div>
		</div>
	)
};
export { Result };
