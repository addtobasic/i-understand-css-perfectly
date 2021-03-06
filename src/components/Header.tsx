import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },

    title: {
      flexGrow: 1,
    },
  }),
);

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#44bc84" }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            I understand CSS perfectly.
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
