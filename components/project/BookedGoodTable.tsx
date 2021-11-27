import React from 'react';
import { useForm } from 'react-hook-form';
export interface BookedGoodData {
  date: string;
  projectNo: string;
  category: string;
  itemName: string;
  transactionCode: string;
  subcode: string;
  qty: string;
  unit: string;
}
const BookedGoodTable: React.FC<{
  data: BookedGoodData[];
  onIssue: (x: BookedGoodData) => void;
  onCancel: (x: BookedGoodData) => void;
}> = ({ data, onIssue, onCancel }) => {
  return (
    <div
      style={{ minWidth: '1300px' }}
      className="w-full px-1 overflow-x-auto text-center"
    >
      <table>
        <thead className="text-sm">
          <tr>
            <th className="w-1/12">Date</th>
            <th className="w-1/12">Project No</th>
            <th className="w-1/12">Category</th>
            <th className="w-3/12">Booked Item Name</th>
            <th className="w-1/12">Trans. Code</th>
            <th className="w-1/12">Subcode</th>
            <th className="w-1/12">Qty</th>
            <th className="w-1/12">Unit</th>
            <th className="w-1/12"></th>
            <th className="w-1/12"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((e,idx) => (
            <Row key={"e-"+idx} e={e} onCancel={onCancel} onIssue={onIssue} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default BookedGoodTable;

const Row: React.FC<{
  onIssue: (x: BookedGoodData) => void;
  onCancel: (x: BookedGoodData) => void;
  e: BookedGoodData;
}> = ({ onCancel, onIssue, e }) => {
  const { register, getValues } = useForm();
  const handleIssue = () => {
    onIssue(getValues('e') as BookedGoodData);
  };
  const handleCancel = () => {
    onCancel(getValues('e') as BookedGoodData);
  };
  return (
    <tr className="break-all">
      <td className="border-black border">
        <input
          className="w-0"
          type="text"
          {...register('e.date')}
          value={e.date}
        />
        {e.date}
      </td>
      <td className="border-black border">
        <input
          className="w-0"
          type="text"
          {...register('e.projectNo')}
          value={e.projectNo}
        />
        {e.projectNo}
      </td>
      <td className="border-black border">
        <input
          className="w-0"
          type="text"
          {...register('e.category')}
          value={e.category}
        />
        {e.category}
      </td>
      <td className="border-black border">
        <input
          className="w-0"
          type="text"
          {...register('e.itemName')}
          value={e.itemName}
        />
        {e.itemName}
      </td>
      <td className="border-black border">
        <input
          className="w-0"
          type="text"
          {...register('e.transactionCode')}
          value={e.transactionCode}
        />
        {e.transactionCode}
      </td>
      <td className="border-black border">
        <input
          className="w-0"
          type="text"
          {...register('e.subcode')}
          value={e.subcode}
        />
        {e.subcode}
      </td>
      <td className="border-black border">
        <input
          className="w-0"
          type="text"
          {...register('e.qty')}
          value={e.qty}
        />
        {e.qty}
      </td>
      <td className="border-black border">
        <input
          className="w-0"
          type="text"
          {...register('e.unit')}
          value={e.unit}
        />
        {e.unit}
      </td>
      <td>
        <div
          onClick={handleIssue}
          className="bg-blue-astronaut py-1 cursor-pointer rounded-lg w-full h-full flex justify-center items-center text-white font-medium"
        >
          Issue
        </div>
      </td>
      <td>
        <div
          onClick={handleCancel}
          className="bg-gray-500 py-1 cursor-pointer rounded-lg w-full h-full flex justify-center items-center text-white font-medium"
        >
          Cancel
        </div>
      </td>
    </tr>
  );
};
