import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  area: {
    type: Number,
    required: true,
  },
  numberOfRooms: {
    type: Number,
    required: true,
  },
  parking: {
    type: Boolean,
    required: true,
  },
  furnished: {
    type: Boolean,
    required: true,
  },
  agent: {
    type: String,
    required: true,
  },
  agency: {
    type: String,
    required: true,
  },
});

const Property = mongoose.model("Property", propertySchema);

export default Property;
