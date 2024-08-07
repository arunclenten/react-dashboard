import React from 'react';
import Image1 from "../assets/images3.jpeg";
import Image2 from "../assets/images2 (1).jpeg";
import Image3 from "../assets/images4.jpeg";

const Table = () => {
  const data = [
    { id: 1, customer: { name: 'Sumithra', image: Image1 }, orderNo: '12345', amount: '$100.00', status: 'Completed' },
    { id: 2, customer: { name: 'Abdullah', image: Image2 }, orderNo: '67890', amount: '$200.00', status: 'Completed' },
    { id: 3, customer: { name: 'Clenten', image: Image3 }, orderNo: '78937', amount: '$150.00', status: 'Cencelled' },
    { id: 4, customer: { name: 'Vani', image: Image1 }, orderNo: '95876', amount: '$300.00', status: 'Pending' },
    { id: 5, customer: { name: 'Naveen', image: Image2 }, orderNo: '23478', amount: '$600.00', status: 'Completed' },
    { id: 6, customer: { name: 'Dhamu',image: Image3}, orderNo: '98645', amount: '$100.00', status: 'Completed' }
  ];

  
  const getStatusBgColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500';
      case 'Pending':
        return 'bg-red-500'; 
      default:
        return 'bg-red-500'; 
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-4">
        <div className="md:col-span-8 bg-gray-800 p-4">
          <h2 className="text-xl text-white font-semibold mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-800 border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-white">Customer</th>
                  <th className="py-2 px-4 border-b text-white">Order No</th>
                  <th className="py-2 px-4 border-b text-white">Amount</th>
                  <th className="py-2 px-4 border-b text-white">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.id}>
                    <td className="py-2 px-4 border-b flex items-center">
                      <img src={row.customer.image} alt={row.customer.name} className="w-10 h-10 rounded-full mr-4" />
                      <span className='text-white'>{row.customer.name}</span>
                    </td>
                    <td className="py-2 px-4 border-b text-white text-center">{row.orderNo}</td>
                    <td className="py-2 px-4 border-b text-white text-center">{row.amount}</td>
                    <td className="py-2 px-4 border-b text-center">
                      <div className={`inline-block  py-1 px-3 rounded-full text-white  ${getStatusBgColor(row.status)}`}>
                        {row.status}
                      </div>
                      </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
