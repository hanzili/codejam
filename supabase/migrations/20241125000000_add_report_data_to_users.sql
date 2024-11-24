   -- Add report_data column to users table as nullable with no default
   ALTER TABLE users
   ADD COLUMN report_data JSONB;

   -- Update updated_at trigger if necessary (existing trigger may already handle this)