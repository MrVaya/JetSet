export interface Package {
    id: number;
    title: string;
    from: string;
    to: string;

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

export const LOCATIONS = ["Kathmandu", "Pokhara", "Lumbini", "Chitwan", "Lukla", "Rara Lake", "Biratnagar", "Bhairahawa", "Nepalgunj", "Dhangadhi", "Janakpur", "Bhadrapur", "Dubai", "New Delhi", "Doha", "Singapore", "London", "Thailand", "Turkey", "Vietnam", "Kerala", "Egypt", "Kenya", "Maldives", "Malaysia"];

export const PACKAGES = [
    {
        id: 1,
        title: "Luxury Palm Stay (Dubai)",
        from: "LHR",
        to: "DXB",

        image: "/dubai.jpg",
        rating: 4.9,
        duration: "5 Days"
    },
    {
        id: 2,
        title: "Eiffel Romance Package",
        from: "DXB",
        to: "CDG",

        image: "/paris.jpg",
        rating: 4.8,
        duration: "3 Days"
    },
    {
        id: 3,
        title: "Bali Tropical Escape",
        from: "SIN",
        to: "DPS",

        image: "/bali.jpg",
        rating: 4.7,
        duration: "7 Days"
    },

    {
        id: 4,
        title: "Kathmandu Valley Tour",
        from: "KTM",
        to: "KTM",

        image: "/kathmandu.webp",
        rating: 4.8,
        duration: "6 Days"
    },



    {
        id: 5,
        title: "Chitwan Wildlife Luxury",
        from: "KTM",
        to: "BHR",

        image: "/chitwan.jpg",
        rating: 4.7,
        duration: "3 Days"
    },
    {
        id: 6,
        title: "Pokhara Lakeside Serenity",
        from: "KTM",
        to: "PKR",

        image: "/pokhara.jpg",
        rating: 4.8,
        duration: "2 Days"
    },
    {
        id: 7,
        title: "Muktinath Pilgrimage Tour",
        from: "KTM",
        to: "PKR",

        image: "/muktinath.png",
        rating: 4.9,
        duration: "5 Days"
    },
    {
        id: 12,
        title: "Rara Lake Discovery",
        from: "KTM",
        to: "TAL",

        image: "/Rara-Lake.jpg",
        rating: 4.8,
        duration: "7 Days"
    },
    {
        id: 13,
        title: "Lumbini Peace Journey",
        from: "KTM",
        to: "BWA",

        image: "/lumbini.jpg",
        rating: 4.7,
        duration: "3 Days"
    },
    {
        id: 14,
        title: "Upper Mustang Jeep Tour",
        from: "KTM",
        to: "JOM",

        image: "/upper mustang.jpg",
        rating: 4.9,
        duration: "12 Days"
    },
    {
        id: 15,
        title: "Ghandruk Cultural Village",
        from: "KTM",
        to: "PKR",
        image: "/ghandruk.jpg",
        rating: 4.8,
        duration: "3 Days"
    },
    {
        id: 16,
        title: "Thailand Paradise Retreat",
        from: "KTM",
        to: "BKK",
        image: "/Thailand.jpg",
        rating: 4.9,
        duration: "6 Days"
    },
    {
        id: 17,
        title: "Grand Turkey Explorer",
        from: "KTM",
        to: "IST",
        image: "/turkey.avif",
        rating: 4.8,
        duration: "8 Days"
    },
    {
        id: 18,
        title: "Phu Quoc Island Escape",
        from: "KTM",
        to: "PQC",
        image: "/phu-quco-vietnam.jpg",
        rating: 4.7,
        duration: "5 Days"
    },
    {
        id: 19,
        title: "Kerala Backwater Luxury",
        from: "KTM",
        to: "COK",
        image: "/kerala.jpg",
        rating: 4.8,
        duration: "7 Days"
    },
    {
        id: 20,
        title: "Majestic Egypt Wonders",
        from: "KTM",
        to: "CAI",
        image: "/Egypt.avif",
        rating: 4.9,
        duration: "10 Days"
    },
    {
        id: 21,
        title: "Singapore Modern Marvels",
        from: "KTM",
        to: "SIN",
        image: "/singapore.webp",
        rating: 4.8,
        duration: "4 Days"
    },
    {
        id: 22,
        title: "Kenya Safari Adventure",
        from: "KTM",
        to: "NBO",
        image: "/kenya.webp",
        rating: 4.9,
        duration: "9 Days"
    },
    {
        id: 23,
        title: "Maldives Azure Overwater",
        from: "KTM",
        to: "MLE",
        image: "/Maldives.avif",
        rating: 5.0,
        duration: "5 Days"
    },
    {
        id: 24,
        title: "Malaysia Cultural Fusion",
        from: "KTM",
        to: "KUL",
        image: "/malaysia.avif",
        rating: 4.7,
        duration: "6 Days"
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

        stops: "Non-stop"
    },
    {
        id: 205,
        airline: "Thai Airways",
        logo: "https://images.kiwi.com/airlines/64/TG.png",
        aircraft: "Airbus A350-900",
        fromCode: "KTM",
        toCode: "BKK",
        departureTime: "01:30 PM",
        arrivalTime: "06:15 PM",
        duration: "3h 30m",

        stops: "Non-stop"
    },
    {
        id: 206,
        airline: "Turkish Airlines",
        logo: "https://images.kiwi.com/airlines/64/TK.png",
        aircraft: "Airbus A330-300",
        fromCode: "KTM",
        toCode: "IST",
        departureTime: "07:35 AM",
        arrivalTime: "12:55 PM",
        duration: "8h 05m",

        stops: "Non-stop"
    },
    {
        id: 207,
        airline: "Malaysian Airlines",
        logo: "https://images.kiwi.com/airlines/64/MH.png",
        aircraft: "Boeing 737-800",
        fromCode: "KTM",
        toCode: "KUL",
        departureTime: "11:20 PM",
        arrivalTime: "06:10 AM",
        duration: "4h 50m",

        stops: "Non-stop"
    },
    {
        id: 208,
        airline: "Maldivian",
        logo: "https://images.kiwi.com/airlines/64/Q2.png",
        aircraft: "Airbus A320",
        fromCode: "KTM",
        toCode: "MLE",
        departureTime: "09:45 AM",
        arrivalTime: "01:20 PM",
        duration: "4h 50m",

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
    { id: "BKK", city: "Bangkok", name: "Suvarnabhumi Airport", country: "Thailand" },
    { id: "IST", city: "Istanbul", name: "Istanbul Airport", country: "Turkey" },
    { id: "PQC", city: "Phu Quoc", name: "Phu Quoc Intl", country: "Vietnam" },
    { id: "COK", city: "Kochi", name: "Cochin Intl", country: "India" },
    { id: "CAI", city: "Cairo", name: "Cairo International", country: "Egypt" },
    { id: "NBO", city: "Nairobi", name: "Jomo Kenyatta Intl", country: "Kenya" },
    { id: "MLE", city: "Male", name: "Velana International", country: "Maldives" },
    { id: "KUL", city: "Kuala Lumpur", name: "Kuala Lumpur Intl", country: "Malaysia" },
];

export const VEHICLES = [
    {
        id: 301,
        name: "Vintage Wedding Car",
        type: "Wedding/Marriage Special",
        capacity: "4 Seats",

        image: "/wedding-car.png",
        location: "KTM",
        features: ["Flower Decoration included", "Professional Chauffeur", "VIP Treatment", "Premium Sound System"]
    },
    {
        id: 302,
        name: "Toyota Hiace VIP (Corporate)",
        type: "Corporate VIP Travel",
        capacity: "12 Seats",

        image: "/corporate-van.png",
        location: "KTM",
        features: ["Leather Captain Seats", "High-speed WiFi", "Conference Table", "Refreshments provided"]
    },
    {
        id: 303,
        name: "Land Cruiser 4x4 (V8)",
        type: "Off-Road Specialist",
        capacity: "7 Seats",

        image: "/offroad-jeep.png",
        location: "PKR",
        features: ["Extreme Off-Road Ready", "Luxury Interior", "English Speaking Driver", "Satellite Navigation"]
    },
    {
        id: 304,
        name: "Scorpio Jeep   ",
        type: "Group Travel",
        capacity: "7 Seats",

        image: "/scorpio.jpg",
        location: "KTM",
        features: ["Air Conditioning", "Professional Local Driver", "Off Road Rides"]
    },

    {
        id: 306,
        name: "All Types of Car  ",
        type: "Executive",
        capacity: "4 Seats",

        image: "/suv.avif",
        location: "KTM",
        features: ["Ultimate Prestige", "Privacy Glass", "Bilingual Driver", "On-board Bar"]
    }
];