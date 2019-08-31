import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
var photo = "";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    paddingTop: "3rem",
    flexGrow: 1
  },
  button: {
    margin: theme.spacing(1),
    marginTop: "1rem",
    textAlign: "center"
  },
  input: {
    display: "none"
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  }
}));

const Mainbox = () => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  function handleChange(event, value) {
    setSpacing(value);
    photo = value;
  }

  return (
    <React.Fragment>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.control}>
            <Grid container>
              <Grid item>
                <FormLabel>変換方法を選択</FormLabel>
                <RadioGroup
                  name="spacing"
                  aria-label="spacing"
                  value={spacing.toString()}
                  onChange={handleChange}
                >
                  {["Canny", "Laplacian", "Sobel"].map(value => (
                    <FormControlLabel
                      key={value}
                      value={value.toString()}
                      control={<Radio />}
                      label={value.toString()}
                    />
                  ))}
                </RadioGroup>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <div>
        <form action="/" method="POST" enctype="multipart/form-data">
          <input
            type="file"
            name="photo"
            className="selectphoto"
            accept="image/png, image/jpeg"
          ></input>

          <Button
            className={classes.button}
            variant="outlined"
            type="submit"
            name="type"
            value={photo}
          >
            変換
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Mainbox;
