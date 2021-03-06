import React, {useEffect, useState} from 'react';
import {Input, Button} from 'semantic-ui-react';
import axios from 'axios';

const Effect = () => {
  const [characters, setCharacters] = useState([]);
  const [counter, setCounter] = useState(0);
  const [search, setSearch] = useState('');

  const clickHandler = () => console.warn('useEffect EvenListener\n\tClick');
  const fetchCharacters = async () => {
    const {
      data: {results},
    } = await axios.get('https://swapi.co/api/people/?page=1');
    setCharacters(results);
  };
  /* 1 run */
  useEffect(() => {
    fetchCharacters();
    console.log('useEffect\n\tAPI Fetch');
  }, []);
  /* Runs on every update */
  useEffect(() => {
    console.log('useEffect\n\tUpdate');
  });
  /* Runs only when search is updated */
  useEffect(() => {
    console.error('useEffect\n\tUpdating Search');
  }, [search]);
  /* Return a function that will be called upon component unmount */
  useEffect(() => {
    window.addEventListener('click', clickHandler);
    return () => window.removeEventListener('click', clickHandler);
  }, []);

  return (
    <div>
      <h1>useEffect</h1>
      <h3>Counter</h3>
      <Button onClick={() => setCounter(counter + 1)}>{counter} Clicks</Button>
      <h3>Search</h3>
      <Input type="text" onChange={e => setSearch(e.target.value)} value={search} placeholder="Search" />
      <h3>Characters</h3>
      <ul>
        {characters.map(person => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Effect;
