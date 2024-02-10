import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zjhuwfscxqwzmfbuitrt.supabase.co'
const supabaseAnnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqaHV3ZnNjeHF3em1mYnVpdHJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc1MjMzNTEsImV4cCI6MjAyMzA5OTM1MX0.Do09k0YEZBQiGlGTQOYNmn6IZ8UD47wjl4baWRa3jqA'

export const supabase = createClient(supabaseUrl, supabaseAnnonKey)
