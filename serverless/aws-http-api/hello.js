module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: "Hello from lambda" }),
  };
};
