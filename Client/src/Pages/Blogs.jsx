import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loading from "./Loading"

const baseUrl = import.meta.env.VITE_API_URL + '/getAllBlogs'

const Blogs = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [blogs, setBlogs] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get(baseUrl)
        const data = res.data.data
        console.log(data);
        setBlogs(data)
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



  return (
    <div className="bg-purple-200">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Blogs</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {blogs.map((blog) => (
            <div key={blog._id} className="relative w-[320px] h-60">
              <div className="w-100 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-60">
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div className="w-full">
                  <h3 className="text-md text-center w-full text-gray-900">
                    <Link to={`/blogs/${blog._id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {blog.title}
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs