import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './filter';
import DataTable from './DataTable';

const App = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    regiao: '',
    especie: '',
    statusConservacao: '',
    temperaturaMax: '',
    pH: '',
    nivelPoluicao: ''
  });

  useEffect(() => {
    fetchData();
  }, [filters]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://fiap-3sis-gs-20241.azurewebsites.net/OceanData', { params: filters });
      setData(response.data);
    } catch (error) {
      if (error.response) {
        console.error('Erro na resposta da API:', error.response.data);
      } else if (error.request) {
        console.error('Nenhuma resposta recebida:', error.request);
      } else {
        console.error('Erro ao configurar a requisição:', error.message);
      }
    }
  };
  
const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="App">
      <h1>Dashboard de Dados Oceânicos</h1>
      <Filter filters={filters} onFilterChange={handleFilterChange} />
      <DataTable data={data} />
    </div>
  );
  console.log(data);
};

export default App;