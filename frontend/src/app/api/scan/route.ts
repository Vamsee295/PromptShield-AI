import { NextRequest, NextResponse } from 'next/server';

/**
 * Mock API endpoint for scanning prompts
 * This simulates the backend Spring Boot /api/scan endpoint
 * 
 * In production, this should be replaced with actual backend API calls
 */

// Regex patterns for detecting sensitive data
const PATTERNS = {
    AWS_ACCESS_KEY: /AKIA[0-9A-Z]{16}/g,
    API_KEY: /sk-[a-zA-Z0-9]{48}/g,
    EMAIL: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g,
    IP_ADDRESS: /\b(?:\d{1,3}\.){3}\d{1,3}\b/g,
    DB_PASSWORD: /password\s*[=:]\s*['"]?([^'";\s]+)/gi,
    GITHUB_TOKEN: /ghp_[a-zA-Z0-9]{36}/g,
    PRIVATE_KEY: /-----BEGIN\s+(RSA\s+)?PRIVATE\s+KEY-----/g,
};

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { prompt } = body;

        if (!prompt || typeof prompt !== 'string') {
            return NextResponse.json(
                { error: 'Invalid prompt' },
                { status: 400 }
            );
        }

        // Simulate processing delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        // Detect sensitive data
        const detectedTypes: string[] = [];
        const riskLevels: Record<string, 'HIGH' | 'MEDIUM' | 'LOW'> = {};
        let maskedPrompt = prompt;

        // Check for AWS Access Keys
        if (PATTERNS.AWS_ACCESS_KEY.test(prompt)) {
            detectedTypes.push('AWS_ACCESS_KEY');
            riskLevels['AWS_ACCESS_KEY'] = 'HIGH';
            maskedPrompt = maskedPrompt.replace(PATTERNS.AWS_ACCESS_KEY, '[AWS_ACCESS_KEY_REDACTED]');
        }

        // Check for API Keys
        if (PATTERNS.API_KEY.test(prompt)) {
            detectedTypes.push('API_KEY');
            riskLevels['API_KEY'] = 'HIGH';
            maskedPrompt = maskedPrompt.replace(PATTERNS.API_KEY, '[API_KEY_REDACTED]');
        }

        // Check for Emails
        if (PATTERNS.EMAIL.test(prompt)) {
            detectedTypes.push('EMAIL');
            riskLevels['EMAIL'] = 'MEDIUM';
            maskedPrompt = maskedPrompt.replace(PATTERNS.EMAIL, '[EMAIL_REDACTED]');
        }

        // Check for IP Addresses
        if (PATTERNS.IP_ADDRESS.test(prompt)) {
            detectedTypes.push('IP_ADDRESS');
            riskLevels['IP_ADDRESS'] = 'LOW';
            maskedPrompt = maskedPrompt.replace(PATTERNS.IP_ADDRESS, '[IP_ADDRESS_REDACTED]');
        }

        // Check for Database Passwords
        if (PATTERNS.DB_PASSWORD.test(prompt)) {
            detectedTypes.push('DB_PASSWORD');
            riskLevels['DB_PASSWORD'] = 'HIGH';
            maskedPrompt = maskedPrompt.replace(PATTERNS.DB_PASSWORD, 'password=[DB_PASSWORD_REDACTED]');
        }

        // Check for GitHub Tokens
        if (PATTERNS.GITHUB_TOKEN.test(prompt)) {
            detectedTypes.push('GITHUB_TOKEN');
            riskLevels['GITHUB_TOKEN'] = 'HIGH';
            maskedPrompt = maskedPrompt.replace(PATTERNS.GITHUB_TOKEN, '[GITHUB_TOKEN_REDACTED]');
        }

        // Check for Private Keys
        if (PATTERNS.PRIVATE_KEY.test(prompt)) {
            detectedTypes.push('PRIVATE_KEY');
            riskLevels['PRIVATE_KEY'] = 'HIGH';
            maskedPrompt = maskedPrompt.replace(PATTERNS.PRIVATE_KEY, '[PRIVATE_KEY_REDACTED]');
        }

        const response = {
            hasSensitiveData: detectedTypes.length > 0,
            detectedTypes,
            riskLevels,
            maskedPrompt,
        };

        return NextResponse.json(response);
    } catch (error) {
        console.error('Scan API error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
