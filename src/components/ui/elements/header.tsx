const HeaderHome = () => {
	return (
		<div className="h-56 pt-8  max-w-[340px] rounded-md flex-col justify-center items-center gap-[18px] inline-flex">
			<img
				src="./fonts/head.svg"
				alt="sun"
			/>
			<div className="text-[#f9cd2f] mt-[-30px] text-4xl font-normal font-SilverStone-Regular leading-9">
				sci chula open house
			</div>
			<div className="text-center text-[#f9cd2f] mt-[-24px] text-2xl font-normal font-SilverStone-Regular leading-loose">
				2-3 november 2024
			</div>
		</div>
	);
};

const Header = () => {
	return (
		<div className="z-10 max-w-[340px] rounded-md flex-col justify-center items-center gap-[18px] inline-flex">
			<img
				src="./fonts/head.svg"
				alt="sun"
			/>
			<div className="text-[#f9cd2f] mt-[-30px] text-4xl font-normal font-SilverStone-Regular leading-9">
				sci chula open house
			</div>

		</div>
	);
};

export { HeaderHome, Header };
