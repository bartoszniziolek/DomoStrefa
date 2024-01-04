import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  userRef: {
    type: String,
    required: true,
    unique: true,
  },
});

const Client = mongoose.model("Client", clientSchema);

export default Client;
