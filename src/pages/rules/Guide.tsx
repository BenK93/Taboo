import React, { Component } from "react";
import "./Guide.css";
import { Typography } from "@material-ui/core";
import ViewCarouselRoundedIcon from "@material-ui/icons/ViewCarouselRounded";

export default class Guide extends Component {
  render() {
    return (
      <div>
        <div className="guide-header">
          <Typography component="h2" gutterBottom>
            <h1 className="guide-title font-effect-shadow-multiple">
              <ViewCarouselRoundedIcon /> !טאבו <ViewCarouselRoundedIcon />
            </h1>
          </Typography>
        </div>
        <div className="guide-content">
          <Typography variant="body1" gutterBottom style={{ fontSize: "25px" }}>
            <strong>:הוראות חלוקה לקבוצות</strong> <br />
            מתחלקים לשתי קבוצות <br />
            אחד או יותר מחברי הקבוצה צריך להעביר מילה שמופיעה בגדול למעלה, מבלי
            לומר את חמשת המילים האסורות וכל מה שדומה להם <br />
            <strong>:לדוגמה</strong> <br />
            עבור המילה
            <u> אוטובוס</u>
            <br />
            :אסור יהיה לומר את המילים
            <br />
            כביש (כביש, כבישים)
            <br />
            תחבורה ציבורית (תחבורה פרטית, תחבורה)
            <br />
            רב קו <br />
            כרטיסיה (כרטיס, לכרטס)
            <br />
            חופשי חודשי <br />
            <strong>?מי מנצח</strong> <br />
            הקבוצה שיש לה הכי הרבה נקודות
            <br />
            <u>!מספר הסיבובים תלוי בכם</u> <br />
          </Typography>
          <ViewCarouselRoundedIcon
            style={{ fontSize: "80px", margin: "auto", width: "100%" }}
          />
        </div>
      </div>
    );
  }
}
