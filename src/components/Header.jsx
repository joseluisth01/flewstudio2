import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import imagotipo1 from "../assets/IMAGOTIPONEGRO_1.png"

export default function Header()
{
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='flex items-center justify-center h-36 bg-primary'>
            <div className='flex justify-between w-3/4 items-center max-w-7xl px-4'>
                {/* Logo */}
                <img 
                    onClick={() => {navigate('/')}}
                    src={imagotipo1}
                    alt="IMAGOTIPO FLEWSTUDIO NEGRO"
                    className="cursor-pointer h-auto max-h-16 sm:max-h-20"
                />
                
                {/* Desktop Navigation */}
                <nav className="hidden lg:flex space-x-4 xl:space-x-6">
                    <Link 
                        to={'/nosotros'}
                        className="font-bold text-[17px] no-underline text-black"
                        style={{ fontFamily: 'Clash Display' }}
                    >
                        NOSOTROS
                    </Link>
                    <Link 
                        to={'/design'}
                        className="font-bold text-[17px] no-underline text-black"
                        style={{ fontFamily: 'Clash Display' }}
                    >
                        DISEÑO
                    </Link>
                    <Link 
                        to={'/fabricacion-textil'}
                        className="font-bold text-[17px] no-underline text-black"
                        style={{ fontFamily: 'Clash Display' }}
                    >
                        FABRICACIÓN TEXTIL
                    </Link>
                    <Link 
                        to={'/opiniones'}
                        className="font-bold text-[17px] no-underline text-black"
                        style={{ fontFamily: 'Clash Display' }}
                    >
                        OPINIONES
                    </Link>
                    <Link 
                        to={'/contacto'}
                        className="font-bold text-[17px] no-underline text-black"
                        style={{ fontFamily: 'Clash Display' }}
                    >
                        CONTACTO
                    </Link>
                    <Link 
                        to={'/blog'}
                        className="font-bold text-[17px] no-underline text-black"
                        style={{ fontFamily: 'Clash Display' }}
                    >
                        BLOG
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button 
                    className="lg:hidden p-2 text-black hover:text-gray-700 transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-36 left-0 w-full bg-primary border-t border-black z-50">
                    <nav className="flex flex-col space-y-4 p-6">
                        <Link 
                            to={'/nosotros'}
                            className="font-bold text-[17px] no-underline text-black"
                            style={{ fontFamily: 'Clash Display' }}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            NOSOTROS
                        </Link>
                        <Link 
                            to={'/design'}
                            className="font-bold text-[17px] no-underline text-black"
                            style={{ fontFamily: 'Clash Display' }}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            DISEÑO
                        </Link>
                        <Link 
                            to={'/fabricacion-textil'}
                            className="font-bold text-[17px] no-underline text-black"
                            style={{ fontFamily: 'Clash Display' }}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            FABRICACIÓN TEXTIL
                        </Link>
                        <Link 
                            to={'/opiniones'}
                            className="font-bold text-[17px] no-underline text-black"
                            style={{ fontFamily: 'Clash Display' }}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            OPINIONES
                        </Link>
                        <Link 
                            to={'/contacto'}
                            className="font-bold text-[17px] no-underline text-black"
                            style={{ fontFamily: 'Clash Display' }}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            CONTACTO
                        </Link>
                        <Link 
                            to={'/blog'}
                            className="font-bold text-[17px] no-underline text-black"
                            style={{ fontFamily: 'Clash Display' }}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            BLOG
                        </Link>
                    </nav>
                </div>
            )}
        </div>
    )
}