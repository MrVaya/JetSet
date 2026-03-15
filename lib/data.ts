export interface Package {
    id: number;
    title: string;
    from: string;
    to: string;
    price: string;
    image: string;
    rating: number;
    duration: string;
}

export interface Flight {
    id: number;
    airline: string;
    logo: string;
    aircraft: string;
    fromCode: string;
    toCode: string;
    departureTime: string;
    arrivalTime: string;
    duration: string;
    price: string;
    stops: string;
}

export interface Airport {
    id: string;
    city: string;
    name: string;
    country: string;
}

export interface Vehicle {
    id: number;
    name: string;
    type: string;
    capacity: string;
    price: string;
    image: string;
    location: string;
    features: string[];
}

export const SITE_CONFIG = {
    name: "JetSet Holidays",
    phone: "+977 9841743706",
    waPhone: "9779841743706",
    email: "jetsetholidays36@gmail.com",
    address: "Kathmandu, Nepal",
    social: {
        facebook: "https://www.facebook.com/Jetsetholiday/",
        instagram: "https://www.instagram.com/jetsetholidays36",
    }
};

export const LOCATIONS = ["Kathmandu", "Pokhara", "Lumbini", "Chitwan", "Lukla", "Rara Lake", "Biratnagar", "Bhairahawa", "Nepalgunj", "Dhangadhi", "Janakpur", "Bhadrapur", "Dubai", "New Delhi", "Doha", "Singapore", "London"];

export const PACKAGES = [
    {
        id: 1,
        title: "Luxury Palm Stay (Dubai)",
        from: "LHR",
        to: "DXB",
        price: "$1,200",
        image: "/dubai.jpg",
        rating: 4.9,
        duration: "5 Days"
    },
    {
        id: 2,
        title: "Eiffel Romance Package",
        from: "DXB",
        to: "CDG",
        price: "$850",
        image: "/paris.jpg",
        rating: 4.8,
        duration: "3 Days"
    },
    {
        id: 3,
        title: "Bali Tropical Escape",
        from: "SIN",
        to: "DPS",
        price: "$950",
        image: "/bali.jpg",
        rating: 4.7,
        duration: "7 Days"
    },

    {
        id: 4,
        title: "Kathmandu Valley Tour",
        from: "KTM",
        to: "KTM",
        price: "$350",
        image: "/kathmandu.webp",
        rating: 4.8,
        duration: "6 Days"
    },



    {
        id: 5,
        title: "Chitwan Wildlife Luxury",
        from: "KTM",
        to: "BHR",
        price: "$550",
        image: "/chitwan.jpg",
        rating: 4.7,
        duration: "3 Days"
    },
    {
        id: 6,
        title: "Pokhara Lakeside Serenity",
        from: "KTM",
        to: "PKR",
        price: "$290",
        image: "/pokhara.jpg",
        rating: 4.8,
        duration: "2 Days"
    },
    {
        id: 7,
        title: "Muktinath Pilgrimage Tour",
        from: "KTM",
        to: "PKR",
        price: "$450",
        image: "/muktinath.png",
        rating: 4.9,
        duration: "5 Days"
    },
    {
        id: 12,
        title: "Rara Lake Discovery",
        from: "KTM",
        to: "TAL",
        price: "$650",
        image: "/Rara-Lake.jpg",
        rating: 4.8,
        duration: "7 Days"
    },
    {
        id: 13,
        title: "Lumbini Peace Journey",
        from: "KTM",
        to: "BWA",
        price: "$420",
        image: "/lumbini.jpg",
        rating: 4.7,
        duration: "3 Days"
    },
    {
        id: 14,
        title: "Upper Mustang Jeep Tour",
        from: "KTM",
        to: "JOM",
        price: "$1,350",
        image: "/upper mustang.jpg",
        rating: 4.9,
        duration: "12 Days"
    },
    {
        id: 15,
        title: "Ghandruk Cultural Village",
        from: "KTM",
        to: "PKR",
        price: "$280",
        image: "/ghandruk.jpg",
        rating: 4.8,
        duration: "3 Days"
    }
];

export const FLIGHTS = [
    // Domestic Nepal Flights
    {
        id: 101,
        airline: "Buddha Air",
        logo: "/buddha-air.jpg",
        aircraft: "ATR 72-500",
        fromCode: "KTM",
        toCode: "PKR",
        departureTime: "08:00 AM",
        arrivalTime: "08:30 AM",
        duration: "30m",
        price: "$110",
        stops: "Non-stop"
    },
    {
        id: 102,
        airline: "Yeti Airlines",
        logo: "/yeti-airlines.png",
        aircraft: "ATR 72-500",
        fromCode: "KTM",
        toCode: "PKR",
        departureTime: "06:15 PM",
        arrivalTime: "06:45 PM",
        duration: "30m",
        price: "$110",
        stops: "Non-stop"
    },
    {
        id: 103,
        airline: "Buddha Air",
        logo: "/buddha-air.jpg",
        aircraft: "ATR 72-500",
        fromCode: "KTM",
        toCode: "BWA",
        departureTime: "09:30 AM",
        arrivalTime: "10:15 AM",
        duration: "45m",
        price: "$95",
        stops: "Non-stop"
    },
    {
        id: 104,
        airline: "Shree Airlines",
        logo: "/shree-airline.png",
        aircraft: "Bombardier Dash 8",
        fromCode: "KTM",
        toCode: "BIR",
        departureTime: "11:00 AM",
        arrivalTime: "11:40 AM",
        duration: "40m",
        price: "$85",
        stops: "Non-stop"
    },
    {
        id: 105,
        airline: "Buddha Air",
        logo: "/buddha-air.jpg",
        aircraft: "ATR 72-500",
        fromCode: "KTM",
        toCode: "BDP",
        departureTime: "01:15 PM",
        arrivalTime: "02:00 PM",
        duration: "45m",
        price: "$105",
        stops: "Non-stop"
    },
    {
        id: 106,
        airline: "Yeti Airlines",
        logo: "/yeti-airlines.png",
        aircraft: "ATR 72-500",
        fromCode: "KTM",
        toCode: "KEP",
        departureTime: "02:30 PM",
        arrivalTime: "03:25 PM",
        duration: "55m",
        price: "$125",
        stops: "Non-stop"
    },
    {
        id: 107,
        airline: "Buddha Air",
        logo: "/buddha-air.jpg",
        aircraft: "ATR 72-500",
        fromCode: "KTM",
        toCode: "DHI",
        departureTime: "04:15 PM",
        arrivalTime: "05:30 PM",
        duration: "1h 15m",
        price: "$140",
        stops: "Non-stop"
    },
    {
        id: 108,
        airline: "Shree Airlines",
        logo: "/shree-airline.png",
        aircraft: "Bombardier Dash 8",
        fromCode: "KTM",
        toCode: "JKR",
        departureTime: "10:45 AM",
        arrivalTime: "11:15 AM",
        duration: "30m",
        price: "$75",
        stops: "Non-stop"
    },
    {
        id: 109,
        airline: "Buddha Air",
        logo: "/buddha-air.jpg",
        aircraft: "Beechcraft 1900D",
        fromCode: "KTM",
        toCode: "SYW",
        departureTime: "03:00 PM",
        arrivalTime: "03:20 PM",
        duration: "20m",
        price: "$60",
        stops: "Non-stop"
    },
    {
        id: 110,
        airline: "Tara Air",
        logo: "/tara-air.png",
        aircraft: "DHC-6 Twin Otter",
        fromCode: "KTM",
        toCode: "JOM",
        departureTime: "07:00 AM",
        arrivalTime: "07:45 AM",
        duration: "45m",
        price: "$150",
        stops: "Non-stop"
    },
    {
        id: 111,
        airline: "Yeti Air",

        logo: "/yeti-airlines.png",
        aircraft: "Beechcraft 1900D",
        fromCode: "KTM",
        toCode: "TAL",
        departureTime: "06:30 AM",
        arrivalTime: "07:20 AM",
        duration: "50m",
        price: "$190",
        stops: "Non-stop"
    },
    {
        id: 112,
        airline: "Buddha Air",
        logo: "/buddha-air.jpg",
        aircraft: "Beechcraft 1900D",
        fromCode: "PKR",
        toCode: "BWA",
        departureTime: "08:45 AM",
        arrivalTime: "09:10 AM",
        duration: "25m",
        price: "$80",
        stops: "Non-stop"
    },
    {
        id: 113,
        airline: "Yeti Airlines",
        logo: "/yeti-airlines.png",
        aircraft: "Jetstream 41",
        fromCode: "PKR",
        toCode: "BHR",
        departureTime: "12:00 PM",
        arrivalTime: "12:20 PM",
        duration: "20m",
        price: "$70",
        stops: "Non-stop"
    },
    {
        id: 114,
        airline: "Buddha Air",
        logo: "/buddha-air.jpg",
        aircraft: "ATR 72-500",
        fromCode: "KEP",
        toCode: "KTM",
        departureTime: "08:15 AM",
        arrivalTime: "09:10 AM",
        duration: "55m",
        price: "$120",
        stops: "Non-stop"
    },

    // International Flights
    {
        id: 201,
        airline: "Nepal Airlines",
        logo: "/nepal-airlines.png",
        aircraft: "Airbus A330-200",
        fromCode: "KTM",
        toCode: "DXB",
        departureTime: "11:30 PM",
        arrivalTime: "02:45 AM",
        duration: "4h 15m",
        price: "$320",
        stops: "Non-stop"
    },
    {
        id: 202,
        airline: "Air India",
        logo: "/air-india.jpg",
        aircraft: "Airbus A320neo",
        fromCode: "KTM",
        toCode: "DEL",
        departureTime: "01:20 PM",
        arrivalTime: "02:45 PM",
        duration: "1h 40m",
        price: "$145",
        stops: "Non-stop"
    },
    {
        id: 203,
        airline: "Qatar Airways",
        logo: "/qatar-airways.png",
        aircraft: "Boeing 777-300ER",
        fromCode: "KTM",
        toCode: "DOH",
        departureTime: "09:00 AM",
        arrivalTime: "12:15 PM",
        duration: "4h 45m",
        price: "$650",
        stops: "Non-stop"
    },
    {
        id: 204,
        airline: "Singapore Airlines",
        logo: "/singapore-airlines.png",
        aircraft: "Boeing 737 MAX 8",
        fromCode: "SIN",
        toCode: "KTM",
        departureTime: "07:10 PM",
        arrivalTime: "10:15 PM",
        duration: "4h 50m",
        price: "$580",
        stops: "Non-stop"
    }
];

export const AIRPORTS = [
    { id: "KTM", city: "Kathmandu", name: "Tribhuvan Intl", country: "Nepal" },
    { id: "PKR", city: "Pokhara", name: "Pokhara Intl", country: "Nepal" },
    { id: "LUA", city: "Lukla", name: "Tenzing-Hillary", country: "Nepal" },
    { id: "BHR", city: "Bharatpur", name: "Bharatpur Airport", country: "Nepal" },
    { id: "JOM", city: "Jomsom", name: "Jomsom Airport", country: "Nepal" },
    { id: "BWA", city: "Bhairahawa", name: "Gautam Buddha Intl", country: "Nepal" },
    { id: "TAL", city: "Talcha", name: "Rara Airport", country: "Nepal" },
    { id: "BIR", city: "Biratnagar", name: "Biratnagar Airport", country: "Nepal" },
    { id: "BDP", city: "Bhadrapur", name: "Bhadrapur Airport", country: "Nepal" },
    { id: "KEP", city: "Nepalgunj", name: "Nepalgunj Airport", country: "Nepal" },
    { id: "DHI", city: "Dhangadhi", name: "Dhangadhi Airport", country: "Nepal" },
    { id: "JKR", city: "Janakpur", name: "Janakpur Airport", country: "Nepal" },
    { id: "SYW", city: "Simara", name: "Simara Airport", country: "Nepal" },
    { id: "DXB", city: "Dubai", name: "Dubai International", country: "UAE" },
    { id: "DEL", city: "New Delhi", name: "Indira Gandhi Intl", country: "India" },
    { id: "DOH", city: "Doha", name: "Hamad Intl", country: "Qatar" },
    { id: "SIN", city: "Singapore", name: "Changi Airport", country: "Singapore" },
    { id: "LHR", city: "London", name: "Heathrow Airport", country: "UK" },
];

export const VEHICLES = [
    {
        id: 301,
        name: "Vintage Wedding Car",
        type: "Wedding/Marriage Special",
        capacity: "4 Seats",
        price: "$150/day",
        image: "/wedding-car.png",
        location: "KTM",
        features: ["Flower Decoration included", "Professional Chauffeur", "VIP Treatment", "Premium Sound System"]
    },
    {
        id: 302,
        name: "Toyota Hiace VIP (Corporate)",
        type: "Corporate VIP Travel",
        capacity: "12 Seats",
        price: "$130/day",
        image: "/corporate-van.png",
        location: "KTM",
        features: ["Leather Captain Seats", "High-speed WiFi", "Conference Table", "Refreshments provided"]
    },
    {
        id: 303,
        name: "Land Cruiser 4x4 (V8)",
        type: "Off-Road Specialist",
        capacity: "7 Seats",
        price: "$280/day",
        image: "/offroad-jeep.png",
        location: "PKR",
        features: ["Extreme Off-Road Ready", "Luxury Interior", "English Speaking Driver", "Satellite Navigation"]
    },
    {
        id: 304,
        name: "Toyota Hiace  ",
        type: "Bus/Group Travel",
        capacity: "14 Seats",
        price: "$120/day",
        image: "/hiace.jpg",
        location: "KTM",
        features: ["Air Conditioning", "Ample Luggage Space", "Professional Local Driver", "Safety Belts on all seats"]
    },
    {
        id: 305,
        name: "Scorpio 4WD (Standard)",
        type: "Mountain Trekking Jeep",
        capacity: "7 Seats",
        price: "$85/day",
        image: "/scorpio.jpg",
        location: "PKR",
        features: ["Rugged Performance", "Air Conditioning", "Local Expert Driver", "Mountain Proven"]
    },
    {
        id: 306,
        name: "All Types of Car  ",
        type: "Executive",
        capacity: "4 Seats",
        price: "$350/day",
        image: "/suv.avif",
        location: "KTM",
        features: ["Ultimate Prestige", "Privacy Glass", "Bilingual Driver", "On-board Bar"]
    }
];