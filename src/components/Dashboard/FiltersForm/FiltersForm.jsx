import React from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';
import { Formik, Field, Form } from 'formik';

const FiltersForm = (props) => (
 <Formik
  initialValues = {{ searchQuery: '' }}
  validationSchema = { Yup.object().shape({
    queryString: Yup.string().typeError('Query needs to be a letter'),
  })}
  onSubmit={(values) => { props.filterGnomesByQuery(values); }}
>
{({
  errors,
  touched,
  submitForm,
  setFieldValue,
}) => (
    <Form>
      <FormGroup>
        <Field
          className={`form-control ${errors.searchQuery && touched.searchQuery && 'is-invalid'}`}
          type="text"
          onChange={event => { 
            event.persist(); 
            setFieldValue('searchQuery', event.target.value, false);
            submitForm();
            }
          }
          id="searchQuery"
          name="searchQuery"
          placeholder="SEARCH GNOMES"
          aria-describedby="Enter a query to search Gnomes data"
        />
        {errors.searchQuery && touched.searchQuery && <div className="invalid-feedback">{ errors.searchQuery}</div>}
      </FormGroup>
      <div className="form-row justify-content-between align-items-baseline">
        <FormGroup className='form-inline col-4'>
          <Label className='font-weight-bold text-white' htmlFor="bodyParams">Sort by Ascending</Label>
          <select 
            className='form-control col-12'
            type="checkbox"
            id="bodyParams"
            name="bodyParams"
            onChange={event => { 
              event.persist(); 
              setFieldValue('bodyParams', event.target.value, false);
              submitForm();
              }
            }
            > 
            <option value="">Choose Body param</option>
            <option value="age">Age</option>
            <option value="weight">Weight</option>
            <option value="height">Height</option>
          </select>
        </FormGroup>
        <FormGroup className='form-inline col-4'>
          <Label className='font-weight-bold text-white' htmlFor="hairColor">Filter by hair</Label>
          <select 
            className='form-control col-12'
            type="checkbox"
            id="hairColor"
            name="hairColor"
            onChange={event => { 
              setFieldValue('hairColor', event.target.value, false);
              event.persist(); 
              setFieldValue('hairColor', event.target.value, false);
              submitForm();
              }
            }
            > 
            <option value="">Choose a Hair color</option>
            <option value="Green">Green</option>
            <option value="Black">Black</option>
            <option value="Red">Red</option>
            <option value="Gray">Gray</option>
            <option value="Pink">Pink</option>
          </select>
        </FormGroup>
        <FormGroup className='form-inline col-4'>
          <Label className='font-weight-bold text-white' htmlFor="profession">Filter by</Label>
          <select
            multiple
            className='form-control col-12'
            type="checkbox"
            id="profession"
            name="profession"
            onChange={event => { 
              event.persist(); 
              setFieldValue('profession', event.target.value, false);
              submitForm();
              }
            }
            > <option value="">Choose a profession</option>
            { props.professions.map((profession, index) => {
              return <option key={index} value={profession}>{profession}</option>
            })}

          </select>
        </FormGroup>
      </div>
    </Form>
  )}
  </Formik>
)

FiltersForm.propTypes = {
  filterGnomesByQuery: PropTypes.func.isRequired,
  professions: PropTypes.array.isRequired,
};

export default FiltersForm;