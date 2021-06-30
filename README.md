# TALENTQL CODE CHALLENGE

This project is the TalentQL code challenge written in vanilla Node.js without any framework or libraries. This service offers one api that's used to validate a user's card details.

## Table of Contents
1. [Requirements](#requirements)
2. [Getting Started](#getting_started)
    1. [Sample data](#sample_data)
    2. [Errors](#errors)


### Requirements <a name="requirements"></a>

* Node.js v12.x or higher
* npm


### Getting Started <a name="getting_started"></a>

```
$ cd talentql
$ npm start
```

You should now be able to access the API via http://localhost:4500/validate

#### Sample data <a name="sample_data"></a>
js
{
    "cardNo":"79927398713",
    "expDate":"10/21",
    "cvv":234,
    "phoneNumber":"08056698098",
    "email":"tmail@gmail.com"
}

#### Errors <a name="errors"></a>
{
    "bool": false,
    "code": 400,
    "errors": {
        "expDate": "expiry date is invalid"
    }
}