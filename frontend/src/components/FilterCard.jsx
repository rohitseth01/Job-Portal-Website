import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setsearchedQuery } from '../redux/jobSlice'

const filterData=[
  {
    filterType:"Location",
    array:["Delhi NCR","Banglore","Hyderbad","Pune","Mumbai","Gurgram"]
  },
  {
    filterType:"Industry",
    array:["Frontend Developer","Backend Developer","FullStack Developer","Software Engineer","Data Scientist"]
  },
  {
    filterType:"Salary",
    array:["0-6 lakh","6-12 lakh","12-18 lakh","18-24 lakh","24 lakh above"]
  }
]

const FilterCard = () => {

  const [selectedValue,setSelectedValue]=useState('');
  const dispatch=useDispatch();

  const changeHandler=(value)=>{
    setSelectedValue(value)
  }
  useEffect(()=>{
    dispatch(setsearchedQuery(selectedValue))
  },[selectedValue])


  return (
    <div className='w-full bg-white p-3 rounded-md'> 
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <hr  className='mt-3'/>
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {
          filterData.map((data,index)=>(
            <div>
              <h1 className='font-bold text-lg'>{data.filterType}</h1>
              {
                data.array.map((item,idx)=>{
                  const itemId=`r${index}-${idx}`
                  return (
                    <div className='flex  items-center space-x-2 my-2'>
                      <RadioGroupItem id={itemId} value={item} />
                      <Label htmlFor={itemId}>{item}</Label>
                    </div>
                  )
                })
              }
            </div>
          ))
        }
      </RadioGroup>




    </div>
  )
}

export default FilterCard