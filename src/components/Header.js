import '../styles.css';
import {motion} from "framer-motion";
import {Divider, Grid, Typography, useMediaQuery} from "@mui/material";
import {
    CONTACT_VIEW,
    EXPERIENCES_VIEW,
    HEADER_STYLE,
    HEADER_TEXT,
    PROFILE_VIEW,
    PROJECTS_VIEW,
    SKILLS_VIEW,
    SUBHEADER1_TEXT,
    SUBHEADER2_TEXT
} from "../utils/Constants";

function Header(props) {
    const bigScreen = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    const currentView = props.view
    const viewHeaderProps = {
        [PROFILE_VIEW]: {
            [HEADER_TEXT]: "Profile",
            [SUBHEADER1_TEXT]: "Full-stack Web Developer",
            [SUBHEADER2_TEXT]: "",
            [HEADER_STYLE]: {
                height: bigScreen ? "20%" : "fit-content",
                marginTop: bigScreen ? "3%" : "25%"
            }
        },
        [SKILLS_VIEW]: {
            [HEADER_TEXT]: "Skills",
            [SUBHEADER1_TEXT]: "\"The true method of knowledge is experiment\"",
            [SUBHEADER2_TEXT]: "- William Blake",
            [HEADER_STYLE]: {
                height: bigScreen ? "20%" : "fit-content",
                marginTop: bigScreen ? "0" : "25%"
            }
        },
        [EXPERIENCES_VIEW]: {
            [HEADER_TEXT]: "Experiences",
            [SUBHEADER1_TEXT]: "\"Experience enables you to recognize a mistake when you make it again\"",
            [SUBHEADER2_TEXT]: "- Franklin P. Jones",
            [HEADER_STYLE]: {
                height: bigScreen ? "30%" : "fit-content",
                marginTop: bigScreen ? "0" : "25%"
            }
        },
        [PROJECTS_VIEW]: {
            [HEADER_TEXT]: "Projects",
            [SUBHEADER1_TEXT]: "\"Every project has challenges, and every project has its rewards\"",
            [SUBHEADER2_TEXT]: "- Stephen Schwartz",
            [HEADER_STYLE]: {
                height: bigScreen ? "30%" : "fit-content",
                marginTop: bigScreen ? "0" : "25%"
            }
        },
        [CONTACT_VIEW]: {
            [HEADER_TEXT]: "Contact",
            [SUBHEADER1_TEXT]: "\"If you want to shine like a sun, first burn like a sun\"",
            [SUBHEADER2_TEXT]: "- Dr. A.P.J. Abdul Kalam",
            [HEADER_STYLE]: {
                height: bigScreen ? "27%" : "fit-content",
                marginTop: bigScreen ? "0" : "25%"
            }
        }
    }
    const currentViewProps = viewHeaderProps[currentView]
    return (
        <Grid className={"noPaddingGridItem"} item xs={12} md={12} sx={currentViewProps[HEADER_STYLE]}>
            <motion.div
                initial={{opacity: 0, scale: 1, x: 1500}}
                animate={{opacity: 1, x: [null, 1500, 0]}}
                style={{width: 'fit-content', margin: '0 auto'}}>
                <Typography variant={bigScreen ? "h2" : "h3"} gutterBottom sx={{cursor: 'default'}}
                            textAlign={"center"} color={"yellow"}>
                    {currentViewProps[HEADER_TEXT]}
                </Typography>
            </motion.div>
            <motion.div
                initial={{opacity: 0, scale: 1, x: 1500}}
                animate={{opacity: 1, x: [null, 1500, 0]}}
                style={{width: 'fit-content', margin: '0 auto'}}>
                <Typography variant={bigScreen ? "h5" : "h6"} gutterBottom sx={{cursor: 'default'}}
                            textAlign={"center"}>
                    {currentViewProps[SUBHEADER1_TEXT]}
                </Typography>
                <Typography variant={bigScreen ? "h5" : "h6"} gutterBottom sx={{cursor: 'default'}}
                            textAlign={bigScreen ? "right" : "center"}>
                    {currentViewProps[SUBHEADER2_TEXT]}
                </Typography>
            </motion.div>
            <Divider sx={{borderColor: 'white', opacity: '0.5', margin: "1% auto", width: "80%"}}/>
        </Grid>
    )
}

export default Header