 import propTypes from "prop-types";
  import css from "components/ContactForm/ContactForm.module.css"

const ContactForm =({handleSubmit,name, number , handleChange })=>{

  return (
    <div className={css.wrapper}>
    <form onSubmit={handleSubmit} className={css.form}>
    <label className={css.name}> Name
        <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  value={name}
  onChange={handleChange}
  
/> </label>
     <label className={css.name}>Number
     <input
					type="tel"
					name="number"
					pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
					title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
					required
          value={number}
					onChange={handleChange}
					/>
     
     </label>
     <button className={css.button} type="submit" onSubmit={handleSubmit}>Add contact</button>
      </form>
      
      </div>
  )};

  ContactForm.propTypes = {
    name: propTypes.string.isRequired,
    number: propTypes.string.isRequired,
    handleSubmit: propTypes.func.isRequired,
    handleChange: propTypes.func.isRequired,
  };

export default ContactForm;


