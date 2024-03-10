import TeamData from "../data/TeamData.json"
import React, { createContext, useState } from "react"

const MyContext = createContext()

export const MyProvider = ({ children }) => {

    // States for filtering user's desire.
    const [teamOneCategory, setTeamOneCategory] = useState("All")
    const [teamTwoCategory, setTeamTwoCategory] = useState("All")
    const [teamOneClass, setTeamOneClass] = useState("All")
    const [teamTwoClass, setTeamTwoClass] = useState("All")


    // States for the user to choose.
    const categories = ["League", "National"]
    const leagueClasses = ["S", "A", "B", "c"]
    const nationalClasses = ["A", "B", "c"]


    // Values sending with the Context API.
    const values = {
        teamOneCategory,
        setTeamOneCategory,
        teamTwoCategory,
        setTeamTwoCategory,
        teamOneClass,
        setTeamOneClass,
        teamTwoClass,
        setTeamTwoClass,
        categories,
        leagueClasses,
        nationalClasses
    }


    return (
        <MyContext.Provider value={values}>{children}</MyContext.Provider>
    )
}

export default MyContext
