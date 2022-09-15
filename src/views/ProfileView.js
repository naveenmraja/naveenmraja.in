import '../styles.css';
import {motion} from 'framer-motion'
import {
    Avatar,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useMediaQuery
} from '@mui/material'
import {Badge, Cake, GitHub, LocationOn, Mail} from "@mui/icons-material";
import Header from "../components/Header";
import {
    ACTION_SEND_EMAIL,
    ACTION_VISIT_GITHUB,
    BIRTHDAY,
    CATEGORY_BUTTON_CLICK,
    DISABLE_BUTTON,
    EMAIL,
    ENABLE_BUTTON,
    GITHUB,
    LOCATION,
    NAME,
    PROFILE_VIEW,
    USER_BIRTHDAY,
    USER_EMAIL,
    USER_EMAIL_URL,
    USER_GITHUB,
    USER_GITHUB_URL,
    USER_LOCATION,
    USER_NAME
} from "../utils/Constants";
import {sendEventToAnalytics} from "../utils/Analytics";
import {CLOUDFRONT_DISTRIBUTION_URL} from "../utils/Config";

function getDetailsListItems() {
    const profileDetailsMap = {
        [NAME]: [USER_NAME, <Badge color={"secondary"}/>, DISABLE_BUTTON],
        [BIRTHDAY]: [USER_BIRTHDAY, <Cake color={"secondary"}/>, DISABLE_BUTTON],
        [LOCATION]: [USER_LOCATION, <LocationOn color={"secondary"}/>, DISABLE_BUTTON],
        [EMAIL]: [USER_EMAIL, <Mail color={"secondary"}/>, ENABLE_BUTTON],
        [GITHUB]: [USER_GITHUB, <GitHub color={"secondary"}/>, ENABLE_BUTTON]
    }
    const profileDetails = []
    Object.keys(profileDetailsMap).forEach((key) => {
        const [label, icon, buttonStatus] = profileDetailsMap[key]
        const buttonEnabled = (buttonStatus === ENABLE_BUTTON)
        profileDetails.push(
            <motion.div initial={{opacity: 1, x: 1500}}
                        whileHover={{scale: buttonEnabled ? 1.2 : 1}}
                        whileTap={{scale: buttonEnabled ? 0.9 : 1}}
                        animate={{x: [null, 1500, 0]}}
                        transition={{x: {delay: 0.6}}}
                        key={key}>
                <ListItem disablePadding>
                    <ListItemButton disableRipple={!buttonEnabled}
                                    sx={{
                                        cursor: buttonEnabled ? "cursor" : "default",
                                        textTransform: "none",
                                        "&.MuiButtonBase-root:hover": {
                                            bgcolor: buttonEnabled ? "rgba(255, 255, 255, 0.08)" : "transparent"
                                        }
                                    }}
                                    onClick={() => {
                                        if (key === GITHUB) {
                                            window.open(USER_GITHUB_URL, '_blank').focus()
                                            sendEventToAnalytics(CATEGORY_BUTTON_CLICK, ACTION_VISIT_GITHUB)
                                        }
                                        if (key === EMAIL) {
                                            window.open(USER_EMAIL_URL, '_blank').focus()
                                            sendEventToAnalytics(CATEGORY_BUTTON_CLICK, ACTION_SEND_EMAIL)
                                        }
                                    }}>
                        <ListItemIcon>
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={label}/>
                    </ListItemButton>
                </ListItem>
            </motion.div>
        )
    })
    return profileDetails
}

function ProfileView() {
    const bigScreen = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    const profileDetails = getDetailsListItems()
    return (
        <motion.div className={"baseContainer"}>
            <Grid container className={"baseContainer profileContainer"} direction={"row"}
                  justifyContent={"center"} alignItems={"center"} spacing={2}>
                <Header view={PROFILE_VIEW}/>
                <Grid className={"noPaddingLeftGridItem"} item xs={12} md={12}
                      sx={{height: bigScreen ? "60%" : "fit-content"}}>
                    <Grid container direction={"row"} className={"baseContainer"}
                          justifyContent={"center"} alignItems={"center"} spacing={3}>
                        <Grid item xs={10} md={3} sx={{height: bigScreen ? "100%" : "fit-content"}}>
                            <motion.div initial={{opacity: 1, x: -1500}}
                                        animate={{x: [null, -1500, 0]}}
                                        transition={{x: {delay: 0.2}}}>
                                <Typography variant={bigScreen ? "h5" : "h6"} gutterBottom
                                            sx={{cursor: 'default', fontWeight: 700}} color={"yellow"}>
                                    About Me
                                </Typography>
                                <Typography variant={bigScreen ? "body1" : "body2"} gutterBottom
                                            sx={{cursor: 'default'}}
                                            textAlign={"justify"} lineHeight={"200%"}>
                                    I am an experienced full-stack developer and a certified Solutions Architect
                                    specialised in building robust and scalable backend systems. I love taking on
                                    challenging and complex problems and work through them using different technologies.
                                    I'm looking for a challenging position, ideally at a startup, which can enable me to
                                    learn and explore a new path.
                                </Typography>
                            </motion.div>
                        </Grid>
                        <Grid item xs={10} md={3} sx={{height: bigScreen ? "100%" : "fit-content"}}>
                            <Grid container direction={"row"} alignItems={"center"}>
                                <motion.div initial={{opacity: 1, y: 1500}}
                                            whileHover={{scale: 1.2}}
                                            whileTap={{scale: 0.9}}
                                            animate={{y: [null, 1500, 0]}}
                                            transition={{y: {delay: 0.4}}}
                                            style={{width: 'fit-content', margin: '0 auto'}}>
                                    <Grid item>
                                        <Avatar
                                            alt="Naveen Raja"
                                            src={`${CLOUDFRONT_DISTRIBUTION_URL}/naveen-pic.webp`}
                                            sx={{width: 200, height: 200, border: "5px solid white"}}
                                        />
                                    </Grid>
                                </motion.div>
                            </Grid>
                        </Grid>
                        <Grid item xs={10} md={3} sx={{height: bigScreen ? "100%" : "fit-content"}}>
                            <Grid container alignItems={"center"}>
                                <Grid item xs={12} md={12}>
                                    <motion.div initial={{opacity: 1, x: 1500}}
                                                animate={{x: [null, 1500, 0]}}
                                                transition={{x: {delay: 0.6}}}>
                                        <Typography variant={bigScreen ? "h5" : "h6"} gutterBottom
                                                    sx={{cursor: 'default', fontWeight: 700}} color={"yellow"}>
                                            Details
                                        </Typography>
                                    </motion.div>
                                    <List disablePadding>
                                        {profileDetails}
                                    </List>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </motion.div>
    );
}

export default ProfileView;