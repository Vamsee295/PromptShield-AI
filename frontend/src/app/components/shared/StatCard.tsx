'use client';

import { ReactNode } from 'react';

interface StatCardProps {
    title: string;
    value: string | number;
    trend?: {
        value: string;
        isPositive: boolean;
    };
    subtitle?: string;
    icon?: ReactNode;
    iconBgColor?: string;
}

export default function StatCard({
    title,
    value,
    trend,
    subtitle,
    icon,
    iconBgColor = 'bg-blue-100 dark:bg-blue-900/30'
}: StatCardProps) {
    return (
        <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                        {title}
                    </p>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {value}
                    </h3>
                    {trend && (
                        <p className="mt-2 text-sm">
                            <span className={`font-semibold ${trend.isPositive ? 'text-success' : 'text-danger'}`}>
                                {trend.isPositive ? '↑' : '↓'} {trend.value}
                            </span>
                        </p>
                    )}
                    {subtitle && (
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                            {subtitle}
                        </p>
                    )}
                </div>

                {icon && (
                    <div className={`p-3 rounded-lg ${iconBgColor}`}>
                        {icon}
                    </div>
                )}
            </div>
        </div>
    );
}
