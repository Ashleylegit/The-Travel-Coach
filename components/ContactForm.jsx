import { useForm } from 'react-hook-form';

function ContactForm() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name:</label>
      <input type="text" {...register('name')} />
      {errors.name && <div>This field is required</div>}

      <label>Email:</label>
      <input type="email" {...register('email')} />
      {errors.email && <div>This field is required</div>}

      <label>Message:</label>
      <textarea {...register('message')} />
      {errors.message && <div>This field is required</div>}

      <button type="submit">Send Message</button>
    </form>
  );
}

export default ContactForm;