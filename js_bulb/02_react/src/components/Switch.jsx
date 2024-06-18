import PropTypes from 'prop-types';

export const Switch = ({onChange}) => {
    const switchBulb = (status) => {
        onChange(status)
    }
    
    return (
        <div className="btn-group">
        <button
          className="btn btn-outline-primary"
          onClick={() => switchBulb("off")}
        >
          Off
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => switchBulb("on")}
        >
          On
        </button>
      </div>
    )
}

Switch.propTypes = {
    onChange: PropTypes.func
};