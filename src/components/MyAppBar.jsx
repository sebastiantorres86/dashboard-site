import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import RefreshIcon from "@material-ui/icons/Refresh";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import CustomizedDialogs from './AddWalkUp'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    margin: theme.spacing(1),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: 64,
    alignItems: "center",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  div: {
    marginRight: theme.spacing(50),
  }
}));

const ColorButton = withStyles((theme) => ({
  root: {
    backgroundColor: "#83C5BE",
    "&:hover": {
      backgroundColor: "#006D77",
    },
  },
}))(Button);

export default function MyAppBar(props, {setSelectedValue}) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div className={classes.root}>
      <AppBar {...props} color="transparent" position="sticky" elevation={0}>
        <Toolbar className={classes.toolbar}>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Search patient data..."
              variant="outlined"
            />
          </form>

          <div className={classes.div}>
          <ColorButton
            variant="contained"
            color="secondary"
            startIcon={<RefreshIcon />}
            className={classes.margin}
          >
            Refresh
          </ColorButton>
          </div>
          
          <CustomizedDialogs />

          {/* <ColorButton
            variant="contained"
            color="secondary"
            startIcon={<AddIcon />}
            className={classes.margin}
            onClick={handleClickOpen}
          >
            Add Walk-up
          </ColorButton> */}

          <FormControl variant="outlined" className={classes.formControl} label size="medium">
            <InputLabel id="demo-simple-select-outlined-label" >Choose Department</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={age}
              onChange={handleChange}
              label="Age"
            >
              <MenuItem value={'location 1'}>Location 1</MenuItem>
              <MenuItem value={'location 2'}>Location 2</MenuItem>
              <MenuItem value={'location 3'}>Location 3</MenuItem>
              <MenuItem value={'location 4'}>Location 4</MenuItem>
              <MenuItem value={'location 5'}>Location 5</MenuItem>
              <MenuItem value={'location 6'}>Location 6</MenuItem>
              <MenuItem value={'location 7'}>Location 7</MenuItem>
              <MenuItem value={'location 8'}>Location 8</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    </div>
  );
}
