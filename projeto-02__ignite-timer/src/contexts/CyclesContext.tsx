import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { differenceInSeconds } from 'date-fns'

import { Cycle, cyclesReducer } from '../reducers/cycles/reducer'
import {
  addNewCycleAction,
  interruptActiveCycleAction,
  markActiveCycleAsFinishedAction,
} from '../reducers/cycles/actions'
interface CreateCycleData {
  task: string
  amountInMinutes: number
}
interface CyclesContextData {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  elapsedTimeInSeconds: number
  markActiveCycleAsFinished: () => void
  setElapsedTime: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  interruptActiveCycle: () => void
}

export const CyclesContext = createContext({} as CyclesContextData)
interface CyclesContextProviderProps {
  children: ReactNode
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-timer:cycles-state-1.0.0'
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
      return initialState
    }
  )

  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [elapsedTimeInSeconds, setElapsedTimeInSeconds] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(
        new Date(),
        /* new Date() is needed Due to JSON.parse return startData as string */
        new Date(activeCycle.startDate)
      )
    }

    return 0
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)

    localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJSON)
  }, [cyclesState])

  function setElapsedTime(seconds: number) {
    setElapsedTimeInSeconds(seconds)
  }

  function markActiveCycleAsFinished() {
    dispatch(markActiveCycleAsFinishedAction())
  }

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      amountInMinutes: data.amountInMinutes,
      startDate: new Date(),
    }

    dispatch(addNewCycleAction(newCycle))
    setElapsedTimeInSeconds(0)
  }

  function interruptActiveCycle() {
    dispatch(interruptActiveCycleAction())
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        elapsedTimeInSeconds,
        createNewCycle,
        interruptActiveCycle,
        setElapsedTime,
        markActiveCycleAsFinished,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
