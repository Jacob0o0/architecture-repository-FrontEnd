import React, { useState } from 'react';
import FileUploadCard from '../ui/Drag&Drop/FileUploadCrad';

function Personaje() {
  const [formData, setFormData] = useState({
    nombre: '',
    informacion: '',
    fecha_nacimiento: '',
    fecha_defuncion: '',
    imagen: null
  });

  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

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
    
    // Limpiar error si existe
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    const requiredFields = ['nombre', 'informacion', 'imagen'];
    
    requiredFields.forEach(field => {
      if (!formData[field]) {
        errors[field] = 'Este campo es requerido';
      }
    });
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
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
    
    // Aquí iría tu petición POST
    // fetch('tu-api-endpoint', {
    //   method: 'POST',
    //   body: formDataObj
    // }).then(...)
    
    // Mensaje de éxito temporal
    document.getElementById('alerta_exito').style.display = 'flex';
    setTimeout(() => {
      document.getElementById('alerta_exito').style.display = 'none';
    }, 3000);
    
    setSuccessMessage('Personaje histórico guardado con éxito.');
  };

  return (
    <div className="w-full pb-10 flex flex-col items-center justify-center space-y-6">
      <div className="w-4/5 flex items-center justify-start">
        <h3 className="text-3xl font-semibold">Añadir Autor</h3>
      </div>
      
      <div className="w-4/5  bg-blancoPrincipal rounded-xl shadow-lg overflow-hidden p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-2xl font-semibold mb-6">Información del Autor</h3>
          
          {/* Campo: Nombre del Autor */}
          <div className="input_group">
            <label htmlFor="nombre" className="flex text-gray-700 font-medium">
              Nombre del Autor<span className="text-red-400 ml-1">*</span>
            </label>
            <input 
              className="h-10 border border-gray-300 mt-1 rounded-lg px-4 w-full focus:outline-none focus:ring-2 focus:ring-amarilloPrincipal focus:border-transparent" 
              type="text" 
              placeholder="Nombre completo del autor" 
              name="nombre" 
              id="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
            />
            {formErrors.nombre && <span className="text-red-500 text-sm mt-1">{formErrors.nombre}</span>}
          </div>

          {/* Campo: Información */}
          <div className="input_group">
            <label htmlFor="informacion" className="flex text-gray-700 font-medium">
              Información<span className="text-red-400 ml-1">*</span>
            </label>
            <textarea 
              className="border border-gray-300 mt-1 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-amarilloPrincipal focus:border-transparent" 
              placeholder="Biografía y contribuciones importantes" 
              name="informacion" 
              id="informacion"
              rows="6"
              value={formData.informacion}
              onChange={handleInputChange}
            ></textarea>
            {formErrors.informacion && <span className="text-red-500 text-sm mt-1">{formErrors.informacion}</span>}
          </div>

          {/* Campos: Fechas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="input_group">
              <label htmlFor="fecha_nacimiento" className="block text-gray-700 font-medium">
                Fecha de Nacimiento
              </label>
              <input 
                className="h-10 border border-gray-300 mt-1 rounded-lg px-4 w-full focus:outline-none focus:ring-2 focus:ring-amarilloPrincipal focus:border-transparent" 
                type="date" 
                name="fecha_nacimiento" 
                id="fecha_nacimiento"
                value={formData.fecha_nacimiento}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="input_group">
              <label htmlFor="fecha_defuncion" className="block text-gray-700 font-medium">
                Fecha de Defunción
              </label>
              <input 
                className="h-10 border border-gray-300 mt-1 rounded-lg px-4 w-full focus:outline-none focus:ring-2 focus:ring-amarilloPrincipal focus:border-transparent" 
                type="date" 
                name="fecha_defuncion" 
                id="fecha_defuncion"
                value={formData.fecha_defuncion}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Campo: Imagen */}
          <div className="input_group">
            <label className="flex text-gray-700 font-medium">
              Imagen del Autor<span className="text-red-400 ml-1">*</span>
            </label>
            <div className="mt-1">
              <FileUploadCard 
                onFileUpload={(file) => {
                  setFormData({
                    ...formData,
                    imagen: file
                  });
                  
                  if (formErrors.imagen) {
                    setFormErrors({
                      ...formErrors,
                      imagen: ''
                    });
                  }
                }}
                multiple={false}
              />
            </div>
            {formErrors.imagen && <span className="text-red-500 text-sm mt-1">{formErrors.imagen}</span>}
          </div>

          {/* Botón de envío */}
          <div className="flex justify-end pt-6">
            <button 
              type="submit" 
              className="px-6 py-2 bg-amarilloPrincipal text-negroPrincipal rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out font-medium"
            >
              Guardar Autor
            </button>
          </div>

          {/* Alertas */}
          <div className="md:col-span-5 m-2 p-2 justify-center bg-red-100 text-red-700 rounded hidden" id="alerta_campos_vacios">
            Existen campos requeridos vacíos.
          </div>

          <div className="md:col-span-5 m-2 p-2 justify-center bg-green-100 text-green-700 rounded hidden" id="alerta_exito">
            {successMessage || 'Autor guardado con éxito.'}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Personaje;