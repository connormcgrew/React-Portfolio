import React, { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";

const Projects = () => {
    const { darkMode } = useContext(DarkModeContext);

    const projects = [
        {
            title: "Random Password Generator",
            description: "Discover the power of secure passwords with  advanced Random Password Generator. Craft personalized passwords effortlessly by tailoring their length, ranging from 8 to 128 characters. You're in control – select uppercase and lowercase letters, numbers, and even special characters to suit your security needs. Strengthen your digital fortress with ease.",
            imageSrc: "/images/random-pass-gen.png",
            link1: "https://connormcgrew.github.io/Random-password-generator/",
            link2: "https://github.com/connormcgrew/Random-password-generator",
        },
        {
            title: "Javascript Quiz",
            description: "Test your knowledge of Javascript with this quiz. You will be presented with a series of questions and a timer will start. Answer the questions as quickly as possible. If you answer incorrectly, time will be subtracted from the clock. When all questions are answered or the timer reaches 0, the game is over. You will be able to save your score and view it on the high scores page.",
            imageSrc: "/images/js-quiz.png",
            link1: "https://connormcgrew.github.io/JavaScript-Quiz/",
            link2: "https://github.com/connormcgrew/JavaScript-Quiz",
        },
        {
            title: "Work Day Scheduler",
            description: "Experience organized brilliance with a dynamic calendar app that lets you capture each moment. Imagine effortlessly saving events for every hour in a browser-based wonderland. This isn't just a calendar – it's a canvas where HTML, CSS, and jQuery dance. It's your time-traveling companion for a sparkling schedule. Embrace time management with this helpful tool!",
            imageSrc: "/images/wd-scheduler.png",
            link1: "https://connormcgrew.github.io/Work-Day-Scheduler/",
            link2: "https://github.com/connormcgrew/Work-Day-Scheduler",
        },
        {
            title: "Weather Dashboard",
            description: "Step into a weather wonderland in your browser! This dashboard comes alive with real-time updates as HTML and CSS dynamically blend with the weather's rhythm. Using the OpenWeather API, it conjures city-specific weather data at your command. It's like having a personal meteorological crystal ball, all beautifully powered by jQuery. Weather forecasting meets digital artistry – get ready to experience weather in a whole new dimension!",
            imageSrc: "/images/weather-dash.png",
            link1: "https://connormcgrew.github.io/Weather-Dashboard/",
            link2: "https://github.com/connormcgrew/Weather-Dashboard",
        },
        {
            title: "Main Course (Group Project)",
            description: "This dynamic application transforms into your personalized gateway, empowering you to swiftly explore stocks and dive into a multitude of news genres. The moment you land, a warm welcome graces the top, extending an invitation to either embark on a tailored stock search or embark on a journey through the most captivating 'top news' stories. Your adventure begins at the click of a button!",
            imageSrc: "/images/main-course.png",
            link1: "https://ericklea.github.io/main-course-home-page-project/",
            link2: "https://github.com/ericklea/main-course-home-page-project",
        },
        {
            title: "Professional Readme Generator",
            description: "Empower your projects with a command-line wizardry that transforms your ideas into professional README.md files. Using the Inquirer package, it's like having a virtual scribe craft your project's narrative in the most captivating way possible. Let your creativity flow and watch as it turns into impressive READMEs that captivate and inform, all thanks to this enchanting tool!",
            imageSrc: "/images/readme-gen.png",
            videoLink: "https://drive.google.com/file/d/109NDqjbVmyF31aQIl3I0jy6GhWFAg8FC/view",
            link2: "https://github.com/connormcgrew/Professional-readme-gen/blob/main/README.md",
        },
        {
            title: "SVG Logo Generator",
            description: "Ignite your creativity with a command-line enchantment that conjures simple SVG logos from your input. Your words become the brushstrokes that craft a logo uniquely yours. It's the magic touch for your brand identity, at your command. Set your imagination free and watch it shape into stunning visuals with this captivating tool!",
            imageSrc: "/images/svg-logo-gen.png",
            videoLink: "https://drive.google.com/file/d/1Ij4Vdz9-21WWyVo4h5KKfIdkxd4DjEZ0/view",
            link2: "https://github.com/connormcgrew/SVG_logo_Gen",
        },
        {
            title: "Note Taker",
            description: "Unleash your inner wordsmith with this dynamic application! Seamlessly craft, store, and even bid adieu to your notes in style. With an express backend, this app is your creative haven, effortlessly storing and retrieving note data from a JSON file. It's like having a virtual notebook that adapts to your every need – the perfect companion for your thoughts, ideas, and inspirations!",
            imageSrc: "/images/note-taker.png",
            link1: "https://intense-atoll-01239.herokuapp.com/",
            link2: "https://github.com/connormcgrew/note-taker",
        },
        {
            title: "Company Database",
            description: "Step into the future of company management with this command-line marvel! Imagine effortlessly adding, viewing, and updating departments, roles, salaries, and employees within your company's database. It's like having a digital magic wand that empowers you to orchestrate the symphony of your organization's structure, all from the command line. Get ready to revolutionize the way you navigate your corporate landscape!",
            imageSrc: "/images/company-db.png",
            videoLink: "https://drive.google.com/file/d/1uF4rTg-BUkMM2-6NraDbecx8RYRrnF96/view",
            link2: "https://github.com/connormcgrew/Company-Database"
        },
        {
            title: "E-Commerce Backend",
            description: "Explore the behind-the-scenes wizardry of an e-commerce realm! This backend empowers categories, products, and tags, with sleek names, enticing prices, and distinct IDs. It's fueled by node, express, sequelize, and dotenv, driving the gears of your seamless online shopping journey.",
            imageSrc: "/images/ecommerce-backend.png",
            videoLink: "https://drive.google.com/file/d/1mVptKKTzMpRqCMwmlHpDYlPQGQW7FR3v/view",
            link2: "https://github.com/connormcgrew/E-commerce-backend",
        },
        {
            title: "Become (Group Project)",
            description: "Unleash your potential with Become: an app that sparks inspiration through powerful quotes, guides you to set goals, and lets you encapsulate your dreams in time capsules for future reflection. This interactive full-stack marvel, powered by node.js, express.js, mysql, sequelize, handlebars.js, pico.css, and uiverse styling, redefines self-improvement, all in one dynamic journey of growth.",
            imageSrc: "/images/become.png",
            link1: "https://becomethebestyou.herokuapp.com/",
            link2: "https://github.com/tylermifflin/Become",
        },
        {
            title: "Social Network API",
            description: "Step into the dynamic realm of social connections! Behold, an API entwined with MongoDB that empowers you to craft, refine, and transform users and thoughts. Forge bonds by adding friends, infuse your thoughts with reactions, and effortlessly sweep away both when the time is right. This isn't just code – it's your passport to curating a captivating social experience!",
            imageSrc: "/images/social-api.png",
            videoLink: "https://drive.google.com/file/d/15sBFDr2Ndlb7KBhMd3rQggovanGhH2Yd/view",
            link2: "https://github.com/connormcgrew/Social-API",
        },
        {
            title: "J.A.T.E Text Editor (PWA)",
            description: "Introducing your ultimate pocket of productivity! This ingenious app sets your notes and code snippets free from the shackles of unreliable internet connections, while also offering the ability to download the Chrome app. Seamlessly create and capture, knowing you can summon them whenever the need strikes. It's like having a trusty vault of inspiration and knowledge right at your fingertips, regardless of the digital tides!",
            imageSrc: "/images/text-editor.png",
            link1: "https://damp-bastion-12792-5a703e3fd802.herokuapp.com/",
            link2: "https://github.com/connormcgrew/Text-Editor-PWA"
        },
        {
            title: "Drill Sergeant (Group Project)",
            description: "Introducing 'Drill Sergeant' – the uncompromising fitness app that brings the intensity of a boot camp to your workouts. Get ready to transform your fitness journey with tough love motivation quotes that push you beyond your limits. Designed to cut through excuses, 'Drill Sergeant' ensures every workout counts, driving you to achieve your peak shape. Experience a new level of motivation, commitment, and results – because excuses have no place in your fitness success story.",
            imageSrc: "/images/drill-sergeant.png",
            link1: "https://drill-sergeant-dda0cd61e869.herokuapp.com/",
            link2: "https://github.com/Evermuniz/Drill-Sergeant"
        },
        


      
    ];

    return (
        <div className={` ${darkMode ? 'dark' : 'light '}`}>
            <h1 className="flex justify-center text-5xl pb-10 font-bold py-10">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <div key={index} className="relative p-4">
                        <div className="relative">
                            <img
                                src={project.imageSrc}
                                alt={project.title}
                                className="w-full h-auto transition-transform transform scale-100 hover:scale-110"
                            />
                            <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col justify-between p-4 text-white transition-opacity opacity-0 hover:opacity-100 overflow-auto">
                                <div>
                                    <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                                    <p className="text-sm">{project.description}</p>
                                </div>
                                <div className="text-center mt-2">
                                    {project.videoLink ? (
                                        <a
                                            href={project.videoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block mainhvr mb-1"
                                        >
                                            Video demonstration
                                        </a>
                                    ) : (
                                        <a
                                            href={project.link1}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block mainhvr mb-1"
                                        >
                                            Deployed application
                                        </a>
                                    )}
                                    <a
                                        href={project.link2}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block mainhvr"
                                    >
                                        Github repository
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
