import React, { useState, useCallback } from 'react';

const FileUploadCard = ({ onFileUpload, multiple = false }) => {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);

  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = multiple 
        ? [...files, ...Array.from(e.dataTransfer.files)] 
        : [e.dataTransfer.files[0]];
      
      setFiles(newFiles);
      if (onFileUpload) onFileUpload(multiple ? newFiles : newFiles[0]);
      setUploadComplete(true);
      e.dataTransfer.clearData();
    }
  }, [onFileUpload, multiple, files]);

  const handleFileChange = useCallback((e) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = multiple 
        ? [...files, ...Array.from(e.target.files)] 
        : [e.target.files[0]];
      
      setFiles(newFiles);
      if (onFileUpload) onFileUpload(multiple ? newFiles : newFiles[0]);
      setUploadComplete(true);
    }
  }, [onFileUpload, multiple, files]);

  const removeFile = useCallback((index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    if (onFileUpload) onFileUpload(multiple ? newFiles : newFiles[0] || null);
    if (newFiles.length === 0) setUploadComplete(false);
  }, [files, onFileUpload, multiple]);

  const removeAllFiles = useCallback(() => {
    setFiles([]);
    if (onFileUpload) onFileUpload(null);
    setUploadComplete(false);
  }, [onFileUpload]);

  return (
    <div className="group relative w-full my-6">
      <div className="relative overflow-hidden rounded-2xl bg-grisPrincipal shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-zinc-400/10">
        <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-zinc-400/20 to-amarilloPrincipal/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />
        <div className="absolute -right-16 -bottom-16 h-32 w-32 rounded-full bg-gradient-to-br from-marilloPrincipal/20 to-zinc-400/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />
        <div className="relative p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-negroPrincipal">
                {multiple ? "Subir archivos" : "Subir archivo"}
              </h3>
              <p className="text-sm text-gray-700">
                {multiple ? "Arrastra y suelta tus archivos aquí" : "Arrastra y suelta tu archivo aquí"}
              </p>
            </div>
            {files.length > 0 && multiple && (
              <button 
                onClick={removeAllFiles}
                className="text-sm text-red-500 hover:text-red-700"
              >
                Eliminar todos
              </button>
            )}
          </div>
          
          <div className="group/dropzone mt-6">
            <div 
              className={`relative rounded-xl border-2 border-dashed ${isDragging ? 'border-amarilloPrincipal' : 'border-neutral-300'} bg-blancoPrincipal p-8 transition-colors`}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <input 
                type="file" 
                className="absolute inset-0 z-50 h-full w-full cursor-pointer opacity-0" 
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.jpg,.png"
                multiple={multiple}
              />
              
              {files.length === 0 ? (
                <div className="space-y-6 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amarilloPrincipal/20">
                    <svg className="h-10 w-10 text-amarilloPrincipal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <p className="text-base font-medium text-negroPrincipal">
                      {multiple ? "Suelta tus archivos aquí o haz clic para buscarlos" : "Suelta tu archivo aquí o haz clic para buscarlo"}
                    </p>
                    <p className="text-sm text-negroPrincipal">
                      Formatos admitidos: PDF, DOC, DOCX, JPG, PNG
                    </p>
                    <p className="text-xs text-negroPrincipal/30">Tamaño máximo por archivo: 10MB</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {files.map((file, index) => (
                    <div key={index} className="rounded-xl bg-grisPrincipal p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="rounded-lg bg-grisPrincipal/10 p-2">
                            <svg className="h-6 w-6 text-negroPrincipal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium text-negroPrincipal truncate max-w-xs">{file.name}</p>
                            <p className="text-xs text-slate-400">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {uploadComplete && (
                            <>
                              <svg className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm font-medium text-emerald-500">Subido</span>
                            </>
                          )}
                          <button 
                            className="text-slate-400 transition-colors hover:text-white"
                            onClick={() => removeFile(index)}
                          >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  {multiple && (
                    <div className="text-center mt-4">
                      <p className="text-sm text-gray-500">
                        {files.length} archivo(s) seleccionado(s). Puedes agregar más.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FileUploadCard;