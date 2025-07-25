import mongoose, {model, Schema} from "mongoose"


mongoose.connect("mongodb+srv://thapamohit2058:SlWIMRGewwKpC0a8@cluster0.gyz6xuw.mongodb.net/secondbrain")
const UserSchema = new Schema({
    username:{type:String, unique:true},
    password:String
})


export const UserModel = model("User", UserSchema);