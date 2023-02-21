import { useState, useEffect } from 'react'
import List from './Components/List.jsx'
import LiviVisitors from './Components/LiviVisitors.jsx'
import axios, { AxiosError, AxiosResponse } from "axios"
import { io, Socket } from "socket.io-client"
import { options } from './Socket.options'
import { __currentUserInfoType } from './Components/AllType.js'
import Location from './Components/Location.js'
import { motion, AnimatePresence } from "framer-motion"
const socket: Socket = io(`${process.env.B_URI}/visitors`, options)
export interface infoType {
  showModal: boolean,
  name: string,
  lat: string,
  lon: string,
}
function App(): JSX.Element {
  const [info, setInfo] = useState<infoType>({ showModal: false, name: "", lat: "", lon: "" } as infoType)
  const [arrivalVisitors, setArrivalVisitors] = useState<__currentUserInfoType[]>([])
  useEffect(() => {
    (async function () {
      try {
        const res: AxiosResponse = await axios.get(`${process.env.IP_URI}`)
        if (res.status === 200) {
          const result: AxiosResponse = await axios.get(`${process.env.Info}/${res.data.IPv4}?token=${process.env.Token}`)
          socket.emit("info", result.data)
        }
      } catch (err: unknown) {
        const error = err as AxiosError
        console.warn(error)
      }
    })()
  }, [socket])
  useEffect(() => {
    socket.on("all", (params: __currentUserInfoType[]) => {
      setArrivalVisitors(params)
    })
  }, [socket])
  return (
    <div className="App bg-[#d2cdcd] min-h-full flex-grow-1 overflow-hidden">
      <AnimatePresence>
        {
          info.showModal &&
          <motion.div 
          transition={{duration:.5}}
          exit={{scale:0,opacity:0}}
          className="wrapper">
          <Location info={info} setInfo={setInfo} />
          </motion.div>
        }
      </AnimatePresence>
      <LiviVisitors />
      <List arrivalVisitors={arrivalVisitors} setInfo={setInfo} />
    </div>
  )
}
export default App
