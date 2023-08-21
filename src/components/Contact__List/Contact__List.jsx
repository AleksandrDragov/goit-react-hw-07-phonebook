import { ContactItem, DeleteBtn } from './Contact__List.styled';
import { BiBook } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectError, selectVisibleContacts } from 'redux/selectors';

const ContactsList = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const userFilteredContacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {userFilteredContacts &&
        !error &&
        userFilteredContacts.map(({ id, name, phone }) => {
          return (
            <ContactItem key={id}>
              <BiBook style={{ color: 'blue', marginRight: '15px' }} />
              {name}: {phone}
              <DeleteBtn
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </DeleteBtn>
            </ContactItem>
          );
        })}
    </ul>
  );
};

export default ContactsList;
