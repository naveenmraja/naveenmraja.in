import '../styles.css';
import {motion} from 'framer-motion'
import {
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Rating,
    styled,
    Typography,
    useMediaQuery
} from '@mui/material'
import {LANGUAGES_ICON_MAP, SKILLS_VIEW, TECHNOLOGIES_ICON_AND_RATING_MAP} from "../utils/Constants";
import Header from "../components/Header";

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff4081',
    }
});

function getListItems(itemsMap, animateFromRight, delayOffset = 0.5) {
    const items = []
    Object.keys(itemsMap).forEach((key, index) => {
        const [icon, rating] = itemsMap[key]
        items.push(
            <motion.div initial={{opacity: 1, x: animateFromRight ? 1500 : -1500}}
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.9}}
                        animate={{x: animateFromRight ? [null, 1500, 0] : [null, -1500, 0]}}
                        transition={{x: {delay: delayOffset + (index * 0.2)}}} key={key}>
                <ListItem disablePadding
                          secondaryAction={<StyledRating value={rating} precision={0.5} readOnly/>}>
                    <ListItemButton sx={{cursor: "default"}}>
                        <ListItemIcon>
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={key}/>
                    </ListItemButton>
                </ListItem>
            </motion.div>
        )
    })
    return items
}

function SkillsView() {
    const bigScreen = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    const programmingLanguages = getListItems(LANGUAGES_ICON_MAP)
    const technologies = getListItems(TECHNOLOGIES_ICON_AND_RATING_MAP, true, ((programmingLanguages.length * 0.2) + 0.7))
    return (
        <motion.div className={"baseContainer"}>
            <Grid container className={"baseContainer skillsContainer"} direction={"row"}
                  justifyContent={"center"} alignItems={"center"} spacing={2}>
                <Header view={SKILLS_VIEW}/>
                <Grid className={"noPaddingGridItem"} item xs={12} md={12}
                      sx={{height: bigScreen ? "65%" : "fit-content"}}>
                    <Grid container direction={"row"} className={"baseContainer"}
                          justifyContent={"center"} alignItems={"center"} spacing={3}>
                        <Grid item xs={12} md={3} sx={{height: bigScreen ? "100%" : "fit-content"}}>
                            <motion.div initial={{opacity: 1, x: -1500}}
                                        animate={{x: [null, -1500, 0]}}>
                                <Typography variant={bigScreen ? "h5" : "h6"} gutterBottom
                                            sx={{cursor: 'default'}} color={"yellow"}>
                                    Programming Languages
                                </Typography>
                            </motion.div>
                            <List>
                                {programmingLanguages}
                            </List>
                        </Grid>
                        <Grid item xs={12} md={3} sx={{height: bigScreen ? "100%" : "fit-content"}}>
                            <motion.div initial={{opacity: 1, x: 1500}}
                                        animate={{x: [null, 1500, 0]}}
                                        transition={{x: {delay: ((programmingLanguages.length * 0.2) + 0.5)}}}>
                                <Typography variant={bigScreen ? "h5" : "h6"} gutterBottom
                                            sx={{cursor: 'default'}} color={"yellow"}>
                                    Technologies/Frameworks
                                </Typography>
                            </motion.div>
                            <List>
                                {bigScreen ? technologies.slice(0, 7) : technologies}
                            </List>
                        </Grid>
                        <Grid item xs={12} md={3} sx={{height: bigScreen ? "100%" : "fit-content"}}>
                            <Typography variant={bigScreen ? "h5" : "h6"} gutterBottom
                                        sx={{cursor: 'default'}} hidden={!bigScreen}>
                                &nbsp;
                            </Typography>
                            <List>
                                {bigScreen ? technologies.slice(7, 14) : ""}
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </motion.div>
    );
}

export default SkillsView;