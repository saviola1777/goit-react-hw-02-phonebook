import css from "components/ContactList/ContactList.module.css";
import propTypes from "prop-types";
const ContactList=({visibleContacts , deleteNumber})=>{
  return(
    <ul className={css.contactsList}>
			{visibleContacts.map(({ id, name, number }) => {
				return (
	<li key={id} className={css.contactsItem}>
		<span className={css.name}>{name}</span>
			<span className={css.number}>{number}</span>
			<button
				type="button"
			 onClick={() => {deleteNumber(id)}}
			 className={css.button}
			>
				Delete
			</button>
	</li>
					
				);
			})}
		</ul>
  )
}
ContactList.propTypes = {
	visibleContacts: propTypes.arrayOf(
		propTypes.shape({
			id: propTypes.string.isRequired,
			name: propTypes.string.isRequired,
			number: propTypes.string.isRequired,
		}).isRequired
	).isRequired,
	deleteNumber: propTypes.func.isRequired,
};
export default ContactList