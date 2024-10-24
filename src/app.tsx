import { atom } from 'jotai';
import { useAtomValue } from 'jotai';
import { Home } from './page/home';
import { Login } from './page/login';
import { Question } from './page/question';
import { Result } from './page/result';

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
			case 'result':
				return <Result sai={mySaiValue}/>;
		}
	};

	return <div>{handlePage(pageValue,mySaiValue)}</div>;
};

const page = atom('home');
const mySai =atom(-1);

export { page, mySai, App };
