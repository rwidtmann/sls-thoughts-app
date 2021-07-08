
exports.getByUserHandler = async (event) => {
    if (event.httpMethod !== 'GET') {
      throw new Error(`getMethod only accept GET method, you tried: ${event.httpMethod}`);
    }
    // All log statements are written to CloudWatch
    console.info('received:', event);
  
    // Get username from pathParameters from APIGateway because of `/{username}` in the template.yml
    const username = event.pathParameters.username;
  
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: `get by ${username}`
      })
    };
  
    // All log statements are written to CloudWatch
    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
  }