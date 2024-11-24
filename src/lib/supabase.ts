import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

// Types for our database tables
export interface User {
  id: string;
  clerk_id: string;
  season: string;
  created_at: string;
  updated_at: string;
}

export interface Outfit {
  id: string;
  user_id: string;
  occasion: string;
  style: string;
  season: string;
  created_at: string;
}

// Database operations
export async function createUser(clerkId: string, season: string): Promise<User | null> {
  try {
    const { data, error } = await supabase
      .from('users')
      .insert([
        { clerk_id: clerkId, season }
      ])
      .select()
      .single();

    if (error) {
      console.error('Error creating user:', error);
      return null;
    }

    return data;
  } catch (e) {
    console.error('Exception creating user:', e);
    return null;
  }
}

export async function updateUserSeason(userId: string, season: string) {
  const { error } = await supabase
    .from('users')
    .update({ season })
    .eq('id', userId);

  if (error) {
    throw error;
  }
}

export async function getUserByClerkId(clerkId: string): Promise<User | null> {
  const { data, error } = await supabase
    .from('users')
    .select()
    .eq('clerk_id', clerkId)
    .single();

  if (error) {
    if (error.code !== 'PGRST116') {
      console.error('Error fetching user:', error);
    }
    return null;
  }

  return data;
}

export async function saveOutfit(userId: string, outfitData: Omit<Outfit, 'id' | 'created_at'>): Promise<Outfit | null> {
  const { data, error } = await supabase
    .from('outfits')
    .insert([
      { user_id: userId, ...outfitData }
    ])
    .select()
    .single();

  if (error) {
    console.error('Error saving outfit:', error);
    return null;
  }

  return data;
}

export async function getUserOutfits(userId: string): Promise<Outfit[]> {
  const { data, error } = await supabase
    .from('outfits')
    .select()
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching outfits:', error);
    return [];
  }

  return data || [];
}