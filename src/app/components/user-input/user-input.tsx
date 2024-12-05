"use client";
import { useState } from 'react';
import styles from './user-input.module.css';
import axios from 'axios';
import config from '../../service/configuration';
import { getDatabase, ref, onValue } from "firebase/database";

export default function UserInput() {
  const [icao, setIcao] = useState<string>('');
  const setUrl = (airportCode: string) => `https://avwx.rest/api/metar/${airportCode}?format=json&filter=sanitized&onfail=cache`

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIcao(event.target.value.toUpperCase());
  }

  const database = getDatabase(config);
  const dbRef = ref(database, 'Metar');
  const fetchData = () => {
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    }, {
      onlyOnce: true
    });
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // _fetchMetar(icao);
    fetchData();
  }

  const _fetchMetar = async (icao: string) => {
    axios.get(setUrl(icao), {
      headers: {
        Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_AVWX_API_KEY
      }
    }).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <form className="flex flex-wrap mt-8 justify-center" onSubmit={handleSubmit}>
      <label className={styles.text}>
        ICAO Code:
        <input type="text" value={icao} placeholder="Type ICAO code" onChange={handleChange} className="mx-2 px-2 py-1 border border-gray-800 text-gray-800" name="icao" />
      </label>
      <div className="w-full mt-6 flex justify-end">
        <button className={styles.submit} type="submit" >Submit</button>
      </div>
    </form>
  )
}