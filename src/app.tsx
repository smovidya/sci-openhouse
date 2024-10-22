import { atom } from 'jotai';
import { useAtomValue } from 'jotai';
import { Home } from './page/home';
import React from 'react';
import { Login } from './page/login';
import { Question } from './page/question';
import { Result } from './page/result';

const App = () => {
	const pageValue = useAtomValue(page);
	const handlePage = (pageValue: string) => {
		switch (pageValue) {
			case 'home':
				return <Home />;
			case 'login':
				return <Login />;
			case 'question':
				return <Question />;
			case 'result':
				return <Result />;
			default:
				return <div>Page not found</div>;
		}
	};

	// Log the value whenever the component renders
	React.useEffect(() => {
		console.log(pageValue);
	}, [pageValue]);

	return <div>{handlePage(pageValue)}</div>;
};

const page = atom('home');

export { page, App };
