import { createClient } from '@supabase/supabase-js'
const anonkey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpodHJvZ3Z6ZnpvdGN6dnN1ZWJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxODcxMjUsImV4cCI6MjAzMDc2MzEyNX0.s_cKsGRmU-7BfxVjIQsA9Vy5_xTqnX6-gJYBbRBGd_k";


export const supabase = createClient('https://zhtrogvzfzotczvsuebr.supabase.co', anonkey)