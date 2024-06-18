import bulbOff from "../assets/images/pic_bulboff.gif";
import bulbOn from "../assets/images/pic_bulbon.gif";
import PropTypes from 'prop-types';

export const Bulb = ({status}) => {
    let bulbImage

    if(status == 'off') {
        bulbImage = bulbOff
    } else {
        bulbImage = bulbOn
    }

    return (<img id="bulbImage" src={bulbImage} />)
}

Bulb.propTypes = {
    status: PropTypes.string
};