import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { IoMdArrowDropdown } from 'react-icons/io';

// Data for the chart
const data = [
  { name: '5', category1: 3000, category2: 4000 },
  { name: '9', category1: 2000, category2: 1000 },
  { name: '11', category1: 3000, category2: 3000 },
  { name: '13', category1: 2000, category2: 2000 },
  { name: '15', category1: 1000, category2: 500 },
  { name: '17', category1: 6000, category2: 5000 },
  { name: '19', category1: 4000, category2: 3000 },
  { name: '21', category1: 7000, category2: 6000 },
  { name: '23', category1: 1000, category2: 500 },
  { name: '25', category1: 3000, category2: 1000 },
  { name: '27', category1: 1000, category2: 4500 },
];

export default function DoubleBarChart() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className='flex justify-between'>
        <p className="text-2xl font-semibold mb-4">Activity</p>
        <p className='bg-gray-600 p-3 rounded-full pt-3 flex'>
          <span>Weekly </span>
          <span className='pt-2 ms-2 text-md'><IoMdArrowDropdown /></span>
        </p>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(value) => `${value / 1000}k`} />
          <Tooltip formatter={(value) => `${value}`} />
          <Legend />
          <Bar dataKey="category1" fill="#42A5F5" barSize={15} radius={[10, 10, 10, 10]} />
          <Bar dataKey="category2" fill="#42A5F5" barSize={15} radius={[10, 10, 10, 10]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
