import { cache } from 'react'
import dbConnect from '../dbCOnnect'
import servicesModel, {Service} from '@/lib/models/servicesModel'

export const revalidate = 3600

const getLatest = cache(async () => {
    await dbConnect()
    const services = await servicesModel.find({})
    .sort({_id : -1})
    .lean()
    return services as unknown as Service[]
})
const getBySlug = cache(async (slug : String) => {
    await dbConnect()
    const services = await servicesModel.findOne({ slug }).lean()
    return services as unknown as Service
})

const services = {
    getLatest,
    getBySlug,
}
export default services