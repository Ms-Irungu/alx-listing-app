import React from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';
import Button from '@/components/common/Button';
// import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className='bg-white border-b border-grey-50 shadow-sm'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    {/* Logo */}
                    <div>
                        <Image
                            src="public/assets/Logo Showcase.png"
                            alt="Logo"
                            className="w-full h-8"
                        />
                    </div>

                    {/* Search Bar */}
                    <div className='flex-1 mx-8 max-w-3xl'>
                        <div className='flex items-center border border-gray-50 rounded-full shadow-sm hover:shadow-md transition-shadow'>
                            {/* Location */}
                            <div className='flex-1 px-6 py-3 border-r border-gray-50'>
                                <div className='text-xs font-semibold text-gray-800'>Location</div>
                                <input
                                    type="text"
                                    placeholder="Search for destination"
                                    className="w-full text-sm text-gray-900 placeholder-gray-500 border-none outline-none bg-transparent"
                                />
                            </div>

                            {/* Check In */}
                            <div className='flex-1 px-6 py-3 border-r border-gray-200'>
                                <div className='text-xs font-semibold text-gray-800'>Check In</div>
                                <input
                                    type="date"
                                    placeholder="Add date"
                                    className="w-full text-sm text-gray-900 placeholder-gray-500 border-none outline-none bg-transparent"
                                />
                            </div>

                            {/* Check Out */}
                            <div className='flex-1 px-6 py-3 border-r border-gray-200'>
                                <div className='text-xs font-semibold text-gray-800'>Check Out</div>
                                <input
                                    type="date"
                                    placeholder="Add date"
                                    className="w-full text-sm text-gray-900 placeholder-gray-500 border-none outline-none bg-transparent"
                                />
                            </div>
                            {/* People */}
                            <div className='flex-1 px-6 py-3'>
                                <div className='text-xs font-semibold text-gray-800'>People</div>
                                <input
                                    type="number"
                                    placeholder="Add guests"
                                    min="1"
                                    className="w-full text-sm text-gray-900 placeholder-gray-500 border-none outline-none bg-transparent"
                                />
                            </div>

                            {/* Search Button */}
                            <div className='px-2'>
                                <button
                                    className='bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-colors'
                                    aria-label="Search properties"
                                    title="Search properties"
                                >
                                    <Search className='w-4 h-4' />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Login in/ Sign Up  */}
                    <div className='flex items-center gap-4'>
                        <Button 
                        variant='primary' 
                        size='sm' 
                        onClick={() => window.location.href = '/login'}
                        >
                            Login
                        </Button>
                        <Button 
                        variant='outline' 
                        size='sm' 
                        onClick= {() => window.location.href = '/signup'}
                        >
                            Sign Up
                        </Button>
                    </div>

                </div>
            </div>
        </header>
    );

};

export default Header;