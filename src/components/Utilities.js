import moment from 'moment';

const utilities = {
  numberToDigits(number) {
    const str = String(number);

    return str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1\u00A0');
  },

  datetime(timestamp) {
    return moment(timestamp).format('DD.MM.YYYY\u00A0|\u00A0HH:mm');
  },
};

export default utilities;
