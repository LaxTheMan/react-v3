import { useState } from 'react';

type Address = {
  prefecture: string;
  area: string;
};

export type AddressSearchResult = {
  results: {
    address1: string;
    address2: string;
  }[];
};

export const useFormData = () => {
  const [address, setAddress] = useState<Address>({ prefecture: '', area: '' });
  const fetchData = async (query: string) => {
    try {
      const response = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${query}`);
      const result = await response.json();
      if (result['results']) {
        const prefecture = result['results'][0]['address1'];
        const area = result['results'][0]['address2'];
        const fetchedAddress = { prefecture, area };
        setAddress(fetchedAddress);
        return fetchedAddress;
      } else {
        const emptyAddress = { prefecture: '', area: '' };
        setAddress(emptyAddress);
        return emptyAddress;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      const emptyAddress = { prefecture: '', area: '' };
      setAddress(emptyAddress);
      return emptyAddress;
    }
  };

  return { address, fetchData };
};
