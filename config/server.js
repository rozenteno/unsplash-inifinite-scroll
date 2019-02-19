module.exports = {
  APPLICATION_ID:
    process.env.APPLICATION_ID ||
    "af7db76a9aefcc2d48945d37b1662aedd01eafdcac0febcc9487b45db27bb487",
  SECRET:
    process.env.SECRET ||
    "c763563ee67b9120472b880f8e9dfffbf66d9cbcbdaddf87967642ed855934a9",
  CALLBACK_URL: process.env.CALLBACK_URL || "http://localhost:3000"
};
