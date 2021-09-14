import Card from "@material-ui/core/Card";
import "./MyCard.css";
import Button from "@material-ui/core/Button";
import SentimentVerySatisfiedTwoToneIcon from "@material-ui/icons/SentimentVerySatisfiedTwoTone";
import SentimentVeryDissatisfiedTwoToneIcon from "@material-ui/icons/SentimentVeryDissatisfiedTwoTone";
import Typography from "@material-ui/core/Typography";
import { Zoom } from "@material-ui/core";

interface CardProps {
  guessWord: String;
  words: [String];
  onNext: Function;
  onSkip: Function;
  showCard: boolean;
}

const MyCard = (props: CardProps) => {
  const bull = <span>•</span>;

  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <Zoom
      in={props.showCard}
      timeout={500}
      style={{
        margin: "0px 30px 20px 30px",
        borderRadius: "20px",
        width: "100%",
      }}
      unmountOnExit
    >
      <Card className="my-card-con">
        <div className="card-title">
          <Typography variant="h4" className="title" gutterBottom>
            {props.guessWord}
          </Typography>
        </div>
        <div>
          {props.words.map((word) => (
            <p className="word">
              <strong>
                {" "}
                {word} {bull} <br />
              </strong>
            </p>
          ))}
        </div>
        <div className="card-btn-con">
          <Button
            onClick={() => props.onSkip()}
            className="card-btn"
            variant="contained"
            style={{ borderRadius: "25px", backgroundColor: "#FF6347" }}
            size="medium"
          >
            <SentimentVeryDissatisfiedTwoToneIcon />
            <span className="button-text">דלג</span>
          </Button>
          <Button
            onClick={() => props.onNext()}
            className="card-btn"
            variant="contained"
            style={{ borderRadius: "25px", backgroundColor: "#46da46" }}
            size="medium"
          >
            <SentimentVerySatisfiedTwoToneIcon />
            <span className="button-text">הבא</span>
          </Button>
        </div>
      </Card>
    </Zoom>
  );
};

export default MyCard;
