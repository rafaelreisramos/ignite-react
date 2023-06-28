import { ReactNode, createContext, useState } from 'react'

interface Cycle {
  id: string
  task: string
  amountInMinutes: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

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
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [elapsedTimeInSeconds, setElapsedTimeInSeconds] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function setElapsedTime(seconds: number) {
    setElapsedTimeInSeconds(seconds)
  }

  function markActiveCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      })
    )
  }

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      amountInMinutes: data.amountInMinutes,
      startDate: new Date(),
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    setElapsedTimeInSeconds(0)
  }

  function interruptActiveCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      })
    )

    setActiveCycleId(null)
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
