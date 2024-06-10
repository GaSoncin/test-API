import React from 'react';

const Filter = ({ filters, onFilterChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className="filters">
      <label>
        Região:
        <input type="text" name="regiao" value={filters.regiao} onChange={handleChange} />
      </label>
      <label>
        Espécie:
        <input type="text" name="especie" value={filters.especie} onChange={handleChange} />
      </label>
      <label>
        Status de Conservação:
        <input type="text" name="statusConservacao" value={filters.statusConservacao} onChange={handleChange} />
      </label>
      <label>
        Temperatura da Água:
        <input type="text" name="waterTemperature" value={filters.waterTemperature} onChange={handleChange} />
      </label>
      <label>
        pH:
        <input type="text" name="pH" value={filters.pH} onChange={handleChange} />
      </label>
      <label>
        Níveis de Poluição:
        <input type="text" name="pollutionLevels" value={filters.pollutionLevels} onChange={handleChange} />
      </label>
    </div>
  );
};

export default Filter;