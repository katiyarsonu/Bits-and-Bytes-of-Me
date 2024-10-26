import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Medimate',
        description: "Developed a Doctor Appointment booking app with secure user data management using MongoDB and authentication, integrated MediBot for instant disease remedies, and deployed on AWS for live testing, utilizing React, JWT, Node.js, and MongoDB.",
        tools: ['NodeJs','ExpressJs', 'MongoDB', 'AWS', 'Node Mailer', 'JWT', 'React',],
        role: 'Backend Developer',
        code: 'https://github.com/katiyarsonu/Medimate.git',
        demo: 'https://medibot-six.vercel.app/',
        image: crefin,
    },
    {
        id: 2,
        name: 'Talk Box',
        description: 'I designed and developed a real-time chat application called Talk Box using Node.js and Socket.IO. The app features multimedia messaging and real-time notifications, enhancing user interaction and communication. Users can send images, videos, and audio messages seamlessly, making conversations more engaging and dynamic.',
        tools: ['Node.js', 'Socket.IO', 'Express', 'MongoDB', 'Mongoose', 'AWS S3', 'Nodemailer'],
        role: 'Full Stack Developer',        
        code: 'https://github.com/katiyarsonu/Talk_Box.git',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Buy Me A Chai',
        description: 'Developed a web app enabling users to connect through virtual chai gifts. We used the MERN stack for data management and to create a smooth interface. The application includes a payment gateway that allows users to register and request chai gifts.',
tools: ['MongoDB', 'Express', 'React', 'Node.js', 'Bootstrap', 'SCSS', 'Stripe'],
role: 'Full Stack Developer',

        code: 'https://github.com/katiyarsonu/Get_Me_Chai.git',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    // {
    //     id: 4,
    //     name: 'Newsroom Management',
    //     description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    //     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
    //     code: '',
    //     demo: '',
    //     image: ayla,
    //     role: 'Full Stack Developer',
    // }
];
