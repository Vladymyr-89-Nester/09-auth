import { Metadata } from 'next';
import ProfilePage from './ProfilePage';

export const metadata: Metadata = {
  title: 'Profile | NoteHub',
  description:
    'User profile page where you can view and edit your personal information.',
  openGraph: {
    title:
      'User profile page where you can view and edit your personal information.',
    description:
      'User profile page where you can view and edit your personal information.',
    url: 'https://08-zustand-five-liart.vercel.app/notes/action/create',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'NoteHub',
      },
    ],
  },
};

export default function UserProfilePage() {
  return <ProfilePage />;
}
