import { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { supabase, User, createUser } from '../lib/supabase';

export const useSupabaseUser = () => {
  const { user: clerkUser } = useUser();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);

      if (!clerkUser) {
        console.error('No authenticated user found.');
        setLoading(false);
        return;
      }

      // Try to fetch the user from Supabase
      let { data: supabaseUser, error } = await supabase
        .from('users')
        .select('*')
        .eq('clerk_id', clerkUser.id)
        .single();

      if (error) {
        if (error.code === 'PGRST116' || error.code === 'PGRST114') {
          // User does not exist; create a new user
          const defaultSeason = ''; // Default value for season
          const newUser = await createUser(clerkUser.id, defaultSeason);
          if (newUser) {
            setUser(newUser);
          } else {
            console.error('Failed to create new user in Supabase.');
          }
        } else {
          console.error('Error fetching user:', error);
        }
      } else {
        setUser(supabaseUser);
      }

      setLoading(false);
    };

    fetchUser();
  }, [clerkUser]);

  return { user, loading };
};