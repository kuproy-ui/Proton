import React, { useEffect } from 'react';
import {
  FieldValues,
  useForm,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import {
  LogisticsSelectPlainField,
  LogisticsNumberField,
  LogisticsDateField,
} from '@components/general/form/LogisticsSelectPlainField';
import { SelectObject } from '@components/general/form/SelectField';
import {
  PurchasingRevisionChoices,
  PurchaseItemLogRevision,
  SupplierData,
} from './PurchasingTypes';

const PurchaseListRevisionTable: React.FC<{
  choices: PurchasingRevisionChoices;
  data: PurchaseItemLogRevision[];
  handleChecked: (idx: number, check: boolean) => void;
  checkedIndex: boolean[];
}> = ({ data, handleChecked, checkedIndex, choices }) => {
  const { register, getValues, setValue } = useForm();
  function handlePost() {
    const allResult = getValues('e');
    const checkedResult: any[] = [];
    checkedIndex.forEach((bol, idx) => {
      if (bol) checkedResult.push(allResult[idx]);
    });
    console.log(checkedResult);
  }
  return (
    <div
      style={{ minWidth: '1000px' }}
      className="w-full px-1 overflow-x-auto relative"
    >
      <div
        style={{ width: 'max-content' }}
        onClick={handlePost}
        className="bg-blue-astronaut cursor-pointer text-white font-medium py-2 px-9 rounded right-0 top-0 absolute"
      >
        Post
      </div>
      <table className="w-full mt-16">
        <thead className="text-sm">
          <tr>
            <th style={{ width: '11%' }}>Proj. No</th>
            <th style={{ width: '11%' }}>Category</th>
            <th style={{ width: '26%' }}>Item Name</th>
            <th style={{ width: '4%' }}>Qty</th>
            <th style={{ width: '4%' }}>Unit</th>
            <th style={{ width: '12%' }}>Del. Terms</th>
            <th style={{ width: '12%' }}>ETA</th>
            <th style={{ width: '15%' }}>Sent To</th>
            <th style={{ width: '5%' }}></th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, idx) => (
            <Row
              key={idx}
              idx={idx}
              data={e}
              handleChecked={handleChecked}
              checked={checkedIndex[idx]}
              choices={choices}
              setValue={setValue}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Row: React.FC<{
  data: PurchaseItemLogRevision;
  choices: PurchasingRevisionChoices;
  handleChecked: any;
  idx: number;
  checked: boolean;
  setValue: UseFormSetValue<FieldValues>;
}> = ({ idx, data: e, handleChecked, checked, choices, setValue }) => {
  function handleChange(fieldName: string, value: string) {
    setValue(`e.${idx}.${fieldName}`, value);
  }
  useEffect(() => {
    setValue(`e.${idx}.projectNo`, e.projectNumber);
    setValue(`e.${idx}.category`, e.category);
    setValue(`e.${idx}.itemName`, e.itemName);
    setValue(`e.${idx}.qty`, e.qty);
    setValue(`e.${idx}.unit`, e.unit);
  }, []);
  function extractChoices(data: string[]): SelectObject[] {
    return data.map((e) => {
      return {
        value: e,
        text: e,
      };
    });
  }
  return (
    <tr>
      <td className=" text-center border-black border">{e.projectNumber}</td>
      <td className="text-center border-black border">{e.category}</td>
      <td className="text-center border-black border">{e.itemName}</td>
      <td className="p-1.5 border-black border">
        <LogisticsNumberField
          onChange={handleChange}
          defaultValue={e.qty}
          fieldName="qty"
        />
      </td>
      <td className="p-1.5 border-black border">{e.unit}</td>
      <td className="p-1.5 border-black border">
        <LogisticsSelectPlainField
          className="w-full"
          onChange={handleChange}
          choices={extractChoices(choices.PilihanDeliveryTerm)}
          defaultValue={''}
          fieldName="deliveryTerm"
          withSelect
        />
      </td>
      <td className="p-1.5 border-black border">
        <LogisticsDateField
          className="w-full"
          onChange={handleChange}
          fieldName="eta"
        />
      </td>
      <td className="p-1.5 border-black border">
        <LogisticsSelectPlainField
          className="w-full"
          onChange={handleChange}
          choices={extractChoices(choices.PilihanTujuan)}
          defaultValue={''}
          fieldName="sentTo"
          withSelect
        />
      </td>
      <td className="">
        <div
          onClick={() => handleChecked(idx, !checked)}
          className="border border-black rounded w-10 mx-auto h-10"
        >
          {checked && <img src="/role/check.png" alt="" />}
        </div>
      </td>
    </tr>
  );
};
export default PurchaseListRevisionTable;
