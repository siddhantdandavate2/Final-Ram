import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper function to check if Supabase is connected
export const checkSupabaseConnection = async () => {
  try {
    const { data, error } = await supabase.from('_supabase_migrations').select('*').limit(1)
    if (error && error.code !== 'PGRST116' && error.code !== '42P01') { // PGRST116 and 42P01 are "table not found" which is expected
      return { connected: false, error: error.message }
    }
    return { connected: true, error: null }
  } catch (error) {
    // Check if this is a 404 error indicating the migrations table doesn't exist
    if (error?.status === 404 && 
        (error?.message?.includes('42P01') || 
         error?.message?.includes('relation "public._supabase_migrations" does not exist'))) {
      return { connected: true, error: null }
    }
    
    return { connected: false, error: error.message }
  }
}

// Helper function for error handling
export const handleSupabaseError = (error) => {
  console.error('Supabase error:', error)
  
  if (error?.code === 'PGRST116' || error?.code === '42P01') {
    return 'Table not found. Please check your database schema.'
  }
  
  if (error?.code === 'PGRST301') {
    return 'Permission denied. Please check your Row Level Security policies.'
  }
  
  if (error?.message?.includes('JWT')) {
    return 'Authentication error. Please check your API keys.'
  }
  
  return error?.message || 'An unexpected error occurred'
}