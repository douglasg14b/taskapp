import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckIcon from '@mui/icons-material/Check';

import { green } from '@mui/material/colors';

import { Task } from './models';

type Props = {
    task: Task
}

export default function TaskCard({ task }: Props) {
    const dueAtDate = new Date(task.due).toLocaleDateString();
    const dueAtTime = new Date(task.due).toLocaleTimeString();

    return (
        <Card elevation={5}>
            <CardHeader
                sx={{ pb: 2 }}
                title={task.name}
                titleTypographyProps={{variant: 'h6'}}
                subheader={`${dueAtDate} ${dueAtTime}`}
                subheaderTypographyProps={{variant: 'body2'}}
                action={
                    <IconButton aria-label="settings" size='small'>
                        <MoreVertIcon fontSize='small' />
                    </IconButton>
                }
            />
            <CardContent sx={{ py: 2 }}>
                <Typography variant="body2" color="text.secondary">
                    {task.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{ pt: 1 }}>
                <Box sx={{display: 'flex'}} >
                    <IconButton sx={{ color: green[500] }} aria-label="complete">
                        <CheckIcon />
                    </IconButton>
                </Box>

            </CardActions>
        </Card>
    )
}