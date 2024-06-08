import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
interface IPartners {
    name: string;
    image: string;
}
const partners: IPartners[] = [
    {
        name:'RwandaAir',
        image:'https://assets.planespotters.net/files/airlines/3/rwandair_0ad884.svg'
    },
    {
        name:'MTN Rwanda',
        image:'https://www.mtn.co.rw/wp-content/uploads/2023/07/mtn-logo-nav-new-scaled-1.webp'
    },
    {
        name:'Toyota Rwanda',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/ToyotaLogoRedVer.svg/2560px-ToyotaLogoRedVer.svg.png'
    },
    ]
interface Event {
    id: number;
    title: string;
    description: string;
    venue: string;
    image: string;
}

const events: Event[] = [
    {
        id: 1,
        title: 'Event One',
        description: 'Description for event one.',
        venue: 'Venue One',
        image: 'https://images.pistonheads.com/nimg/47945/blobid0.jpg'
    },
    {
        id: 2,
        title: 'Event Two',
        description: 'Description for event two.',
        venue: 'Venue Two',
        image: 'https://d2v1gjawtegg5z.cloudfront.net/posts/preview_images/000/014/158/original/Screen_Shot_2022-08-29_at_7.53.20_PM.jpg'
    },
    {
        id: 3,
        title: 'Event Three',
        description: 'Description for event three.',
        venue: 'Venue Three',
        image: 'https://www.edmunds.com/assets/m/cs/blt80b721627d70469f/662696b0b05441329f99cad8/2025_corolla-cross_f34_toyota_fe_9998_0422241_1280.jpg'
    },
    {
        id: 4,
        title: 'Event Four',
        description: 'Description for event four.',
        venue: 'Venue Four',
        image: 'https://motorshow.com.br/wp-content/uploads/sites/2/2021/06/2022-toyota-corolla-cross-windchillpearl-016-scaled-e1622665127666.jpg'
    },
    {
        id: 5,
        title: 'Event Five',
        description: 'Description for event five.',
        venue: 'Venue Five',
        image: 'https://di-uploads-pod6.dealerinspire.com/landroverdarien/uploads/2018/12/2019-Land-Rover-Range-Rover-Interior-Front-Seating-and-Dashboard-122818.jpg'
    }
];
interface Category {
    image:string,
    title: string;
    description: string;
}

const categories: Category[] = [
    // {
    //     image:'https://www.visitphilly.com/wp-content/uploads/2024/03/the-mann-center-concert-photo-by-snicole-for-the-mann-2200x1237px.jpg',
    //     title: 'Music Concerts',
    //     description: 'Experience the best live music from local and international artists. Enjoy concerts featuring various genres including rock, pop, jazz, and classical.'
    // },
    // {
    //     image:'https://www.visitphilly.com/wp-content/uploads/2024/03/the-mann-center-concert-photo-by-snicole-for-the-mann-2200x1237px.jpg',
    //     title: 'Sports Events',
    //     description: 'Catch thrilling sports events from football matches to marathons. Join in the excitement and cheer for your favorite teams and athletes.'
    // },
    {
        image:'https://www.visitphilly.com/wp-content/uploads/2024/03/the-mann-center-concert-photo-by-snicole-for-the-mann-2200x1237px.jpg',
        title: 'Cultural Festivals',
        description: 'Celebrate the rich cultural heritage with festivals that showcase traditional dances, music, crafts, and cuisine. Explore the diverse cultural landscape.'
    },
    {
        image:'https://www.visitphilly.com/wp-content/uploads/2024/03/the-mann-center-concert-photo-by-snicole-for-the-mann-2200x1237px.jpg',
        title: 'Conferences and Seminars',
        description: 'Attend insightful conferences and seminars on a variety of topics including technology, business, health, and education. Gain knowledge from industry experts.'
    },
    {
        image:'https://www.visitphilly.com/wp-content/uploads/2024/03/the-mann-center-concert-photo-by-snicole-for-the-mann-2200x1237px.jpg',
        title: 'Community Gatherings',
        description: 'Participate in community gatherings that bring people together for socializing, networking, and community building. Enjoy activities that foster a sense of belonging.'
    }
];
const LandingPage: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [videoSrc, setVideoSrc] = useState<string>('');

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
    };

    const openModal = () => {
        setVideoSrc("https://www.youtube.com/embed/dQw4w9WgXcQ");
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setVideoSrc("");
        setIsModalOpen(false);
    };

    return (
        <div>
            <section className='relative h-screen w-full'>
                {events.map((event, index) => (
                    <div
                        key={event.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                        style={{ backgroundImage: `url(${event.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <div className='h-full w-full bg-black bg-opacity-50 flex flex-col justify-end py-32 items-start px-32 text-white'>
                            <h1 className='text-4xl mb-2 font-extrabold'>{event.title}</h1>
                            <p className='mb-4 font-semibold'>{event.description}</p>
                            <p className='mb-4'>{event.venue}</p>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                                Book Now
                            </button>
                        </div>
                    </div>
                ))}
                <button
                    className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2'
                    onClick={prevSlide}
                >
                    &#9664;
                </button>
                <button
                    className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2'
                    onClick={nextSlide}
                >
                    &#9654;
                </button>
            </section>
            <section className='h-96 w-full bg-blue-600 flex justify-start items-center'>
                <div className='flex flex-col items-start justify-start mx-auto w-1/2 px-24 space-y-5 text-white'>
                    <p className='text-5xl font-bold underline'>Who we are</p>
                    <p>Rwanda Events is a value driven business company. We are specialized in producing and organizing
                        the best events in Rwanda ...</p>
                    <button className='px-5 py-2 bg-gray-800 rounded-full cursor-pointer font-semibold uppercase text-sm'>
                        Learn More
                    </button>
                </div>
                <div className='relative w-1/2 h-full'>
                    <img src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" alt="Video Thumbnail" className='w-full h-full object-cover' />
                    <button onClick={openModal} className='absolute inset-0 flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-16 h-16 bg-black bg-opacity-50 rounded-full p-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-4.704 2.736a.75.75 0 010-1.304l4.704-2.736a.75.75 0 010 1.304z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0-4.97-4.03-9-9-9S3 7.03 3 12s4.03 9 9 9 9-4.03 9-9z" />
                        </svg>
                    </button>
                </div>
            </section>
            <div id='video'
                 className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 ${isModalOpen ? 'block' : 'hidden'}`}>
                <div className="relative bg-white rounded-lg overflow-hidden w-4/5 h-4/5">
                    <button onClick={closeModal}
                            className="absolute top-0 right-0 mt-2 mr-2 text-2xl text-white bg-black bg-opacity-50 rounded-full p-2">&times;</button>
                    <div className="w-full h-full">
                        <iframe
                            width="100%"
                            height="100%"
                            src={videoSrc}
                            title="YouTube video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
            <section className='h-auto w-full flex justify-start items-center m-auto flex-col space-y-5 py-20 px-14'>
                <p className='text-2xl uppercase font-semibold '>Available Categories</p>
                <div className='h-[1px] w-72 bg-blue-600 rounded-full'></div>
                {/*<div className='flex flex-row'>*/}
                    <div className='flex flex-row gap-2 w-full'>
                        {categories && categories.map((category, index) => (
                            <div
                                key={index}
                                className='w-[350px] h-48 rounded-lg relative overflow-hidden transition-transform transform hover:scale-105'
                            >
                                <div
                                    className='bg-black h-full w-full inset-0 opacity-50 rounded-lg absolute transition-opacity duration-300 hover:opacity-25'
                                ></div>
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className='absolute inset-0 w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-110'
                                />
                                <div
                                    className='absolute inset-0 flex flex-col justify-end py-5 items-center text-white z-10'>
                                    <p className='text-xl font-bold'>{category.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                <p className='text-2xl uppercase font-semibold '>Latest Events</p>
                <div className='h-[1px] w-36 bg-blue-600 rounded-full'></div>
                <div className='w-full flex flex-row gap-4 flex-wrap '>
                    {events && events.map((event,index)=>(
                        <Link to={`/event/${event.title}`} key={index} className='w-[350px] h-48 rounded-lg relative overflow-hidden transition-transform transform hover:scale-105'>
                            <div className='bg-black w-full h-full absolute'></div>
                            <img src={event.image} alt={event.title} className='absolute inset-0 w-full h-full object-cover'/>
                            <div className='absolute p-5 hover:bg-black hover:bg-opacity-15 inset-0 flex flex-col justify-end text-white z-10'>
                                    <p className='text-xl font-bold'>{event.title}</p>
                                <div
                                    className='absolute inset-0 bg-opacity-70 bg-black transition-opacity duration-300 opacity-0 hover:opacity-100 flex flex-col justify-center items-center cursor-pointer'>
                                    <p className='text-sm font-bold'>{event.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            <section className='flex flex-col justify-center items-center space-y-5'>
                <p className='text-2xl uppercase font-semibold '>Our Key Partners</p>
                <div className='h-[1px] w-40 bg-blue-600 rounded-full '></div>
                    <p className='text-gray-800 text-lg font-semibold'>Our Key Patrners companies that help us in our daily basis activities</p>
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    {/*<div className='h-[1px] w-72 bg-gray-800 rounded-full flex justify-center'></div>*/}
                    <div className="flex flex-col">
                        <a href="https://flowbite.com/"
                           className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img
                                src="https://www.zarla.com/images/zarla-top-events-1x1-2400x2400-20211123-4fgq7httf3p79gk64jb6.png"
                                className="h-8" alt="Flowbite Logo"/>
                            <span
                                className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Rwanda Events</span>
                        </a>
                        <div className='flex flex-row h-32 justify-center gap-x-3'>
                            {partners && partners.map((partner, index) => (
                                <div key={index} className='h-10 w-24'>
                                    <img src={partner.image} className='w-full h-full' alt={partner.name}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
