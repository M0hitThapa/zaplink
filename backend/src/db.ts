import mongoose, {model, mongo, Schema} from "mongoose"


mongoose.connect("mongodb+srv://mohitthapa2058:tC9zBOCeQQN6CfxM@cluster0.xjgkv4b.mongodb.net/secondbrain")
const UserSchema = new Schema({
    username:{type:String, unique:true},
    password:String
})


export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
    title:String,
    link:String,
    type:String,
    tags:[{type:mongoose.Types.ObjectId, ref:'Tag'}],
    userId:{type:mongoose.Types.ObjectId, ref:'User',
         required:true}
})

const LinkSchema = new Schema({
    hash:String,
    userId:{type:mongoose.Types.ObjectId, ref:'User', required:true, unique:true}
})

export const LinkModel = model("Links", LinkSchema)

export const ContentModel = model("Content", ContentSchema)