import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

import { CyclesContext } from '../../../../contexts/CyclesContext'

import { AmountInMinutesButton, FormContainer, TaskInput } from './styles'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
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
        disabled={!!activeCycle}
        {...register('amountInMinutes', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
