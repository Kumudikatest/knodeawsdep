const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
const my = require('mysql')

exports.handler = async (event) => {
    debugger;
    try {
        let data = await ddb.scan({
            TableName: "KChineseAnimal"
        }).promise();
        console.log(my);

    } catch (err) {
        console.log(err);
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};