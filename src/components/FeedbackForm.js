import {Box, InputAdornment, Paper, Rating, Snackbar, styled, TextField, Typography} from "@mui/material";
import {Email, Feedback} from "@mui/icons-material";
import {forwardRef, useState} from "react";
import {LoadingButton} from "@mui/lab";
import isEmail from "validator/es/lib/isEmail";
import {send} from "@emailjs/browser";
import {EMAILJS_FEEDBACK_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID} from "../utils/Config";
import MuiAlert from "@mui/material/Alert";
import {recordAPILatency, recordMetric, reportErrorToAnalytics, sendEventToAnalytics} from "../utils/Analytics";
import {
    ACTION_SUBMIT_FEEDBACK,
    ACTION_SUBMIT_FEEDBACK_API,
    ACTION_WEBSITE_RATING,
    CATEGORY_BUTTON_CLICK,
    CATEGORY_WEBSITE_METRICS
} from "../utils/Constants";

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff4081',
    }
});

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function FeedbackForm(props) {
    const [showLoadingButton, setShowLoadingButton] = useState(false)
    const [emailError, setEmailError] = useState("")
    const [feedbackError, setFeedbackError] = useState("")
    const [submissionError, setSubmissionError] = useState("")
    const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false)
    const [showErrorSnackbar, setShowErrorSnackbar] = useState(false)

    async function sendFeedback(event) {
        event.preventDefault()
        sendEventToAnalytics(CATEGORY_BUTTON_CLICK, ACTION_SUBMIT_FEEDBACK)
        setShowErrorSnackbar(false)
        setShowSuccessSnackbar(false)
        setEmailError("")
        setFeedbackError("")
        setSubmissionError("")
        setShowLoadingButton(true)
        if (!isEmail(props.feedbackEmail)) {
            setEmailError("Invalid Email. Please enter a valid Email id")
            setShowLoadingButton(false)
            return
        }
        if (!props.userFeedback || props.userFeedback.length < 10) {
            setFeedbackError("Feedback message must have minimum 10 characters")
            setShowLoadingButton(false)
            return
        }
        try {
            const params = {
                user_email: props.feedbackEmail,
                user_feedback: props.userFeedback,
                user_rating: props.userRating
            }
            recordMetric(CATEGORY_WEBSITE_METRICS, ACTION_WEBSITE_RATING, parseInt(props.userRating))
            const startTime = Date.now()
            await send(EMAILJS_SERVICE_ID, EMAILJS_FEEDBACK_TEMPLATE_ID,
                params, EMAILJS_PUBLIC_KEY)
            const endTime = Date.now()
            props.setFeedbackEmail("")
            props.setUserFeedback("")
            props.setUserRating(0)
            setShowLoadingButton(false)
            setShowSuccessSnackbar(true)
            recordAPILatency(ACTION_SUBMIT_FEEDBACK_API, (endTime - startTime))
        } catch (e) {
            setSubmissionError(e.text)
            setShowLoadingButton(false)
            setShowErrorSnackbar(true)
            reportErrorToAnalytics(e.text, navigator.userAgent)
        }
    }

    return (
        <Paper className={"feedbackPaper"} sx={{width: "80%", margin: "0 auto", overflow: "scroll"}} elevation={24}>
            <Snackbar open={showSuccessSnackbar} autoHideDuration={5000} onClose={() => setShowSuccessSnackbar(false)}>
                <Alert onClose={() => setShowSuccessSnackbar(false)} severity="success" sx={{width: '100%'}}>
                    Thank you for providing your valuable feedback !
                </Alert>
            </Snackbar>
            <Snackbar open={showErrorSnackbar} autoHideDuration={5000} onClose={() => setShowErrorSnackbar(false)}>
                <Alert onClose={() => setShowErrorSnackbar(false)} severity="error" sx={{width: '50%'}}>
                    Error occurred while submitting your feedback. Please try again later ! Error : {submissionError}
                </Alert>
            </Snackbar>
            <Box component={"form"} noValidate sx={{padding: "15px", width: "100%"}} onSubmit={sendFeedback}>
                <Typography component="h1" variant="h5">
                    Have a Feedback?
                </Typography>
                <TextField
                    margin="normal"
                    required
                    label="Email"
                    autoComplete="email"
                    fullWidth
                    placeholder={"Enter your email here"}
                    size={"small"}
                    error={!!emailError}
                    helperText={emailError}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Email/>
                            </InputAdornment>
                        )
                    }}
                    value={props.feedbackEmail}
                    onChange={(event) => props.setFeedbackEmail(event.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    label="Feedback"
                    fullWidth
                    placeholder={"Enter your feedback here"}
                    multiline
                    rows={2}
                    size={"small"}
                    error={!!feedbackError}
                    helperText={feedbackError}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Feedback/>
                            </InputAdornment>
                        )
                    }}
                    value={props.userFeedback}
                    onChange={(event) => props.setUserFeedback(event.target.value)}
                />
                <Typography component="legend" variant={"body1"}><
                    b>How would you rate this website?</b>
                </Typography>
                <StyledRating value={props.userRating} precision={0.5}
                              onChange={(event, newValue) => {
                                  props.setUserRating(newValue);
                              }} sx={{margin: "0 auto"}} size={"large"}/>
                <LoadingButton
                    fullWidth
                    onClick={sendFeedback}
                    loading={showLoadingButton}
                    loadingPosition="start"
                    startIcon={<Feedback sx={{transform: `translate(0px, 2px)`}}/>}
                    sx={{mt: 1}}
                    variant="contained"
                    color={"secondary"}
                >
                    {showLoadingButton ? "Submitting your feedback" : "Submit Feedback"}
                </LoadingButton>
            </Box>
        </Paper>
    )
}

export default FeedbackForm