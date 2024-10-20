import { createRoot } from 'react-dom/client';
import './index.css';
import { Home } from './page/home.tsx';
import { Result } from './page/result.tsx';
//หน้า render หลัก
createRoot(document.getElementById('root')!).render(<Home />);