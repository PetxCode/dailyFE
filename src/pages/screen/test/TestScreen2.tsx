import React, { useState, useEffect } from 'react'
import pix from "../../../assets/pi.jpg"
import { getData } from '../../../apis/TestAPI'

const TestScreen2 = () => {
    const [loading, setLoading] = useState<boolean>(false)

    const [data, setData] = useState<Array<{ T }>>([])
    const [page, setPage] = useState<number>(2)
    const [view, setView] = useState<number>(8)

    const lastPage = page * view
    const firstPage = lastPage - view


    const [onlineData, setOnlienData] = useState([])

    useEffect(() => {
        getData().then((res) => {
            setOnlienData(res)
            setData(res.slice(firstPage, lastPage))
        })
    }, [firstPage, lastPage])

    const newPage: Array<number> = []

    for (let i = 1; i <= Math.ceil(onlineData.length / view); i++) {
        newPage.push(i)
    }

    console.log(newPage)
    console.log(onlineData)

    return (
        <div>
            <div className="flex justify-center w-[100%] pt-[30px] " >

                <div className="flex flex-wrap w-[90%]" >


                    {
                        data?.map((props: any) => (
                            <div key={props.id} className=" flex flex-col p-1 justify-start w-[180px] h-[250px] border rounded text-[12px] m-2 " >
                                <img
                                    src={pix}
                                    className="w-full h-[80%] object-cover mb-2  "
                                />
                                <div>name: <strong>{props.id}</strong></div>
                                <div>rank: <strong>show</strong> </div>
                            </div>
                        ))
                    }

                    <div
                        className=' flex justify-center w-full mt-[30px] flex-wrap '
                    >
                        {
                            newPage.map((props: any, i: number) => (
                                <div>
                                    {
                                        props === page ?
                                            <div
                                                onClick={() => { setPage(props) }}
                                                key={i} className={`flex justify-center items-center w-[30px] h-[30px] rounded  hover:cursor-pointer text-white duration-300 transition-all hover:scale-[1.05] m-1 px-2
                                bg-purple-400
                                `} >{props}</div> : <div
                                                onClick={() => { setPage(props) }}
                                                key={i} className={`flex justify-center items-center w-[30px] h-[30px] rounded  hover:cursor-pointer text-white duration-300 transition-all hover:scale-[1.05] m-1 px-2
                                bg-red-400
                                `} >{props}</div>
                                    }
                                </div>
                            ))
                        }
                    </div>

                </div>
                {loading && <div>loading....</div>}
            </div>
        </div>
    )
}

export default TestScreen2