import React from 'react'

function SideBar(props) {

  const {handleToggleModel, data} = props

  return (
    <div className="sidebar">
      <div onClick={handleToggleModel} className="bgOverlay"></div>
      <div className="sidebarContents">

        <h2><u>{data?.title}</u></h2>
        <div className="discriptionContainer">
          <p className="discriptionTitle">{data?.date}</p>
          <p className="explanation">{data?.explanation}</p>
        </div>

        <button onClick={handleToggleModel}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
        
      </div>
    </div>
  )
}

export default SideBar