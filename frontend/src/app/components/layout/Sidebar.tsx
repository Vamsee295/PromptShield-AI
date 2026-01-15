'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    HomeIcon,
    DocumentMagnifyingGlassIcon,
    ClipboardDocumentListIcon,
    ShieldCheckIcon,
    BellAlertIcon,
    CodeBracketIcon,
    BookOpenIcon,
    Cog6ToothIcon,
    UsersIcon,
} from '@heroicons/react/24/outline';

interface NavItem {
    name: string;
    href: string;
    icon: any;
    category?: string;
}

const navigation: NavItem[] = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    { name: 'Prompt Scan', href: '/scan', icon: DocumentMagnifyingGlassIcon },
    { name: 'Scan Logs', href: '/logs', icon: ClipboardDocumentListIcon },
    { name: 'Policy Rules', href: '/policies', icon: ShieldCheckIcon },
    { name: 'Alerts', href: '/alerts', icon: BellAlertIcon, category: 'SECURITY' },
    { name: 'Regex Manager', href: '/regex-manager', icon: CodeBracketIcon, category: 'CONFIGURATION' },
    { name: 'Rules Library', href: '/rules-library', icon: BookOpenIcon, category: 'CONFIGURATION' },
    { name: 'Integrations', href: '/integrations', icon: Cog6ToothIcon, category: 'ADMIN' },
    { name: 'Team Access', href: '/team', icon: UsersIcon, category: 'ADMIN' },
    { name: 'Settings', href: '/settings', icon: Cog6ToothIcon, category: 'ADMIN' },
];

export default function Sidebar() {
    const pathname = usePathname();

    const isActive = (href: string) => {
        return pathname === href || pathname?.startsWith(href + '/');
    };

    return (
        <div className="w-64 bg-white dark:bg-dark-card border-r border-gray-200 dark:border-dark-border h-screen flex flex-col">
            {/* Logo */}
            <div className="p-6 border-b border-gray-200 dark:border-dark-border">
                <Link href="/dashboard" className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <span className="text-xl font-bold text-gray-900 dark:text-white">PromptShield</span>
                </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 overflow-y-auto">
                {/* Main Menu */}
                <div className="space-y-1">
                    {navigation.filter(item => !item.category).map((item) => {
                        const Icon = item.icon;
                        const active = isActive(item.href);
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`
                  flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors
                  ${active
                                        ? 'bg-primary text-white'
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                                    }
                `}
                            >
                                <Icon className="w-5 h-5" />
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Security Section */}
                <div className="mt-6">
                    <div className="px-3 mb-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Security
                    </div>
                    {navigation.filter(item => item.category === 'SECURITY').map((item) => {
                        const Icon = item.icon;
                        const active = isActive(item.href);
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`
                  flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors
                  ${active
                                        ? 'bg-primary text-white'
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                                    }
                `}
                            >
                                <Icon className="w-5 h-5" />
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Configuration Section */}
                <div className="mt-6">
                    <div className="px-3 mb-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Configuration
                    </div>
                    {navigation.filter(item => item.category === 'CONFIGURATION').map((item) => {
                        const Icon = item.icon;
                        const active = isActive(item.href);
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`
                  flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors
                  ${active
                                        ? 'bg-primary text-white'
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                                    }
                `}
                            >
                                <Icon className="w-5 h-5" />
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Administration Section */}
                <div className="mt-6">
                    <div className="px-3 mb-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Administration
                    </div>
                    {navigation.filter(item => item.category === 'ADMIN').map((item) => {
                        const Icon = item.icon;
                        const active = isActive(item.href);
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`
                  flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors
                  ${active
                                        ? 'bg-primary text-white'
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                                    }
                `}
                            >
                                <Icon className="w-5 h-5" />
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* System Health Indicator (from Figma) */}
            <div className="p-4 border-t border-gray-200 dark:border-dark-border">
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase">
                            Scanners: Online
                        </span>
                    </div>
                    <p className="text-xs text-green-600 dark:text-green-500">
                        99.9% Uptime • 142ms avg
                    </p>
                </div>
            </div>
        </div>
    );
}
