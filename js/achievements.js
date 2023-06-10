const achievements = [
    {
        title: "Techathlon",
        image: "./images/projects/achievements/techathlon.jpg",
        description: "Secured first prize with a cash prize of Rs 50,000 at Techathlon 2020, a hackathon conducted by ICT Academy, Kerala, India. Our project idea DigiBus - to digitize the current bus system.",
        color: "red"
    },
    {
        title: "Internship Certificate",
        image: "./images/projects/achievements/IndustrusTech-Internship.jpg",
        description: "Worked on an E-Commerce App project titled SHOPMATE. This Project was aimed to launch an E-Commerce App for sales of goods. Designed the portal to get updates about goods from merchants.",
        color: "blue"
    },
    {
        title: "HackCamp",
        image: "./images/projects/achievements/hackcamp.jpg",
        description: "Active participation at HackCamp hackathon organized by HackClub and MLH at Integrated Startup Complex, Kalamassery, Kerala.",
        color: "green"
    },
    {
        title: "IRJET Journal Publication",
        image: "./images/projects/achievements/IRJET-Journal Publication.jpg",
        description: "Published journal on QR based Contact Tracing Application in International Research Journal of Engineering and Technology.",
        color: "yellow"
    },
];


function appTemplate(achievements) {
    return `
        <div class="ui ${achievements.color} segment card website-projects-card lightgallery">
            <a class="image website-image" href="${achievements.image}">
                <img src="${achievements.image}">
            </a>
            <div class="content" href="${achievements.image}">
                <div class="header"> ${achievements.title} </div>
                <div class="description">
                    ${achievements.description}
                </div>
            </div>
        </div>
    `
}

document.getElementById('achievement').innerHTML = `
    ${achievements.map(appTemplate).join("")}
`