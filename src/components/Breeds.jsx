import { useContext, useEffect, useState } from "react";
import { getBreedDogs } from "../useRequests"
import Reload from "./Reload";
import UserContext from "../UserContext";

export default function Breeds({ yntrvacBreeds }) {
    const [dogBreeds, setDogBreeds] = useState([])
    const [selectedBreeds, setSelectedBreeds] = useState([])

    useEffect(() => {
        const randomBreed = Math.round(Math.random() * 28)

        getBreedDogs(6, randomBreed).then((res) => {
            setDogBreeds(res.data)
        })
    }, [])

    useEffect(() => {
        yntrvacBreeds(selectedBreeds)
    }, [selectedBreeds])

    function haveBreed(x) {
        return selectedBreeds.includes(x)
    }

    function isSelected(id) {
        if (haveBreed(id)) {
            setSelectedBreeds(prev => prev.filter(el => el !== id))
        }
        else {
            setSelectedBreeds(prev => [...prev, id])
        }
    }

    const { mode } = useContext(UserContext)

    return (
        <div className="text-black rounded-xl flex  gap-4 justify-center bg-purple-500 p-8 border-5 w-full">
            {dogBreeds.length == 0 ? <Reload /> : ""}
            {
                dogBreeds.map((el) => {
                    return (
                        <div onClick={() => isSelected(el.id)} className={`${selectedBreeds.includes(el.id) ? " text-black bg-green-700 " : ""} ${mode ? "  text-white" : "text-black border-black"} p-3 border-4 rounded-xl  transition hover:opacity-20 hover:cursor-pointer`} key={el.id}>
                            <p>{el.name}</p>
                        </div>
                    )
                })
            }

        </div>
    )
}