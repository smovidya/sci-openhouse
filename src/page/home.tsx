import { useState } from 'react';
import { Login } from './login';
import { Sponser } from '../components/ui/elements/sponser';
const Home = () => {
	const [home, setHome] = useState(true);

	const handleHome = () => {
		setHome(false);
	};
	return (
		<div>
			{home ? (
				<div
					className="bg-deepBlue h-screen w-screen flex flex-col items-center justify-center"
					onClick={handleHome}
				>
					<div className="h-[300px] w-[360px] border-4 border-goldenYellow rounded-[32px] mb-2 flex-col flex items-center justify-center">
						{/* temp
						<div className="w-44 h-24 pb-2 border-2 border-red-600">
							<svg viewBox="0 0 500 500">
								<path
									id="curve"
									//d="M 0 0 C 16 -11 51 -11 69 0"
									d="M 0 142 c 0 0 72 -18 144 -18 c 72 0 144 16 120 19"
								/>
								<text className="font-SilverStone-Regular text-[60px]">
									<textPath xlinkHref="#curve">&nbsp;SCIASTRAL</textPath>
								</text>
							</svg>
						</div> */}
						<div className="h-24 pb-2 font-SilverStone-Regular text-[52px] text-goldenYellow">
							SCIASTRAIL
						</div>
						<div className="text-goldenYellow font-SilverStone-Regular text-3xl pb-2">
							scichulaopenhouse
						</div>
						<div className="text-goldenYellow font-SilverStone-Regular text-4xl">
							2-3 NovembeR 2024
						</div>
					</div>
					<div className="mt-52">
						<Sponser />
					</div>
				</div>
			) : (
				<Login />
			)}
		</div>
	);
};
export { Home };
