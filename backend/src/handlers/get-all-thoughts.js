
exports.getAllThoughtsHandler = async (event) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "get all thoughts"
      })
    };
      // All log statements are written to CloudWatch
    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
  
    return response;
  }