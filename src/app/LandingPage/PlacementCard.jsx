"use client";
import { MapPin } from 'lucide-react';
import Image from 'next/image';

const PlacementCard = ({bgColor, name, company, salary, location, imageUrl, logoUrl}) => {
  return (
    <div className={`w-full max-w-md ${bgColor} text-white -pl-4 pr-5 py-4 sm:pt-8  shadow-lg overflow-hidden`}>
      <div className="flex items-start space-x-4">
        <div className="">
          {/* <Image
            src={imageUrl}
            alt={name}
            
            className="rounded-lg h-96 w-full object-cover -mb-8 mix-blend-normal"
          /> */}
        </div>
        <div className="flex-grow space-y-3 grid justify-items-center">
          <Image
            src={logoUrl}
            alt={company}
            width={150}
            height={50}
            className="max-h-10 object-cover bg-white px-1"
          />
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-4xl font-bold">{salary}</p>
          <p className="text-lg">Per Annum</p>
          <div className="flex items-center space-x-1">
            <MapPin size={20} />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlacementCard;
