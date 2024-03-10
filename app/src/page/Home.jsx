import React, { useContext, useEffect, useState } from 'react'
import "./Home.scss"
import MyContext from '../context/MyContext'


function Home() {

  // Fetch context's data.
  const {
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
  } = useContext(MyContext);

  // State's for dropdown items.
  const [teamOneCategoryCheck, setTeamOneCategoryCheck] = useState(false)
  const [teamTwoCategoryCheck, setTeamTwoCategoryCheck] = useState(false)
  const [teamOneClassCheck, setTeamOneClassCheck] = useState(false)
  const [teamTwoClassCheck, setTeamTwoClassCheck] = useState(false)


  const inActiveTeamOneCategory = {
    display: "none"
  }
  const activeTeamOneCategory = {
    display: "flex"
  }


  // Just for testing.
  // useEffect(() => {

  //   console.log(teamOneCategoryCheck);

  // }, [teamOneCategoryCheck])


  return (
    <div className='Home'>

      <section className='FirstLine'>

        <section className='TeamOneCategory'>

          <button className='TeamOneCategoryButton' onClick={() => setTeamOneCategoryCheck(!teamOneCategoryCheck)} >Team One Category</button>

          <section className='DropdownCategory' style={teamOneCategoryCheck ? activeTeamOneCategory : inActiveTeamOneCategory}>

            {
              categories.map((item) => (
                <p key={item} onClick={() => teamOneCategory(item) & setTeamOneCategoryCheck(!teamOneCategoryCheck)}>
                  {item}
                </p>
              ))
            }

          </section>

        </section>

        <section className='TeamTwoCategory'>

        </section>

      </section>

      <section className='SecondLine'>

      </section>

      <section className='ThirdLine'>

      </section>

    </div>
  )
}

export default Home;
