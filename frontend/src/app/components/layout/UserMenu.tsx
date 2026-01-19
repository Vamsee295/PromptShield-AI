'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
    UserCircleIcon,
    Cog6ToothIcon,
    ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';

export default function UserMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = () => {
        // Mock logout - in production, clear auth token
        localStorage.removeItem('auth-token');
        window.location.href = '/login';
    };

    return (
        <div className="relative" ref={menuRef}>
            {/* User Avatar Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 bg-zinc-900 border border-gray-800 rounded-lg hover:bg-zinc-800 transition-colors"
            >
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">V</span>
                </div>
                <span className="text-sm font-bold text-white">Vamsee</span>
                <svg
                    className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-black border border-gray-800 rounded-lg shadow-xl overflow-hidden z-50">
                    {/* User Info */}
                    <div className="px-4 py-3 border-b border-gray-800">
                        <p className="text-sm font-black text-white">Vamsee</p>
                        <p className="text-xs font-bold text-gray-400">vamsee@promptshield.ai</p>
                        <span className="inline-block mt-1 px-2 py-0.5 bg-blue-600 text-white text-xs font-bold rounded">
                            Administrator
                        </span>
                    </div>

                    {/* Menu Items */}
                    <div className="py-1">
                        <Link
                            href="/profile"
                            className="flex items-center gap-3 px-4 py-2 text-sm font-bold text-white hover:bg-zinc-900"
                            onClick={() => setIsOpen(false)}
                        >
                            <UserCircleIcon className="w-5 h-5" />
                            Your Profile
                        </Link>
                        <Link
                            href="/settings"
                            className="flex items-center gap-3 px-4 py-2 text-sm font-bold text-white hover:bg-zinc-900"
                            onClick={() => setIsOpen(false)}
                        >
                            <Cog6ToothIcon className="w-5 h-5" />
                            Settings
                        </Link>
                    </div>

                    {/* Logout */}
                    <div className="border-t border-gray-800 py-1">
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 w-full px-4 py-2 text-sm font-bold text-red-400 hover:bg-zinc-900"
                        >
                            <ArrowRightOnRectangleIcon className="w-5 h-5" />
                            Sign out
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
