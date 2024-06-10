import React from 'react';

const DataTable = ({ data }) => {
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
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.regiao}</td>
            <td>{item.especies.map((especiesItem)=>(
              <span key={especiesItem.id}>{especiesItem.nome} </span>))}</td>
            <td>{item.projetosConservacao.map((statusConservacaoItem)=>
            <span key={statusConservacaoItem.id}>{statusConservacaoItem.nomeProjeto} </span>
            )}</td>
            <td>{item.temperaturaAgua}</td>
            <td>{item.pH}</td>
            <td>{item.nivelPoluicao}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;