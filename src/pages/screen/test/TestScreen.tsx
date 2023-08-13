import React, { useState, useEffect } from 'react'
import pix from "../../../assets/pi.jpg"
import { getData } from '../../../apis/TestAPI'


const TestScreen = () => {

  const [page, setPage] = useState(1)
  const [view, setView] = useState(12)

  const [data, setData] = useState<Array<T>>([])

  const lastPage = page * view
  const firstPage = lastPage - view

  useEffect(() => {
    getData().then(res => {
      setData([...data, ...(res.slice(firstPage, lastPage))])
    })
  }, [firstPage, lastPage])

  const handleScroll = () => {
    console.log(document.documentElement.scrollHeight)
    console.log(document.documentElement.scrollTop)
    console.log(window.innerHeight)

    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
      setPage(el => el + 1)
    }
  }


  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [])

  return (
    <div>
      <div className="flex justify-center w-[100%] pt-[30px] " >

        <div className="flex flex-wrap w-[90%]" >

          {
            data?.map(({ id }) => (
              <div key={id} className=" flex flex-col p-1 justify-start w-[180px] h-[250px] border rounded text-[12px] m-2 " >
                <img
                  src={pix}
                  className="w-full h-[80%] object-cover mb-2  "
                />
                <div>name: <strong>{id}</strong></div>
                <div>rank: <strong>show</strong> </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TestScreen