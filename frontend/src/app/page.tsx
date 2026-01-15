import { redirect } from 'next/navigation';

/**
 * PromptShield - Secure AI Prompt Gateway
 * Main page redirects to login
 */
export default function Home() {
  redirect('/login');
}
