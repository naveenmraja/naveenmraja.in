import {Fab, useMediaQuery} from "@mui/material";
import {motion} from "framer-motion";
import {Fragment} from "react";

function FloatingButton(props) {
    const bigScreen = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    if (props.hidden) {
        return
    }
    const fabStyle = {position: "absolute"}
    if (props.bottom) {
        fabStyle.bottom = "3%"
        fabStyle.right = "5%"
    } else {
        fabStyle.top = "3%"
        fabStyle.left = "5%"
    }
    const label = <Fragment key={`fab-label-${props.label}`}>{props.label}</Fragment>
    const labelIcon = <Fragment key={`fab-label-icon-${props.label}`}>{props.labelIcon}</Fragment>

    return (
        <motion.div
            initial={{opacity: 0, x: props.bottom ? 1500 : -1500}}
            whileHover={{scale: 1.3}}
            whileTap={{scale: 1.1}}
            animate={{opacity: 1, x: props.bottom ? [null, 1500, 0] : [null, -1500, 0]}}
            style={fabStyle}>
            <Fab variant={bigScreen ? "extended" : ""} color={props.bottom ? "primary" : "floralwhite"} size={"large"}
                 onClick={() => props.handleClick()}>
                {props.bottom ? (bigScreen ? [labelIcon, label] : "") : ""}
                <motion.div
                    initial={{opacity: 1, x: 0, y: 4}}
                    animate={{x: props.bottom ? [0, 5, 0] : [0, -5, 0]}}
                    transition={{repeat: Infinity, repeatDelay: 1}} style={{margin: '0 auto'}}>
                    {props.icon}
                </motion.div>
                {!props.bottom ? (bigScreen ? [label, labelIcon] : "") : ""}
            </Fab>
        </motion.div>
    )
}

export default FloatingButton