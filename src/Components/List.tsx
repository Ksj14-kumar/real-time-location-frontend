import { __currentUserInfoType } from './AllType'
import { Users } from './Users'
import React from 'react'
import {  infoType } from '../App'
type propType = {
    arrivalVisitors: __currentUserInfoType[],
    setInfo:React.Dispatch<React.SetStateAction<infoType>>,
}
function List({ arrivalVisitors,setInfo}: propType): JSX.Element {
    return (
        <div className='bg-[#]  flex-grow-1  md:px-[10rem] mobile:px-[7px] px-[.2rem]  pt-[4rem]'>
            <div className="user_list cursor-pointer bg-[#fbfbfb] flex items-center justify-between px-3 py-[5px] rounded-md mb-2 w-full divide-x-2">
                <div className="ip font-serif text-[1.2rem] mobile:text-[.8rem] flex-[2]  pr-2">Address</div>
                <div className=" flex-[3] flage  flex-shrink-0  flex justify-center items-center font-serif tracking-wider text-[1.2rem] mobile:text-[.8rem] px-3">
                    Flag
                </div>
                <div className="country flex-[3] text-[1.2rem] mobile:text-[.8rem] font-serif truncate px-1 pr-2">Region</div>
                <div className="city text-[1.2rem] flex-[2] mobile:text-[.8rem] font-serif truncate px-1">City</div>
                <div className="city text-[1.2rem] flex-[2] mobile:text-[.8rem] font-serif truncate px-1">lat/long</div>
            </div>
            {arrivalVisitors && arrivalVisitors.map((item: __currentUserInfoType, index) => {
                return <Users setInfo={setInfo}    key={index} item={item} />
            })}
        </div>
    )
}
export default List;
