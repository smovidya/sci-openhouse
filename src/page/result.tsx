import { Sponser } from '../components/ui/elements/sponser';
import { Header } from '../components/ui/elements/header';
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
		<div className="bg-mobile flex justify-center items-center min-h-fit">
			<div
				key={Data.major}
				className="flex flex-col gap-4 items-center justify-between font-ibm-plex-thai text-white min-h-[90%] rounded-[30px] h-fit w-[90%] px-4 py-4 my-4 border-4 border-Yellow"
				style={{ background: 'linear-gradient(180deg, #000 0%, #16155D 38%, #000 70%)' }}>
				<Header />
				<img className='h-[160px] my-[-10px] z-10'
					src={Data.imagePath}
					alt={`${Data.name}`} />
				<div className='z-10'>
					<p className="text-4xl font-SilverStone-Regular text-center lowercase">{Data.name}</p>
					<p className="text-[1rem] indent-8 py-2">{Data.quote}</p>
					<p className="text-[1rem] indent-8">{Data.explanation}</p>
				</div>
				<div className="flex self-center">
					<Sponser />
				</div>
				<Button variant={'outline'}
					onClick={() => {
						console.log('Button clicked!');
						console.log(Data.name);
						downloadImageFromURL(`/assets/share-img/${Data.name}.png`, `${Data.name}`);
					}}
					className='flex justify-center items-center gap-2 bg-transparent bg-Yellow hover:bg-yellow-500 self-center w-full border-0'>
					<Download className='' />
					<p className='text-[16px]'>Download Image</p>
				</Button>
				<img src="/assets/heart.webp"
					className='absolute z-1 top-[90px] w-[350px]' />
			</div>

		</div>
	)
};
export { Result };
