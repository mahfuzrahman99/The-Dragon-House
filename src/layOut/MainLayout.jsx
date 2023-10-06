import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='max-w-6xl md:mx-auto container px-6 my-10'>
            <div><Toaster/></div>
            <Outlet/>
        </div>
    );
};

export default MainLayout;