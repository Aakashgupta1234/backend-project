import mongoose,{schema} from "mongoose";
import mongooseAggregatePaginate from "mongooseAggregatePaginate -v2";

const videoschema = new schema(
    {
        videoFile:{
            type:string,// cloudinary url
            required:true
        },
        thumnail:{
            type:string,// cloudinary url
            required:true
        },
        title:{
            type:string,
            required:true
        },
        discription:{
            type:string,
            required:true
        },
        duration:{
            type:Number,
            required:true
        },
        viwes:{
            type:number,
            default:0
        },
        ispublished:{
            type:Boolean,
            default:true
        },
        owner:{
            type:schema.type.ObjectId,
            ref:"User"
        }
    },
    {
        timestamps:true
    }
)

videoschema.plugin(mongooseAggregatePaginate-v2)


export const Video = mongoose.model("video",videoschema)

