import '../styles.css';
import {motion} from 'framer-motion'
import {Button, Divider, Grid, Stack, Typography, useMediaQuery} from '@mui/material'
import {Download, KeyboardDoubleArrowRight} from "@mui/icons-material";
import {saveAs as downloadFile} from 'file-saver'
import {sendEventToAnalytics} from "../utils/Analytics";
import {ACTION_DOWNLOAD_RESUME, CATEGORY_BUTTON_CLICK,} from "../utils/Constants";
import {CLOUDFRONT_DISTRIBUTION_URL} from "../utils/Config";

function HomeView(props) {
    const bigScreen = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    const downloadResume = (event) => {
        event.preventDefault()
        downloadFile("./resume.pdf", "Naveen Resume.pdf")
        sendEventToAnalytics(CATEGORY_BUTTON_CLICK, ACTION_DOWNLOAD_RESUME)
    }
    return (
        <motion.div className={"homeContainer"}
                    style={{backgroundImage: `url(${CLOUDFRONT_DISTRIBUTION_URL}/bg.webp)`}}>
            <Grid container className={"overlayContainer"} direction={"row"}
                  justifyContent={"center"} alignItems={"center"} spacing={1}>
                <Grid item xs={12} md={12}>
                    <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={3}>
                        <Grid item xs={12} md={12}>
                            <motion.div
                                initial={{opacity: 0, scale: 1, x: -1500}}
                                whileHover={{scale: 1.2}}
                                whileTap={{scale: 0.9}}
                                animate={{opacity: 1, x: [null, -1500, 0]}}
                                style={{width: 'fit-content', margin: '0 auto'}}>
                                <Typography variant={bigScreen ? "h1" : "h3"} gutterBottom
                                            sx={{cursor: 'default', fontWeight: 700, marginBottom: "0"}}
                                            textAlign={"center"}>
                                    Naveen M Raja
                                </Typography>
                            </motion.div>
                            <Grid container justifyContent={"center"} alignItems={"center"} sx={{margin: "8px auto"}}>
                                <Grid item xs={10} md={6}>
                                    <Divider sx={{borderColor: 'white', opacity: '0.5'}}/>
                                </Grid>
                            </Grid>
                            <motion.div
                                initial={{opacity: 0, scale: 1, x: bigScreen ? 1500 : 100}}
                                whileHover={{scale: 1.2}}
                                whileTap={{scale: 0.9}}
                                animate={{
                                    opacity: 1,
                                    x: [null, 1500, 0]
                                }}
                                style={{width: 'fit-content', margin: '0 auto'}}>
                                <Typography variant={bigScreen ? "h4" : "h6"} gutterBottom
                                            sx={{cursor: 'default', fontWeight: 700}} textAlign={"center"}>
                                    Senior Software Development Engineer
                                </Typography>
                            </motion.div>
                        </Grid>
                        <Grid item xs={11} md={6}>
                            <Stack direction={"row"} spacing={1} sx={{width: "100%"}}>
                                <motion.div
                                    initial={{opacity: 0, scale: 1, x: -1500}}
                                    animate={{opacity: 1, x: [null, -1500, 0]}}
                                    style={{width: '100%'}}>
                                    <Button variant={"contained"} color={"secondary"} size={"large"}
                                            onClick={downloadResume} startIcon={
                                        <motion.div
                                            initial={{opacity: 1, x: 0, y: 4}}
                                            animate={{y: [5, 10, 5]}}
                                            transition={{repeat: Infinity, repeatDelay: 1}} style={{margin: '0 auto'}}>
                                            <Download size={"large"}/>
                                        </motion.div>
                                    } fullWidth>
                                        {bigScreen ? "Download Resume" : "Resume"}
                                    </Button>
                                </motion.div>
                                <motion.div
                                    initial={{opacity: 0, scale: 1, x: 1500}}
                                    animate={{opacity: 1, x: [null, 1500, 0]}}
                                    style={{width: '100%'}}>
                                    <Button variant={"contained"} color={"primary"} size={"large"} endIcon={
                                        <motion.div
                                            initial={{opacity: 1, x: 0, y: 4}}
                                            animate={{x: [0, 5, 0]}}
                                            transition={{repeat: Infinity, repeatDelay: 1}} style={{margin: '0 auto'}}>
                                            <KeyboardDoubleArrowRight size={"large"}/>
                                        </motion.div>
                                    }
                                            onClick={props.navigateToResume} fullWidth>
                                        {bigScreen ? "Interactive Resume" : "Profile"}
                                    </Button>
                                </motion.div>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </motion.div>
    );
}

export default HomeView;