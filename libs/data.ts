export const LOCATIONS = ["London", "Dubai", "New York", "Paris", "Singapore", "Maldives", "Tokyo"];

export const PACKAGES = [
    {
        id: 1,
        title: "Luxury Palm Stay",
        from: "LHR",
        to: "DXB",
        price: "$1,200",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80",
        rating: 4.9,
        duration: "5 Days"
    },
    {
        id: 2,
        title: "Eiffel Romance Package",
        from: "DXB",
        to: "CDG",
        price: "$850",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80",
        rating: 4.8,
        duration: "3 Days"
    },
    {
        id: 3,
        title: "Bali Tropical Escape",
        from: "SIN",
        to: "DPS",
        price: "$950",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80",
        rating: 4.7,
        duration: "7 Days"
    },
    {
        id: 4,
        title: "New York Explorer",
        from: "LHR",
        to: "JFK",
        price: "$1,400",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80",
        rating: 4.9,
        duration: "4 Days"
    },
    {
        id: 5,
        title: "Kathmandu Valley Tour",
        from: "DXB",
        to: "KTM",
        price: "$750",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80",
        rating: 4.8,
        duration: "6 Days"
    },
    {
        id: 6,
        title: "Singapore City Highlights",
        from: "KTM",
        to: "SIN",
        price: "$890",
        image: "https://images.unsplash.com/photo-1525625299286-1ea014fa2dbb?auto=format&fit=crop&q=80",
        rating: 4.9,
        duration: "4 Days"
    }
];

export const FLIGHTS = [
    {
        id: 101,
        airline: "Emirates",
        fromCode: "LHR",
        toCode: "DXB",
        departureTime: "10:30 AM",
        arrivalTime: "08:15 PM",
        duration: "6h 45m",
        price: "$650",
        stops: "Non-stop"
    },
    {
        id: 102,
        airline: "British Airways",
        fromCode: "JFK",
        toCode: "LHR",
        departureTime: "06:00 PM",
        arrivalTime: "06:20 AM",
        duration: "7h 20m",
        price: "$480",
        stops: "Non-stop"
    },
    {
        id: 103,
        airline: "Singapore Airlines",
        fromCode: "SIN",
        toCode: "CDG",
        departureTime: "11:55 PM",
        arrivalTime: "07:30 AM",
        duration: "13h 35m",
        price: "$890",
        stops: "Non-stop"
    },
    {
        id: 104,
        airline: "Qatar Airways",
        fromCode: "DXB",
        toCode: "JFK",
        departureTime: "08:00 AM",
        arrivalTime: "02:15 PM",
        duration: "14h 15m",
        price: "$950",
        stops: "1 Stop"
    },
    {
        id: 105,
        airline: "Nepal Airlines",
        fromCode: "KTM",
        toCode: "DXB",
        departureTime: "11:30 AM",
        arrivalTime: "02:45 PM",
        duration: "4h 15m",
        price: "$320",
        stops: "Non-stop"
    },
    {
        id: 106,
        airline: "Air France",
        fromCode: "CDG",
        toCode: "JFK",
        departureTime: "04:00 PM",
        arrivalTime: "06:30 PM",
        duration: "8h 30m",
        price: "$510",
        stops: "Non-stop"
    }
];

export const AIRPORTS = [
    { id: "LHR", city: "London", name: "Heathrow Airport", country: "UK" },
    { id: "LGW", city: "London", name: "Gatwick Airport", country: "UK" },
    { id: "DXB", city: "Dubai", name: "Dubai International", country: "UAE" },
    { id: "JFK", city: "New York", name: "John F. Kennedy Intl", country: "USA" },
    { id: "CDG", city: "Paris", name: "Charles de Gaulle", country: "France" },
    { id: "SIN", city: "Singapore", name: "Changi Airport", country: "Singapore" },
    { id: "KTM", city: "Kathmandu", name: "Tribhuvan Intl", country: "Nepal" },
];