const validateUserPayload = require('../utils/validateUserData');

// const validateUserPayload = new ValidateUserPayload();

const generateErrors = (
    isCardNumberValid, isCvvValid, isPhoneNumberValid, isEmailValid, isExpDateValid
) => {
    const errors = {};

    if (!isCardNumberValid) {
        errors.cardNo = 'cardNo is invalid';
    }
    if (!isCvvValid) {
        errors.cvv = 'cvv is invalid';
    }
    if (!isPhoneNumberValid) {
        errors.phoneNumber = 'phoneNumber is invalid';
    }
    if (!isEmailValid) {
        errors.email = 'email is invalid';
    }
    if(!isExpDateValid){
        errors.expDate = 'expiry date is invalid'
    }

    return errors;
}

class CardService {
    verifyCardData(data) {
        const { cardNo, cvv, phoneNumber, email, expDate } = data;

        const isCardNumberValid = validateUserPayload.validateCardNo(cardNo);
        const isCvvValid = validateUserPayload.validateCVV(cvv);
        const isPhoneNumberValid = validateUserPayload.validatePhoneNumber(phoneNumber);
        const isEmailValid = validateUserPayload.validateEmail(email);
        const isExpDateValid = validateUserPayload.validateExpDate(expDate)

        const errors = generateErrors(isCardNumberValid, isCvvValid, isPhoneNumberValid, isEmailValid, isExpDateValid);

        if (!Object.keys(errors).length) {
            return {
                bool: true,
                code: 200,
            };
        }

        return {
            bool: false,
            code: 400,
            errors,
        };
    }
}

module.exports = CardService;