import React, { useState } from 'react';
import { projectsData } from '../data/projects';

const Catalog = ({ goBack }) => {
  const [filterArea, setFilterArea] = useState('Todas');
  const [filterStatus, setFilterStatus] = useState('Todos');

  const filteredProjects = projectsData.filter(p => {
    return (filterArea === 'Todas' || p.area === filterArea) &&
           (filterStatus === 'Todos' || p.estado === filterStatus);
  });

  return (
    <div className="catalog-container">
      <header className="catalog-header">
        <button onClick={goBack} className="btn-secondary">⬅ Volver</button>
        <h2>Catálogo de Proyectos</h2>
      </header>

      <div className="filters">
        <select onChange={(e) => setFilterArea(e.target.value)}>
          <option value="Todas">Todas las Áreas</option>
          <option value="Software">Software</option>
          <option value="IA">IA</option>
          <option value="IoT">IoT</option>
          <option value="Seguridad">Seguridad</option>
          <option value="Web">Web</option>
        </select>
        <select onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="Todos">Todos los Estados</option>
          <option value="Propuesto">Propuesto</option>
          <option value="En Desarrollo">En Desarrollo</option>
          <option value="Finalizado">Finalizado</option>
        </select>
      </div>

      <div className="grid">
        {filteredProjects.map(p => (
          <div key={p.id} className="card">
            <div className="card-header">
              <h3>{p.nombre}</h3>
              <span className={`badge ${p.area}`}>{p.area}</span>
            </div>
            <p>{p.descripcion}</p>
            <div className="card-footer">
              <small>Estado: <b>{p.estado}</b></small>
              <small>Impacto: <b>{p.impacto}</b></small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;