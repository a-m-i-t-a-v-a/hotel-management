
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://vsklzpdldrtvqybhjwme.supabase.co'
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZza2x6cGRsZHJ0dnF5Ymhqd21lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2MjA3MTUsImV4cCI6MjAzNDE5NjcxNX0.CnaBOKKUquFNrvbbRrkEmFSZYjk523HBJcbBx02CLEA`
const supabase = createClient(supabaseUrl, supabaseKey)
//console.log(supabase)
export default supabase