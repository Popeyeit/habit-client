import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import moment from 'moment';
import { Button } from '../../ui/default-component/Button';
import DatePickerHabit from '../date-picker-habit/DatePickerHabit';
import ValidateSchema from './validate';
import { createHabitOperation } from '../../redux/habits/operation';
import * as styled from './styled';

const momentFormat = 'dddd.DD.MMMM.YYYY';

const CreateHabitForm = () => {
  const dispatch = useDispatch();
  return (
    <styled.FormWrapper>
      <styled.Title>
        Настройте привычку под себя
        <span>так Вам будет удобнее достичь своей цели</span>
      </styled.Title>
      <Formik
        initialValues={{
          title: '',
          startDate: new Date(),
          repeats: 'everyday',
        }}
        validationSchema={ValidateSchema}
        onSubmit={values => {
          console.log(values);
          const repeats = values.repeats.split(',');
          const startDate = moment(values.startDate, momentFormat).format(
            momentFormat,
          );
          const body = { ...values, startDate, repeats };

          dispatch(createHabitOperation(body));
        }}
      >
        {({ errors, touched }) => {
          return (
            <Form>
              <styled.Label>
                Название
                <Field name="title" type="text" required />
                {errors.title && touched.title ? (
                  <styled.ErrorMessage>{errors.title}</styled.ErrorMessage>
                ) : null}
              </styled.Label>
              <styled.Label>
                Дата Старта
                <DatePickerHabit />
                {errors.startDate && touched.startDate ? (
                  <styled.ErrorMessage>{errors.startDate}</styled.ErrorMessage>
                ) : null}
              </styled.Label>
              <styled.Label>
                Повторения
                <Field
                  component="select"
                  id="repeats"
                  name="repeats"
                  multiple={false}
                  className="habit__select"
                >
                  <option defaultChecked value="everyday">
                    Ежедневно
                  </option>
                  <option value="everyTwoDays">Через день</option>
                  <option value="Monday,Wednesday,Friday">Пн,Ср,Пт</option>
                  <option value="Tuesdays,Thursdays,Saturdays">Вт,Чт,Сб</option>
                </Field>
                {errors.repeats && touched.repeats ? (
                  <styled.ErrorMessage>{errors.repeats}</styled.ErrorMessage>
                ) : null}
              </styled.Label>

              <Button className="bg-green without_mb" type="submit">
                Добавить
              </Button>
            </Form>
          );
        }}
      </Formik>
    </styled.FormWrapper>
  );
};

export default CreateHabitForm;
