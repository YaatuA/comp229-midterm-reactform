import { useForm } from 'react-hook-form';
import './Form.css';

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div class="webForm">
      <h1>Employee Registration Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name:</label>
          <input {...register('firstName', { required: true, minLength: 5 })} />
          {errors.firstName && errors.firstName.type === 'required' && (
            <p className="error">First Name cannot be left blank.</p>
          )}
          {errors.firstName && errors.firstName.type === 'minLength' && (
            <p className="error">First name must be a minimum of 5 characters.</p>
          )}
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            {...register('lastName', { required: true })}
          />
          {errors.lastName && errors.lastName.type === 'required' && (
            <p className="error">Last Name cannot be left blank.</p>
          )}
        </div>
        <div>
          <label>Email ID:</label>
          <input
            {...register('email', {
              required: true,
              pattern: /^\S+@\S+\.\S+$/, // Regular expression for a basic email format
            })}
          />
          {errors.email && errors.email.type === 'required' && (
            <p className="error">Email cannot be left blank.</p>
          )}
          {errors.email && errors.email.type === 'pattern' && (
            <p className="error">Please enter a valid email address.</p>
          )}
        </div>
        <div>
          <label>Mobile Number:</label>
          <input
            type="tel"
            {...register('mobile', {
              required: true,
              pattern: /^[0-9]{10}$/,
            })}
          />
          {errors.mobile && errors.mobile.type === 'required' && (
            <p className="error">Mobile Number cannot be left blank.</p>
          )}
          {errors.mobile && errors.mobile.type === 'pattern' && (
            <p className="error">Please enter a valid 10-digit phone number.</p>
          )}
        </div>
        <div>
          <label>Qualification:</label>
          <div class="checkboxContainer">
            <label>
              <input type="checkbox" {...register('qualification.HighSchool')} />
              High School (10th)
            </label>
          </div>
          <div class="checkboxContainer">
            <label>
              <input type="checkbox" {...register('qualification.HigherSchool')} />
              Higher School (12th)
            </label>
          </div>
          <div class="checkboxContainer">
            <label>
              <input type="checkbox" {...register('qualification.Graduation')} />
              Graduation (Bachelor's)
            </label>
          </div>
          <div class="checkboxContainer">
            <label>
              <input type="checkbox" {...register('qualification.PostGraduation')} />
              Post Graduation (Masters)
            </label>
          </div>
          <div class="checkboxContainer">
            <label>
              <input type="checkbox" {...register('qualification.Other')} />
              Other
            </label>
          </div>
        </div>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>

      <footer>
        <h6>Created by Yaatu Adem (301294492) for COMP229</h6>
      </footer>
    </div>
  );
}

export default Form;