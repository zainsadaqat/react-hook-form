import React from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
const YouTubeForm = () => {
  // used for Managing, Submitting form data
  const form = useForm();
  const { register, control } = form;
  const { name, ref, onChange, onBlur } = register('username');
  return (
    <div>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name={name}
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register('email')} />
        </div>

        <div>
          <label htmlFor="channel">Channel</label>
          <input type="text" id="channel" {...register('channel')} />
        </div>

        <div>
          <button>Submit</button>
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default YouTubeForm;
