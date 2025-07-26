import mongoose, {model, mongo, Schema} from "mongoose"


mongoose.connect("mongodb+srv://thapamohit2058:SlWIMRGewwKpC0a8@cluster0.gyz6xuw.mongodb.net/secondbrain")
const UserSchema = new Schema({
    username:{type:String, unique:true},
    password:String
})


export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
    title:String,
    link:String,
    tags:[{type:mongoose.Types.ObjectId, ref:'Tag'}],
    userId:{type:mongoose.Types.ObjectId, ref:'User', required:true}
})

export const ContentModel = model("Content", ContentSchema)