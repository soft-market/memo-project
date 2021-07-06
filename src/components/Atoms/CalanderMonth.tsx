import { Grid, makeStyles, Typography } from '@material-ui/core';
import { getCurrentMonthByDate } from '../../utils/date';

export interface CalanderMonthProps {
  month: number;
  year: number;
}

const useStyle = makeStyles((theme) => ({
  font: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    paddingBottom: 15,
  },
}));

export const CalanderMonth = (props: CalanderMonthProps) => {
  const classes = useStyle(props);

  return (
    <Grid container justify="center">
      <Typography variant="h5" className={classes.font}>
        {getCurrentMonthByDate(props.month, props.year)}
      </Typography>
    </Grid>
  );
};
