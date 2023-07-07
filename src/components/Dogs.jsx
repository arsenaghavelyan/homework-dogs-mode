import { useState, useEffect, useContext } from "react"
import { getDogs } from "../useRequests.js"
import Reload from "./Reload.jsx"
import UserContext from "../UserContext.js"

export default function Dog({ dogBreeds }) {
    const [dogs, setDogs] = useState([])

    useEffect(() => {
        getDogs(10, dogBreeds).then((response) => {
            setDogs(response.data)
        })
    }, [dogBreeds])

    const {mode} = useContext(UserContext)

    return (
        <div className="flex text-center flex-col  bg-purple-500 rounded-xl mt-[20px] ">
            <div>
                <h2 className={`${mode ? "text-white" :"text-black"} text-[50px]`}>Dogs</h2>
            </div>
            <div className=' flex flex-wrap  justify-center bg-purple-500 p-4 gap-4 mt-[20px] rounded-[10px]'>
                {dogs.length == 0 ? <Reload /> : ""}
                {
                    dogs.map((el) => {
                        return (
                            <div key={el.id}>
                                <img src={el.url} className='w-[350px] ' />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}