import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FormContainer,
  NameFormLabel,
  FormNameInput,
  FormSubmitBtn,
  NumberFormLabel,
  FormNumberInput,
} from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const reset = () => {
    setName('');
    setPhone('');
  };

  const onSubmitForm = e => {
    e.preventDefault();
    const contact = {
      name,
      phone,
    };

    const normalizedName = name.toLowerCase().trim();
    if (
      contacts !== null &&
      contacts.find(contact => contact.name.toLowerCase() === normalizedName)
    ) {
      return toast.error(`${name} is already in contacts!`);
    }
    dispatch(addContact(contact));
    reset();
  };

  return (
    <FormContainer autoComplete="off" onSubmit={onSubmitForm}>
      <NameFormLabel htmlFor="name"> Name </NameFormLabel>
      <FormNameInput
        id="name"
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter name"
        onChange={e => setName(e.currentTarget.value)}
      />
      <NumberFormLabel htmlFor="number">Phone number</NumberFormLabel>
      <FormNumberInput
        id="number"
        type="tel"
        name="number"
        value={phone}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter phone number"
        onChange={e => setPhone(e.currentTarget.value)}
      />

      <FormSubmitBtn type="submit">Add contact</FormSubmitBtn>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </FormContainer>
  );
};

export default Form;
