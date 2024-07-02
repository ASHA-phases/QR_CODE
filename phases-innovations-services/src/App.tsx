import React from 'react';
import { Provider } from 'react-redux';
import { store } from './components/redux/store';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <ContactForm />
      </div>
    </Provider>
  );
};

export default App;