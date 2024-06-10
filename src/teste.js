import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/data') // Substitua pela URL da sua API
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const generateRows = (item) => {
    const rows = [];
    item.especies.forEach((especie) => {
      item.projetosConservacao.forEach((projeto) => {
        rows.push({
          ...item,
          especie: especie.nome,
          projeto: projeto.nomeProjeto
        });
      });
    });
    return rows;
  };

  const rows = data.flatMap(generateRows);

  return (
    <table>
      <thead>
        <tr>
          <th>Região</th>
          <th>Espécie</th>
          <th>Status de Conservação</th>
          <th>Temperatura da Água</th>
          <th>pH</th>
          <th>Níveis de Poluição</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td>{row.regiao}</td>
            <td>{row.especie}</td>
            <td>{row.projeto}</td>
            <td>{row.temperaturaAgua}</td>
            <td>{row.pH}</td>
            <td>{row.nivelPoluicao}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;