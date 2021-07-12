import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';



const Countrylist = ({filteredData, activeCountry}) => {
  const countryName = filteredData.map((country) => country.name);
  console.log(countryName);

  // useEffect(() => {
  //   axios.get(`https://restcountries.eu/rest/v2/name/${activeCountry}`)
  //   .then(response => {
  //     const dataCountries = response.data;
  //     console.log(dataCountries);
  //   })
  // },)


  if (countryName.length >= 10) {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    );
  }
  else if (countryName.length === 1 && countryName.length < 10 ) {
    return (
      <Country country={filteredData[0]}/>
    )
  }
  else if (countryName.length < 10) {
    return (
      <div>
        <ul>
          {countryName.map(country => 
          <li key={country}>
            {/* <button onClick={}>
              show
            </button> */}
            {country}
          </li>)}
        </ul>
      </div>
    )
  }
};

const Country = ({country}) => {
    return (
      <div>
        <h1>{country.name}</h1>
        <p>capital: {country.capital} </p>
        <p>population: {country.population} </p>
        <h2>languages</h2>
        <ul>
          {country.languages.map(country => <li key={country.name}>{country.name} </li>)}
        </ul>
        <img src={country.flag} alt='country flag' />
      </div>
    )
}


const App = () => {
  const [newSearch, setNewSearch] = useState('');
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);



  const handleSearch = (event) => {
    setNewSearch(event.target.value);
    const filteredData = countries.filter((country) => 
    country.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setFiltered(filteredData);
    console.log(filteredData);
  }

  const searchCountries = () => (console.log('search'));

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      const dataCountries = response.data;
      setCountries(dataCountries);
      console.log(dataCountries);
    })
  }, [])
  return (
    <div>
      <form onSubmit={searchCountries}>
        find countries <input value={newSearch} onChange={handleSearch}></input>
      </form>
      <Countrylist filteredData={filtered} />
    </div>
  )
}

export default App;
