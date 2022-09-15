import '../styles.css';
import {AnimatePresence, motion} from 'framer-motion'
import {Grid, Pagination, useMediaQuery} from '@mui/material'
import Header from "../components/Header";
import {ACTION_PROJECTS_NAVIGATION_PAGE, CATEGORY_NAVIGATION, PROJECTS_LIST, PROJECTS_VIEW} from "../utils/Constants";
import ProjectCard from "../components/ProjectCard";
import {useEffect, useState} from "react";
import {sendEventToAnalytics} from "../utils/Analytics";

function ProjectsView() {
    const bigScreen = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    const [viewMounted, setViewMounted] = useState(false)
    useEffect(() => {
        setTimeout(() => setViewMounted(true), 1500)
    })
    const projectCards = []
    PROJECTS_LIST.forEach((project, index) => {
        const animationDelay = (index * 0.2) + 0.2
        projectCards.push(<ProjectCard {...project} cardIndex={index} animationDelay={animationDelay}
                                       key={`project-card-${index}`} animate={!viewMounted}/>)
    })
    let totalPages = Math.floor(projectCards.length / 3)
    if (projectCards.length % 3 > 0) totalPages += 1
    const [currentPage, setCurrentPage] = useState(1)
    const currentPageCards = projectCards.slice((currentPage - 1) * 3, ((currentPage - 1) * 3) + 3)
    return (
        <motion.div className={"baseContainer"}>
            <Grid container className={"baseContainer projectsContainer"} direction={"row"}
                  justifyContent={"center"} alignItems={"center"} spacing={2} sx={{backgroundColor: "#7000dc"}}>
                <Header view={PROJECTS_VIEW}/>
                <Grid item className={bigScreen ? "noPaddingGridItem" : ""} xs={12} md={12}
                      sx={{height: bigScreen ? "70%" : "fit-content"}}>
                    <Grid container direction={"row"} className={"baseContainer"} justifyContent={"center"}
                          alignItems={"center"} spacing={3} sx={{height: bigScreen ? "85%" : "fit-content"}}>
                        <AnimatePresence mode={"wait"}>
                            {bigScreen ? currentPageCards : projectCards}
                            {!bigScreen ? <Grid item key={"empty-grid"}/> : ""}
                        </AnimatePresence>
                    </Grid>
                    {bigScreen ? (
                        <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}
                              sx={{height: bigScreen ? "15%" : "fit-content"}}>
                            <Grid item className={"noPaddingGridItem"}>
                                <motion.div initial={{opacity: 1, y: 1500}}
                                            animate={{y: [null, 1500, 0]}}
                                            transition={{y: {delay: 0.1}}}>
                                    <Pagination count={totalPages} color="secondary" page={currentPage}
                                                onChange={(event, page) => {
                                                    setCurrentPage(page)
                                                    sendEventToAnalytics(CATEGORY_NAVIGATION,
                                                        `${ACTION_PROJECTS_NAVIGATION_PAGE}_${page}`)
                                                }} sx={{margin: "0 auto"}}/>
                                </motion.div>
                            </Grid>
                        </Grid>
                    ) : ""}
                </Grid>
            </Grid>
        </motion.div>
    );
}

export default ProjectsView;