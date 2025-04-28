import React from 'react'

function SeccionesEditor() {
  return (
    <div class="max-w-full flex justify-center space-x-4">
        <div class="max-w-[85vw] space-y-3">
            <button href="/editor/" class="m-2 p-3 bg-amarilloPrincipal rounded-15px text-3xl hover:scale-125 transition-transform transition-opacity transition-colors duration-500 ease-in-out">
                <i class="bi bi-person-workspace"></i>
            </button>
            <button href="/editor/edificio" class="m-2 p-3 bg-amarilloPrincipal rounded-15px text-3xl hover:scale-125 transition-transform transition-opacity transition-colors duration-500 ease-in-out">
                <i class="bi bi-bank"></i>
                <i class="bi bi-plus"></i>
            </button>
            <button class="m-2 p-3 bg-amarilloPrincipal rounded-15px text-3xl hover:scale-125 transition-transform transition-opacity transition-colors duration-500 ease-in-out">
                <i class="bi bi-buildings-fill"></i>
                <i class="bi bi-plus"></i>
            </button>
            <button class="m-2 p-3 bg-amarilloPrincipal rounded-15px text-3xl hover:scale-125 transition-transform transition-opacity transition-colors duration-500 ease-in-out">
                <i class="bi bi-people-fill"></i>
                <i class="bi bi-plus"></i>
            </button>
        </div>
    </div>
  )
}

export default SeccionesEditor