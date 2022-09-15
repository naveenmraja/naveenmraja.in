import {
    Avatar,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    IconButton,
    Stack,
    Tooltip,
    Typography,
    useMediaQuery
} from "@mui/material";
import {Language, Launch} from "@mui/icons-material";
import {FaFileCode} from "react-icons/fa";
import {motion} from 'framer-motion'
import {sendEventToAnalytics} from "../utils/Analytics";
import {CATEGORY_BUTTON_CLICK} from "../utils/Constants";

function ProjectCard(props) {
    const bigScreen = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    const openProjectWebsite = (event) => {
        event.preventDefault()
        window.open(props.projectURL, '_blank').focus()
        sendEventToAnalytics(CATEGORY_BUTTON_CLICK, `website_${props.name}`)
    }
    const openProjectRepo = (event) => {
        event.preventDefault()
        window.open(props.projectRepoURL, '_blank').focus()
        sendEventToAnalytics(CATEGORY_BUTTON_CLICK, `repo_${props.name}`)
    }
    return (
        <Grid item className={!bigScreen ? "noPaddingLeftGridItem" : "noPaddingTopGridItem"} xs={12}
              md={4} sx={{height: bigScreen ? "90%" : "fit-content"}}>
            <motion.div initial={{opacity: 0.5, x: props.animate ? 1500 : 0}}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 1}}
                        animate={{opacity: 1, x: props.animate ? [null, 1500, 0] : 0}}
                        exit={{opacity: 0.1}}
                        transition={{x: {delay: props.animate ? props.animationDelay : 0}}}>
                <Card className={"projectCard"} sx={{maxWidth: "95%", height: bigScreen ? "380px" : "fit-content"}}
                      raised>
                    <CardActionArea onClick={openProjectWebsite}>
                        <CardHeader
                            avatar={
                                <Avatar src={props.logoPath}/>
                            }
                            title={props.title}
                            action={
                                <Launch/>
                            }
                            subheader={props.subheader}
                        />
                        <CardMedia
                            component="img"
                            height="150"
                            image={props.imagePath}
                        />
                        <CardContent sx={{height: bigScreen ? "100px" : "fit-content"}}>
                            <Typography variant="body2" color="rgba(255, 255, 255, 0.8)">
                                {props.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions disableSpacing>
                        <Tooltip title="Source Code" arrow>
                            <IconButton onClick={openProjectRepo}>
                                <FaFileCode size={20}/>
                            </IconButton>
                        </Tooltip>
                        {props.isHosted ? (
                            <Tooltip title="Open Application" arrow>
                                <IconButton onClick={openProjectWebsite}>
                                    <Language/>
                                </IconButton>
                            </Tooltip>) : ""}
                        <Stack direction={"row"} sx={{marginLeft: "auto"}}>
                            {props.techStack}
                        </Stack>
                    </CardActions>
                </Card>
            </motion.div>
        </Grid>
    )
}

export default ProjectCard