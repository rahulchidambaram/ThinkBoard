import mongoose from "mongoose";

// 1 - Create a schema for the Note model
// 2 - create the model based on the schema and export it

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }, //createdAt & updatedAt fields will be automatically added to the schema
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
