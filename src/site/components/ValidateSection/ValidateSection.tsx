import style from './ValidateSection.module.styl'
import React, { FC, useState, useEffect, ChangeEvent } from 'react'
import { validate as validadeCPF } from '../../../lib/CPF'
// @ts-expect-error
import { IMaskInput } from 'react-imask'

export const ValidateSection: FC = () => {
  const [validation, setValidation] = useState({
    cpf: '',
    isValid: false,
    message: '',
  })
  const handleChangeCPF = (event: ChangeEvent<HTMLInputElement>): void => {
    setValidation({
      ...validation,
      cpf: event.currentTarget.value,
    })
    // messageInput[0].setAttribute('value', message)
    // typeof window.ga === 'function' &&
    //   window.ga('send', 'event', 'button', 'click', 'Validate CPF')
  }

  useEffect(() => {
    if (validation.cpf) {
      const isValid = validadeCPF(validation.cpf)
      setValidation({
        ...validation,
        message: isValid ? 'CPF Válido' : 'CPF Inválido',
        isValid,
      })
    }
  }, [validation.cpf])

  return (
    <section>
      <h2>Validar</h2>

      <form>
        <label
          className={style.validateSectionLabel}
          htmlFor="validate-section__input--to-format"
        >
          Insira o CPF para validação
        </label>

        <IMaskInput
          value={validation.cpf}
          onChange={handleChangeCPF}
          type="text"
          mask={'000.000.000-00'}
          required
        />

        <input
          className={`${style.input} ${
            validation.isValid ? style.messageValid : style.messageInvalid
          }`}
          aria-label="CPF para validação"
          type="text"
          placeholder="Insira CPF para validação"
          value={validation.message}
          readOnly
        />
      </form>
    </section>
  )
}
