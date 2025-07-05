import React from 'react';
import { CardProps } from '../../interfaces';
import Image from 'next/image';
import { Star, BedDouble, Bath, Users } from 'lucide-react';

const Card: React.FC<CardProps> = ({ title, description, image, rating, price }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:scale-105">
      {/* Image Section */}
      <div className="relative">
        <Image
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
          {/* Other Information */}
      <div className="p-5">
                    {/* First Div with span texts */}
        <div className='flex flex-wrap gap-1 mb-4'>
          <span className='text-sm bg-gray-50 rounded-lg'>Top Villa</span>
          <span className='text-sm bg-gray-50 rounded-lg'>Self CheckIn</span>
          <span className='text-sm bg-gray-50 rounded-lg'>Free Reschedule</span>
        </div>
                    {/* Title, Rating */}
        <div className='flex items-center justify-between mb-3'>
          <h3 className='font-semibold text-lg text-gray-900'>{title}</h3>
          <div>
            <Star className='text-yellow-400 fill-current w-4 h-4' />
            <span className='text-sm font-medium'>{rating}</span>
          </div>
        </div>
                {/* Description */}
        <p className='text-sm text-gray-600 mb-4 line-clamp-2'>{description}</p>
                {/* Amenities and Price */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-between text-gray-500 text-sm'>
            <div className='flex items-center gap-1'>
              <BedDouble className='w-4 h-4' />
              <span>2 Beds</span>
            </div>
            <div className='flex items-center gap-1'>
              <Bath className='w-4 h-4' />
              <span>2 Baths</span>
            </div>
            <div className='flex items-center gap-1'>
              <Users className='w-4 h-4' />
              <span>4 Guests</span>
            </div>
          </div>
          <div className='flex items-center gap-1'>
            <span className='text-xl font-bold text-gray-900'>${price}</span>
            <span className='text-gray-900 text-sm'>/ night</span>
          </div>
        </div>
        
      </div>
    </div>

  );
};

export default Card;
