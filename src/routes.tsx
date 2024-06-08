import {useRoutes} from 'react-router-dom'
import MainLayout  from "./layouts/MainLayout.tsx";
import PageTitle   from "./componets/AppComponents/PageTitle.tsx";
import LandingPage from "./pages/MainPages/LandingPage.tsx";
import EventDetails from "./pages/MainPages/EventDetails.tsx";
import Services from "./pages/MainPages/Services.tsx";
import Partners from "./pages/MainPages/About.tsx";
import About from "./pages/MainPages/About.tsx";
import Portfolio from "./pages/MainPages/Portfolio.tsx";
const AppRoutes = ()=>{
    const routes = useRoutes ([
        {
            path:'/',
            element:<MainLayout />,
            children:[
                {
                    index:true,
                    element:(
                        <>
                            <PageTitle title='Event | Home' />
                            <LandingPage />
                        </>
                    ),
                },
                {
                    path:'event/:id',
                    element:(
                        <>
                            <EventDetails />
                        </>
                    ),
                },
                {
                    path:'services',
                    element:(
                        <>
                            <PageTitle title='Event | Services' />
                            <Services />
                        </>
                    ),
                },
                {
                    path:'partners',
                    element:(
                        <>
                            <PageTitle title='Event | Partner Details' />
                            <Partners />
                        </>
                    ),
                },
                {
                    path:'about',
                    element:(
                        <>
                            <PageTitle title='Event | Event Details' />
                            <About />
                        </>
                    ),
                },
                {
                    path:'portfolio',
                    element:(
                        <>
                            <PageTitle title='Event | Portifolio Details' />
                            <Portfolio />
                        </>
                    ),
                },

            ]
        }
    ]);
    return routes;
}

export default AppRoutes;