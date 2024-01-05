import mongoose from "mongoose";

const estateAgentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  agency: {
    type: String,
    default: "no agency",
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

const EstateAgent = mongoose.model("EstateAgent", estateAgentSchema);

export default EstateAgent;
