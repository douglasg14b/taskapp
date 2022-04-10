import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TaskCard from "../features/tasks/taskCard";
import { testTasks } from "../testdata";

export default function Tasks() {
    return (
      <Grid container sx={{ m: 4 }}>
        <Grid item>
          <Stack spacing={2}>
            {testTasks.map((task) => (
              <TaskCard task={task}/>
            ))}
          </Stack>
        </Grid>
      </Grid>
    );
  }