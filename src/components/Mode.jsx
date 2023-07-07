import { useContext } from "react";
import UserContext from "../UserContext";

export default function Mode() {
    const {mode,setMode} = useContext(UserContext)

    function forChange() {
        setMode(!mode)
    }

    return (
        <div className=' flex justify-evenly bg-purple-500 p-4 rounded-[10px] mb-[20px]'>
            <div className={`${mode ? "text-white" : "text-black"} flex flex-col  justify-start w-full`}>
                <h2 className='text-[30px]'>Hi!</h2>
                <p>Choose Dogs</p>
            </div>
            <button className='bg-inherit w-[120px] cursor-pointer' onClick={forChange}>
                    <img src={mode? "dark-icon.png" : "light-mode.png"}/>
            </button>
        </div>
    )
}