import {DiDatabase, DiGrails, DiNodejsSmall} from "react-icons/di";
import {
    SiAmazonaws,
    SiAmazondynamodb,
    SiApachegroovy,
    SiCplusplus,
    SiDocker,
    SiFastapi,
    SiFlask,
    SiJava,
    SiJavascript,
    SiKubernetes,
    SiMongodb,
    SiMysql,
    SiNginx,
    SiPython,
    SiReact,
    SiRedis,
    SiRedux,
    SiSocketdotio,
    SiSolidity,
    SiSpring
} from "react-icons/si";
import {IconButton, Tooltip} from "@mui/material";
import {CLOUDFRONT_DISTRIBUTION_URL} from "./Config";

export const PRODUCTION = "production"
export const ENVIRONMENT = process.env.NODE_ENV

export const NAME = "NAME"
export const BIRTHDAY = "BIRTHDAY"
export const LOCATION = "LOCATION"
export const EMAIL = "EMAIL"
export const GITHUB = "GITHUB"

export const ENABLE_BUTTON = "ENABLE_BUTTON"
export const DISABLE_BUTTON = "DISABLE_BUTTON"

export const USER_NAME = "Naveen M Raja"
export const USER_BIRTHDAY = "27 August, 1995"
export const USER_LOCATION = "Chennai, India"
export const USER_EMAIL = "naveenmraja@gmail.com"
export const USER_GITHUB = "github.com/naveenmraja"

export const USER_GITHUB_URL = `https://${USER_GITHUB}`
export const USER_EMAIL_URL = `mailto:${USER_EMAIL}`
export const USER_UPWORK_URL = `https://www.upwork.com/freelancers/~016663a98c5f8ea668?s=1110580755107926016`
export const USER_CREDLY_URL = "https://www.credly.com/badges/f2c4ae95-63e8-4427-b1b4-aed4de397886/public_url"
export const USER_UDEMY_DOCKER_CERT_URL = "https://drive.google.com/file/d/1K4PUlyLNEpPxBylLlzS38zssnZRCgIOS/view?usp=sharing"

export const JUSPAY_URL = "https://juspay.in"

export const HOME_VIEW = "Home"
export const PROFILE_VIEW = "Profile"
export const SKILLS_VIEW = "Skills"
export const EXPERIENCES_VIEW = "Experiences"
export const PROJECTS_VIEW = "Projects"
export const CONTACT_VIEW = "Contact"

export const HEADER_TEXT = "HEADER_TEXT"
export const SUBHEADER1_TEXT = "SUBHEADER1_TEXT"
export const SUBHEADER2_TEXT = "SUBHEADER2_TEXT"
export const HEADER_STYLE = "HEADER_STYLE"

export const LANGUAGES_ICON_MAP = {
    Groovy: [<SiApachegroovy size={40}/>, 5],
    Python: [<SiPython size={30} color={"#f1d24f"}/>, 5],
    Java: [<SiJava size={30}/>, 5],
    Javascript: [<SiJavascript size={30} color={"#f2cd36"}/>, 5],
    SQL: [<DiDatabase size={30} color={"#f2aa05"}/>, 5],
    "C/C++": [<SiCplusplus size={30} color={"#007ac2"}/>, 4],
    Solidity: [<SiSolidity size={30}/>, 3]
}

export const TECHNOLOGIES_ICON_AND_RATING_MAP = {
    "Grails (Groovy)": [<DiGrails size={30} color={"#feb572"}/>, 5],
    "Node.js/Express": [<DiNodejsSmall size={30} color={"#67a063"}/>, 5],
    "Spring/Hibernate": [<SiSpring size={30} color={"#6cb23e"}/>, 5],
    "Flask (Python)": [<SiFlask size={30}/>, 4],
    "FastAPI": [<SiFastapi size={30} color={"#039486"}/>, 4],
    "React/Redux": [<SiReact size={30} color={"#61dafb"}/>, 5],
    "Nginx": [<SiNginx size={30} color={"#019739"}/>, 4],
    "AWS": [<SiAmazonaws size={30} color={"#ec912e"}/>, 5],
    "Docker": [<SiDocker size={30} color={"#2f9dee"}/>, 5],
    "Kubernetes": [<SiKubernetes size={30} color={"#316ee6"}/>, 4],
    "Redis": [<SiRedis size={30} color={"#dc372c"}/>, 5],
    "MySQL": [<SiMysql size={30}/>, 5],
    "DynamoDB": [<SiAmazondynamodb size={30} color={"#f48b34"}/>, 4],
    "MongoDB": [<SiMongodb size={30} color={"#138b4c"}/>, 3]
}

const NODEJS_TOOLTIP_ICON = <Tooltip title="Node.js" key={"nodejs-tooltip"} arrow>
    <IconButton><DiNodejsSmall size={30} color={"#67a063"}/></IconButton></Tooltip>
const SOCKETIO_TOOLTIP_ICON = <Tooltip title="Socket.io" key={"socketio-tooltip"} arrow>
    <IconButton><SiSocketdotio size={20}/></IconButton></Tooltip>
const FLASK_TOOLTIP_ICON = <Tooltip title="Flask (Python)" key={"flask-tooltip"} arrow>
    <IconButton><SiFlask size={20}/></IconButton></Tooltip>
const REACT_TOOLTIP_ICON = <Tooltip title="React.js" key={"react-tooltip"} arrow>
    <IconButton><SiReact size={20} color={"#61dafb"}/></IconButton></Tooltip>
const REDUX_TOOLTIP_ICON = <Tooltip title="Redux" key={"redux-tooltip"} arrow>
    <IconButton><SiRedux size={20} color={"#9266e1"}/></IconButton></Tooltip>
const MONGODB_TOOLTIP_ICON = <Tooltip title="MongoDB" key={"mongodb-tooltip"} arrow>
    <IconButton><SiMongodb size={20} color={"#138b4c"}/></IconButton></Tooltip>
const DYNAMODB_TOOLTIP_ICON = <Tooltip title="DynamoDB" key={"dynamodb-tooltip"} arrow>
    <IconButton><SiAmazondynamodb size={20} color={"#f48b34"}/></IconButton></Tooltip>
const REDIS_TOOLTIP_ICON = <Tooltip title="Redis" key={"redis-tooltip"} arrow>
    <IconButton><SiRedis size={20} color={"#dc372c"}/></IconButton></Tooltip>
const NGINX_TOOLTIP_ICON = <Tooltip title="NGINX" key={"nginx-tooltip"} arrow>
    <IconButton><SiNginx size={20} color={"#019739"}/></IconButton></Tooltip>
const DOCKER_TOOLTIP_ICON = <Tooltip title="Docker" key={"docker-tooltip"} arrow>
    <IconButton><SiDocker size={20} color={"#2f9dee"}/></IconButton></Tooltip>
const KUBERNETES_TOOLTIP_ICON = <Tooltip title="Kubernetes" key={"kubernetes-tooltip"} arrow>
    <IconButton><SiKubernetes size={20} color={"#316ee6"}/></IconButton></Tooltip>
const FASTAPI_TOOLTIP_ICON = <Tooltip title="FastAPI (Python)" key={"fastapi-tooltip"} arrow>
    <IconButton><SiFastapi size={20} color={"#019739"}/></IconButton></Tooltip>

export const PROJECTS_LIST = [
    {
        title: "prattle.in",
        name: "prattle",
        subheader: "Anonymous chat application",
        description: "Prattle is an anonymous chat application and a great way to meet new people. " +
            "Prattle will pick someone random for you and create a private chat session. " +
            "Prattle will look to connect you with someone who shares some of your interests.",
        logoPath: `${CLOUDFRONT_DISTRIBUTION_URL}/prattle-logo.webp`,
        imagePath: `${CLOUDFRONT_DISTRIBUTION_URL}/prattle-screenshot.webp`,
        projectURL: "https://prattle.in",
        projectRepoURL: "https://github.com/naveenmraja/prattle.in",
        isHosted: true,
        techStack: [NODEJS_TOOLTIP_ICON, SOCKETIO_TOOLTIP_ICON, REACT_TOOLTIP_ICON, REDUX_TOOLTIP_ICON,
            MONGODB_TOOLTIP_ICON, REDIS_TOOLTIP_ICON, NGINX_TOOLTIP_ICON, DOCKER_TOOLTIP_ICON, KUBERNETES_TOOLTIP_ICON]
    },
    {
        title: "mysecrets.tech",
        name: "mysecrets",
        subheader: "A Simple diary application",
        description: "MySecrets is a simple diary application that lets you record your memories. " +
            "You can create an entry against any date, edit and delete it at any point in time. " +
            "MySecrets provides a dashboard to view and navigate through all the entries created.",
        logoPath: `${CLOUDFRONT_DISTRIBUTION_URL}/mysecrets-logo.webp`,
        imagePath: `${CLOUDFRONT_DISTRIBUTION_URL}/mysecrets-screenshot.webp`,
        projectURL: "https://mysecrets.tech",
        projectRepoURL: "https://github.com/naveenmraja/mysecrets.tech",
        isHosted: true,
        techStack: [NODEJS_TOOLTIP_ICON, REACT_TOOLTIP_ICON, REDUX_TOOLTIP_ICON, DYNAMODB_TOOLTIP_ICON,
            NGINX_TOOLTIP_ICON, DOCKER_TOOLTIP_ICON, KUBERNETES_TOOLTIP_ICON]
    },
    {
        title: "naveenmraja.in",
        name: "naveenmraja.in",
        subheader: "Personal Website",
        description: "A personal website built using React.js. " +
            "This application is an online interactive resume which gives an overview of my skills, career and education. " +
            "You can also contact me or choose to hire me through the website.",
        logoPath: `${CLOUDFRONT_DISTRIBUTION_URL}/logo192.webp`,
        imagePath: `${CLOUDFRONT_DISTRIBUTION_URL}/naveenmraja-screenshot.webp`,
        projectURL: "https://naveenmraja.in",
        projectRepoURL: "https://github.com/naveenmraja/naveenmraja.in",
        isHosted: true,
        techStack: [REACT_TOOLTIP_ICON, NGINX_TOOLTIP_ICON, DOCKER_TOOLTIP_ICON, KUBERNETES_TOOLTIP_ICON]
    },
    {
        title: "ExpressCheckout Demo",
        name: "ecdemo",
        subheader: "Product demo",
        description: "A demo project that I built for Juspay that showcases all the product offerings. " +
            "The project shows all the modes of checkout and user can transact end to end depending on the payment gateways that is configured in their account. ",
        logoPath: `${CLOUDFRONT_DISTRIBUTION_URL}/jusp-logo-white.webp`,
        imagePath: `${CLOUDFRONT_DISTRIBUTION_URL}/ecdemo-screenshot.webp`,
        projectURL: "https://ecdemo.herokuapp.com",
        projectRepoURL: "https://bitbucket.org/juspay/ec-demo",
        isHosted: true,
        techStack: [FLASK_TOOLTIP_ICON, REACT_TOOLTIP_ICON, REDUX_TOOLTIP_ICON]
    },
    {
        title: "Assets Dashboard",
        name: "assetdashboard",
        subheader: "Dashboard for assets",
        description: "A dashboard page to display the assets owned by the user with a piechart. " +
            "Users can filter the assets based on the asset type using the filter menu or by clicking on the piechart segment.",
        logoPath: `${CLOUDFRONT_DISTRIBUTION_URL}/assetsd-logo.webp`,
        imagePath: `${CLOUDFRONT_DISTRIBUTION_URL}/assetsd-screenshot.webp`,
        projectURL: "https://github.com/naveenmraja/assets-dashboard",
        projectRepoURL: "https://github.com/naveenmraja/assets-dashboard",
        isHosted: false,
        techStack: [FASTAPI_TOOLTIP_ICON, REACT_TOOLTIP_ICON, REDUX_TOOLTIP_ICON]
    }
]

// Analytics related declarations
export const CATEGORY_NAVIGATION = "navigation"
export const CATEGORY_BUTTON_CLICK = "button_click"
export const CATEGORY_NETWORK_CALLS = "network_calls"
export const CATEGORY_WEBSITE_METRICS = "website_metrics"
export const CATEGORY_ERROR = "error"

export const ACTION_DOWNLOAD_RESUME = "resume_download"
export const ACTION_VISIT_GITHUB = "visit_github"
export const ACTION_VISIT_UPWORK = "visit_upwork"
export const ACTION_VISIT_CREDLY = "visit_credly"
export const ACTION_VISIT_DOCKER_CERT = "visit_docker_cert"
export const ACTION_VISIT_JUSPAY = "visit_juspay"
export const ACTION_SEND_EMAIL = "send_email"
export const ACTION_COPY_EMAIL = "copy_email"
export const ACTION_COPY_EMAIL_ERROR = "error_copy_email"
export const ACTION_PROJECTS_NAVIGATION_PAGE = "projects_page"
export const ACTION_SEND_MESSAGE = "send_message"
export const ACTION_SEND_MESSAGE_API = "api_send_message"
export const ACTION_SUBMIT_FEEDBACK = "submit_feedback"
export const ACTION_SUBMIT_FEEDBACK_API = "api_submit_feedback"
export const ACTION_WEBSITE_RATING = "website_rating"