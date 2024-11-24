import { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { User, getUserByClerkId, createUser } from '../lib/supabase';

export function useSupabaseUser() {
  const { user: clerkUser, isLoaded: clerkLoaded } = useUser();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      if (!clerkUser) {
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        let dbUser = await getUserByClerkId(clerkUser.id);
        
        // If user doesn't exist in Supabase but exists in Clerk, create them
        if (!dbUser) {
          // You might want to get this from your Clerk user metadata or another source
          const defaultSeason = '';
          dbUser = await createUser(clerkUser.id, defaultSeason);
        }

        setUser(dbUser);
      } catch (error) {
        console.error('Error loading user:', error);
      } finally {
        setLoading(false);
      }
    }

    if (clerkLoaded) {
      loadUser();
    }
  }, [clerkUser, clerkLoaded]);

  return { user, loading };
}