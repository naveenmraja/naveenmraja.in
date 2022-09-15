import '../styles.css';
import {motion} from 'framer-motion'
import {
    Avatar,
    Button,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material'
import {Fragment} from "react";
import {FaUserGraduate} from "react-icons/fa";
import {SiUdemy} from "react-icons/si";
import Header from "../components/Header";
import {
    ACTION_VISIT_CREDLY,
    ACTION_VISIT_DOCKER_CERT,
    ACTION_VISIT_JUSPAY,
    ACTION_VISIT_UPWORK,
    CATEGORY_BUTTON_CLICK,
    EXPERIENCES_VIEW,
    JUSPAY_URL,
    USER_CREDLY_URL,
    USER_UDEMY_DOCKER_CERT_URL,
    USER_UPWORK_URL
} from "../utils/Constants";
import {Link, LocationOn} from "@mui/icons-material";
import {sendEventToAnalytics} from "../utils/Analytics";
import {CLOUDFRONT_DISTRIBUTION_URL} from "../utils/Config";

function ExperiencesView() {
    const bigScreen = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    return (
        <motion.div className={"baseContainer"}>
            <Grid container className={"baseContainer experiencesContainer"} direction={"row"}
                  justifyContent={"center"} alignItems={"center"} spacing={2} sx={{backgroundColor: "#7000dc"}}>
                <Header view={EXPERIENCES_VIEW}/>
                <Grid className={"noPaddingGridItem"} item xs={12} md={12}
                      sx={{height: bigScreen ? "70%" : "fit-content"}}>
                    <Grid container direction={"row"} className={"baseContainer"}
                          justifyContent={"center"} alignItems={"center"} spacing={3}>
                        <Grid item className={bigScreen ? "noPaddingTopGridItem" : ""}
                              xs={12} md={5} sx={{height: bigScreen ? "100%" : "fit-content"}}>
                            <motion.div initial={{opacity: 1, x: 1500}}
                                        animate={{x: [null, 1500, 0]}}>
                                <Typography variant={bigScreen ? "h5" : "h6"} gutterBottom
                                            sx={{cursor: 'default', fontWeight: 700}} color={"yellow"}>
                                    Experience
                                </Typography>
                            </motion.div>
                            <List>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <motion.div initial={{opacity: 1, x: 1500}}
                                                    whileHover={{scale: 1.2}}
                                                    whileTap={{scale: 0.9}}
                                                    animate={{x: [null, 1500, 0]}}
                                                    transition={{x: {delay: 0.5}}} style={{cursor: "pointer"}}
                                                    onClick={() => {
                                                        window.open(JUSPAY_URL, '_blank').focus()
                                                        sendEventToAnalytics(CATEGORY_BUTTON_CLICK, ACTION_VISIT_JUSPAY)
                                                    }}>
                                            <Avatar alt="Juspay Technologies"
                                                    src={`${CLOUDFRONT_DISTRIBUTION_URL}/jusp-logo-white.webp`}/>
                                        </motion.div>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <Fragment>
                                                <motion.div initial={{opacity: 1, x: 1500}}
                                                            animate={{x: [null, 1500, 0]}}
                                                            transition={{x: {delay: 0.5}}}>
                                                    <Typography variant={"h6"}>
                                                        Juspay Technologies
                                                    </Typography>
                                                </motion.div>
                                                <motion.div initial={{opacity: 1, x: 1500}}
                                                            animate={{x: [null, 1500, 0]}}
                                                            transition={{x: {delay: 0.7}}}>
                                                    <Typography variant={"body1"}>
                                                        <b>Senior Software Development Engineer</b>
                                                    </Typography>
                                                </motion.div>
                                                <motion.div initial={{opacity: 1, x: 1500}}
                                                            animate={{x: [null, 1500, 0]}}
                                                            transition={{x: {delay: 0.9}}}>
                                                    <Typography variant={"body1"}>
                                                        <b>Apr 2016 - Jan 2020</b>
                                                    </Typography>
                                                </motion.div>
                                                <motion.div initial={{opacity: 1, x: 1500}}
                                                            animate={{x: [null, 1500, 0]}}
                                                            transition={{x: {delay: 1.1}}}>
                                                    <Stack direction={"row"} spacing={1}>
                                                        <Button disableElevation disableRipple size="small"
                                                                startIcon={<LocationOn/>} variant={"text"}
                                                                color={"secondary"}
                                                                sx={{
                                                                    textTransform: "none",
                                                                    cursor: "default",
                                                                    padding: 0,
                                                                    m: "none",
                                                                    background: "none",
                                                                    "&.MuiButtonBase-root:hover": {
                                                                        bgcolor: "transparent"
                                                                    }
                                                                }}>
                                                            <b>{bigScreen ? "Bangalore, India" : "Bangalore"}</b>
                                                        </Button>
                                                        <Typography variant={"h6"}>
                                                            <b>|</b>
                                                        </Typography>
                                                        <Button disableRipple disableElevation startIcon={<Link/>}
                                                                variant={"text"} color={"secondary"}
                                                                sx={{
                                                                    textTransform: "none",
                                                                    padding: 0,
                                                                    m: "none",
                                                                    "&.MuiButtonBase-root:hover": {bgcolor: "transparent"}
                                                                }}
                                                                onClick={() => {
                                                                    window.open(JUSPAY_URL, '_blank').focus()
                                                                    sendEventToAnalytics(CATEGORY_BUTTON_CLICK, ACTION_VISIT_JUSPAY)
                                                                }}>
                                                            <b style={{textDecoration: "underline"}}>{JUSPAY_URL}</b>
                                                        </Button>
                                                    </Stack>
                                                </motion.div>
                                                <ul className={"experiencesPageList"}>
                                                    <motion.div initial={{opacity: 1, x: 1500}}
                                                                animate={{x: [null, 1500, 0]}}
                                                                transition={{x: {delay: 1.3}}}>
                                                        <li style={{paddingTop: "10px", paddingLeft: "0px"}}>
                                                            <Typography variant={"body1"} textAlign={"justify"}>
                                                                One of the early hires of the fintech startup. I was a
                                                                lead developer of their main product, Express Checkout
                                                                that handles millions of payment transactions everyday
                                                            </Typography>
                                                        </li>
                                                    </motion.div>
                                                    <motion.div initial={{opacity: 1, x: 1500}}
                                                                animate={{x: [null, 1500, 0]}}
                                                                transition={{x: {delay: 1.5}}}>
                                                        <li style={{paddingTop: "10px"}}>
                                                            <Typography variant={"body1"} textAlign={"justify"}>
                                                                Tasked with implementing new features, improving
                                                                existing features, code deployments, code reviews, bug
                                                                fixes, system maintenance and customer support
                                                            </Typography>
                                                        </li>
                                                    </motion.div>
                                                    <motion.div initial={{opacity: 1, x: 1500}}
                                                                animate={{x: [null, 1500, 0]}}
                                                                transition={{x: {delay: 1.7}}}>
                                                        <li style={{paddingTop: "10px"}}>
                                                            <Typography variant={"body1"} textAlign={"justify"}>
                                                                Primarily involved in designing and developing scalable
                                                                backend APIs and other backend features
                                                            </Typography>
                                                        </li>
                                                    </motion.div>
                                                    <motion.div initial={{opacity: 1, x: 1500}}
                                                                animate={{x: [null, 1500, 0]}}
                                                                transition={{x: {delay: 1.9}}}>
                                                        <li style={{paddingTop: "10px"}}>
                                                            <Typography variant={"body1"} textAlign={"justify"}>
                                                                Worked across several projects in both backend and
                                                                frontend development
                                                            </Typography>
                                                        </li>
                                                    </motion.div>
                                                </ul>
                                            </Fragment>}
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item className={bigScreen ? "noPaddingTopGridItem" : ""}
                              xs={12} md={5} sx={{height: bigScreen ? "100%" : "fit-content"}}>
                            <motion.div initial={{opacity: 1, x: 1500}}
                                        animate={{x: [null, 1500, 0]}}
                                        transition={{x: {delay: 2.1}}}>
                                <Typography variant={"h5"} gutterBottom
                                            sx={{cursor: 'default', fontWeight: 700}} color={"yellow"}>
                                    Certifications
                                </Typography>
                            </motion.div>
                            <List>
                                <motion.div initial={{opacity: 1, x: 1500}}
                                            whileHover={{scale: 1.1}}
                                            whileTap={{scale: 0.9}}
                                            animate={{x: [null, 1500, 0]}}
                                            transition={{x: {delay: 2.3}}}>
                                    <ListItem alignItems="flex-start" sx={{cursor: "pointer"}} onClick={() => {
                                        window.open(USER_CREDLY_URL, '_blank').focus()
                                        sendEventToAnalytics(CATEGORY_BUTTON_CLICK, ACTION_VISIT_CREDLY)
                                    }}>
                                        <ListItemAvatar>
                                            <Avatar alt="AWS Certified Solutions Architect"
                                                    src={`${CLOUDFRONT_DISTRIBUTION_URL}/aws-sa.webp`}/>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={
                                                <Fragment>
                                                    <Typography variant={"h6"}>
                                                        AWS Certified Solutions Architect – Professional
                                                    </Typography>
                                                    <Typography variant={"body2"}>
                                                        <b>July, 2020</b>
                                                    </Typography>
                                                </Fragment>
                                            }
                                        />
                                    </ListItem>
                                </motion.div>
                                <motion.div initial={{opacity: 1, x: 1500}}
                                            whileHover={{scale: 1.1}}
                                            whileTap={{scale: 0.9}}
                                            animate={{x: [null, 1500, 0]}}
                                            transition={{x: {delay: 2.5}}}>
                                    <ListItem alignItems="flex-start" sx={{cursor: "pointer"}} onClick={() => {
                                        window.open(USER_UPWORK_URL, '_blank').focus()
                                        sendEventToAnalytics(CATEGORY_BUTTON_CLICK, ACTION_VISIT_UPWORK)
                                    }}>
                                        <ListItemAvatar>
                                            <Avatar alt="Upwork Certified Backend Developer"
                                                    src={`${CLOUDFRONT_DISTRIBUTION_URL}/upwork-python.webp`}/>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={
                                                <Fragment>
                                                    <Typography variant={"h6"}>
                                                        Upwork Certified Python Backend Developer
                                                    </Typography>
                                                    <Typography variant={"body2"}>
                                                        <b>August, 2022</b>
                                                    </Typography>
                                                </Fragment>
                                            }
                                        />
                                    </ListItem>
                                </motion.div>
                                <motion.div initial={{opacity: 1, x: 1500}}
                                            whileHover={{scale: 1.1}}
                                            whileTap={{scale: 0.9}}
                                            animate={{x: [null, 1500, 0]}}
                                            transition={{x: {delay: 2.7}}}>
                                    <ListItem alignItems="flex-start" sx={{cursor: "pointer"}} onClick={() => {
                                        window.open(USER_UDEMY_DOCKER_CERT_URL, '_blank').focus()
                                        sendEventToAnalytics(CATEGORY_BUTTON_CLICK, ACTION_VISIT_DOCKER_CERT)
                                    }}>
                                        <ListItemIcon>
                                            <SiUdemy size={30}/>
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={
                                                <Fragment>
                                                    <Typography variant={"h6"}>
                                                        Udemy Docker and Kubernetes - A complete Guide
                                                    </Typography>
                                                    <Typography variant={"body2"}>
                                                        <b>August, 2022</b>
                                                    </Typography>
                                                </Fragment>
                                            }
                                        />
                                    </ListItem>
                                </motion.div>
                            </List>
                            <motion.div initial={{opacity: 1, x: 1500}}
                                        animate={{x: [null, 1500, 0]}}
                                        transition={{x: {delay: 2.9}}}>
                                <Typography variant={"h5"} gutterBottom
                                            sx={{cursor: 'default', fontWeight: 700}} color={"yellow"}>
                                    Education
                                </Typography>
                            </motion.div>
                            <List>
                                <motion.div initial={{opacity: 1, x: 1500}}
                                            animate={{x: [null, 1500, 0]}}
                                            transition={{x: {delay: 3.1}}}>
                                    <ListItem alignItems="flex-start">
                                        <ListItemIcon>
                                            <FaUserGraduate size={30}/>
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={
                                                <Fragment>
                                                    <Typography variant={"h6"}>
                                                        SSN College of Engineering, Chennai
                                                    </Typography>
                                                    <Typography variant={"body1"}>
                                                        <b>Bachelor of Technology</b>
                                                    </Typography>
                                                    <Typography variant={"body2"}>
                                                        <b>2012-2016</b>
                                                    </Typography>
                                                </Fragment>
                                            }
                                        />
                                    </ListItem>
                                </motion.div>
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </motion.div>
    );
}

export default ExperiencesView;