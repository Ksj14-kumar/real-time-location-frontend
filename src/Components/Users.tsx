import { __currentUserInfoType } from "./AllType"
import { motion } from "framer-motion"
import { useState } from "react"
import React from 'react'
import { infoType } from "../App"
type propType = {
    item: __currentUserInfoType,
    setInfo: React.Dispatch<React.SetStateAction<infoType>>,
}
export function Users({ item, setInfo }: propType) {
    const [lat, long] = item.loc.split(",")
    return (
        <>
            <motion.div
                initial={{ scale: 1 }}
                transition={{ duration: .6, type: "tween" }}
                whileHover={{ scale: 1.1 }}
                className="wrapper mb-2 bg-[#e0dbdb] rounded-md px-2 py-1 drop-shadow-lg">
                <motion.div
                    role="button"
                    onClick={() => {
                        setInfo({
                            showModal: true,
                            name: item.city,
                            lat:lat,
                            lon:long
                        })
                    }}
                    className="user_list cursor-pointer hover:bg-[#f6f5f5] flex items-center justify-between px-2 py-[5px] rounded-md">
                    <div className="ip font-medium mobile:text-[.8rem]">{item.ip}</div>
                    <div className="flage rounded-full w-[2.5rem] h-[2.5rem] flex-shrink-0 px-1">
                        <img src={`https://flagsapi.com/${item.country}/shiny/64.png`} alt="img" className='w-full rounded-full h-full flex-shrink-0' />
                    </div>
                    <div className="country text-[1.2rem] mobile:text-[.8rem] font-serif truncate px-1">{item.region}</div>
                    <div className="city text-[1.2rem] mobile:text-[.8rem] font-serif truncate px-1">{item.city}</div>
                    <div className="city text-[1.2rem] mobile:text-[.8rem] font-serif truncate px-1">{lat}/ {long}</div>
                </motion.div>
            </motion.div>
        </>
    )
}