function monthToNumber(month) {
  switch (month) {
    case 'january':
      return 1;
    case 'february':
      return 2;
    case 'march':
      return 3;
    case 'april':
      return 4;
    case 'may':
      return 5;
    case 'june':
      return 6;
    case 'july':
      return 7;
    case 'august':
      return 8;
    case 'september':
      return 9;
    case 'october':
      return 10;
    case 'november':
      return 11;
    case 'december':
      return 12;
    default:
      return 0;
  }
}

function formatDate(dateArray) {
  let month = monthToNumber(dateArray[0]);
  let day = dateArray[1].replace(',', '').padStart(2, '0'); // Ensure day is two digits
  let year = dateArray[2];
  return `${year}${month.toString().padStart(2, '0')}${day}`; // Format as YYYYMMDD
}

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  currentDate = currentDate.toLowerCase().split(' ');
  expirationDate = expirationDate.toLowerCase().split(' ');

  let formattedCurrentDate = formatDate(currentDate);
  let formattedExpirationDate = formatDate(expirationDate);

  return enteredCode === correctCode && formattedCurrentDate <= formattedExpirationDate;
}
