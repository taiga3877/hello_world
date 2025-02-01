import React from 'react';

const AtHome = () => {
    return (
        <div class="bg-white rounded-lg shadow-lg p-6 mb-12 w-[1440px] m-auto h-[200px] ">
          
        <div class="flex items-center justify-start w-[400px] ">
          <button class="px-4 py-2 rounded-md bg-orange-500 text-white">Отправить</button>
          <button class="px-4 py-2 rounded-md bg-gray-100 text-gray-600">Возвращение</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-1440 mx-auto">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Откуда</label>
            <input type="text" class="w-full p-2 border border-gray-300 rounded-md focus:ring-nemo-orange focus:border-nemo-orange" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Куда</label>
            <input type="text" class="w-full p-2 border border-gray-300 rounded-md focus:ring-nemo-orange focus:border-nemo-orange"/>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Дата вылета</label>
            <input type="date" class="w-full p-2 border border-gray-300 rounded-md focus:ring-nemo-orange focus:border-nemo-orange"/>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Пассажиры</label>
            <input type="number" min="1" class="w-full p-2 border border-gray-300 rounded-md focus:ring-nemo-orange focus:border-nemo-orange"/>
          </div>
        </div>
        <br />
        <button class="w-[800px] h-[40px] mt-6 bg-orange-500 text-white flex items-center justify-center py-3 rounded-md hover:bg-orange-500/90 transition duration-300 disabled:opacity-50">Поиск</button>
      </div>
      
    );
}

export default AtHome;
