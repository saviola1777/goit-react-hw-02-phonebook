import Cointeiner from 'components/Cointeiner/Cointeiner';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React from 'react';
import { nanoid } from "nanoid"
class App extends React.Component{
  state = {
    contacts: [ 
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    name: '',
    number:'',
    filter:'',
    
  }
  

handleChange = evt => {
 const { name, value } = evt.target;   
  this.setState({ [name]: value });
  console.log(name , value ,)
};
 
 handleSubmit = e => {
  e.preventDefault();
  const form = e.currentTarget;
  const name = form.elements.name.value;
  const number = form.elements.number.value;
  this.setState({ name, number });
  this.nameChecking();
 console.log(e.currentTarget.name.value)
};
reset=()=>{
 this.setState({name:'',number:''})
}
 filterName = contact => {
  return contact.name.toLowerCase() === this.state.name.toLowerCase();
};
nameChecking = () => {
  if (this.state.contacts.find(this.filterName)) {
    alert('This person is already in your contacts');
  } else {
    this.addContactToState();
    this.reset();
  }
};

 addContactToState = () => {
  this.setState(prev => {
    return {
      contacts: [
        ...prev.contacts,
        { name: this.state.name, number: this.state.number, id: nanoid() },
      ],
    };
  });
};
deleteNumber = id => {
  this.setState({
    contacts: this.state.contacts.filter(contact => {
      return contact.id !== id;
    }),
  });
};
render(){
const normalizedFilter = this.state.filter.toLowerCase();
const visibleContacts = this.state.contacts.filter(contact => {
return contact.name.toLowerCase().includes(normalizedFilter);
});

  return (
    
    <Cointeiner>
      <h2>Phonebook</h2>
    <ContactForm id={this.inputId} handleSubmit={this.handleSubmit} handleChange={this.handleChange} name={this.state.name } number={this.state.number}/>
    <h2>Contacts</h2> 
    <Filter filter={this.state.filter} onChange={this.handleChange} />
    <ContactList visibleContacts={visibleContacts} deleteNumber={this.deleteNumber}/>
    </Cointeiner>
   
    )}
  }
  export default App
  


  // handleChange = evt => {
  //   const { name, value } = evt.target;   
  //    this.setState({ [name]: value });
  //    console.log(name , value ,)
  //  };
// Для всіх інпутів створюємо один обробник .Розрізняти інпути будемо за атрибутом name
// Ми на наші імпути чіпляє обробник подій onChange в який будемо перадавати наший метод тобто в інпуті ми зпишемо onChange={handleChange} що відбувається в середині методу пише нижче
//В жалежності від того в якому імпуті ми щось там пишем і викликається onChange={handleChange}
//name=evt.target.name ======це те саме що  const {name} = evt.target;    а  value=evt.target.value  це те саме що  {value} = evt.target;
 // name=name , якщо ця подія сталася в імпуті зназвою name:namex а якщо в іншому  інпуті то name=number а value це те що ми вписуємо в інпут 
 //this.setState({ [name]: value }); далі ми отправляємо в наш state дані де [name] -це назва антрибуту тобто якшо ми пишемо шось в першому імпуті а там name:name токоли ми поставили this.setState({ [name]: value }) то воно змінить в state name:на то що ми вписали (value) а якщо зміна відбулася в іншому інпуті то там name:number і тому тепер все буде мінятися по іншому ({ [name]: value }) тепер  : value }) тепер [name]-number оскільки і іншому інпуті name:number  і в state поміняється number 

//================================================ВІДПРАВКА ФОРМИ onSubmit=================================
//  handleSubmit = e => {    =====================ТУТ ПРИ ОТПРПАЦІ ФОРМИ 
//   e.preventDefault();      ====================НЕ ПЕРЕЗАГРУЖАЄМО СТОРІНОКУ
//   const form = e.currentTarget;================ДОСТУП ДО ВСЬОГО ЩО Є У ФОРМІ 
//   const name = form.elements.name.value;=======В name= ТЕ ЩО БУДЕ В ЕЛЕМЕНТІ З НАЗВОЮ name='name' ТЕ ЩО МИ ПИШЕМО В ІНПУТ ТОБТО В ЦЬОМУ ІМПУТІ ЗАПИСУЄМО ІМЯ
//   const number = form.elements.number.value;===В number= ТЕ ЩО БУДЕ В ЕЛЕМЕНТІ З НАЗВОЮ name='number' ТЕ ЩО МИ ПИШЕМО В ІНПУТ ТОБТО В ЦЬОМУ ІМПУТІ ЗАПИСУЄМО ІМЯ
//   this.setState({ name, number });=============ЦЕ ТЕ САМЕ ЩО this.setState({ name:names, number:numbers }); ПРОСТО В STATE МИ ЗАПИСУЄМО ТЕ ЩО ВПИСАЛИ В ІНПУТ
//   this.nameChecking();
//  console.log(form)
// }
//=====================================================ОЧИСТКА ПОЛІВ ІНПУТА===========================================================
// reset=()=>{=============ВИЗИВАЄМО МЕТОД ДЕ МИ ОЧИЩАЄМО STATE
//   this.setState({name:'',number:''})
//  }

//===================================================Фільтрація полів=============================
// filterName = contact => {
//   return contact.name.toLowerCase() === this.state.name.toLowerCase();====тТУТ МИ ПОРІВНЮЄМО ІМЯ ЩО ЗНАХОДИТЬСЯ В КОНТАКТАХ І ТЕ ЩО МИ ЗАРА ВОДИМО  ІНПУТ
// };=================================ВСЕ ЦЕ НЕ ЗАБУВАЄМО ПРИВОДИТИ ДО МАЛЕНЬКИХ БУКВ .toLowerCase()

// nameChecking = () => {
//   if (this.state.contacts.find(this.filterName)) {
//     alert('This person is already in your contacts');
//   } else {
//     this.addContactToState();
//     this.reset();
//   }
// };