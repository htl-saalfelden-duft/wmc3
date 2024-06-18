import PropTypes from 'prop-types';

export const Alert = ({message, alertClass}) => {

  return (
    <div className={'alert '+alertClass} role="alert">
      {message}
    </div>
  );
};

Alert.propTypes = {
    message: PropTypes.string,
    alertClass: PropTypes.string
};
