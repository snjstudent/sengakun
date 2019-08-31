import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    paddingTop: "5rem"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

const Explainbox = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            詳しい説明・使用法について
          </Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <Typography>
            このサイトは、画像を線画にするのを目的にしたものです。適当に作った練習用なのでそれ以外の使用法はありません。
            <br></br>
            ３つある変換方法から選んでファイルを選択を押し、変換してください。下ではそれぞれの違いについて説明します。正直自分はは何が違うのかさっぱりです。数式は導入がめんどくさかったので書きません。言葉の意味もめんどくさいので書きません。
            <br></br>
            <br></br>
            <h2>Sobelフィルタ</h2>
            まず初めに画像を１次微分してあげます。そのあと、平滑化（画像のぼかし。これを行うことで、余計な線が抽出されなくなり、輪郭のみが抽出できる・・・と思う）を行う際に、注目が外の距離に応じて重み付けに変化をつけたもの。
            <br></br>
            <br></br>
            <h2>Laplacianフィルタ</h2>
            ２回微分をして、輪郭を抽出する。水平方向、垂直方向で２階微分。
            <br></br>
            <br></br>
            <h2>Canny輪郭検出器</h2>
            ⓵ガウシアンフィルタで画像を平滑化<br></br>
            ⓶平滑化した画像を微分する。大体は、他のフィルタのカーネルを使用して行う。
            <br></br>
            ⓷微分画像から、勾配の大きさ（２乗和平方）、方向（tanの逆関数）を求める
            <br></br>
            ⓸Non maximum
            Suppression処理。注目画素とその勾配方向に隣り合う２つの画素を比較し、３つの中で注目画素が最大ではない場合、画素値を０（黒）とする。
            <br></br>
            ⓹Hysteresis Threshold処理。信頼性の低い輪郭を除去する。<br></br>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default Explainbox;
