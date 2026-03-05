import { title } from "process"

export const info = {
    name: "adhvaidh",
    role: "Full Stack Developer",
    country: "India",
    professionalSummary: "Computer Science undergraduate with a strong passion for building scalable web applications and solving real-world problems using technology. Experienced in full-stack development with hands-on project work involving modern frameworks, real-time systems, and backend APIs.Eager to learn, collaborate, and contribute to impactful software solutions.",
    works: [
        {
            id: 1,
            title: "Institutional Timetable Scheduling algorithm",
            techStack: "ReactJS, Express, SQL, Node",
            description: "Developed a generative algorithm tailored to the specific scheduling needs of our college,capable of handling numerous constraints such as faculty availability, classroom allocation,and subject combinations.The solution significantly reduced the manual workload for faculty, cutting down the timetable creation process from 1-2 weeks to just a few minutes."
        },
        {
            id: 2,
            title: "Messagify",
            techStack: "ReactJS, MongoDb, Node, Express, TailwindCSS, Socket.io",
            description: "Built a fully featured real-time messaging application with instant communication poweredby WebSockets. Developed secure REST-APIs for user authentication, chat management,and message persistence. Implemented JWT-based login, encrypted passwords,online/offline presence, and in-app notifications for new messages. Added file and media upload support through Cloudinary with optimized storage handling."
        }
    ],
    socials: [
        {
            title : "github",
            link: "https://github.com/Blank0210"
        },
        {
            title: "x.com",
            link: "https://x.com/Adhvaidh13"
        },
        {
            title: "linkedin",
            link: "https://www.linkedin.com/in/santosh-adhvaidh/"
        },
        {
            title: "discord",
            link: "https://discord.com/users/604926020373577749"
        }
    ]
}

// Added skills section
export const skills = {
    programmingLanguages: ["Java", "C++", "Python", "JavaScript","React", "NextJs", "React-Native", "Expo", "ShadCN", "Tailwind CSS", "Node.js", "Express.js", "RESTAPI’s", "Prisma ORM","MySQL", "MongoDB","Sevalla", "Git", "Github", "Postman", "Socket.io", "Cloudinary"]
}

export const publication = {
    title: "Timetable Scheduling- Promise Algorithm",
    description: "Published a paper in the International Journal of Advanced Research in Science, Communication and Technology (IJARSCT) on an automated timetable generation system. The paper highlights an optimized, error-free, and faculty-adaptive approach to scheduling using constraint-based algorithms."
}

export const techStack = {
    project1: ["ReactJS", "Express", "SQL", "Node"],
    project2: [""]
}