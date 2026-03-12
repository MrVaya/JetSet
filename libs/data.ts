import { Plane, Car, Users, Fuel } from "lucide-react";

export const FLIGHTS = [
    { id: 'f1', airline: 'Yeti Airlines', from: 'Pokhara ', to: 'Kathmandu', price: 1200, class: 'First Class' },
    { id: 'f2', airline: 'Nepal Airlines', from: 'Kathmandu', to: 'Dubai', price: 85000, class: 'Business' },
];

export const VEHICLES = [
    {
        id: 'v1',
        name: 'Range Rover Autobiography',
        type: 'SUV',
        price: 5000,
        passengers: 5,
        transmission: 'Automatic',
        image: '/images/suv-premium.jpg', // Place a placeholder in public
        category: 'SUV'
    },
    {
        id: 'v2',
        name: 'Mercedes-Benz Sprinter',
        type: 'Van',
        price: 1500,
        passengers: 12,
        transmission: 'Automatic',
        image: '/images/van-luxury.jpg',
        category: 'Van'
    },
    // Add more Premium Cars, SUVs, and Vans here
];