import './styles.css';
import {AnimatePresence, motion} from 'framer-motion'
import HomeView from "./views/HomeView";
import {
    BusinessCenter,
    ContactMail,
    Home,
    KeyboardDoubleArrowLeftOutlined,
    KeyboardDoubleArrowRightOutlined,
    LaptopMac,
    Person,
    Source
} from "@mui/icons-material";
import {useState} from "react";
import ProfileView from "./views/ProfileView";
import FloatingButton from "./components/FloatingButton";
import SkillsView from "./views/SkillsView";
import ExperiencesView from "./views/ExperiencesView";
import ProjectsView from "./views/ProjectsView";
import ContactView from "./views/ContactView";
import {
    CATEGORY_NAVIGATION,
    CONTACT_VIEW,
    EXPERIENCES_VIEW,
    HOME_VIEW,
    PROFILE_VIEW,
    PROJECTS_VIEW,
    SKILLS_VIEW
} from "./utils/Constants"
import JumpToMenu from "./components/JumpToMenu";
import {sendEventToAnalytics} from "./utils/Analytics";

function App() {
    const [selectedView, setSelectedView] = useState(0)
    const [feedbackEmail, setFeedbackEmail] = useState("")
    const [userRating, setUserRating] = useState(0)
    const [userFeedback, setUserFeedback] = useState("")
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userMessage, setUserMessage] = useState("")
    const [additionalDetails, setAdditionalDetails] = useState("")
    const contactViewProps = {
        feedbackEmail, setFeedbackEmail, userRating, setUserRating,
        userFeedback, setUserFeedback, userName, setUserName, userEmail, setUserEmail,
        userMessage, setUserMessage, additionalDetails, setAdditionalDetails
    }
    const navigateToResume = (event) => {
        event.preventDefault()
        setSelectedView(1)
        sendEventToAnalytics(CATEGORY_NAVIGATION, PROFILE_VIEW)
    }
    const views = [HOME_VIEW, PROFILE_VIEW, SKILLS_VIEW, EXPERIENCES_VIEW, PROJECTS_VIEW, CONTACT_VIEW]
    const viewMap = {
        [HOME_VIEW]: <HomeView navigateToResume={navigateToResume}/>,
        [PROFILE_VIEW]: <ProfileView/>,
        [SKILLS_VIEW]: <SkillsView/>,
        [EXPERIENCES_VIEW]: <ExperiencesView/>,
        [PROJECTS_VIEW]: <ProjectsView/>,
        [CONTACT_VIEW]: <ContactView {...contactViewProps}/>
    }
    const isFirstPage = (selectedView === 0)
    const isLastPage = (selectedView === views.length - 1)
    const currentView = views[selectedView]
    const viewIcons = {
        [HOME_VIEW]: <Home sx={{mr: isLastPage ? 1 : 0, ml: !isLastPage ? 1 : 0, transform: `translate(0px, -1px)`}}/>,
        [PROFILE_VIEW]: <Person
            sx={{mr: (selectedView > 1) ? 0 : 1, ml: (selectedView > 1) ? 1 : 0, transform: `translate(0px, -1px)`}}/>,
        [SKILLS_VIEW]: <LaptopMac sx={{mr: (selectedView > 2) ? 0 : 1, ml: (selectedView > 2) ? 1 : 0}}/>,
        [EXPERIENCES_VIEW]: <BusinessCenter
            sx={{mr: (selectedView > 3) ? 0 : 1, ml: (selectedView > 3) ? 1 : 0, transform: `translate(0px, -2px)`}}/>,
        [PROJECTS_VIEW]: <Source
            sx={{mr: (selectedView > 4) ? 0 : 1, ml: (selectedView > 4) ? 1 : 0, transform: `translate(0px, -1px)`}}/>,
        [CONTACT_VIEW]: <ContactMail sx={{mr: (selectedView > 5) ? 0 : 1, ml: (selectedView > 5) ? 1 : 0}}/>
    }

    function getViewIcon(view) {
        return viewIcons[view]
    }

    const navigateToRight = () => {
        const newView = isLastPage ? 0 : (selectedView + 1)
        setSelectedView(newView)
        sendEventToAnalytics(CATEGORY_NAVIGATION, views[newView])
    }
    const navigateToLeft = () => {
        const newView = isFirstPage ? selectedView : (selectedView - 1)
        setSelectedView(newView)
        sendEventToAnalytics(CATEGORY_NAVIGATION, views[newView])
    }

    return (
        <motion.div className={"baseContainer"}>
            <AnimatePresence mode={"wait"}>
                <motion.div className={"baseContainer"}
                            key={views[selectedView]}
                            initial={{opacity: 0.5}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0.1}}>
                    <JumpToMenu setSelectedView={setSelectedView} currentView={selectedView}/>
                    <FloatingButton label={!isFirstPage ? views[selectedView - 1] : ""} hidden={isFirstPage}
                                    handleClick={() => navigateToLeft()}
                                    icon={<KeyboardDoubleArrowLeftOutlined size={"large"}/>}
                                    labelIcon={!isFirstPage ? getViewIcon(views[selectedView - 1]) : ""}/>
                    {viewMap[currentView]}
                    <FloatingButton bottom={true} label={!isLastPage ? views[selectedView + 1] : views[0]}
                                    hidden={isFirstPage} handleClick={() => navigateToRight()}
                                    icon={<KeyboardDoubleArrowRightOutlined size={"large"}/>}
                                    labelIcon={!isLastPage ? getViewIcon(views[selectedView + 1]) : getViewIcon(views[0])}/>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
}

export default App;
