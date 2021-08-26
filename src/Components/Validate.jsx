export default function Validate(values) {
   let errors = {}

   if (!values.username.trim()) {
      errors.username = 'Username required'
   }

   if (!values.email) {
      errors.email = 'Email required'
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Email address is invalid'
   }

   if (!values.password) {
      errors.password = 'Password required'
   } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters'
   }

   if (!values.checked) {
      errors.checked = 'Password required'
   } else if (values.password !== values.checked) {
      errors.checked = 'Passwords do not match'
   }

   return errors
}
