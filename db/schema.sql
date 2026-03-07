-- Ceylon Wanderlust - Database Schema
-- PostgreSQL schema for future payment integration
-- Run: psql -U your_user -d tourism_db -f schema.sql

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- TOURS
-- ============================================
CREATE TABLE tours (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(255) UNIQUE NOT NULL,
    title VARCHAR(500) NOT NULL,
    short_description TEXT,
    description TEXT,
    duration VARCHAR(100),
    price_lkr DECIMAL(10, 2) NOT NULL,
    max_people INTEGER DEFAULT 10,
    location VARCHAR(255),
    category VARCHAR(50) CHECK (category IN ('cultural', 'wildlife', 'beach', 'adventure', 'heritage')),
    highlights TEXT[],
    includes TEXT[],
    image_url VARCHAR(500),
    gallery_urls TEXT[],
    featured BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- TOUR BOOKINGS
-- ============================================
CREATE TABLE tour_bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tour_id UUID REFERENCES tours(id) ON DELETE SET NULL,
    tour_title VARCHAR(500) NOT NULL,
    customer_name VARCHAR(255) NOT NULL,
    customer_email VARCHAR(255) NOT NULL,
    customer_phone VARCHAR(50) NOT NULL,
    number_of_people INTEGER NOT NULL DEFAULT 1,
    preferred_date DATE NOT NULL,
    special_requests TEXT,
    status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
    total_price_lkr DECIMAL(10, 2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- TAXI BOOKINGS
-- ============================================
CREATE TABLE taxi_bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_name VARCHAR(255) NOT NULL,
    customer_phone VARCHAR(50) NOT NULL,
    customer_email VARCHAR(255) NOT NULL,
    pickup_location VARCHAR(500) NOT NULL,
    dropoff_location VARCHAR(500) NOT NULL,
    pickup_date DATE NOT NULL,
    pickup_time TIME NOT NULL,
    vehicle_type VARCHAR(50) NOT NULL CHECK (vehicle_type IN ('sedan', 'suv', 'van', 'luxury')),
    special_requests TEXT,
    status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'assigned', 'in_progress', 'completed', 'cancelled')),
    estimated_price_lkr DECIMAL(10, 2),
    final_price_lkr DECIMAL(10, 2),
    driver_name VARCHAR(255),
    driver_phone VARCHAR(50),
    vehicle_number VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- CONTACT MESSAGES
-- ============================================
CREATE TABLE contact_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(500) NOT NULL,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    replied_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- PAYMENTS (Future Integration)
-- ============================================
CREATE TABLE payments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    booking_type VARCHAR(50) NOT NULL CHECK (booking_type IN ('tour', 'taxi')),
    booking_id UUID NOT NULL,
    amount_lkr DECIMAL(10, 2) NOT NULL,
    currency VARCHAR(10) DEFAULT 'LKR',
    payment_method VARCHAR(50), -- 'card', 'bank_transfer', 'payhere', etc.
    payment_gateway VARCHAR(50), -- 'payhere', 'stripe', etc.
    gateway_transaction_id VARCHAR(255),
    status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'failed', 'refunded')),
    paid_at TIMESTAMP WITH TIME ZONE,
    metadata JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- CUSTOMERS (Future)
-- ============================================
CREATE TABLE customers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(50),
    country VARCHAR(100),
    total_bookings INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- INDEXES
-- ============================================
CREATE INDEX idx_tours_slug ON tours(slug);
CREATE INDEX idx_tours_category ON tours(category);
CREATE INDEX idx_tours_featured ON tours(featured) WHERE featured = TRUE;

CREATE INDEX idx_tour_bookings_status ON tour_bookings(status);
CREATE INDEX idx_tour_bookings_date ON tour_bookings(preferred_date);
CREATE INDEX idx_tour_bookings_email ON tour_bookings(customer_email);

CREATE INDEX idx_taxi_bookings_status ON taxi_bookings(status);
CREATE INDEX idx_taxi_bookings_date ON taxi_bookings(pickup_date);

CREATE INDEX idx_payments_booking ON payments(booking_type, booking_id);
CREATE INDEX idx_payments_status ON payments(status);

CREATE INDEX idx_customers_email ON customers(email);

-- ============================================
-- UPDATED_AT TRIGGER
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_tours_updated_at BEFORE UPDATE ON tours
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_tour_bookings_updated_at BEFORE UPDATE ON tour_bookings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_taxi_bookings_updated_at BEFORE UPDATE ON taxi_bookings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_payments_updated_at BEFORE UPDATE ON payments
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_customers_updated_at BEFORE UPDATE ON customers
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
