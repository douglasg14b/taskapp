import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckIcon from '@mui/icons-material/Check';

import { green } from '@mui/material/colors';

import { Task } from './models';
import React from 'react';

import styles from './taskCard.module.css'


type Props = {
    task: Task
}

export default function TaskCard({ task }: Props) {
    const dueAtDate = new Date(task.due).toLocaleDateString();
    const dueAtTime = new Date(task.due).toLocaleTimeString();

    return (
        <Card elevation={5} className={styles['card-pending']}>
            <CardHeader
                sx={{ pb: 0.5 }}
                title={task.name}
                titleTypographyProps={{variant: 'h6'}}
                subheader={`${dueAtDate} ${dueAtTime}`}
                subheaderTypographyProps={{variant: 'caption'}}
                action={
                    <IconButton aria-label="settings" size='small'>
                        <MoreVertIcon fontSize='small' />
                    </IconButton>
                }
            />
            <Divider variant="middle" />
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