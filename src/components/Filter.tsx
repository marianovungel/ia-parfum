import React from 'react'

export default function Filter() {
  return (
    <div className='mt-12 flex justify-between'>
        <div className="flex gap-6 flex-wrap">
            <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
                <option>Gênero</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="unissex">Unissex</option>
            </select>
            <input type="text" placeholder='menor preço' className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400" />
            <input type="text" placeholder='maior preço' className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400" />
            <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
                <option>Tipo</option>
                <option value="citrico">Citrico</option>
                <option value="adocicado">Adocicado</option>
                <option value="floral">Floral</option>
                <option value="amadeirado">Amadeirado</option>
                <option value="couro">Couro</option>
            </select>
            <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
                <option>Ocasião</option>
                <option value="trabalho">Trabalho</option>
                <option value="romantico">Encontro Romantico</option>
                <option value="dia">Dia à Dia</option>
                <option value="balada">Balada</option>
            </select>
            <input type="text" placeholder='Horas de Progeção' className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400" />
            <input type="text" placeholder='Horas de Fixação' className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400" />
            <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
                <option>Filtrar Todos</option>
            </select>
        </div>
        <div className="">
            <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
                <option>Ordenar por</option>
                <option value="">Preço (baixo para alto)</option>
                <option value="">Preço (alto para baixo)</option>
                <option value="">Mais recente</option>
                <option value="">Mais Antigo</option>
            </select>
        </div>
    </div>
  )
}
