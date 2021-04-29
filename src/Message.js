import { Typography, Card, CardContent } from '@material-ui/core'
import './Message.css'


const Message = ({ message , username}) => {
    const isUser = username === message.username;
    return (
        <div className={`message-card ${isUser && 'message-user'}`}>
            <Card className={isUser ? 'message-usercard' : 'message-guestcard'}>
                <CardContent>
                    <Typography color="white" variant="h5" component="h2">
                    {!isUser && `${message.username || 'Imposter'}:`} {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Message
