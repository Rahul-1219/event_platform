import { Document, Schema, model, models } from "mongoose";

export interface ICategory extends Document {
  _id: string;
  name: string;
}
const CateogrySchema = new Schema({
  name: { type: String, required: true, unique: true },
});

const Cateogry = models.Cateogry || model("Cateogry", CateogrySchema);

export default Cateogry;
