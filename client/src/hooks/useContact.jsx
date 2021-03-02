import { useEffect, useState } from 'react';
import { businessContact } from '../assets/data/contactData';

export const useContact = () => {
  const [contactData, setContactData] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      return setContactData(businessContact);
    });
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return [contactData];
};
