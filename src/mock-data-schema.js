export const schema = {
    "type": "object",
    "properties": {
      "users": {
        "type": "array",
        "minItems": 30,
        "maxItems": 50,
        "items": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "unique": true,
              "minimum": 1
            },
            "firstName": {
              "type": "string",
              "faker": "name.firstName"
            },
            "secondName": {
              "type": "string",
              "faker": "name.firstName"
            },
            "lastName": {
              "type": "string",
              "faker": "name.lastName"
            },
            "email": {
              "type": "string",
              "faker": "internet.email"
            },
            "phone": {
              "type": "string",
              "faker": "phone.phoneNumber"
            },
            "city": {
              "type": "string",
              "faker": "address.city"
            },
            "streetAddress": {
              "type": "string",
              "faker": "address.streetAddress"
            },
            "currencyName": {
              "type": "string",
              "faker": "finance.currencyName"
            },
            "currencyCode": {
              "type": "string",
              "faker": "finance.currencyCode"
            },
            "currencySymbol": {
              "type": "string",
              "faker": "finance.currencySymbol"
            },
            "account": {
              "type": "string",
              "faker": "finance.account"
            },
            "accountName": {
              "type": "string",
              "faker": "finance.accountName"
            },
            "bitcoinAddress": {
              "type": "string",
              "faker": "finance.bitcoinAddress"
            },
          },
          "required": ["id", "firstName", "secondName", "lastName", "city", "streetAddress", "phone", "email", "currencyName","currencyCode","currencySymbol","account","accountName","bitcoinAddress"]
        }
      }
    },
    "required": ["users"]
  };