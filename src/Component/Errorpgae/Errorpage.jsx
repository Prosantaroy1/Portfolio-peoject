import { NavLink } from 'react-router-dom';
import img from '../../assets/error/404.png'

const Errorpage = () => {
    return (
        <div className="flex  flex-col h-screen justify-center items-center ">
            <div className='flex flex-col items-center justify-center gap-7'>
                <img src={img} alt="" />
                <p className='md:w-[620px] mx-auto text-xl font-fontpp text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Repellendus dignissimos laboriosam dolor, itaque laborum fugiat est.
                </p>
                {/* btn */}
                <button className='bg-nevy px-5 py-3 text-xl font-medium font-fontpp rounded-lg'>
                    <NavLink to='/'>GO BACK</NavLink>
                </button>
            </div>
        </div>
    );
};

export default Errorpage;