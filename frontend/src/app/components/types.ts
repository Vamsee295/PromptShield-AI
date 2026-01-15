/**
 * TypeScript interfaces for PromptShield API contracts and component props
 */

// API Request/Response Types
export interface ScanRequest {
  prompt: string;
}

export interface ScanResponse {
  hasSensitiveData: boolean;
  detectedTypes: string[];
  riskLevels: Record<string, RiskLevel>;
  maskedPrompt: string;
}

// Risk Level Enum
export type RiskLevel = 'HIGH' | 'MEDIUM' | 'LOW';

// Detected Finding Type
export interface DetectedFinding {
  type: string;
  description: string;
  riskLevel: RiskLevel;
}

// Scan History Entry Type
export interface ScanHistoryEntry {
  id: string;
  timestamp: string;
  promptSnippet: string;
  findings: string[];
  riskLevel: RiskLevel | 'SAFE';
}

// Component Props Types
export interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  onScan: () => void;
  isLoading: boolean;
  disabled?: boolean;
}

export interface SecurityAnalysisProps {
  scanResult: ScanResponse | null;
  isLoading: boolean;
}

export interface MaskedPreviewProps {
  maskedPrompt: string;
  onCopy: () => void;
}

export interface RiskBadgeProps {
  level: RiskLevel | 'SAFE';
}

export interface DetectedFindingCardProps {
  finding: DetectedFinding;
}

export interface ScanHistoryTableProps {
  history: ScanHistoryEntry[];
}
