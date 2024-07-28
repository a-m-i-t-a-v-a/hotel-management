import { createClient } from '@supabase/supabase-js'

export const supabaseUrl ='https://fhcoqqexmwomlleaiesw.supabase.co'
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoY29xcWV4bXdvbWxsZWFpZXN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE4MDkwODcsImV4cCI6MjAzNzM4NTA4N30.qDSip9ZiZLhMQocVKdnVCgTEG08Do1MOjLEMFxkxmY0'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase