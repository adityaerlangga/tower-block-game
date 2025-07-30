import { useState, useEffect, useRef } from 'react'
import towerGameBackground from './assets/tower-game-background.png'
import peopleIcon from './assets/people-icon.svg'

function App() {

  const [population, setPopulation] = useState(726)

  // Floor
  const [floor, setFloor] = useState(899)
  const [maxFloor, setMaxFloor] = useState(1000)
  const [minFloor, setMinFloor] = useState(0)

  // format population to pad with 0s to 3 digits
  const formattedPopulation = (population: number) => {
    return population.toString().padStart(5, '0')
  }

  return (
    <div 
      className="relative flex flex-col items-center justify-center h-screen w-full max-w-lg mx-auto bg-cover bg-bottom"
      style={{ backgroundImage: `url(${towerGameBackground})` }}
    >
      {/* Top center component */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg p-4 shadow-lg">
        {/* <img src="path/to/spark-icon.svg" alt="Spark Icon" className="w-4 h-4 mr-2" /> */}
        <div className="w-32 bg-gray-200 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
        </div>
      </div>
      
      {/* Center Right component with reversed vertical progress bar */}
      <div className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white rounded-lg p-4 shadow-lg flex flex-col items-center">
        <div className="bg-white px-3 py-1 w-16 rounded-lg text-lg text-gray-800 flex justify-center items-center absolute -top-7 z-10">
          {maxFloor}
        </div>
        <div className="h-64 bg-gray-500 rounded-full w-2.5 flex flex-col-reverse relative">
          <div className="bg-blue-600 w-2.5 rounded-full" style={{ height: `${(floor / maxFloor) * 100}%` }}></div>
          <div className="bg-white px-2 py-1 rounded-lg absolute right-7 ml-2 text-gray-800 text-sm" style={{ bottom: `${(floor / maxFloor) * 100}%`, transform: 'translateY(50%)' }}>
            {floor}
          </div>
        </div>
        <div className="bg-white px-3 py-1 w-16 rounded-lg text-lg text-gray-800 flex justify-center items-center absolute -bottom-7 z-10">
          {minFloor}
        </div>
      </div>

      {/* Bottom Left component */}
      <div className="absolute bottom-8 left-6 bg-white rounded-lg p-3 shadow-lg">
        <div className="text-sm text-gray-800 flex items-center">
          <img src={peopleIcon} alt="People Icon" className="w-6 h-6 mr-2" />
          <span>{formattedPopulation(population)}</span>
        </div>
      </div>
    </div>
  )
}

export default App
