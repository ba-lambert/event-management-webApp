import React, { useState, useEffect } from 'react';

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
    {
        image:'https://www.visitphilly.com/wp-content/uploads/2024/03/the-mann-center-concert-photo-by-snicole-for-the-mann-2200x1237px.jpg',
        title: 'Music Concerts',
        description: 'Experience the best live music from local and international artists. Enjoy concerts featuring various genres including rock, pop, jazz, and classical.'
    },
    {
        image:'https://www.visitphilly.com/wp-content/uploads/2024/03/the-mann-center-concert-photo-by-snicole-for-the-mann-2200x1237px.jpg',
        title: 'Sports Events',
        description: 'Catch thrilling sports events from football matches to marathons. Join in the excitement and cheer for your favorite teams and athletes.'
    },
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
            <section className='h-screen w-full flex justify-start items-center m-auto flex-col space-y-5 py-20'>
                <p className='text-2xl uppercase font-semibold '>Available Categories</p>
                <div className='h-[1px] w-72 bg-blue-600 rounded-full'></div>
                {/*<div className='flex flex-row'>*/}
                    <div className='flex flex-row gap-4 w-full p-4'>
                        {categories && categories.map((category, index) => (
                            <div
                                key={index}
                                className='w-[400px] h-48 rounded-lg relative overflow-hidden transition-transform transform hover:scale-105'
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
            </section>

             <section className='h-screen w-full bg-orange-500'></section>
            <section className='h-screen w-full'></section>
        </div>
    );
};

export default LandingPage;
