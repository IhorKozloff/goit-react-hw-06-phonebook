import { SearchBar} from "components/SearchBar/SearchBar";
import { ContactsList } from "./ContactsList/ContactsList";
import { SearchingFilter } from "./SearchingFilter/SearchingFilter";


export const App = () =>  {

  return (
    <>
      <h1>Phonebook</h1>
      <SearchBar></SearchBar>
        
      <h1>Contacts</h1>

      <SearchingFilter/>

      <ContactsList />
        
    </>
    
  );
};

