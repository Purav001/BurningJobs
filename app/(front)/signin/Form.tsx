import { signIn, useSession } from "next-auth/react"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
    email: String
    password: String
}

const Form = () => {
    const { data: session } = useSession()

    const params = useSearchParams()
    let callbackUrl= params.get('callbackUrl') || '/'
    const router = useRouter()

    const{
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<Inputs>({
        defaultValues: {
            email: '',
            password: '',
        }
    })
    useEffect(() => {
        if (session && session.user) {
            router.push(callbackUrl)
        }
        }, [callbackUrl, params, router, session])
    const formSubmit: SubmitHandler<Inputs> = async (form) => {
        const { email, password } = form
        signIn('credentials', {
            email,
            password,
        })
    }
    return (
        <div></div>
    )
}
export default Form