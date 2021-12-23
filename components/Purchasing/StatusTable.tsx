import React from 'react';
export interface PurchasingStatusData {
  status: string;
  name: string;
  subcode: string;
  qty: number;
  id: any;
  date?: string;
}
const PurchasingStatusTable: React.FC<{ data: PurchasingStatusData[] }> = ({
  data,
}) => {
  return (
    <div
      style={{ minWidth: '900px' }}
      className="w-full px-1 overflow-x-auto text-center"
    >
      <table className="w-full">
        <thead className="text-sm">
          <tr>
            <th className="w-1/5">Date</th>
            <th className="w-1/5">Transaction Status</th>
            <th className="w-1/5">Item Name</th>
            <th className="w-1/5">Subcode</th>
            <th className="w-1/5">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => {
            return (
              <tr key={e.id}>
                <td className="border-black border">{e.date ?? ''}</td>
                <td className="border-black border">{e.status}</td>
                <td className="border-black border">{e.name}</td>
                <td className="border-black border">{e.subcode}</td>
                <td className="border-black border">{e.qty}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default PurchasingStatusTable;
