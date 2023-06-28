import { useContext, useEffect } from 'react'
import { differenceInSeconds } from 'date-fns'

import { CyclesContext } from '../../../../contexts/CyclesContext'

import { CountdownContainer, Separator } from './styles'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    elapsedTimeInSeconds,
    setElapsedTime,
    markActiveCycleAsFinished,
  } = useContext(CyclesContext)

  const totalTimeInSeconds = activeCycle ? activeCycle.amountInMinutes * 60 : 0
  const totalRemainingTimeInSeconds = activeCycle
    ? totalTimeInSeconds - elapsedTimeInSeconds
    : 0

  const remainingMinutes = Math.floor(totalRemainingTimeInSeconds / 60)
  const remainingSeconds = totalRemainingTimeInSeconds % 60

  const countdownMinutes = String(remainingMinutes).padStart(2, '0')
  const countdownSeconds = String(remainingSeconds).padStart(2, '0')

  useEffect(() => {
    let intervalId: number
    if (activeCycle) {
      intervalId = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          /* new Date() is needed Due to JSON.parse return startData as string */
          new Date(activeCycle.startDate)
        )

        if (secondsDifference >= totalTimeInSeconds) {
          markActiveCycleAsFinished()
          clearInterval(intervalId)
          setElapsedTime(totalTimeInSeconds)
        } else {
          setElapsedTime(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [
    activeCycle,
    activeCycleId,
    markActiveCycleAsFinished,
    setElapsedTime,
    totalTimeInSeconds,
  ])

  useEffect(() => {
    if (activeCycle) {
      document.title = `${countdownMinutes}:${countdownSeconds}`
    }
  }, [activeCycle, countdownMinutes, countdownSeconds])

  return (
    <CountdownContainer>
      <span>{countdownMinutes[0]}</span>
      <span>{countdownMinutes[1]}</span>
      <Separator>:</Separator>
      <span>{countdownSeconds[0]}</span>
      <span>{countdownSeconds[1]}</span>
    </CountdownContainer>
  )
}
