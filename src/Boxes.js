import React from "react";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";

import "./mystyle.css";
const img1920x1080 =
  "https://spacenews.com/wp-content/uploads/2016/04/IridiumNext-satellite-image.jpg";
const img593x909 =
  "https://images.indiawords.com/wp-content/uploads/2017/11/traditional-look-image-of-Anandhi.jpg";
const useStyles = makeStyles({
  iconsize: props => ({
    fontSize: props.width / props.max
  })
});
function SizedRating(props) {
  const [value, setValue] = React.useState(props.rating);
  const classes = useStyles(props);
  function handleChange(e, newValue) {
    setValue(newValue);
    console.log(`${props.aid} got new ${newValue}`);
  }
  return (
    <Rating
      max={props.max}
      name={props.aid}
      value={value}
      precision={1}
      className={classes.iconsize}
      onChange={handleChange}
    />
  );
}
function Boxes(props) {
  return (
    <Grid container spacing={1}>
      {props.data.map((i, index) => {
        //let num = 1;
        return (
          <Grid item key={i.Aid}>
            <div
              className="box"
              style={{ width: props.size.width, height: props.size.height }}
            >
              <div className="img">
                <img src={img593x909} alt="nl" />
              </div>
              <div className="text">
                <p>{i.Title}</p>
                <p>{i.Description}</p>
              </div>
              <div className="rate">
                <SizedRating width={props.size.width} aid={i.Aid} max={10} />
              </div>
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Boxes;
