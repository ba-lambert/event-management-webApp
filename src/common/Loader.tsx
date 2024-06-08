import { RotatingLines } from 'react-loader-spinner'
const Loader = ()=>{
    return (
        <div className='h-screen w-screen flex items-center justify-center'>
            <RotatingLines
            visible={true}
            width="36"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{
                color: "#fff",
                backgroundColor: "blue",
            }}
            wrapperClass=""
        />
        </div>
    );
}
export default Loader;