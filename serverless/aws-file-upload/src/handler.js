const AWS = require("aws-sdk");
const s3 = AWS.S3();

module.exports.upload = async (event, context) => {
  try {
    const { bucketName, fileName, fileContent } = JSON.parse(event.body);
    if (!fileName || !fileContent || !bucketName) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "Missing required fields: fileName, fileContent, bucketName",
        }),
      };
    }
    const params = {
      Bucket: bucketName,
      Key: fileName,
      Body: Buffer.from(fileContent, "base64"),
      ContentType: "application/octet-stream",
    };
    await s3.upload(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ mesaage: "file uploaded successfullly" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Failed to upload file",
        error: error.message,
      }),
    };
  }
};
