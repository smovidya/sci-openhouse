import { CircleIcon } from '@radix-ui/react-icons';
import { Sponser } from '../components/ui/elements/sponser';
import Sun from '/assets/sun.svg';
import Star from '/assets/stars.svg';
import IG from '/assets/ig.png';
import { Button } from '../components/ui/button';

const Result = () => {
  return (
    <div className="flex relative h-screen justify-center items-center">
      <div className=" flex flex-col rounded-[30px] w-[340px] h-[688px] px-6 py-8 border-4 border-Yellow bg-gradient-to-b from-black via-[#172854] to-[#000102] relative z-10">

        <img src={Star} alt='star' className='absolute overflow-hidden min-w-[500px] h-auto top-[-100px] right-[0px]' />
        <img src={Sun} alt='sun' className='absolute overflow-hidden min-w-[538.59px] h-auto top-[-180px] right-[-264px]' />

        <div className="flex flex-col mb-6">
          <p className="font-SilverStone-Regular text-[48px]  text-Yellow text-center">SCIASTRAL</p>
          <p className="font-SilverStone-Regular text-[24px]  text-Yellow text-center uppercase">scichuaopenhouse</p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-4">
          <CircleIcon className="size-32 bg-gray-300 rounded-full" />
          <div className="flex-col w-[56%] items-center text-white">
            <p className="font-bold text-[20px]">ภาคคอมพิวเตอร์</p>
            <p className="font-medium text-[16px]">คำโปรย/คำคม/คำอธิบายที่บ่งบอกถึงความเป็นภาควิชา โดยสัมพันธ์กับ workshop</p>
          </div>
        </div>

        <ul className="font-medium text-[16px] text-white list-disc list-inside">
          <li>ลักษณะนิสัยของคนที่เหมาะกับภาควิชา เช่น คนที่ชอบแก้ปัญหา คนช่างสังเกตธรรมชาติ คนที่ชอบดูดาว</li>
          <li>อธิบายความเป็นภาคตัวเอง/จุดเด่นของภาควิชา</li>
          <li>การเชิญชวนให้เข้าร่วม workshop หรือมาเรียนในภาควิชาโดยให้สัมพันธ์กับ workshop ที่ทำ</li>
        </ul>

        <div className="flex self-center mt-4">
          <Sponser />
        </div>

        <div className='flex justify-center items-center gap-4 mt-4'>
          <div className='flex-grow border-t-2 border-white'></div>
          <p className='font-SilverStone-Regular text-[16px] text-white uppercase'>share to</p>
          <div className='flex-grow border-t-2 border-white'></div>
        </div>

        <Button className='flex justify-center items-center bg-transparent hover:bg-transparent self-center w-fit'>
          <img src={IG} alt='ig' className='w-[48px]' />
        </Button>

        <img src={Star} alt='star' className='overflow-hidden absolute min-w-[500px] h-auto top-[500px] right-[0px]' />
      </div>
    </div>

  );
};

export { Result };
