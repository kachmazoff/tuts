import React from 'react'

const TutorialsList = ({ title, tuts }) => {
  return (
    <div>
      <h6>{title}</h6>
      {tuts.length === 0 && <p>Пусто</p>}
      {tuts.length > 0 && (
        <ul>
          {tuts.map((tutorial, index) => <li key={index}>{`tutorial#${index}`}</li>)}
        </ul>
      )}
    </div>
  )
}

TutorialsList.defaultProps = {
  title: 'Список тутсов',
  tuts: []
}
