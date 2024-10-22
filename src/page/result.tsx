import { Circle } from 'lucide-react';
import { Sponser } from '../components/ui/elements/sponser';
import Sun from '/assets/sun.svg';
import { Download } from 'lucide-react';
import { useEffect, useState } from 'react';
import useFetch from '../hook/useFetch';
import { Button } from "../components/ui/button"
type DepartmentData = {
  department: string;
  quote: string;
  explain: string;
};

const downloadImageFromURL = (imageUrl: string, fileName: string) => {
	const link = document.createElement('a');
	link.href = imageUrl;
	link.download = fileName;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};

const Result = () => {
  const [data, setdata] = useState<DepartmentData | null>(null);
  const { fetchCsvData } = useFetch();
  useEffect(() => {
    const department = "math-com" //input department
    try {
      fetchCsvData('sciastralresult.csv', department, setdata)
    } catch (error) { console.log(error) }
  }, [])
  if (!data) {
    return (<div className="flex relative h-screen justify-center items-center ">
      <div className=" flex flex-col rounded-[30px] w-[340px] h-fit px-6 py-8 border-4 border-Yellow bg-gradient-to-b from-black via-[#172854] to-[#000102] relative z-10">
        <p className="font-noto-serif-thai text-[48px]  text-Yellow text-center">data is null
        </p>
      </div>
    </div>);
  }
  return (
    <div className="flex relative h-screen justify-center items-center ">
      <div className=" flex flex-col rounded-[30px] w-[340px] gap-2 h-fit px-6 py-8 border-4 border-Yellow bg-gradient-to-b from-black via-[#172854] to-[#000102] relative z-10">
        <img src={Sun} alt='sun' className='absolute overflow-hidden min-w-[630px] h-auto top-[-200px] right-[-310px]' />
        <div className="flex flex-col mb-6">
          <p className="font-SilverStone-Regular text-[48px] text-Yellow text-center">SCIASTRAL</p>
          <p className="font-SilverStone-Regular text-[24px] text-Yellow text-center uppercase">scichuaopenhouse</p>
        </div>
        <div className="flex items-center justify-center gap-2 mb-4">
          <Circle size={150} className='fill-red-400' stroke='noen' />
          <div className="flex-col w-[56%] items-center text-white">
            <p className="font-bold text-[20px]">{data.department}</p>
            <p className="font-medium text-[16px]">{data.quote}</p>
          </div>
        </div>
        <p className="font-medium text-[16px] text-white">
          {data.explain}
        </p>
        <div className="flex self-center mt-4">
          <Sponser />
        </div>
        <div className='flex justify-center items-center gap-4 mt-4'>
          <div className='flex-grow border-t-2 border-white'></div>
          <p className=' text-[16px] text-white uppercase'>download image</p>
          <div className='flex-grow border-t-2 border-white'></div>
        </div>
        <Button
          onClick={() => downloadImageFromURL(`/${data.department}.png`, `${data.department}`)}>
          <Download />
        </Button>
      </div>
    </div>
  );
};
export { Result };
