import '../../App.css'
import heroBg from '../../assets/Rectangle 4281.png'
import Donations from '../donations/Donations';


const Home = () => {
    const homeBgstyles = {
        header: {
          backgroundImage: `url(${heroBg})`,
          height: '100vh',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        },
      
        content: {
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
        }
      }
    return (
        <div>
            <div className="home">
                <div className="hero" style={homeBgstyles.header} >
                    <div className=' pt-10 md:pt-48 ' style={homeBgstyles.content}>
                    <div className='heroContent text-center md:px-8'>
                        <h1 className=' text-black text-5xl font-bold my-10'>I Grow By Helping People In Need</h1>
                        <span className='flex flex-col md:flex-row justify-center items-center'>
                            <input className='border w-full  md:w-1/3 py-3 rounded-md' type='text' /><button className='btn btn-primary bg-[#FF444A] rounded-tl-none rounded-bl-none rounded-tr-md rounded-br-md outline-none border-none px-4 text-base font-bold'>search</button>
                        </span>
                    </div>
                    </div>
                </div>   
               <Donations></Donations>
            </div>
        </div>
    );
};

export default Home;