const mongoose = require("mongoose");
const { Schema } = mongoose;

const campaignEntrySchema = new Schema(
  {
    dateTime: { type: Date, default: Date.now },
    sessionDate: { type: Date },
    entry: { type: String },
    tags: { type: Array },
  },

  { timestamp: true }
);

mongoose.model("waitTimes", campaignEntrySchema);
