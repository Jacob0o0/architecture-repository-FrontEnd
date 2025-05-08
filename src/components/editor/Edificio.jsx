// Archivo: Edificio.jsx
import React, { useState, useEffect } from 'react';
import FormStepper from '../ui/Stepper/FormStepper';
import FileUploadCard from '../ui/Drag&Drop/FileUploadCrad';

function Edificio() {
  const [estados, setEstados] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [colonias, setColonias] = useState([]);
  const [selectedEstado, setSelectedEstado] = useState('');
  const [selectedMunicipio, setSelectedMunicipio] = useState('');
  const [selectedColonia, setSelectedColonia] = useState('');
  const [formData, setFormData] = useState({
    nombre: '',
    imagen_obra: null,
    genero: '',
    uso_actual: '',
    fecha_construc: '',
    contexto_historico: '',
    concepto: '',
    corriente_est: '',
    material_sistem: '',
    contexto_urbano: '',
    transformaciones: '',
    ubicacion_url: '',
    calle_num: '',
    estado: '',
    municipio: '',
    colonia: '',
    imagen_ubicacion: null,
    imagenes_descripcion: null,
    slider_corriente: null,
    slider_transfromaciones: null
  });
  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Simulación temporal (reemplaza con datos falsos si deseas probar el formulario)
    // setEstados([{ id: 1, nombre: 'Estado Ejemplo' }]);
  
    // Comentado mientras no esté lista la API
    // fetch('http://localhost:8000/api/estados/getAll')
    //   .then(response => response.json())
    //   .then(data => setEstados(data))
    //   .catch(error => console.error('Error al cargar estados', error));
  }, []);
  
  useEffect(() => {
    if (selectedEstado) {
      // Simulación temporal (reemplaza con datos falsos si deseas probar el formulario)
      // setMunicipios([{ id: 1, nombre: 'Municipio Ejemplo' }]);
  
      // Comentado mientras no esté lista la API
      // fetch(`http://localhost:8000/api/municipios/${selectedEstado}`)
      //   .then(response => response.json())
      //   .then(data => setMunicipios(data.municipios))
      //   .catch(error => console.error('Error al cargar municipios', error));
      setColonias([]);
    } else {
      setMunicipios([]);
    }
  }, [selectedEstado]);
  
  useEffect(() => {
    if (selectedMunicipio) {
      // Simulación temporal (reemplaza con datos falsos si deseas probar el formulario)
      // setColonias([{ id: 1, nombre: 'Colonia Ejemplo' }]);
  
      // Comentado mientras no esté lista la API
      // fetch(`http://localhost:8000/api/colonias/${selectedMunicipio}`)
      //   .then(response => response.json())
      //   .then(data => setColonias(data.colonias))
      //   .catch(error => console.error('Error al cargar colonias', error));
    } else {
      setColonias([]);
    }
  }, [selectedMunicipio]);
  

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
    
    // Clear error for this field if it exists
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const handleEstadoChange = (e) => {
    const value = e.target.value;
    setSelectedEstado(value);
    setFormData({
      ...formData,
      estado: value
    });
  };

  const handleMunicipioChange = (e) => {
    const value = e.target.value;
    setSelectedMunicipio(value);
    setFormData({
      ...formData,
      municipio: value
    });
  };

  const handleColoniaChange = (e) => {
    const value = e.target.value;
    setSelectedColonia(value);
    setFormData({
      ...formData,
      colonia: value
    });
  };

  const validateForm = () => {
    const errors = {};
    const requiredFields = ['nombre', 'contexto_historico', 'ubicacion_url', 'calle_num', 'estado', 'municipio', 'colonia'];
    
    requiredFields.forEach(field => {
      if (!formData[field]) {
        errors[field] = 'Este campo es requerido';
      }
    });
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      document.getElementById('alerta_campos_vacios').style.display = 'flex';
      setTimeout(() => {
        document.getElementById('alerta_campos_vacios').style.display = 'none';
      }, 3000);
      return;
    }
    
    // Submit form
    const formDataObj = new FormData();
    
    for (const key in formData) {
      formDataObj.append(key, formData[key]);
    }
    
    // Here you would make your POST request
    // fetch('your-api-endpoint', {
    //   method: 'POST',
    //   body: formDataObj
    // }).then(...)
    
    // For now, just show success message
    document.getElementById('alerta_exito').style.display = 'flex';
    setTimeout(() => {
      document.getElementById('alerta_exito').style.display = 'none';
    }, 3000);
    
    setSuccessMessage('Edificio subido con éxito.');
  };

  // Definición de los pasos del formulario
  const formSteps = [
    {
      title: "General",
      content: (
        <div className="space-y-4">
          <div className="input_group">
            <label htmlFor="nombre" className="flex">Nombre del Edificio<span className="text-red-400">*</span>: </label>
            <input 
              className="h-10 border mt-1 rounded px-4 w-full focus:outline-amarilloPrincipal" 
              type="text" 
              placeholder="Nombre del edificio" 
              name="nombre" 
              id="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
            />
            {formErrors.nombre && <span className="text-red-500 text-sm">{formErrors.nombre}</span>}
          </div>
          
          <div className="input_group">
            <label className="flex">Seleccione Imagen Principal <span className="text-red-400">*</span>: </label>
            <FileUploadCard 
                onFileUpload={(file) => {
                setFormData({
                    ...formData,
                    imagen_obra: file
                });
                }}
                multiple={false}
            />
            {formErrors.imagen_obra && <span className="text-red-500 text-sm">{formErrors.imagen_obra}</span>}
        </div>
        <div className="flex flex-row justify-around space-x-8">
          <div className="input_group">
            <label htmlFor="genero" className="flex">Género Edificio <span className="text-red-400">*</span>: </label>
            <select
              className="h-10 border mt-1 rounded px-4 w-full  focus:outline-amarilloPrincipal"
              name="genero"
              id="genero"
              value={formData.genero}
              onChange={handleInputChange}
            >
              <option value="">Selecciona un género</option>
              <option value="residencial">Residencial</option>
              <option value="comercial">Comercial</option>
              <option value="institucional">Institucional</option>
              <option value="industrial">Industrial</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          
            <div className="input_group">
                <label htmlFor="fecha_construc" className="flex">Periodo de Construcción: </label>
                <textarea 
                className="h-10 border mt-1 rounded px-4 w-full focus:outline-amarilloPrincipal" 
                name="fecha_construc" 
                id="fecha_construc" 
                rows="2" 
                placeholder="Introduzca periodo..." 
                maxLength="40"
                value={formData.fecha_construc}
                onChange={handleInputChange}
                ></textarea>
            </div>
            <div className="input_group">
                <label htmlFor="uso_actual" className="flex">Uso Actual: </label>
                <textarea 
                className="border mt-1 rounded px-4 w-full focus:outline-amarilloPrincipal" 
                name="uso_actual" 
                id="uso_actual" 
                rows="2" 
                placeholder="Introduzca texto aquí..."
                value={formData.uso_actual}
                onChange={handleInputChange}
                ></textarea>
            </div>
            </div>
            <div className="input_group">
                <label htmlFor="contexto_historico" className="flex">Contexto Histórico<span className="text-red-400">*</span>: </label>
                <textarea 
                    className="border mt-1 rounded px-4 w-full focus:outline-amarilloPrincipal" 
                    placeholder="Inserte texto aquí..." 
                    id="contexto_historico" 
                    name="contexto_historico" 
                    rows="3"
                    value={formData.contexto_historico}
                    onChange={handleInputChange}
                ></textarea>
                {formErrors.contexto_historico && <span className="text-red-500 text-sm">{formErrors.contexto_historico}</span>}
            </div>
        
        </div>
      )
    },
    {
        title: "Ubicación",
        content: (
          <div className="space-y-6">
            <div className="input_group">
              <label htmlFor="ubicacion_url" className="flex">URL dirección en Google Maps<span className="text-red-400">*</span>: </label>
              <input 
                className="h-10 border mt-1 rounded px-4 w-full focus:outline-amarilloPrincipal" 
                type="text" 
                name="ubicacion_url" 
                id="ubicacion_url" 
                placeholder="url"
                value={formData.ubicacion_url}
                onChange={handleInputChange}
              />
              {formErrors.ubicacion_url && <span className="text-red-500 text-sm">{formErrors.ubicacion_url}</span>}
            </div>
            
            <div className="input_group">
              <label htmlFor="calle_num" className="flex">Calle<span className="text-red-400">*</span>: </label>
              <input 
                className="h-10 border mt-1 rounded px-4 w-full focus:outline-amarilloPrincipal" 
                type="text" 
                name="calle_num" 
                id="calle_num" 
                placeholder="Calle"
                value={formData.calle_num}
                onChange={handleInputChange}
              />
              {formErrors.calle_num && <span className="text-red-500 text-sm">{formErrors.calle_num}</span>}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="input_group">
                <label htmlFor="estado" className="flex">Estado<span className="text-red-400">*</span>: </label>
                <select
                  value={selectedEstado}
                  onChange={handleEstadoChange}
                  className="h-10 border mt-1 rounded px-4 w-full  focus:outline-amarilloPrincipal"
                  name="estado"
                  id="estado"
                >
                  <option value="">Selecciona un estado</option>
                  {estados.map((estado) => (
                    <option key={estado.idEstado} value={estado.idEstado}>
                      {estado.estado}
                    </option>
                  ))}
                </select>
                {formErrors.estado && <span className="text-red-500 text-sm">{formErrors.estado}</span>}
              </div>
              
              <div className="input_group">
                <label htmlFor="municipio" className="flex">Municipio<span className="text-red-400">*</span>: </label>
                <select
                  value={selectedMunicipio}
                  onChange={handleMunicipioChange}
                  className="h-10 border mt-1 rounded px-4 w-full  focus:outline-amarilloPrincipal" 
                  name="municipio" 
                  id="municipio"
                >
                  <option value="">Selecciona un municipio</option>
                  {municipios.map(municipio => (
                    <option key={municipio.idmunicipio} value={municipio.idmunicipio}>
                      {municipio.municipio}
                    </option>
                  ))}
                </select>
                {formErrors.municipio && <span className="text-red-500 text-sm">{formErrors.municipio}</span>}
              </div>
              
              <div className="input_group">
                <label htmlFor="colonia" className="flex">Colonia<span className="text-red-400">*</span>: </label>
                <select 
                  value={selectedColonia}
                  onChange={handleColoniaChange}
                  className="h-10 border mt-1 rounded px-4 w-full  focus:outline-amarilloPrincipal" 
                  name="colonia" 
                  id="colonia"
                >
                  <option value="">Seleccione una colonia</option>
                  {colonias.map(colonia => (
                    <option key={colonia.idColonia} value={colonia.idColonia}>
                      {colonia.descripcion}
                    </option>
                  ))}
                </select>
                {formErrors.colonia && <span className="text-red-500 text-sm">{formErrors.colonia}</span>}
              </div>
            </div>
            
            <div className="input_group">
              <label className="flex">Seleccione Imagen de Ubicación: </label>
              <FileUploadCard 
                  onFileUpload={(file) => {
                  setFormData({
                      ...formData,
                      imagen_ubicacion: file
                  });
                  
                  // Limpiar error si existe
                  if (formErrors.imagen_ubicacion) {
                      setFormErrors({
                      ...formErrors,
                      imagen_ubicacion: ''
                      });
                  }
                  }}
                  multiple={false}
              />
              {formErrors.imagen_ubicacion && <span className="text-red-500 text-sm">{formErrors.imagen_ubicacion}</span>}
              </div>
          </div>
        )
      },
    {
        title: "Contexto Urbano",
        content: (
          <div className="space-y-6">
            <div className="input_group">
              <label htmlFor="contexto_urbano" className="flex">Contexto Urbano: </label>
              <textarea 
                className="border mt-1 rounded px-4 w-full focus:outline-amarilloPrincipal" 
                placeholder="Inserte texto aquí..." 
                id="contexto_urbano" 
                name="contexto_urbano" 
                rows="10"
                value={formData.contexto_urbano}
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>
        )
      },
    {
      title: "Detalles Arquitectónicos",
      content: (
        <div className="space-y-6">
          
          <div className="input_group">
            <label htmlFor="concepto" className="flex">Descripción: </label>
            <textarea 
              className="border mt-1 rounded px-4 w-full focus:outline-amarilloPrincipal" 
              placeholder="Inserte texto aquí..." 
              id="concepto" 
              name="concepto" 
              rows="3"
              value={formData.concepto}
              onChange={handleInputChange}
            ></textarea>
          </div>
          
          <div className="input_group">
            <label htmlFor="material_sistem" className="flex">Materiales y Sistema: </label>
            <textarea 
              className="border mt-1 rounded px-4 w-full focus:outline-amarilloPrincipal" 
              placeholder="Inserte texto aquí..." 
              id="material_sistem" 
              name="material_sistem" 
              rows="3"
              value={formData.material_sistem}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="input_group">
              <label className="flex">Agrega imágenes: </label>
              <FileUploadCard 
                  onFileUpload={(file) => {
                  setFormData({
                      ...formData,
                      imagenes_descripcion: file
                  });
                  
                  // Limpiar error si existe
                  if (formErrors.imagenes_descripcion) {
                      setFormErrors({
                      ...formErrors,
                      imagenes_descripcion: ''
                      });
                  }
                  }}
                  multiple={true}
              />
              {formErrors.imagenes_descripcion && <span className="text-red-500 text-sm">{formErrors.imagenes_descripcion}</span>}
              </div>

        </div>
      )
    },
    
    {
        title: "Corriente Estilística",
        content: (
          <div className="space-y-6">
            
            <div className="input_group">
              <label htmlFor="corriente_est" className="flex">Corriente Estilística: </label>
              <textarea 
                className="border mt-1 rounded px-4 w-full focus:outline-amarilloPrincipal" 
                placeholder="Inserte texto aquí..." 
                id="corriente_est" 
                name="corriente_est" 
                rows="3"
                value={formData.corriente_est}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="input_group">
              <label className="flex">Agrega imágenes al slider: </label>
              <FileUploadCard 
                  onFileUpload={(file) => {
                  setFormData({
                      ...formData,
                      slider_corriente: file
                  });
                  
                  // Limpiar error si existe
                  if (formErrors.slider_corriente) {
                      setFormErrors({
                      ...formErrors,
                      slider_corriente: ''
                      });
                  }
                  }}
                  multiple={true}
              />
              {formErrors.slider_corriente && <span className="text-red-500 text-sm">{formErrors.slider_corriente}</span>}
              </div>
          </div>
        )
      },
    
    {
        title: "Transformaciones",
        content: (
          <div className="space-y-6">
            <div className="input_group">
              <label htmlFor="transformaciones" className="flex">Transformaciones del espacio: </label>
              <textarea 
                className="border mt-1 rounded px-4 w-full focus:outline-amarilloPrincipal" 
                placeholder="Inserte texto aquí..." 
                id="transformaciones" 
                name="transformaciones" 
                rows="5"
                value={formData.transformaciones}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="input_group">
              <label className="flex">Agrega imágenes al slider: </label>
              <FileUploadCard 
                  onFileUpload={(file) => {
                  setFormData({
                      ...formData,
                      slider_transfromaciones: file
                  });
                  
                  // Limpiar error si existe
                  if (formErrors.slider_transfromaciones) {
                      setFormErrors({
                      ...formErrors,
                      slider_transfromaciones: ''
                      });
                  }
                  }}
                  multiple={true}
              />
              {formErrors.slider_transfromaciones && <span className="text-red-500 text-sm">{formErrors.slider_transfromaciones}</span>}
              </div>
          </div>
        )
      },
  ];

  return (
    <div className="w-full min-h-screen mb-10 flex flex-col items-center justify-center space-y-6" id="formulario">
      <div className="w-4/5 flex items-center justify-start">
        <h3 className="text-3xl font-semibold">Añadir Edificio</h3>
      </div>

      <div className="w-4/5 h-full">
        <FormStepper
          steps={formSteps}
          onComplete={handleSubmit}
        />
        
        <div className="md:col-span-5 m-2 p-2 justify-center bg-red-300 rounded hidden" id="alerta_campos_vacios">
          Existen campos vacíos.
        </div>

        <div className="md:col-span-5 m-2 p-2 justify-center bg-green-300 rounded hidden" id="alerta_exito">
          Edificio subido con éxito.
        </div>
      </div>
    </div>
  );
}

export default Edificio;
