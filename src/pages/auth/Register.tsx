import pix from "../../assets/dummy.jpg"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { registerAPI } from "../../apis/AuthAPI"

const Register = () => {
    const navigate = useNavigate()
    const [image, setImage] = useState<string>("")
    const [avatar, setAvatar] = useState<string>(pix)

    const onHandleImage = (e: any) => {
        const localImage = e.target.files[0]
        const saveImage = URL.createObjectURL(localImage)
        setImage(localImage)
        setAvatar(saveImage)
    }

    const model = yup.object({
        name: yup.string().required(),
        email: yup.string().required(),
        password: yup.string().required(),
        confirm: yup.string().oneOf([yup.ref("password")]),
    })

    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(model)
    })

    const onSubmit = handleSubmit(async (data) => {
        const { name, email, password } = data

        const formData = new FormData()
        formData.append("name", name)
        formData.append("email", email)
        formData.append("password", password)
        formData.append("avatar", image)


        registerAPI(formData).then(() => {
            navigate("/sign-in")
        })
    })

    return (
        <div className="w-full flex justify-center items-center h-[100vh]" >
            <form
                onSubmit={onSubmit}
                className="flex flex-col justify-center" >

                {/* Image SetUp starts */}
                <div className="flex flex-col items-center mb-8" >
                    <img className="w-[100px] h-[100px] rounded-[50%] object-cover border-4 border-[#410441]  "
                        src={avatar}
                    />
                    <label className="py-2 px-4 my-2 bg-purple-700 text-purple-200 rounded-md hover:scale-[1.02] hover:cursor-pointer duration-300 transition-all "
                        htmlFor="image"
                    >upload image</label>
                    <input placeholder="image"
                        className="hidden"
                        id='image'
                        type="file"
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={onHandleImage}
                    />
                </div>
                {/* Image SetUp Ends */}

                {/* UserName Input SetUp starts */}
                <div className="flex flex-col items-start mb-2 ">
                    <label className="text-[12px] font-semibold " >Enter Name</label>
                    <input
                        placeholder="Enter your Name"
                        className="w-[300px] border p-2 text-[14px] rounded "
                        {...register("name")}
                    />
                    {
                        errors.name?.message && <label className="text-[12px] font-semibold w-[300px] flex justify-end text-rose-700 " >User Name Error</label>
                    }
                </div>
                {/*  UserName Input SetUp ends */}


                {/*  Email Input SetUp starts */}
                <div className="flex flex-col items-start mb-2 ">
                    <label className="text-[12px] font-semibold " >Enter Email</label>
                    <input
                        placeholder="Enter your Email"
                        className="w-[300px] border p-2 text-[14px] rounded "
                        {...register("email")}
                    />
                    {
                        errors.email?.message && <label className="text-[12px] font-semibold w-[300px] flex justify-end text-rose-700 " >Email Error</label>
                    }
                </div>
                {/*  Email Input SetUp ends */}

                {/*  Password Input SetUp starts */}
                <div className="flex flex-col items-start mb-2 ">
                    <label className="text-[12px] font-semibold " >Enter Password</label>
                    <input
                        placeholder="Enter your Password"
                        className="w-[300px] border p-2 text-[14px] rounded "
                        {...register("password")}
                    />
                    {
                        errors.password?.message && <label className="text-[12px] font-semibold w-[300px] flex justify-end text-rose-700 " >Password Error</label>
                    }
                </div>
                {/*  Password Input SetUp ends */}

                {/*  Confirm Input SetUp starts */}
                <div className="flex flex-col items-start mb-2 ">
                    <label className="text-[12px] font-semibold " >Enter Confirm Password</label>
                    <input
                        placeholder="Repeat Password"
                        className="w-[300px] border p-2 text-[14px] rounded "
                        {...register("confirm")}
                    />
                    {
                        errors.confirm?.message && <label className="text-[12px] font-semibold w-[300px] flex justify-end text-rose-700 " >Confirm Error</label>
                    }
                </div>
                {/*  Confirm Input SetUp starts */}

                {/*  Button  starts */}
                <button className="py-3 px-4 my-2 bg-purple-700 text-purple-200 rounded hover:scale-[1.02] hover:cursor-pointer duration-300 transition-all flex justify-center border border-purple-950 "
                    type="submit"
                >Register</button>

                <div className="my-4" />
                <hr />
                <div className="mt-4" />
                <div className="flex flex-col items-center w-[300px] text-[12px] " >
                    <div >Already have an Account</div>
                    <Link to="/sign-in" >
                        <span className="font-bold text-purple-500 hover:cursor-pointer decoration-none " >Please Sign in here</span>
                    </Link>
                </div>
            </form>

        </div>
    )
}

export default Register