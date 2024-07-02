import mongoose from 'mongoose'

const serviceSchema = new mongoose.Schema(
    {
        id: {type: Number, require: true},
        title: {type: String, required: true},
        imageSrc: {type: String, required: true},
        imageSrcSet: {type: String, required: true},
        description: {type: String, required: true},
        link: {type: String, required: true},
    },
    {
        timestamps: true,
    }
)
const servicesModel = 
    mongoose.models.services || mongoose.model('services', serviceSchema)

export default servicesModel

export type Service = {
    id: number
    title: string
    imageSrc: string
    imageSrcSet: string
    description: string
    link: string
}
