import '../styles.css';
import {motion} from 'framer-motion'
import {
    Button,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Tooltip,
    Typography,
    useMediaQuery
} from '@mui/material'
import {CheckCircle, ContentCopy, Email, Mail} from "@mui/icons-material";
import {SiUpwork} from "react-icons/si";
import FeedbackForm from "../components/FeedbackForm";
import ContactMeForm from "../components/ContactMeForm";
import Header from "../components/Header";
import {
    ACTION_COPY_EMAIL,
    ACTION_COPY_EMAIL_ERROR,
    ACTION_SEND_EMAIL,
    ACTION_VISIT_UPWORK,
    CATEGORY_BUTTON_CLICK,
    CATEGORY_ERROR,
    CONTACT_VIEW,
    USER_EMAIL,
    USER_EMAIL_URL,
    USER_UPWORK_URL
} from "../utils/Constants";
import {useState} from "react";
import {sendEventToAnalytics} from "../utils/Analytics";

function ContactView(props) {
    const bigScreen = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    const [copiedToClipboard, setCopiedToClipboard] = useState(false)
    const showCopiedIcon = () => {
        setCopiedToClipboard(true);
        setTimeout(() => setCopiedToClipboard(false), 1000)
    }
    const copyEmailToClipboard = async (event) => {
        event.preventDefault()
        try {
            await navigator.clipboard.writeText(USER_EMAIL)
            showCopiedIcon()
        } catch (e) {
            sendEventToAnalytics(CATEGORY_ERROR, ACTION_COPY_EMAIL_ERROR)
        }
        sendEventToAnalytics(CATEGORY_BUTTON_CLICK, ACTION_COPY_EMAIL)
    }
    return (
        <motion.div className={"baseContainer"}>
            <Grid container className={"baseContainer contactContainer"} direction={"row"}
                  justifyContent={"center"} alignItems={"center"} spacing={2}>
                <Header view={CONTACT_VIEW}/>
                <Grid item className={bigScreen ? "noPaddingGridItem" : ""} xs={12} md={12}
                      sx={{height: bigScreen ? "73%" : "fit-content"}}>
                    <Grid container direction={"row"} className={"baseContainer"}
                          justifyContent={"center"} alignItems={"center"}>
                        <Grid item className={"noPaddingGridItem"} xs={12} md={4}
                              sx={{height: bigScreen ? "100%" : "fit-content"}}>
                            <motion.div initial={{opacity: 1, x: -1500}}
                                        animate={{x: [null, -1500, 0]}}
                                        transition={{x: {delay: 0.2}}}
                                        className={"baseContainer"}>
                                <ContactMeForm {...props} />
                            </motion.div>
                        </Grid>
                        <Grid item className={bigScreen ? "noPaddingGridItem" : "noPaddingLeftGridItem"} xs={12} md={6}
                              sx={{height: bigScreen ? "100%" : "fit-content"}}>
                            <Grid container className={"baseContainer"} direction={"row"}
                                  justifyContent={"center"} alignItems={"center"} spacing={2}>
                                <Grid item className={bigScreen ? "noPaddingGridItem" : "noPaddingLeftGridItem"} xs={10}
                                      md={6}>
                                    <motion.div initial={{opacity: 1, x: 1500}}
                                                animate={{x: [null, 1500, 0]}}
                                                transition={{x: {delay: 0.4}}}>
                                        <List>
                                            <ListItem secondaryAction={
                                                <Tooltip title={copiedToClipboard ? "Copied" : "Copy Email"}
                                                         placement="top-end" arrow
                                                         color={copiedToClipboard ? "success" : "secondary"}>
                                                    <IconButton onClick={copyEmailToClipboard}>
                                                        {copiedToClipboard ? <CheckCircle/> : <ContentCopy/>}
                                                    </IconButton>
                                                </Tooltip>
                                            }>
                                                <ListItemButton disableRipple
                                                                sx={{
                                                                    textTransform: "none", cursor: "default",
                                                                    "&.MuiButtonBase-root:hover": {bgcolor: "transparent"}
                                                                }}>
                                                    <ListItemIcon>
                                                        <Mail size={"large"}
                                                              style={{transform: `translate(0px, 2px)`}}/>
                                                    </ListItemIcon>
                                                    <ListItemText primary={
                                                        <Typography variant={"body1"}>
                                                            <b>{USER_EMAIL}</b>
                                                        </Typography>
                                                    }/>
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem>
                                                <Button fullWidth variant="contained" size={"large"}
                                                        color={"secondary"}
                                                        startIcon={<Email size={"large"} color={"primary"}/>}
                                                        onClick={() => {
                                                            window.open(USER_EMAIL_URL, '_blank').focus()
                                                            sendEventToAnalytics(CATEGORY_BUTTON_CLICK, ACTION_SEND_EMAIL)
                                                        }}>
                                                    Send an Email
                                                </Button>
                                            </ListItem>
                                        </List>
                                    </motion.div>
                                </Grid>
                                <Grid item className={bigScreen ? "noPaddingGridItem" : "noPaddingLeftGridItem"} xs={10}
                                      md={6}>
                                    <motion.div initial={{opacity: 1, x: 1500}}
                                                animate={{x: [null, 1500, 0]}}
                                                transition={{x: {delay: 0.6}}}>
                                        <List>
                                            <ListItem>
                                                <ListItemButton disableRipple
                                                                sx={{
                                                                    textTransform: "none", cursor: "default",
                                                                    "&.MuiButtonBase-root:hover": {bgcolor: "transparent"}
                                                                }}>
                                                    <ListItemIcon>
                                                        <SiUpwork size={30} style={{transform: `translate(0px, 2px)`}}/>
                                                    </ListItemIcon>
                                                    <ListItemText primary={
                                                        <Typography variant={"body1"}>
                                                            <b>Hire me through Upwork</b>
                                                        </Typography>}/>
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem>
                                                <Button fullWidth variant="contained" size={"large"}
                                                        startIcon={<SiUpwork size={30}
                                                                             style={{transform: `translate(0px, 2px)`}}/>}
                                                        onClick={() => {
                                                            window.open(USER_UPWORK_URL, '_blank').focus()
                                                            sendEventToAnalytics(CATEGORY_BUTTON_CLICK, ACTION_VISIT_UPWORK)
                                                        }}>
                                                    {bigScreen ? "Hire me as a Freelancer" : "Hire me"}
                                                </Button>
                                            </ListItem>
                                        </List>
                                    </motion.div>
                                </Grid>
                                <Grid item className={bigScreen ? "noPaddingGridItem" : "noPaddingLeftGridItem"} xs={12}
                                      md={8}>
                                    <motion.div initial={{opacity: 1, x: 1500}}
                                                animate={{x: [null, 1500, 0]}}
                                                transition={{x: {delay: 0.8}}}>
                                        <FeedbackForm {...props} />
                                    </motion.div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </motion.div>
    );
}

export default ContactView;