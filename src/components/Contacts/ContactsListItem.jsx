export const ContactsListItem = ({
  contact: { name, number },
  onDeleteContact,
}) => {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button onClick={onDeleteContact}>Delete</button>
    </li>
  );
};
