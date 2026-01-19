'use client';

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
        <div className="flex h-screen bg-black">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Navigation */}
                <TopNav />

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-6 bg-black">
                    {children}
                </main>
            </div>
        </div>
    );
}
