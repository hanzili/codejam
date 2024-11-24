-- Create users table
CREATE TABLE users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    clerk_id TEXT UNIQUE NOT NULL,
    season TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create outfits table
CREATE TABLE outfits (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES users(id) NOT NULL,
    occasion TEXT NOT NULL,
    style TEXT NOT NULL,
    season TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add indexes
CREATE INDEX users_clerk_id_idx ON users(clerk_id);
CREATE INDEX outfits_user_id_idx ON outfits(user_id);

-- Add updated_at trigger for users table
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Add RLS policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE outfits ENABLE ROW LEVEL SECURITY;

-- Users policies
CREATE POLICY "Users can view their own data"
    ON users FOR SELECT
    USING (auth.uid()::text = clerk_id);

CREATE POLICY "Users can update their own data"
    ON users FOR UPDATE
    USING (auth.uid()::text = clerk_id);

-- Outfits policies
CREATE POLICY "Users can view their own outfits"
    ON outfits FOR SELECT
    USING (user_id IN (
        SELECT id FROM users WHERE clerk_id = auth.uid()::text
    ));

CREATE POLICY "Users can insert their own outfits"
    ON outfits FOR INSERT
    WITH CHECK (user_id IN (
        SELECT id FROM users WHERE clerk_id = auth.uid()::text
    ));