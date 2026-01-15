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
                className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-dark-border rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors"
            >
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">V</span>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Vamsee</span>
                <svg
                    className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg shadow-lg overflow-hidden z-50">
                    {/* User Info */}
                    <div className="px-4 py-3 border-b border-gray-200 dark:border-dark-border">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">Vamsee</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">vamsee@promptshield.ai</p>
                        <span className="inline-block mt-1 px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium rounded">
                            Administrator
                        </span>
                    </div>

                    {/* Menu Items */}
                    <div className="py-1">
                        <Link
                            href="/profile"
                            className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
                            onClick={() => setIsOpen(false)}
                        >
                            <UserCircleIcon className="w-5 h-5" />
                            Your Profile
                        </Link>
                        <Link
                            href="/settings"
                            className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
                            onClick={() => setIsOpen(false)}
                        >
                            <Cog6ToothIcon className="w-5 h-5" />
                            Settings
                        </Link>
                    </div>

                    {/* Logout */}
                    <div className="border-t border-gray-200 dark:border-dark-border py-1">
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 w-full px-4 py-2 text-sm text-danger hover:bg-gray-100 dark:hover:bg-slate-700"
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
