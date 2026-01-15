'use client';

export default function SettingsPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Settings</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
                Configure organization details, masking preferences, and retention policies
            </p>

            <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl p-8 text-center">
                <div className="text-6xl mb-4">⚙️</div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Settings Coming Soon</h2>
                <p className="text-gray-600 dark:text-gray-400">
                    Organization settings interface is under development
                </p>
            </div>
        </div>
    );
}
