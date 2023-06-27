import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { HandPalm, Play } from 'phosphor-react'

import {
  AmountInMinutesButton,
  CountdownContainer,
  FormContainer,
  HomeContainer,
  Separator,
  StartCountdownButton,
  StopCountdownButton,
  TaskInput,
} from './styles'
import { differenceInSeconds } from 'date-fns'

const newCicleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  amountInMinutes: zod
    .number()
    .min(5, 'O ciclo mínimo é de 5 minutos')
    .max(60, 'O ciclo máximo é de 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCicleFormValidationSchema>

interface Cycle {
  id: string
  task: string
  amountInMinutes: number
  startDate: Date
  interruptedDate?: Date
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [elapsedTimeInSeconds, setElapsedTimeInSeconds] = useState(0)

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCicleFormValidationSchema),
    defaultValues: {
      task: '',
      amountInMinutes: 0,
    },
  })

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  useEffect(() => {
    let intervalId: number
    if (activeCycle) {
      intervalId = setInterval(() => {
        setElapsedTimeInSeconds(
          differenceInSeconds(new Date(), activeCycle.startDate)
        )
      }, 1000)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [activeCycle])

  const totalTimeInSeconds = activeCycle ? activeCycle.amountInMinutes * 60 : 0
  const totalRemainingTimeInSeconds = activeCycle
    ? totalTimeInSeconds - elapsedTimeInSeconds
    : 0

  const remainingMinutes = Math.floor(totalRemainingTimeInSeconds / 60)
  const remainingSeconds = totalRemainingTimeInSeconds % 60

  const countdownMinutes = String(remainingMinutes).padStart(2, '0')
  const countdownSeconds = String(remainingSeconds).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${countdownMinutes}:${countdownSeconds}`
    }
  }, [activeCycle, countdownMinutes, countdownSeconds])

  const task = watch('task')
  const isSubmitDisabled = !task

  function handleCreateNewCicle(data: NewCycleFormData) {
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

    reset()
  }

  function handleInterrupedCycle() {
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
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCicle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
          />
          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>

          <label htmlFor="amountInMinutes">durante</label>
          <AmountInMinutesButton
            id="amountInMinutes"
            type="number"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('amountInMinutes', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>{countdownMinutes[0]}</span>
          <span>{countdownMinutes[1]}</span>
          <Separator>:</Separator>
          <span>{countdownSeconds[0]}</span>
          <span>{countdownSeconds[1]}</span>
        </CountdownContainer>

        {activeCycle ? (
          <StopCountdownButton onClick={handleInterrupedCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
