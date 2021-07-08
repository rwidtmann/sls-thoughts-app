
const AWS = require('aws-sdk');
AWS.config.update({region:'us-east-2'});
const fs = require('fs');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.TABLE_NAME;

AWS.config.update({
  region: 'us-east-2'
});


console.log('Importing thoughts into DynamoDB. Please wait.');
const allUsers = JSON.parse(fs.readFileSync('./backend/src/seed/users.json', 'utf8'));
allUsers.forEach(user => {
  const params = {
    TableName: "thoughts-app-stack-ThoughtsTable-1NWYVDCBS6DNG",
    Item: {
      'username': user.username,
      'createdAt': user.createdAt,
      'thought': user.thought
    }
  };

  dynamodb.put(params, (err, data) => {
    if (err) {
      console.error('Unable to add thought', user.username, '. Error JSON:', JSON.stringify(err, null, 2));
    } else {
      console.log('PutItem succeeded:', user.username);
    }
  });
});