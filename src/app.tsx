import { atom } from 'jotai';
import { useAtomValue } from 'jotai';
import { Home } from './page/home';
import { Login } from './page/login';
import { Sai } from './page/sai';
import { Result } from './page/result';
import { Major } from './page/major';
import { Tech } from './page/tech';

const App = () => {
	const pageValue = useAtomValue(page);
	const mySaiValue = useAtomValue(mySai);
	const myMajorValue = useAtomValue(myMajor);

	const handlePage = (pageValue: string, mySaiValue: number): React.ReactNode => {
		switch (pageValue) {
			case 'home':
				return <Home />;
			case 'login':
				return <Login />;
			case 'sai':
				return <Sai />;
			case 'major':
				return <Major sai={mySaiValue} />;
			case 'tech':
				return <Tech sai={mySaiValue} />;
			case 'result':
				return <Result major={myMajorValue} />;
			default:
				// Optional: handle unknown pages
				return <Home />; // Or a custom 404 component
		}
	};

	return <div>{handlePage(pageValue, mySaiValue)}</div>;
};

// Atoms for page, Sai value, and major
const page = atom('home');
const mySai = atom(-1);
const myMajor = atom(-1);

export { page, mySai, myMajor, App };
