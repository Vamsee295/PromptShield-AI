'use client';

import { PromptInputProps } from '../types';

/**
 * Prompt input component with character counter
 * Main text area for user to enter prompts
 */
export default function PromptInput({ value, onChange, onScan, isLoading, disabled }: PromptInputProps) {
    const maxChars = 10000;
    const charCount = value.length;

    return (
        <div className="space-y-3">
            {/* Label and hint */}
            <div>
                <label htmlFor="prompt-input" className="block text-sm font-black text-white mb-1">
                    Input Prompt
                </label>
                <p className="text-xs text-gray-400 font-bold">
                    Sensitive data is automatically detected and masked
                </p>
            </div>

            {/* Textarea */}
            <div className="relative">
                <textarea
                    id="prompt-input"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    disabled={disabled || isLoading}
                    placeholder="Describe your issue. Avoid pasting secrets — PromptShield will automatically detect and mask them."
                    className="w-full h-80 p-4 text-white bg-black border border-gray-800 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-900 disabled:text-gray-500 font-bold placeholder-gray-600"
                    maxLength={maxChars}
                />

                {/* Character counter */}
                <div className="absolute bottom-3 right-3 text-xs text-gray-500 font-bold">
                    {charCount} chars
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
                <button
                    onClick={onScan}
                    disabled={isLoading || !value.trim() || disabled}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed transition-colors"
                >
                    {isLoading ? (
                        <>
                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Scanning...
                        </>
                    ) : (
                        <>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            Scan Prompt
                        </>
                    )}
                </button>

                <div className="flex items-center gap-2 text-sm text-gray-400 font-bold">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Sensitive data is automatically detected and masked
                </div>
            </div>
        </div>
    );
}
