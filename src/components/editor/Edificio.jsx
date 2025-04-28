import React, {useState, useEffect} from 'react'

function Edificio() {
    const [estados, setEstados] = useState([]);
    const [municipios, setMunicipios] = useState([]);
    const [colonias, setColonias] = useState([]);
    const [selectedEstado, setSelectedEstado] = useState('');
    const [selectedMunicipio, setSelectedMunicipio] = useState('');
    const [selectedColonia, setSelectedColonia] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        // Lógica para cargar estados inicial
        fetch('http://localhost:8000/api/estados/getAll')
          .then(response => response.json())
          .then(data => setEstados(data))
          .catch(error => console.error('Error al cargar estados', error));
    }, []);
    
    useEffect(() => {
    if (selectedEstado) {
        fetch(`http://localhost:8000/api/municipios/${selectedEstado}`)
        .then(response => response.json())
        .then(data => setMunicipios(data.municipios))
        .catch(error => console.error('Error al cargar municipios', error));
        setColonias([]);
    } else {
        setMunicipios([]);
    }
    }, [selectedEstado]);

    useEffect(() => {
    if (selectedMunicipio) {
        fetch(`http://localhost:8000/api/colonias/${selectedMunicipio}`)
        .then(response => response.json())
        .then(data => setColonias(data.colonias))
        .catch(error => console.error('Error al cargar colonias', error));
    } else {
        setColonias([]);
    }
    }, [selectedMunicipio]);

    const handleSubmit = (e) => {
    e.preventDefault();
    // ... Lógica de envío del formulario usando FormData
    };

    // ... Resto del componente

    return (
        <div class="w-[100%] mb-10 flex flex-col items-center justify-center space-y-6" id="formulario">
            <div class="w-[80%] flex items-center justify-start bg-blancoPrincipal">
                <h3 class="text-3xl font-semibold">Añadir Edificio</h3>
            </div>

            <div class="w-[80%] p-5 bg-blancoPrincipal rounded-15px shadow-xl">
                <div class="w-[100%] flex justify-center">
                    <form class="w-[70%] grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5" enctype="multipart/form-data" id="formularioEdificio">

                        <div class="md:col-span-5 input_group">
                            <label for="nombre" class="flex">Nombre<span class="text-red-400">*</span>: </label>
                            <input class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" type="text" placeholder="Nombre del edificio" name="nombre" id="nombre"/>
                        </div>
                        <div class="md:col-span-5 input_group">
                            <label for="imagen_obra" class="flex">Seleccione Imagen Principal <span class="text-red-400">*</span>: </label>
                            <input class="block w-full text-sm text-gray-900 border rounded cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none" type="file" placeholder="Nombre del edificio" name="imagen_obra" id="imagen_obra" />
                        </div>
                        <div class="md:col-span-5 input_group">
                            <label for="genero" class="flex">Genero Edificio <span class="text-red-400">*</span>: </label>
                            <select
                                onChange={(e) => setSelectedEstado(e.target.value)}
                                >
                                <option value="">Selecciona un estado</option>
                                {estados.map((estado) => (
                                    <option key={estado.idEstado} value={estado.idEstado}>
                                    {estado.estado}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div class="md:col-span-5 input_group">
                            <label for="uso_actual" class="flex">Uso Actual: </label>
                            <textarea class="h-50 border mt-1 rounded px-4 w-full bg-gray-50" name="uso_actual" id="uso_actual" cols="40" rows="10" placeholder="Introduzca texto aquí..."></textarea>
                        </div>
                        <div class="md:col-span-5 input_group">
                            <label for="fecha_construc" class="flex" >Fecha de Construcción: </label>
                            <textarea class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" name="fecha_construc" id="fecha_construc" cols="40" rows="1" placeholder="Introduzca periodo aquí..." maxlength="40"></textarea>
                        </div>

                        <div class="md:col-span-3 input_group">
                            <label for="contexto_historico" class="flex" >Contexto Histórico<span class="text-red-400">*</span>: </label>
                            <textarea class="h-50 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Inserte texto aquí..." id="contexto_historico" name="contexto_historico" rows="5"></textarea>
                        </div>
                        <div class="md:col-span-2 input_group">
                            <label for="concepto" class="flex" >Concepto: </label>
                            <textarea class="h-50 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Inserte texto aquí..." id="concepto" name="concepto" rows="5"></textarea>
                        </div>

                        <div class="md:col-span-2 input_group">
                            <label for="corriente_est" class="flex" >Corriente Estilística: </label>
                            <textarea class="h-50 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Inserte texto aquí..." id="corriente_est" name="corriente_est" rows="5"></textarea>
                        </div>

                        <div class="md:col-span-3 input_group">
                            <label for="material_sistem" class="flex" >Materiales y Sistema: </label>
                            <textarea class="h-50 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Inserte texto aquí..." id="material_sistem" name="material_sistem" rows="5"></textarea>
                        </div>

                        <div class="md:col-span-5 input_group">
                            <label for="contexto_urbano" class="flex" >Contexto Urbano: </label>
                            <textarea class="h-50 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Inserte texto aquí..." id="contexto_urbano" name="contexto_urbano" rows="5"></textarea>
                        </div>

                        <div class="md:col-span-5 input_group">
                            <label for="transformaciones" class="flex" >Transformaciones del espacio: </label>
                            <textarea class="h-50 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Inserte texto aquí..." id="transformaciones" name="transformaciones" rows="5"></textarea>
                        </div>

                        <p class="text-xl font-semibold"> - Ubicación</p>
                        <div class="md:col-span-5 input_group">
                            <label for="ubicacion_url" class="flex" >URL dirección en Google Maps<span class="text-red-400">*</span>: </label>
                            <input class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" type="text" name="ubicacion_url" id="ubicacion_url" placeholder="url"></input>
                        </div>
                        <div class="md:col-span-1 input_group">
                            <label for="calle_num" class="flex" >Calle<span class="text-red-400">*</span>: </label>
                            <input class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" type="text" name="calle_num" id="calle_num" placeholder="Calle"></input>
                        </div>
                        <div class="md:col-span-1 input_group">
                            <label for="estado" class="flex" >Estado<span class="text-red-400">*</span>: </label>
                            <select
                                value={selectedEstado}
                                onChange={(e) => setSelectedEstado(e.target.value)}
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                >
                                <option value="">Selecciona un estado</option>
                                {estados.map((estado) => (
                                    <option key={estado.idEstado} value={estado.idEstado}>
                                    {estado.estado}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div class="md:col-span-1 input_group">
                            <label for="municipio" class="flex" >Municipio<span class="text-red-400">*</span>: </label>

                            <select
                                onChange={(e) => setSelectedMunicipio(e.target.value)}
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                                name="municipio" 
                                id="municipio"
                                >
                                <option value="">Selecciona un municipio</option>
                                {municipios.map(municipio => (
                                <option key={municipio.idmunicipio} value={municipio.idmunicipio}>{municipio.municipio}</option>
                                ))}
                            </select>
                        </div>
                        <div class="md:col-span-2 input_group">
                            <label for="colonia" class="flex" >Colonia<span class="text-red-400">*</span>: </label>
                            <select 
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                                name="colonia" 
                                id="colonia"
                                >
                                <option value="">Seleccione una colonia</option>
                                {colonias.map(colonia => (
                                <option key={colonia.idColonia} value={colonia.idColonia}>{colonia.descripcion}</option>
                                ))}

                            </select>
                        </div>
                        <div class="md:col-span-5 input_group">
                            <label for="imagen_ubicacion" class="flex">Seleccione Imagen de Ubicación: </label>
                            <input class="block w-full text-sm text-gray-900 border rounded cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none" type="file" placeholder="Nombre del edificio" name="imagen_ubicacion" id="imagen_ubicacion"/>
                        </div>

                        <div class="hidden md:col-span-5 m-2 p-2 flex justify-center bg-red-300 rounded" id="alerta_campos_vacios">
                            Existen campos vacíos.
                        </div>

                        <div class="hidden md:col-span-5 m-2 p-2 flex justify-center bg-green-300 rounded" id="alerta_exito">
                            Edificio subido con éxito.
                        </div>

                        <input class="h-10 md:col-start-3 mt-5 mb-5 bg-amarilloPrincipal border rounded shadow-sm hover:scale-125 transition-transform transition-opacity transition-colors duration-500 ease-in-out" type="submit" name="subirEdif"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Edificio