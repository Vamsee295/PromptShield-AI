'use client';

import { ThemeProvider } from 'next-themes';
import Sidebar from './Sidebar';
import TopNav from './TopNav';

/**
 * Dashboard layout wrapper
 * Includes sidebar and top navigation
 */
export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider attribute="data-theme" defaultTheme="light">
            <div className="flex h-screen bg-background">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Top Navigation */}
                    <TopNav />

                    {/* Page Content */}
                    <main className="flex-1 overflow-y-auto p-6">
                        {children}
                    </main>
                </div>
            </div>
        </ThemeProvider>
    );
}
