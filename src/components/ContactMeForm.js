import {Box, InputAdornment, Paper, Snackbar, TextField, Typography} from "@mui/material";
import {Details, Email, Message, Person, Send} from "@mui/icons-material";
import {forwardRef, useState} from "react";
import {LoadingButton} from "@mui/lab";
import isEmail from "validator/es/lib/isEmail";
import {send} from "@emailjs/browser";
import {EMAILJS_CONTACT_ME_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID} from "../utils/Config";
import MuiAlert from "@mui/material/Alert";
import {recordAPILatency, reportErrorToAnalytics, sendEventToAnalytics} from "../utils/Analytics";
import {ACTION_SEND_MESSAGE, ACTION_SEND_MESSAGE_API, CATEGORY_BUTTON_CLICK} from "../utils/Constants";

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ContactMeForm(props) {
    const [showLoadingButton, setShowLoadingButton] = useState(false)
    const [emailError, setEmailError] = useState("")
    const [messageError, setMessageError] = useState("")
    const [submissionError, setSubmissionError] = useState("")
    const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false)
    const [showErrorSnackbar, setShowErrorSnackbar] = useState(false)

    async function sendMessage(event) {
        event.preventDefault()
        sendEventToAnalytics(CATEGORY_BUTTON_CLICK, ACTION_SEND_MESSAGE)
        setShowErrorSnackbar(false)
        setShowSuccessSnackbar(false)
        setEmailError("")
        setMessageError("")
        setSubmissionError("")
        setShowLoadingButton(true)
        if (!isEmail(props.userEmail)) {
            setEmailError("Invalid Email. Please enter a valid Email id")
            setShowLoadingButton(false)
            return
        }
        if (!props.userMessage || props.userMessage.length < 10) {
            setMessageError("Message must have minimum 10 characters")
            setShowLoadingButton(false)
            return
        }
        try {
            const params = {
                user_name: props.userName ? props.userName : "",
                user_email: props.userEmail,
                user_message: props.userMessage,
                additional_details: props.additionalDetails ? props.additionalDetails : ""
            }
            const startTime = Date.now()
            await send(EMAILJS_SERVICE_ID, EMAILJS_CONTACT_ME_TEMPLATE_ID,
                params, EMAILJS_PUBLIC_KEY)
            const endTime = Date.now()
            props.setUserName("")
            props.setUserEmail("")
            props.setUserMessage("")
            props.setAdditionalDetails("")
            setShowLoadingButton(false)
            setShowSuccessSnackbar(true)
            recordAPILatency(ACTION_SEND_MESSAGE_API, (endTime - startTime))
        } catch (e) {
            setSubmissionError(e.text)
            setShowLoadingButton(false)
            setShowErrorSnackbar(true)
            reportErrorToAnalytics(e.text, navigator.userAgent)
        }
    }

    return (
        <Paper className={"contactMePaper"} sx={{height: "100%", width: "80%", margin: "0 auto", overflow: "scroll"}}
               elevation={24}>
            <Snackbar open={showSuccessSnackbar} autoHideDuration={5000} onClose={() => setShowSuccessSnackbar(false)}>
                <Alert onClose={() => setShowSuccessSnackbar(false)} severity="success" sx={{width: '100%'}}>
                    Thank you for reaching out. I will get in touch with you very soon.
                </Alert>
            </Snackbar>
            <Snackbar open={showErrorSnackbar} autoHideDuration={5000} onClose={() => setShowErrorSnackbar(false)}>
                <Alert onClose={() => setShowErrorSnackbar(false)} severity="error" sx={{width: '50%'}}>
                    Error occurred while sending your message. Please try again later ! Error : {submissionError}
                </Alert>
            </Snackbar>
            <Box component={"form"} noValidate sx={{padding: "15px", width: "100%"}} onSubmit={sendMessage}>
                <Typography component="h1" variant="h5">
                    Leave a Message
                </Typography>
                <TextField
                    margin="normal"
                    label="Full Name"
                    autoComplete="name"
                    fullWidth
                    placeholder={"Full Name"}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Person/>
                            </InputAdornment>
                        )
                    }}
                    value={props.userName}
                    onChange={(event) => props.setUserName(event.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    label="Email"
                    autoComplete="email"
                    fullWidth
                    placeholder={"Enter your email here"}
                    error={!!emailError}
                    helperText={emailError}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Email/>
                            </InputAdornment>
                        )
                    }}
                    value={props.userEmail}
                    onChange={(event) => props.setUserEmail(event.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    label="Message"
                    fullWidth
                    placeholder={"Enter your message here"}
                    multiline
                    rows={4}
                    error={!!messageError}
                    helperText={messageError}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Message/>
                            </InputAdornment>
                        )
                    }}
                    value={props.userMessage}
                    onChange={(event) => props.setUserMessage(event.target.value)}
                />
                <TextField
                    margin="normal"
                    label="Additional Details"
                    fullWidth
                    multiline
                    rows={2}
                    size={"small"}
                    placeholder={"Additional Details"}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Details/>
                            </InputAdornment>
                        )
                    }}
                    value={props.additionalDetails}
                    onChange={(event) => props.setAdditionalDetails(event.target.value)}
                />
                <LoadingButton
                    fullWidth
                    onClick={sendMessage}
                    loading={showLoadingButton}
                    loadingPosition="end"
                    endIcon={<Send/>}
                    sx={{mt: 1}}
                    variant="contained"
                >
                    {showLoadingButton ? "Sending Message" : "Send Message"}
                </LoadingButton>
            </Box>
        </Paper>
    )
}

export default ContactMeForm