export default function Portfolio() {
   
   // const [Project, setProject] = useState('Portfolio');
   
    
        function importAll(req) {
            let images = {};
           req.keys().forEach(item => { 
                images[item.replace('./', '')] = req(item) 
            });
        
            return images;
        };
        
        // passes in assets/images/projects folder to importAll() function
        const images = importAll(require.context('../assets', false, /\.png$/));
        //const images = importAll(require.context('../assets/images/projects/thumbnails', false, /\.png$/));
        
        // array of projects to display
        const Project = [
            {
                id: 1,
                name: 'Tech Blog',
                description: 'An app which enables a developer to write and publish blog posts. The author can also edit and delete their posts, and readers can add comments.',
                technologies: 'Bcrypt, Bulma, MySQL, Express.js, Sequelize',
                deployed: true,
                link: 'https://the-tech-blog-rb-89aab8dd6437.herokuapp.com/',
                github: 'https://github.com/RobertBail/Tech-Blog',    
            }, 
            {
                id: 2,
                name: 'Note-Taker',
                description: 'An app which enables a user to write and save notes. Each note is saved in a list on the left side of the page. The user can also delete each note.',
                technologies: 'Express.js, Nodemon, Jest',
                deployed: true,
                link: 'https://note-taker-rb-fa3eeac28624.herokuapp.com',
                github: 'https://github.com/RobertBail/Note-Taker',    
            }, 
            {
                id: 3,
                name: 'Weather Dashboard',
                description: 'A weather application which allows the user to search any major town and city in the world, and see the relevant weather forecast for the upcoming five days. The app also saves each location the user searched for, which they can click on and see its weather forecast again. This wasn`t fully acheived. It was one of the more challenging projects early on.',
                technologies: 'Open Weather API, HTML, CSS, JS',
                deployed: true,
                link: 'https://robertbail.github.io/Weather-Dashboard/',
                github: 'https://github.com/RobertBail/Weather-Dashboard',      
            },
            {
                id: 4,
                name: 'Work-Day Scheduler', 
                description: 'This app will allow the user to write and save events during their workday. The coloured time-blocks weren`t fully acheived.',
                technologies: 'JS, CSS, HTML',
                deployed: true,
                link: 'https://robertbail.github.io/Work-Day-Scheduler/ ',
                github: 'https://github.com/RobertBail/Work-Day-Scheduler',         
            }, 
            {
                id: 5,
                name: 'Code-Quiz',
                description: 'This application features a timed quiz based on coding concepts. At the end of the quiz, the user is able to save their name and score.',
                technologies: 'JS, CSS, HTML',
                deployed: true,
                link: 'https://robertbail.github.io/code-quiz-RB/',
                github: 'https://github.com/RobertBail/code-quiz-RB',         
            }, 
            {
                id: 6,
                name: 'Password-Generator',
                description: 'The purpose of this project was to create a prompt which generates random passwords for the user. It was an introduction to methods such as Math.floor(Math.random()) and for loops.',
                technologies: 'JS, CSS, HTML',
                deployed: true,
                link:'https://robertbail.github.io/Password-Generator/',
                github: 'https://github.com/RobertBail/Password-Generator',       
            }, 
            
        ];
        
        // adds images to projects array
        Project.forEach((Project, i) => {
            i < 7 ?
            Project.image = images[`0${i + 1}.png`].default :
            Project.image = images[`${i + 1}.png`].default
        });
        
        // displays newest projects first
        Project.reverse();
    
    }

    //return (
        //<section className="flex-row justify-center vw100">
           
            //<div className="w75 bg-dark section-container">
               
           // </div>
       // </section>
    //);
//};

