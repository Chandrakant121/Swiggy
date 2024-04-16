// Custom Hook
import { useEffect, useState } from "react"
import { MENU_API } from "./constatnts"

const useResturantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId)
        const json = await data.json()
        // console.log(json.data?.cards[2]?.card?.card?.info)
        // console.log(json.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)
        setResInfo(json.data)
        console.log(resInfo, "Rest")
    }

    return resInfo
}

export default useResturantMenu