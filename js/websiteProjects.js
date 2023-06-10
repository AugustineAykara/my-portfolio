const project = [
    {
        projectName: "Pong Gameplay",
        projectLink: "https://augustineaykara.github.io/Tennis-Game/",
        projectImage: "./images/projects/website/tennis-game.png",
        projectDescription: "An Arcade Game called Pong, made using JavaScript",
        color: "blue"
    },
    {
        projectName: "AayurJeevak Website",
        projectLink: "http://aayurjeevak.com/",
        projectImage: "./images/projects//website/aayurjeevak.png",
        projectDescription: "Website made for an Ayurveda group based in Kerala, India",
        color: "green"
    },
    {
        projectName: "Knapsack Calculator",
        projectLink: "https://augustineaykara.github.io/Knapsack-Calculator/",
        projectImage: "./images/projects/website/knapsackCalculator.png",
        projectDescription: "Web page and scripts to solve the programming problem known as the Knapsack Problem",
        color: "red"
    },
    {
        projectName: "ChatWebApp",
        projectLink: "https://chatwebapp.herokuapp.com/",
        projectImage: "./images/projects//website/chatWebApp.png",
        projectDescription: "Basic chat web application made using express js and socket.io",
        color: "orange"
    },
    {
        projectName: "Weather Web App",
        projectLink: "https://augustineaykara.github.io/Weather-Web-App/",
        projectImage: "./images/projects/website/weather-web-app.png",
        projectDescription: "Weather Web Application built using React.js and OpenWeatherMap API",
        color: "yellow"
    },
    {
        projectName: "Virus Tracker Web App",
        projectLink: "https://virus-tracker-dashboard.herokuapp.com/",
        projectImage: "./images/projects/website/VirusTrackerWebApp.png",
        projectDescription: "Web app to to get all user details who have been exposed with virus positive person and alert them via a mail.",
        color: "green"
    },
    {
        projectName: "ToDo Web App",
        projectLink: "https://augustineaykara.github.io/Firebase-ToDoList-WebApp/",
        projectImage: "./images/projects/website/Todo-Firebase.png",
        projectDescription: "Todo List web app made using firebase cloud firestore",
        color: "red"
    },
    // {
    //     projectName: "??",
    //     projectLink: "#",
    //     projectImage: "./images/projects/website/under-construction.png",
    //     projectDescription: "??",
    //     color: "blue"
    // },
];


function appTemplate(project) {
    return `
        <div class="ui ${project.color} segment card website-projects-card">
            <a class="image website-image" href="${project.projectLink}" target="_blank">
                <img src="${project.projectImage}">
            </a>
            <div class="content">
                <a class="center aligned header" href="${project.projectLink}" target="_blank">${project.projectName}</a>
                <div class="description">
                    ${project.projectDescription}
                </div>
            </div>
        </div>
    `
}

document.getElementById('webProjects').innerHTML = `
    ${project.map(appTemplate).join("")}
`