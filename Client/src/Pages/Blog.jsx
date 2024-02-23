import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Slider from "../Components/Slider/Slider"
import Loading from "./Loading"

const baseUrl = import.meta.env.VITE_API_URL + '/getBlog'

const Blog = () => {



    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [blog, setBlog] = useState({})
    const { id } = useParams()
    const Url = baseUrl + `/${id}`

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const res = await axios.get(Url)
                const data = res.data.data
                setBlog(data)
                // console.log(data);
                setIsLoading(false)
            } catch (error) {
                setError(error)
            }

        }
        fetchData()
    }, [])

    if (isLoading) {
        return (
            <Loading/>
        )
    }

    if (error) {
        return (
            <h1>Error</h1>
        )
    }

    const { images, content, title } = blog

    return (
        <article className="min-h-screen bg-purple-200 flex p-10">
            <div className="  lg:w-[1080px]  w-full p-2">
                <h1 className="text-[35px] font-[800] mb-6">{title}</h1>
                <div className="w-full">
                    <Slider images={images} />
                </div>
                <p className="mt-4">{content}</p>
            </div>

        </article>
    )
}

export default Blog