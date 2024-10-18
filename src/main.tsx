import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Home } from './page/home.tsx';
//หน้า render หลัก
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Home/>
import DisplaySVG from './displaySVG.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
		<DisplaySVG />
	</StrictMode>
);
