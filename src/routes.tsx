import { useRoutes } from 'react-router-dom';
import A from './components/A';
import B from './components/B';
const list = [
    {
        path: '/A',
        element: <A />
    },
    {
        path: '/B',
        element: <B />
    }
];
const Route = () => {
    return <>{useRoutes(list)}</>;
};

export default Route;
