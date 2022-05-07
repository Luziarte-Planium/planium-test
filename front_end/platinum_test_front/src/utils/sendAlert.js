import { toast } from 'react-toastify';

/**
 * This function will send a alert based on a number status.
 * @param {number} status  0 Or nothing for error, 1 for success and everything else info.
 * @param {string} message Message with decription to alert.
 */

const sendAlert = (status = 0, message) => {
  if (Number(status) === 0) {
    toast.error(message, {
      pauseOnFocusLoss: false,
    });
  } else if (Number(status) === 1) {
    toast.success(message, {
      pauseOnFocusLoss: false,
    });
  } else {
    toast.info(message, {
      pauseOnFocusLoss: false,
    });
  }
};

export default sendAlert;
