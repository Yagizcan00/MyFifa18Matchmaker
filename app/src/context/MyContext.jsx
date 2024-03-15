import TeamData from "../data/TeamData.json"
import React, { createContext, useEffect, useState } from "react"

const MyContext = createContext()

export const MyProvider = ({ children }) => {

    // States for filtering user's desire.
    const [teamOneCategory, setTeamOneCategory] = useState("All")
    const [teamTwoCategory, setTeamTwoCategory] = useState("All")
    const [teamOneClass, setTeamOneClass] = useState("All")
    const [teamTwoClass, setTeamTwoClass] = useState("All")


    // States for the user to choose.
    const categories = ["League", "National"]
    const leagueClasses = ["S", "A", "B", "C"]
    const nationalClasses = ["A", "B", "C"]


    // Choose Teams.
    const [teamOne, setTeamOne] = useState(null)
    const teamOneData = []
    const [teamTwo, setTeamTwo] = useState(null)
    const teamTwoData = []

    const SelectTeam = () => {

        if (teamOneCategory !== "All" && teamOneClass !== "All") {

            // Add all filtered teams to array.
            teamOneData.push(TeamData.filter(item => item["Team Category"] === teamOneCategory && item["Team Class"] === teamOneClass))

            // Choose one random item from filtered array.
            let filteredItemOne = teamOneData[0][Math.floor(Math.random() * teamOneData[0].length)];

            // Set the item to right state.
            setTeamOne(filteredItemOne["Team Name"]);

            // Add all filtered teams to array.
            teamTwoData.push(TeamData.filter(item => item["Team Category"] === teamTwoCategory && item["Team Class"] === teamTwoClass))

            // Choose Two random item from filtered array.
            let filteredItemTwo = teamTwoData[0][Math.floor(Math.random() * teamTwoData[0].length)];

            // Set the item to right state.
            setTeamTwo(filteredItemTwo["Team Name"]);

            console.log(teamOne + " & " + teamTwo)
        } else {
            console.log("Eksik veri seçili !")
        }
    }


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
        nationalClasses,
        SelectTeam,
        teamOne,
        teamTwo,
    }


    return (
        <MyContext.Provider value={values}>{children}</MyContext.Provider>
    )
}

export default MyContext
