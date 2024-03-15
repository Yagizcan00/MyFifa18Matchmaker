import React, { useContext, useState } from 'react'
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
    nationalClasses,
    SelectTeam,
    teamOne,
    teamTwo
  } = useContext(MyContext);


  // States for dropdown items.
  const [teamOneCategoryCheck, setTeamOneCategoryCheck] = useState(false)
  const [teamTwoCategoryCheck, setTeamTwoCategoryCheck] = useState(false)
  const [teamOneClassCheck, setTeamOneClassCheck] = useState(false)
  const [teamTwoClassCheck, setTeamTwoClassCheck] = useState(false)


  return (
    <div className='Home'>

      <section className='FirstLine'>

        <section className='TeamCategory'>

          <button className='TeamCategoryButton' onClick={() => setTeamOneCategoryCheck(!teamOneCategoryCheck)}>Team One Category</button>

          <section className={teamOneCategoryCheck ? 'DropdownCategoryActive' : 'DropdownCategoryInactive'}>

            {
              categories.map((item) => (
                <p key={item} onClick={() => setTeamOneCategory(item) & setTeamOneCategoryCheck(!teamOneCategoryCheck)}>
                  {item}
                </p>
              ))
            }

          </section>

        </section>

        <section className='TeamCategory'>

          <button className='TeamCategoryButton' onClick={() => setTeamTwoCategoryCheck(!teamTwoCategoryCheck)}>Team Two Category</button>

          <section className={teamTwoCategoryCheck ? 'DropdownCategoryActive' : 'DropdownCategoryInactive'}>

            {
              categories.map((item) => (
                <p key={item} onClick={() => setTeamTwoCategory(item) & setTeamTwoCategoryCheck(!teamTwoCategoryCheck)}>
                  {item}
                </p>
              ))
            }

          </section>

        </section>

      </section>

      <section className='SecondLine'>

        <section className='TeamClass'>

          <button className='TeamClassButton' onClick={() => setTeamOneClassCheck(!teamOneClassCheck)}>Team One Class</button>

          <section className={teamOneClassCheck ? 'DropdownClassActive' : 'DropdownClassInactive'}>

            {
              (teamOneCategory === "League")
                ?
                (leagueClasses.map((item) => (
                  <p key={item} onClick={() => setTeamOneClass(item) & setTeamOneClassCheck(!teamOneClassCheck)}>
                    {item}
                  </p>
                )))
                :
                (nationalClasses.map((item) => (
                  <p key={item} onClick={() => setTeamOneClass(item) & setTeamOneClassCheck(!teamOneClassCheck)}>
                    {item}
                  </p>
                )))
            }

          </section>

        </section>

        <section className='TeamClass'>

          <button className='TeamClassButton' onClick={() => setTeamTwoClassCheck(!teamTwoClassCheck)}>Team Two Class</button>

          <section className={teamTwoClassCheck ? 'DropdownClassActive' : 'DropdownClassInactive'}>

            {
              (teamTwoCategory === "League")
                ?
                (leagueClasses.map((item) => (
                  <p key={item} onClick={() => setTeamTwoClass(item) & setTeamTwoClassCheck(!teamTwoClassCheck)}>
                    {item}
                  </p>
                )))
                :
                (nationalClasses.map((item) => (
                  <p key={item} onClick={() => setTeamTwoClass(item) & setTeamTwoClassCheck(!teamTwoClassCheck)}>
                    {item}
                  </p>
                )))
            }

          </section>

        </section>

      </section>

      <section className='ThirdLine'>

        <button className='RunButton' onClick={() => SelectTeam()}>Run</button>

        <section className='Teams'>
          <h1>{teamOne}</h1>
          <h1>{teamTwo}</h1>
        </section>

      </section>

    </div>
  )
}

export default Home;
