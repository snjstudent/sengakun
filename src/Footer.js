import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            参照元と一応、利用規約
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            参照元<br></br>画像処理アルゴリズム入門<br></br>著：西住　流
            <br></br>発行所：株式会社工学者<br></br>画像引用元：いらすとや　https://www.irasutoya.com/<br></br>
            <br></br>
            <h3>利用規約</h3>
            <br></br>
            このサイトを使用した、もしくはそれに準ずる行為から生じた結果に対する責任は一切負いません。
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </footer>
  );
};

export default Footer;
