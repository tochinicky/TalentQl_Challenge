const CardService = require('../services/CardService');
const { response, isKeyInObject, trimWhiteSpace } = require('../utils');

const cardService = new CardService();

class CardsController {
  async validateCard(req, res) {
    let body = "";

    req.on("data", (chunk) => {
      // convert chunk to string to allow XML
      body += chunk.toString();
    });

    req.on("end", () => {
      const data = JSON.parse(body);

      const missingKeys = isKeyInObject(data, 'cardNo', 'cvv', 'phoneNumber', 'email', 'expDate');

      if (missingKeys.length) {
        const isMissingKeysEqualToOne = missingKeys.length === 1;
        const text = isMissingKeysEqualToOne ? 'is' : 'are';
        const data = {
          message: `"${missingKeys.toString()}" ${text} required`,
          bool: false,
          code: 400,
        }

        return response(res, data.code, data);
      }

      // remove obj values' whitespace
      const trimmedData = trimWhiteSpace(data);

      const verifiedCard = cardService.verifyCardData(trimmedData);
      return response(res, 200, verifiedCard);
    });

  }
}

module.exports = CardsController;
