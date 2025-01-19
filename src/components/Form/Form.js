import React, { useEffect, useState } from 'react'
import Title from '../Title/Title';
import Input from '../Input/Input';
import CalendarIcon from '../../images/calendar.svg';
import InfoIcon from '../../images/icon-button.svg';
import DateCarousel from '../DateCarousel/DateCarousel';
import Dropdown from '../Dropdown/Dropdown';
import '../Form/Form.css';
import {
  textRegExp,
  numberRegExp,
  emailRegExp,
  dateRegExp,
  passportRegExp
} from '../../RegExp.js';

const Form = () => {

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('');
  const [error, setError] = useState([]);

  useEffect(() => {
    let form = document.querySelector('.form');
    let titles = document.querySelectorAll('.title');
    let containers = document.querySelectorAll('.spoiler__wrapper');

    for (let i = 0; i < titles.length; i++) {
      titles[i].addEventListener('click', (e) => {
        let btn = e.target;
        if (!btn.className === "spoiler__title active") {
          btn.classList.remove('active')
          removeClass()
        } else {
          removeClass()
          btn.classList.add('active');
        }
      })
    }


    function removeClass() {
      for (let i = 0; i < titles.length; i++) {
        titles[i].classList.remove('active')
      }
    }
    window.addEventListener('resize', (e) => {


      if (window.innerWidth < 650) {
        for (let i = 0; i < titles.length; i++) {
          titles[i].classList.add('spoiler__title');
          containers[i].classList.add('spoiler-content');
        }
        form.classList.add('form__spoiler')
      } else {
        for (let i = 0; i < titles.length; i++) {
          titles[i].classList.remove('spoiler__title');
          containers[i].classList.remove('spoiler-content')
        }
        form.classList.remove('form__spoiler')
      }
    })
  })

  const validationData = (e, validationType, name) => {
    console.log(textRegExp.test(e))
    let errorArray = [];
    if (validationType === 'text' && e !== '') {
      if (!textRegExp.test(e)) {
        const result = error.findIndex(i => i.name === name);
        errorArray = result === -1 ? [...error, { error: 'Данные введены некорректно', name }] : [...error];
      } else {
        errorArray = error.filter(i => i.name !== name)
      }
    } else if (validationType === 'number' && e !== '') {
      if (!numberRegExp.test(e)) {
        const result = error.findIndex(i => i.name === name);
        errorArray = result === -1 ? [...error, { error: 'Данные введены некорректно', name }] : [...error];
      } else {
        errorArray = error.filter(i => i.name !== name)
      }
    } else if (validationType === 'email' && e !== '') {
      if (!emailRegExp.test(e)) {
        const result = error.findIndex(i => i.name === name);
        errorArray = result === -1 ? [...error, { error: 'Данные введены некорректно', name }] : [...error];
      } else {
        errorArray = error.filter(i => i.name !== name)
      }
    } else if (validationType === 'date' && e !== '') {
      if (!dateRegExp.test(e)) {
        const result = error.findIndex(i => i.name === name);
        errorArray = result === -1 ? [...error, { error: 'Данные введены некорректно', name }] : [...error];
      } else {
        errorArray = error.filter(i => i.name !== name)
      }
    } else if (validationType === 'passport' && e !== '') {
      if (!passportRegExp.test(e)) {
        const result = error.findIndex(i => i.name === name);
        errorArray = result === -1 ? [...error, { error: 'Данные введены некорректно', name }] : [...error];
      } else {
        errorArray = error.filter(i => i.name !== name)
      }
    }
    setError(errorArray)
  }

  return (
    <div className='form'>
     <fieldset className='form__personal-info personal-info'>
        <Title title='Кто будет сдавать анализы?' />
        <div className='spoiler__wrapper'>
              <div className='form__btn-row btn-row'>
                <Input label='' type='text' validationType='text' name='pacient' error={error} validationdata={validationData} />
                <button className='btn-row__button' type='button'>Новый пациент</button>
              </div>
              <div className='personal-info__columns columns'>
                <Input label='Фамилия пациента' type='text' validationType='text' name='surname' error={error} validationdata={validationData} />
                <Input label={'Дата рождения пациента'} type={'text'} validationType='date' name='birthday' error={error} icon={CalendarIcon} validationdata={validationData} />
                <Input label='Имя пациента' type='text' validationType='text' name='name' error={error} validationdata={validationData} />
                <div className='form__row'>
                  <Input label='Женщина' type='radio' name='gender' />
                  <Input label='Мужчина' type='radio' name='gender' />
                </div>
                <Input label='Отчество пациента' type='text' validationType='text' name='patronymic' error={error} validationdata={validationData} />
              </div>
              <Input label={'Пациент придёт с представителем'} type='checkbox' icon={InfoIcon} />
        </div>
      </fieldset> 

      <fieldset className='form__contacts contacts'>
        <Title title='Данные для отправки анализов' />
        <div className='spoiler__wrapper'>
              <h5 className='contacts__text text'>Поступят вам на почту, указанную в договоре. Вам придет смс-уведомление о готовности</h5>
              <div className='contacts__info'>
                <div className='contacts__info-row'>
                  <Input label='Номер телефона' type='text' validationType='number' name='phone' direction='right' error={error} validationdata={validationData} />
                  <Input label='Код' type='text' name='code' validationType='number' direction='left' error={error} validationdata={validationData} />
                </div>
                <Input label='Email' type='text' validationType='email' name='email' error={error} validationdata={validationData} />
              </div>
        </div>
      </fieldset>

      <fieldset className='form__passport passport'>
        <Title title='Для оформления договора понадобится паспорт ' />
        <div className='spoiler__wrapper'>
          <h5 className='password__text text'>Выберите как вам удобнее предоставить данные</h5>
          <div className='passport__row'>
            <Input label='Заполню сейчас' type='radio' name='data-receive-method' />
            <Input label='Предоставлю на месте' type='radio' name='data-receive-method' />
            <Input label='Свяжитесь со мной сами' type='radio' name='data-receive-method' />
          </div>
          <h2 className='passport__subtitle subtitle'>Паспорт пациента</h2>
          <div className='passport__info-columns columns'>
            <Dropdown selected={selectedCountry} setSelected={setSelectedCountry} withBtn={false} />
            <Input label='Кем выдан паспорт' type='text' validationType='text' name='passport' validationdata={validationData} error={error} />
            <Input label='Номер и серия паспорта' type='text' validationType='passport' name='passport-series' validationdata={validationData} error={error} />
            <Input label='Дата выдачи' type='text' validationType='date' name='issue-date' icon={CalendarIcon} validationdata={validationData} error={error} />
          </div>
          <Input label='Адрес регистрации' type='text' validationType='passpost' name='registration' validationdata={validationData} error={error} />
          <h2 className='passport__subtitle subtitle' >Добавьте СНИЛС, для синхронизации с Госуслугами</h2>
          <Input label='СНИЛС' type='text' validationType='number' name='snils' validationdata={validationData} error={error} />
        </div>
      </fieldset>

      <fieldset className='form__payment-method payment'>
        <Title title='Способ оплаты' />
        <div className='spoiler__wrapper'>
          <Dropdown selected={selectedMethod} setSelected={setSelectedMethod} withBtn={true} />
        </div>
      </fieldset>

      <fieldset className='form__date-time date-time'>
        <Title title='Выберите удобные дату и время' />
        <div className='spoiler__wrapper'>
          <DateCarousel />
        </div>
      </fieldset>

      <fieldset className='form__comments'>
        <Title title='Комментарий к заказу' />
        <div className='spoiler__wrapper'>
          <textarea className='form__comments-input' placeholder='Напишите коментарий лаборатории...' />
        </div>
      </fieldset>
    </div>
  )
}

export default Form;