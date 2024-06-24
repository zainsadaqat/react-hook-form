# React Hook Form 

- Handle Form Data  
- Form Validation 
- Error Messages 
- Data Submission

> Note: useForm() returns an object like `const form = useForm();`

## Managing Form State Includes:

- Current value of every field
- A field has been interacted
- Field's value has been changed
- The form is invalid
- The field contain any errors

## Form State 
```js
{
  value: {...},
  visited: {...},
  errors: {...},
  isValid: Boolean
}
```

`const { register } = form;`
it allows to register form control like `register('username')`

```js
<input 
  type="text"
  id="username"
  name={name}
  ref={ref}
  onChange={onChange}
  onBlur={onBlur}
/>
```
OR
```js
<input type="text" id="username" ...register("username", {
required: {
  value: true,
  message: "Username is required"
}
}) />
```

> Note: In strick mode, components are rendered twice in dev mode to make sure there's no old value. 


```tsx
const YouTubeForm = () => {
const form = useForm();
const {register, handleSubmit, formState} = form;
const {errors} = formState;

const onSubmit = (data) => {
  console.log(data);
}
return (
<form onSubmit={}>
  <label htmlFor="username">Username</label> 
  <input type="text" id="username" />
  <p>{errors.username?.message}</p>
</form>
)
}
```

