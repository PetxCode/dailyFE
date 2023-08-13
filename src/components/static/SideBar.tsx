import { useState } from "react"

const SideBar = () => {
    const [state, setState] = useState<boolean>(true)

    // "w-[200px] h-full fixed border-r-[1px]  mt-[70px]"
    return (
        <div
            className={`w-[${state ? "200px" : "70px"}] h-full fixed border-r-[1px]  mt-[70px]`}
        >
            <div className="flex items-center mt-2 pl-2 w-full hover:bg-slate-100 hover:cursor-pointer duration-300 transition-all py-2  " >
                <div>img</div>
                <div>my feed</div>
            </div>
            <div className="flex items-center mt-2 pl-2 w-full hover:bg-slate-100 hover:cursor-pointer duration-300 transition-all py-2  " >
                <div>img</div>
                <div>my feed</div>
            </div>
        </div>
    )
}

export default SideBar