import React, { Component } from "react";
import MainImage from '../../../Images/Main.jpg'
import withStyles, { WithStyles } from "react-jss";

const styles = {

}


interface Props extends WithStyles<typeof styles>{

}

class _MainImageCarousel extends Component<Props> {
    render() {
        const { classes } = this.props
        return (
            <>
                <img src={MainImage} alt="Header"/>
            </>
        )
    }
}

export const MainImageCarousel = withStyles(styles)(_MainImageCarousel);