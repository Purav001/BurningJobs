import services from "@/lib/services/services"

export async function generateMetadata({
    params,
  }: {
    params: { title: string }
  }) {
    const service = await services.getBySlug(params.title)
    if (!service) {
      return { title: 'Service not found' }
    }
    return {
      title: service.title + `Burning Jobs`,
      description: service.description,
    }
  }

{/* give tempelate for individual service page */}
