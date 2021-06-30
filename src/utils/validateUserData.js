class ValidateUserPayload {
  static validateCardNo(cardNo) {
    const nDigits = cardNo.length;

    let nSum = 0;
    let isSecond = false;

    for (let i = nDigits - 1; i >= 0; i--) {
      let d = cardNo[i].charCodeAt() - "0".charCodeAt();

      if (isSecond == true) {
        d = d * 2;
      }

      nSum += parseInt(d / 10, 10);
      nSum += d % 10;

      isSecond = !isSecond;
    }

    return nSum % 10 == 0;
  }

  static validateCVV(cvv2) {
    return typeof cvv2 === "number"
      && cvv2.toString().length === 3
        ? true
        : false;
  }

  static validatePhoneNumber(phoneNumber) {
    return typeof phoneNumber === "string"
      && phoneNumber.length === 11
        ? true
        : false;
  }

  static validateEmail(email) {
    const pattern = /^\S+@\S+\.\S+$/;
    return pattern.test(email);
  }

  static validateExpDate(expDate) {
    const expDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    const isValid = expDateRegex.test(expDate);

    if (!isValid) return false;

    const dateArray = expDate.split('/');
    const month = dateArray[0];
    const year = dateArray[1];

    const sourceDate = new Date();
    if (year < sourceDate.getFullYear().toString().slice(2, 4)) {
      return false;
    } else if (
      year <= sourceDate.getFullYear().toString().slice(2, 4) &&
      month < sourceDate.getMonth() + 1
    ) {
      return false;
    }

    return true;
   }
}

module.exports = ValidateUserPayload;
