import {SpeedDial, SpeedDialAction, styled} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {motion} from "framer-motion";
import {cloneElement, Fragment} from "react";
import {BusinessCenter, ContactMail, Home, LaptopMac, Person, Source} from "@mui/icons-material";
import {sendEventToAnalytics} from "../utils/Analytics";
import {CATEGORY_NAVIGATION} from "../utils/Constants";

const StyledSpeedDial = styled(SpeedDial)(({theme}) => ({
    position: 'absolute',
    '&.MuiSpeedDial-directionDown': {
        top: "3%",
        right: "5%",
    },
}));

function JumpToMenu(props) {
    const actions = [
        {icon: <Home color={"secondary"}/>, name: 'Home'},
        {icon: <Person color={"secondary"}/>, name: 'Profile'},
        {icon: <LaptopMac color={"secondary"}/>, name: 'Skills'},
        {icon: <BusinessCenter color={"secondary"}/>, name: 'Experiences'},
        {icon: <Source color={"secondary"}/>, name: 'Projects'},
        {icon: <ContactMail color={"secondary"}/>, name: 'Contact'}
    ]
    return (
        <Fragment>
            <motion.div initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{opacity: {delay: 1}}}>
                <StyledSpeedDial
                    ariaLabel="JumpTo Menu"
                    icon={<MenuIcon/>}
                    direction={"down"}
                >
                    {actions.map((action, index) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={(index === props.currentView) ?
                                cloneElement(action.icon, {color: "primary"}) : action.icon}
                            tooltipTitle={action.name}
                            sx={{bgcolor: (index === props.currentView) ? 'secondary.main' : "primary.main"}}
                            onClick={() => {
                                props.setSelectedView(index)
                                sendEventToAnalytics(CATEGORY_NAVIGATION, action.name)
                            }}
                        />
                    ))}
                </StyledSpeedDial>
            </motion.div>
        </Fragment>
    )
}

export default JumpToMenu