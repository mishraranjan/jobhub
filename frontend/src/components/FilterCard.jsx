import React from 'react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';

const filterData = [
    {
        filterType: "Location",
        array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
    },
    {
        filterType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "MernStack Developer", "FullStack Developer"]
    },
    {
        filterType: "Salary",
        array: ['0-40k', '42-1lakh', '1-5lakh']
    }
]

const FilterCard = () => {
    return (
        <div className='w-full bg-white rounded-md p-3'>
            <h1 className="text-xl font-bold">Filter jobs</h1>
            <hr className='mt-3'/>
            <div className="mt-3 ">
                {filterData.map((data, index) => (
                    <div key={index}>
                        <h2 className="font-bold text-lg">{data.filterType}</h2>
                        <RadioGroup>
                            {data.array.map((item, idx) => (
                                <div key={idx} className="flex items-center space-x-2 my-2">
                                    <RadioGroupItem id={`${data.filterType}-${item}`} value={item} />
                                    <Label htmlFor={`${data.filterType}-${item}`}>{item}</Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FilterCard;
