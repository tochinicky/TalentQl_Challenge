const url = require("url");

const routePaths = {
  cards: "cards",
  "validateCard": "/cards/validate",
};

const getPathName = (reqUrl) => {
  const parsedReqUrl = url.parse(reqUrl, true);
  return parsedReqUrl.pathname.trim();
};

const response = (res, statusCode, data) => {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
};

const isKeyInObject = (obj, ...keys) => {
  const missingKeys = [];
  keys.forEach(key => {
    if (!(key in obj)) missingKeys.push(key);
  });

  return missingKeys;
};

const trimWhiteSpace = (obj) => {
  // objects in JS are passed by reference, stringify to remove ref
  const newObj = JSON.parse(JSON.stringify(obj));
  for (const key in newObj) {
    if (typeof newObj[key] === 'string') {
      newObj[key] = newObj[key].trim();
    }
  }
  return newObj;
}

module.exports = {
  routePaths,
  getPathName,
  response,
  isKeyInObject,
  trimWhiteSpace,
};
