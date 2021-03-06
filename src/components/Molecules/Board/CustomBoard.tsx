import { Fab, Grid, makeStyles, Paper, Theme, Typography } from '@material-ui/core';
import React from 'react';
import { BoardStyleProps } from '../../../types/board/board';
import { CardStyleProps } from '../../../types/card/card';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { AddDialog } from '../../Organisms/AddDialog';
import { MemoData } from '../../../types/memo/memo';
export interface CustomBoardProps {
  title?: string;
  boardStyle?: BoardStyleProps;
  cardStyle?: CardStyleProps;
  children?: React.ReactNode;
  onAddMemo: (title: string, memo: MemoData) => void;
}

const useStyles = makeStyles<Theme, CustomBoardProps>((theme: Theme) => ({
  board: (props) => ({
    backgroundColor: props.boardStyle!.backgroundColor,
    width: Number(props.boardStyle!.width),
    height: Number(props.boardStyle!.height),
    borderRadius: 20,
    borderColor: props.cardStyle!.backgroundColor,
  }),
  title: (props) => ({
    height: '8vh',
    color: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: props.cardStyle!.backgroundColor,
  }),
  floatingButton: (props) => ({
    background: props.cardStyle!.backgroundColor,
    color: '#ffffff',
  }),
}));

export const CustomBoard = (props: CustomBoardProps) => {
  const classes = useStyles(props ?? {});

  const [open, setOpen] = React.useState<boolean>(false);

  const handleClose = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <Paper className={classes.board} variant="outlined">
      <Grid container direction={'column'}>
        <Grid item className={classes.title} container alignItems="center" justify="center">
          <Typography variant="h4">{props.title}</Typography>
        </Grid>
        <Grid item>{props.children}</Grid>
        <Grid item container justify="center">
          <Fab
            aria-label="add"
            className={classes.floatingButton}
            onClick={() => {
              setOpen(true);
            }}
          >
            <AddOutlinedIcon />
          </Fab>
        </Grid>
      </Grid>
      <AddDialog open={open} onClose={handleClose} subTitle={props.title} onAddMemo={props.onAddMemo} />
    </Paper>
  );
};

CustomBoard.defaultProps = {
  style: {
    width: '452',
    height: '865',
    backgroundColor: '#E1C3F0',
  },
};
