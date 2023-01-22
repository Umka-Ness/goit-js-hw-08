import { throttle } from 'lodash';

const form = document.querySelector(".feedback-form")
const email = document.querySelector('input[name="email"]')
const message = document.querySelector('textarea[name="message"]')
const btn = document.querySelector(`button`)
const LocalKey = "feedback-form-state"




form.addEventListener("input", throttle(e => {
    console.log(e)
    const ObjectSave = {email:email.value, message:message.value}
    localStorage.setItem(LocalKey,JSON.stringify(ObjectSave))
    console.log(e.target)
}),500)

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log({ email: email.value, message: message.value });
    form.reset();
    
  });

  const load = key => {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
  };
  
  const storageData = load(LocalKey);
  if (storageData) {
    email.value = storageData.email;
    message.value = storageData.message;
  }
