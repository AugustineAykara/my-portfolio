const project = [
    {
        projectName: "WhatsApp Quick Chat",
        projectSupport: "Android",
        projectLink: "./apk/WhatsAppQuickChat.apk",
        projectImage: "./images/projects/android/WhatsApp Quick Chat.png",
        projectDescription: "Begin a WhatsApp chat with someone without having their phone number saved in your phone's address book.",
        color: "green"
    },
    {
        projectName: "Virus Tracker Journal",
        projectSupport: "Android",
        projectLink: "",
        projectImage: "./images/projects/android/Virus_Tracker.png",
        projectDescription: "An app, that could track users route on a day to day basis using QR Code. If a person is contacted with the pandemic this app should have sufficient data to trace their contacts and alert those exposed users.",
        color: "blue"
    },
    {
        projectName: "Shopmate",
        projectSupport: "Android",
        projectLink: "",
        projectImage: "./images/projects/android/shopmate.png",
        projectDescription: "Internship Project on an e-commerce app for branded shoes. Hosted on AWS EC2, the application uses REST API using Strapi.js. The mobile app is developed using Flutter. Data storage on AWS S3 and MySQL on Amazon RDS.",
        color: "yellow"
    },
    {
        projectName: "DigiBus",
        projectSupport: "Android",
        projectLink: "",
        projectImage: "./images/projects/android/DigiBus.png",
        projectDescription: "An app to digitize the current bus system. Built using flutter and cloud firestore (Hackathon Prototype)",
        color: "red"
    },
    {
        projectName: "Flutter Clock",
        projectSupport: "Android",
        projectLink: "",
        projectImage: "./images/projects/android/flutterClock.png",
        projectDescription: "Flutter clock app made for flutter clock challenge",
        color: "yellow"
    },
    // {
    //     projectName: "??",
    //     projectSupport: "",
    //     projectLink: "",
    //     projectImage: "./images/projects/android/under-construction.png",
    //     projectDescription: "",
    //     color: "grey"
    // },
];

function appTemplate(project) {
    return `
        <div class="ui ${project.color} card android-projects-card">
            <div class="image">
                <img src="${project.projectImage}">
            </div>
            <div class="content">
                <div class="header"> ${project.projectName} </div>
                <div class="meta"> ${project.projectSupport} </div>
                <div class="description">${project.projectDescription}</div>
            </div>
            ${
                project.projectLink ?
                `
                    <div class="extra content">
                        <a href="${project.projectLink}">
                            <i class="download icon"></i>
                            DOWNLOAD APK
                        </a>
                    </div>
                </div>` : `</div>`
        }
       
    `
}

document.getElementById('androidProjects').innerHTML = `
    ${project.map(appTemplate).join("")}
`