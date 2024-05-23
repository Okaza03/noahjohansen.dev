"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  email: string;
}

const NewsletterForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Integrate with your email service provider here
    console.log(data);
  };

  return (
    <section className="text-center py-12 ">
      <h2 className="text-4xl font-bold mb-4">Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <input
          type="email"
          {...register('email', { required: 'Email is required' })}
          className="w-full p-2 mb-4 border rounded-lg"
          placeholder="Enter your email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-lg">Subscribe</button>
      </form>
    </section>
  );
};

export default NewsletterForm;
