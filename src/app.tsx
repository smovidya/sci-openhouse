import { atom } from 'jotai';
import { useAtomValue } from 'jotai';
import { Home } from './page/home';
import { Login } from './page/login';
import { Question } from './page/sai';
import { Result } from './page/result';
import { Major } from './page/major';

const App = () => {
	const pageValue = useAtomValue(page);
	const mySaiValue = useAtomValue(mySai);
	const handlePage = (pageValue: string, mySaiValue:number) => {
		switch (pageValue) {
			case 'home':
				return <Home />;
			case 'login':
				return <Login />;
			case 'question':
				return <Question />;
			case 'major':
				return <Major />;
			case 'result':
				return <Result sai={mySaiValue}/>;
		}
	};

	return <div>{handlePage(pageValue,mySaiValue)}</div>;
};

const page = atom('home');
const mySai =atom(-1);

export { page, mySai, App };
