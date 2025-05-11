import { Form, redirect, useNavigation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await axios.post(newsletterUrl, data);
    console.log(response);
    toast.success(response.data.msg);
    return redirect('/');
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Form className="form" method="POST">
      <h3 style={{ textAlign: 'center' }}>Our Newsletter</h3>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>

        <input
          type="text"
          name="name"
          className="form-input"
          id="name"
          // defaultValue="sagar"
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="name" className="form-label">
          last name
        </label>

        <input
          type="text"
          name="lastName"
          className="form-input"
          id="lastName"
          // defaultValue="kumar"
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="name" className="form-label">
          email
        </label>

        <input
          type="email"
          name="email"
          className="form-input"
          id="email"
          required
          defaultValue="test@test.com"
        />
      </div>

      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: '0.5rem' }}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'submitting...' : 'submit'}
      </button>
    </Form>
  );
};

export default Newsletter;
