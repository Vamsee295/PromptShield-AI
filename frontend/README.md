# PromptShield Frontend

This is the frontend application for **PromptShield** - a secure AI prompt gateway that scans user prompts for sensitive data (API keys, emails, secrets), masks them, and ensures only safe prompts are sent to AI tools.

## Features

✅ **Real-time Prompt Scanning** - Detects sensitive data in user prompts  
✅ **Intelligent Masking** - Automatically masks API keys, passwords, emails, and more  
✅ **Risk-Based Analysis** - Color-coded risk levels (HIGH, MEDIUM, LOW)  
✅ **Scan History** - Track recent scans with findings  
✅ **Copy Masked Output** - Copy sanitized prompts to clipboard  
✅ **Security-First** - No raw prompts or secrets stored  

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Custom React components

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
frontend/
├── src/
│   └── app/
│       ├── api/
│       │   └── scan/
│       │       └── route.ts          # Mock API endpoint
│       ├── components/
│       │   ├── ui/
│       │   │   ├── PromptInput.tsx
│       │   │   ├── SecurityAnalysis.tsx
│       │   │   ├── MaskedPreview.tsx
│       │   │   ├── RiskBadge.tsx
│       │   │   ├── DetectedFindingCard.tsx
│       │   │   ├── ScanHistoryTable.tsx
│       │   │   └── SendToAIButton.tsx
│       │   ├── PromptAnalyzer.tsx    # Main page component
│       │   └── types.ts               # TypeScript interfaces
│       ├── page.tsx                   # Entry point
│       ├── layout.tsx
│       └── globals.css
└── package.json
```

## Components Overview

### Main Components

- **PromptAnalyzer** - Main orchestrator component with state management
- **PromptInput** - Text input area with character counter
- **SecurityAnalysis** - Right panel showing scan results
- **ScanHistoryTable** - Recent scan history table

### UI Components

- **RiskBadge** - Color-coded risk level indicator
- **DetectedFindingCard** - Individual security finding display
- **MaskedPreview** - Code-style masked output preview
- **SendToAIButton** - Action button with tooltip

## API Integration

The app calls `/api/scan` endpoint:

**Request:**
```json
{
  "prompt": "user input here"
}
```

**Response:**
```json
{
  "hasSensitiveData": true,
  "detectedTypes": ["API_KEY", "EMAIL"],
  "riskLevels": {
    "API_KEY": "HIGH",
    "EMAIL": "MEDIUM"
  },
  "maskedPrompt": "My API key is [API_KEY_REDACTED]"
}
```

## Security Principles

❌ Never store raw prompts  
❌ Never log secrets  
✅ Mask before sending anywhere  
✅ User control over sending  

## Detection Patterns

The mock API currently detects:
- AWS Access Keys
- OpenAI API Keys
- Email Addresses
- IP Addresses
- Database Passwords
- GitHub Tokens
- Private Keys

## Next Steps

1. Connect to actual Spring Boot backend
2. Implement toast notifications
3. Add user authentication (if needed)
4. Deploy to production

## License

This project is part of the CloudSafe AI initiative.
