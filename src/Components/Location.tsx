import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { infoType } from "../App";
import location from "../assets/icons8-place-marker-96.png";
import { MdClose } from "react-icons/md"
import { motion } from "framer-motion";
interface propType {
    info: infoType,
    setInfo: React.Dispatch<React.SetStateAction<infoType>>
}
const greenIcon = L.icon({
    iconUrl: location,
    shadowUrl: 'leaf-shadow.png',
    iconSize: [63, 73],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76]
});
function Location({ info, setInfo }: propType) {
    const position: LatLngExpression = [+info.lat, +info.lon];
    const zoom: number = 15;
    return (
        <motion.div 
        initial={{scale:0,opacity:0}}
        animate={{scale:1,opacity:1}}
        transition={{duration:.5,type:"tween"}}
        className="fixed w-screen z-[3] bg-[#d1cfcf] min-h-full md:py-[2rem] md:px-[1.4rem] px-1 py-1">
            <div className="closebtn flex justify-end absolute top-2 md:top-[2.4rem] md:right-[2.7rem] z-[401] right-2">
                <button type="button" role="button" className="p-[.63rem] bg-[#969494a8] rounded-full"
                    onClick={() => {
                        setInfo({ showModal: false, name: "", lat: "", lon: "" })
                    }}
                >
                    <MdClose className="text-[1.5rem] text-[#fff]" />
                </button>
            </div>
            <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
                <TileLayer
                    attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                    icon={greenIcon}
                    position={[+info.lat, +info.lon]}
                    title={`${info.name}`}
                >
                    <Popup>
                        <strong>
                            {info.name}
                        </strong>
                        <br />
                    </Popup>
                </Marker>
            </MapContainer>
        </motion.div>
    )
}
export default Location