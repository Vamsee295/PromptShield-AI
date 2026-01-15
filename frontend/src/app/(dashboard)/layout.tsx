import DashboardLayout from '../components/layout/DashboardLayout';

/**
 * Dashboard route group layout
 * Wraps all dashboard pages with sidebar and top navigation
 */
export default function Layout({ children }: { children: React.ReactNode }) {
    return <DashboardLayout>{children}</DashboardLayout>;
}
