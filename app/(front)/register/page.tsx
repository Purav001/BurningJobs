import { Metadata } from 'next'
import Form from './Form'

export const metadata: Metadata = {
  title: `Register - Burning Jobs`,
  description: `Join BUrning Jobs Family: a brand of Exemplar Global Resources Pvt Ltd`,
}

export default async function Register() {
  return <Form />
}
