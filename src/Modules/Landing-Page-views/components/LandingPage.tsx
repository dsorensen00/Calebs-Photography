import React, { Component } from "react";
import withStyles, { WithStyles } from "react-jss";
import { Link } from "react-router-dom";
import Main from "../../../Images/Main.jpg";
import Rueben from "../../../Images/Rueben.jpg";
import Building from "../../../Images/Building.jpg";
import classnames from "classnames";

const styles = {
  container: {
    padding: "3rem",
    color: "#6E352C",
    backgroundColor: "rgba(227, 197, 152, .3)",
    textAlign: "center"
  },
  row: {
    display: "flex",
    justifyContent: "space-around"
  },
  mainBgImg: {
    backgroundImage: `url(${Main})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    minHeight: "70vh",
    position: "relative"
  },
  ruebenImg: {
    backgroundImage: `url(${Rueben})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    minHeight: "40vh",
    width: "50vw",
    position: "relative"
  },
  buildingImg: {
    backgroundImage: `url(${Building})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundAttachment: "fixed",
    minHeight: "50vh",
    position: "relative"
  },
  navContainer: {
    position: "fixed",
    margin: "20px",
    width: "auto"
  },
  nav: {
    overflow: "hidden",
    backgroundColor: "#F59A44"
  },
  navText: {
    float: "left",
    color: "#FFF",
    textAlign: "center",
    padding: "14px 16px",
    textDecoration: "none",
    fontSize: "17px"
  },
  container2: {
    padding: "3rem",
    backgroundColor: "#CF5230",
    color: "rgba(227, 197, 152, .8)",
    width:"70vw"
  }
};

interface Props extends WithStyles<typeof styles> {}

class _LandingPage extends Component<Props> {
  render() {
    const { classes } = this.props;

    return (
      <>
        <div className={classes.mainBgImg}>
          <div className={classes.navContainer}>
            <div className={classnames(classes.nav)}>
              <Link to="/" className={classes.navText}>
                CT_UT
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classnames(classes.row)}>
            <div className={classes.container}>
              <div className={classes.ruebenImg} />
            </div>
            <div className={classes.container}>
              <h1>Style</h1>
              <p>This is my STYLE</p>
              <p>
                Spicy jalapeno bacon ipsum dolor amet kevin short loin alcatra, filet mignon landjaeger jowl swine short ribs
                spare ribs pig pork belly meatball fatback. Cow flank tenderloin t-bone kielbasa tongue burgdoggen bacon spare
                ribs shoulder ground round pork loin sirloin leberkas. Shankle meatball kielbasa prosciutto, jerky ham hock
                venison strip steak pastrami andouille pork. Pork sausage picanha, brisket ball tip strip steak pork loin swine.
                Bresaola capicola cow frankfurter salami chicken short loin alcatra kielbasa pig tail pork corned beef. Rump
                landjaeger spare ribs corned beef buffalo beef ribs tongue alcatra porchetta meatball ham hock.
              </p>
            </div>
          </div>
          <div className={classnames(classes.row)}>
            <div className={classes.container}>
              <h1>Gallery</h1>
              <p>This is my Gallery</p>
              <p>
                Spicy jalapeno bacon ipsum dolor amet kevin short loin alcatra, filet mignon landjaeger jowl swine short ribs
                spare ribs pig pork belly meatball fatback. Cow flank tenderloin t-bone kielbasa tongue burgdoggen bacon spare
                ribs shoulder ground round pork loin sirloin leberkas. Shankle meatball kielbasa prosciutto, jerky ham hock
                venison strip steak pastrami andouille pork. Pork sausage picanha, brisket ball tip strip steak pork loin swine.
                Bresaola capicola cow frankfurter salami chicken short loin alcatra kielbasa pig tail pork corned beef. Rump
                landjaeger spare ribs corned beef buffalo beef ribs tongue alcatra porchetta meatball ham hock.
              </p>
            </div>
            <div className={classes.container}>
              <div className={classes.ruebenImg} />
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.container2}>
              <h1>About Me</h1>
              <p>
                Spicy jalapeno bacon ipsum dolor amet kevin short loin alcatra, filet mignon landjaeger jowl swine short ribs
                spare ribs pig pork belly meatball fatback. Cow flank tenderloin t-bone kielbasa tongue burgdoggen bacon spare
                ribs shoulder ground round pork loin sirloin leberkas. Shankle meatball kielbasa prosciutto, jerky ham hock
                venison strip steak pastrami andouille pork. Pork sausage picanha, brisket ball tip strip steak pork loin swine.
                Bresaola capicola cow frankfurter salami chicken short loin alcatra kielbasa pig tail pork corned beef. Rump
                landjaeger spare ribs corned beef buffalo beef ribs tongue alcatra porchetta meatball ham hock.
              </p>
              <p>
                Spicy jalapeno bacon ipsum dolor amet kevin short loin alcatra, filet mignon landjaeger jowl swine short ribs
                spare ribs pig pork belly meatball fatback. Cow flank tenderloin t-bone kielbasa tongue burgdoggen bacon spare
                ribs shoulder ground round pork loin sirloin leberkas. Shankle meatball kielbasa prosciutto, jerky ham hock
                venison strip steak pastrami andouille pork. Pork sausage picanha, brisket ball tip strip steak pork loin swine.
                Bresaola capicola cow frankfurter salami chicken short loin alcatra kielbasa pig tail pork corned beef. Rump
                landjaeger spare ribs corned beef buffalo beef ribs tongue alcatra porchetta meatball ham hock.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export const LandingPage = withStyles(styles)(_LandingPage);
