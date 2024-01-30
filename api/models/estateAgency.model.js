import mongoose from "mongoose";

const estateAgencySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const EstateAgency = mongoose.model("EstateAgency", estateAgencySchema);

export default EstateAgency;
