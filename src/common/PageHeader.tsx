const PageHeader = ({title,image,description}: {title: string; image: string,description:string}) => {
    return (
        <div className="w-screen h-72 absolute top-0">
            <div className='flex w-screen h-full bg-black opacity-75 absolute'></div>
            <img src={image} alt={title} className='w-full h-full object-cover' />
            <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4'>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h1>
                <p className="mt-2 text-lg md:text-xl lg:text-2xl">{description}</p>
            </div>
        </div>
    )
}
export default PageHeader;