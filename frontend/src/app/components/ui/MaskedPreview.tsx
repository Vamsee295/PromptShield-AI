'use client';

import { useState } from 'react';
import { MaskedPreviewProps } from '../types';

/**
 * Masked preview component
 * Displays masked output in code-style block with copy functionality
 */
export default function MaskedPreview({ maskedPrompt, onCopy }: MaskedPreviewProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        onCopy();
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-black text-white uppercase tracking-wide">
                    Masked Preview
                </h4>
                <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 px-3 py-1 text-sm text-blue-400 hover:bg-zinc-900 rounded-md transition-colors font-bold"
                >
                    {copied ? (
                        <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Copied!
                        </>
                    ) : (
                        <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            Copy
                        </>
                    )}
                </button>
            </div>

            {/* Code-style masked preview */}
            <div className="relative bg-black border border-gray-800 rounded-lg overflow-hidden">
                <div className="p-4 font-mono text-sm text-white overflow-x-auto">
                    <pre className="whitespace-pre-wrap break-words">
                        <code className="text-blue-400 font-bold">// Sanitized Output</code>
                        {'\n'}
                        <code className="font-bold">{maskedPrompt}</code>
                    </pre>
                </div>
            </div>
        </div>
    );
}
