// 国家坐标数据
const countryCoordinates = {
    "US": [
        { lat: 37.7749, lng: -122.4194, city: 'San Francisco', state: 'CA', areaCodes: [415, 628] },
        { lat: 34.0522, lng: -118.2437, city: 'Los Angeles', state: 'CA', areaCodes: [213, 323] }
    ],
    "UK": [{ lat: 51.5074, lng: -0.1278 }, { lat: 53.4808, lng: -2.2426 }],
    "FR": [{ lat: 48.8566, lng: 2.3522 }, { lat: 45.7640, lng: 4.8357 }],
    "DE": [{ lat: 52.5200, lng: 13.4050 }, { lat: 48.1351, lng: 11.5820 }],
    "CN": [{ lat: 39.9042, lng: 116.4074 }, { lat: 31.2304, lng: 121.4737 }, {"lat": 23.1291, "lng": 113.2644}, {"lat": 30.6799, "lng": 104.0679}, {"lat": 30.2582, "lng": 120.1646}],
    "TW": [{ lat: 25.0330, lng: 121.5654 }, { lat: 22.6273, lng: 120.3014 }],
    "HK": [{ lat: 22.3193, lng: 114.1694 },{ lat: 22.3964, lng: 114.1095 }],
    "JP": [{ lat: 35.6895, lng: 139.6917 }, { lat: 34.6937, lng: 135.5023 }],
    "IN": [{ lat: 28.6139, lng: 77.2090 }, { lat: 19.0760, lng: 72.8777 }],
    "AU": [{ lat: -33.8688, lng: 151.2093 }, { lat: -37.8136, lng: 144.9631 }],
    "BR": [
        { lat: -23.5505, lng: -46.6333, city: 'São Paulo', areaCodes: ['11'] },
        { lat: -22.9068, lng: -43.1729, city: 'Rio de Janeiro', areaCodes: ['21'] }
    ],
    "CA": [{ lat: 43.651070, lng: -79.347015 }, { lat: 45.501690, lng: -73.567253 }],
    "RU": [{ lat: 55.7558, lng: 37.6173 }, { lat: 59.9343, lng: 30.3351 }],
    "ZA": [{ lat: -33.9249, lng: 18.4241 }, { lat: -26.2041, lng: 28.0473 }],
    "MX": [{ lat: 19.4326, lng: -99.1332 }, { lat: 20.6597, lng: -103.3496 }],
    "KR": [{ lat: 37.5665, lng: 126.9780 }, { lat: 35.1796, lng: 129.0756 }],
    "IT": [{ lat: 41.9028, lng: 12.4964 }, { lat: 45.4642, lng: 9.1900 }],
    "ES": [{ lat: 40.4168, lng: -3.7038 }, { lat: 41.3851, lng: 2.1734 }],
    "TR": [{ lat: 41.0082, lng: 28.9784 }, { lat: 39.9334, lng: 32.8597 }],
    "SA": [{ lat: 24.7136, lng: 46.6753 }, { lat: 21.3891, lng: 39.8579 }],
    "AR": [{ lat: -34.6037, lng: -58.3816 }, { lat: -31.4201, lng: -64.1888 }],
    "EG": [{ lat: 30.0444, lng: 31.2357 }, { lat: 31.2156, lng: 29.9553 }],
    "NG": [{ lat: 6.5244, lng: 3.3792 }, { lat: 9.0579, lng: 7.4951 }],
    "ID": [{ lat: -6.2088, lng: 106.8456 }, { lat: -7.7956, lng: 110.3695 }]
};

// 美国各州名称与缩写（地址中按惯例使用缩写）
const US_STATES = {
    AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', AR: 'Arkansas', CA: 'California', CO: 'Colorado',
    CT: 'Connecticut', DE: 'Delaware', DC: 'District of Columbia', FL: 'Florida', GA: 'Georgia', HI: 'Hawaii',
    ID: 'Idaho', IL: 'Illinois', IN: 'Indiana', IA: 'Iowa', KS: 'Kansas', KY: 'Kentucky', LA: 'Louisiana',
    ME: 'Maine', MD: 'Maryland', MA: 'Massachusetts', MI: 'Michigan', MN: 'Minnesota', MS: 'Mississippi',
    MO: 'Missouri', MT: 'Montana', NE: 'Nebraska', NV: 'Nevada', NH: 'New Hampshire', NJ: 'New Jersey',
    NM: 'New Mexico', NY: 'New York', NC: 'North Carolina', ND: 'North Dakota', OH: 'Ohio', OK: 'Oklahoma',
    OR: 'Oregon', PA: 'Pennsylvania', RI: 'Rhode Island', SC: 'South Carolina', SD: 'South Dakota',
    TN: 'Tennessee', TX: 'Texas', UT: 'Utah', VT: 'Vermont', VA: 'Virginia', WA: 'Washington',
    WV: 'West Virginia', WI: 'Wisconsin', WY: 'Wyoming'
};

// 美国不征收州销售税的五个州
const US_TAX_FREE_STATES = {
    OR: { name: 'Oregon', note: '不征收州和地方销售税' },
    DE: { name: 'Delaware', note: '不征收州和地方销售税' },
    NH: { name: 'New Hampshire', note: '不征收州和地方销售税' },
    MT: { name: 'Montana', note: '不征收州销售税，少数度假地另收地方度假税' },
    AK: { name: 'Alaska', note: '不征收州销售税，部分城市另收地方销售税' }
};

// 各州在用的电话区号，城市区号无法匹配时使用（覆盖本工具会生成地址的州；其余州退回全美随机区号）
const US_AREA_CODES = {
    CA: [209, 213, 279, 310, 323, 408, 415, 424, 442, 510, 530, 559, 562, 619, 626, 628, 650, 657, 661, 669, 707, 714, 747, 760, 805, 818, 820, 831, 840, 858, 909, 916, 925, 949, 951],
    OR: [458, 503, 541, 971],
    DE: [302],
    NH: [603],
    MT: [406],
    AK: [907]
};

// 免税州中没有地方销售税的主要城市，附带当地区号
const US_TAX_FREE_CITIES = [
    { state: 'OR', city: 'Portland', lat: 45.5152, lng: -122.6784, areaCodes: [503, 971] },
    { state: 'OR', city: 'Salem', lat: 44.9429, lng: -123.0351, areaCodes: [503, 971] },
    { state: 'OR', city: 'Eugene', lat: 44.0521, lng: -123.0868, areaCodes: [541, 458] },
    { state: 'DE', city: 'Wilmington', lat: 39.7391, lng: -75.5398, areaCodes: [302] },
    { state: 'DE', city: 'Dover', lat: 39.1582, lng: -75.5244, areaCodes: [302] },
    { state: 'NH', city: 'Manchester', lat: 42.9956, lng: -71.4548, areaCodes: [603] },
    { state: 'NH', city: 'Nashua', lat: 42.7654, lng: -71.4676, areaCodes: [603] },
    { state: 'NH', city: 'Concord', lat: 43.2081, lng: -71.5376, areaCodes: [603] },
    { state: 'MT', city: 'Billings', lat: 45.7833, lng: -108.5007, areaCodes: [406] },
    { state: 'MT', city: 'Missoula', lat: 46.8721, lng: -113.9940, areaCodes: [406] },
    { state: 'MT', city: 'Bozeman', lat: 45.6770, lng: -111.0429, areaCodes: [406] },
    { state: 'AK', city: 'Anchorage', lat: 61.2181, lng: -149.9003, areaCodes: [907] }
];

// 姓名数据
const namesByCountry = {
    "CN": {
        first: ["Li", "Wang", "Zhang", "Liu", "Chen", "Yang", "Huang", "Zhao", "Wu", "Zhou", "Xu", "Sun", "Ma", "Zhu", "Hu", "Guo", "He", "Gao", "Lin", "Zheng"],
        last: ["Wei", "Fang", "Na", "Xiuying", "Min", "Jing", "Li", "Qiang", "Lei", "Jun", "Yang", "Yong", "Yan", "Jie", "Tao", "Ming", "Chao", "Xiulan", "Xia", "Ping"]
    },
    "JP": {
        first: ["Sato", "Suzuki", "Takahashi", "Tanaka", "Watanabe", "Ito", "Yamamoto", "Nakamura", "Kobayashi", "Kato"],
        last: ["Shota", "Ren", "Hina", "Yui", "Hiroto", "Sota", "Yota", "Misaki", "Nanami", "Yuto"]
    },
    "KR": {
        first: ["Kim", "Lee", "Park", "Choi", "Jung", "Kang", "Jo", "Yoon", "Jang", "Lim"],
        last: ["Minjun", "Seojun", "Doyun", "Jiho", "Jihun", "Seoyeon", "Seoyun", "Jiwoo", "Seohyun", "Minseo"]
    },
    "TW": {
        first: ["Chen", "Lin", "Huang", "Chang", "Lee", "Wang", "Wu", "Liu", "Tsai", "Yang"],
        last: ["Zhiming", "Jianhong", "Junjie", "Yijun", "Shufen", "Meiling", "Yating", "Jiahao", "Zhihao", "Shuhui"]
    },
    "HK": {
        first: ["Chan", "Lee", "Wong", "Cheung", "Lau", "Wang", "Ng", "Cheng", "Leung", "Ho"],
        last: ["Chiming", "Kayan", "Junjie", "Wingsze", "Kaming", "Meiling", "Kahao", "Winger", "Chihao", "Shukfan"]
    },
    "US": {
        first: ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez"],
        last: ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Christopher"]
    },
    "UK": {
        first: ["Smith", "Jones", "Williams", "Taylor", "Brown", "Davies", "Evans", "Wilson", "Thomas", "Roberts"],
        last: ["Oliver", "Jack", "Harry", "George", "Noah", "Charlie", "Jacob", "Oscar", "William", "Leo"]
    },
    "FR": {
        first: ["Martin", "Bernard", "Dubois", "Thomas", "Robert", "Richard", "Petit", "Durand", "Leroy", "Moreau"],
        last: ["Lucas", "Louis", "Gabriel", "Arthur", "Jules", "Hugo", "Leo", "Adam", "Raphael", "Paul"]
    },
    "DE": {
        first: ["Mueller", "Schmidt", "Schneider", "Fischer", "Weber", "Meyer", "Wagner", "Becker", "Schulz", "Hoffmann"],
        last: ["Ben", "Paul", "Leon", "Noah", "Luis", "Finn", "Felix", "Jonas", "Maximilian", "Henry"]
    },
    "IT": {
        first: ["Rossi", "Ferrari", "Russo", "Bianchi", "Romano", "Gallo", "Costa", "Fontana", "Conti", "Esposito"],
        last: ["Leonardo", "Francesco", "Alessandro", "Lorenzo", "Matteo", "Andrea", "Gabriele", "Marco", "Antonio", "Giuseppe"]
    },
    "ES": {
        first: ["Garcia", "Rodriguez", "Gonzalez", "Fernandez", "Lopez", "Martinez", "Sanchez", "Perez", "Martin", "Gomez"],
        last: ["Antonio", "Jose", "Manuel", "Francisco", "David", "Juan", "Miguel", "Javier", "Rafael", "Carlos"]
    },
    "BR": {
        first: ["Silva", "Santos", "Oliveira", "Souza", "Rodrigues", "Ferreira", "Alves", "Pereira", "Lima", "Gomes"],
        last: ["Miguel", "Arthur", "Heitor", "Pedro", "Davi", "Gabriel", "Bernardo", "Lucas", "Matheus", "Rafael"]
    },
    "RU": {
        first: ["Ivanov", "Smirnov", "Kuznetsov", "Popov", "Vasiliev", "Petrov", "Sokolov", "Mikhailov", "Fedorov", "Morozov"],
        last: ["Alexander", "Dmitry", "Maxim", "Ivan", "Andrey", "Mikhail", "Artem", "Daniel", "Roman", "Sergey"]
    },
    "IN": {
        first: ["Kumar", "Singh", "Sharma", "Patel", "Gupta", "Shah", "Verma", "Rao", "Reddy", "Joshi"],
        last: ["Aarav", "Vihaan", "Vivaan", "Aditya", "Arjun", "Reyansh", "Ayaan", "Sai", "Krishna", "Ishaan"]
    },
    "AU": {
        first: ["Smith", "Jones", "Williams", "Brown", "Wilson", "Taylor", "Johnson", "White", "Anderson", "Thompson"],
        last: ["Oliver", "William", "Jack", "Noah", "Thomas", "James", "Lucas", "Henry", "Ethan", "Alexander"]
    },
    "CA": {
        first: ["Smith", "Brown", "Tremblay", "Martin", "Roy", "Wilson", "MacDonald", "Taylor", "Campbell", "Anderson"],
        last: ["Liam", "Noah", "Oliver", "William", "James", "Benjamin", "Lucas", "Henry", "Theodore", "Jack"]
    },
    "MX": {
        first: ["Garcia", "Rodriguez", "Martinez", "Lopez", "Gonzalez", "Perez", "Sanchez", "Ramirez", "Torres", "Flores"],
        last: ["Santiago", "Mateo", "Sebastian", "Leonardo", "Diego", "Daniel", "Gabriel", "Adrian", "David", "Alexander"]
    },
    "TR": {
        first: ["Yilmaz", "Kaya", "Demir", "Sahin", "Celik", "Yildiz", "Erdogan", "Ozturk", "Aydin", "Ozdemir"],
        last: ["Yusuf", "Eymen", "Ömer", "Mustafa", "Ali", "Mehmet", "Ahmet", "Emir", "Hamza", "Ibrahim"]
    },
    "SA": {
        first: ["Al-Saud", "Al-Sheikh", "Al-Rashid", "Al-Qahtani", "Al-Ghamdi", "Al-Zahrani", "Al-Dossari", "Al-Shammari", "Al-Otaibi", "Al-Harbi"],
        last: ["Mohammed", "Abdullah", "Ahmed", "Ali", "Omar", "Ibrahim", "Khalid", "Hassan", "Fahad", "Abdul"]
    },
    "AR": {
        first: ["Gonzalez", "Rodriguez", "Garcia", "Fernandez", "Lopez", "Martinez", "Perez", "Romero", "Sanchez", "Diaz"],
        last: ["Mateo", "Thiago", "Benjamin", "Valentino", "Santiago", "Juan", "Lucas", "Martin", "Nicolas", "Joaquin"]
    },
    "EG": {
        first: ["Mohamed", "Ahmed", "Mahmoud", "Ibrahim", "Ali", "Hassan", "Hussein", "Mostafa", "Kamal", "Samir"],
        last: ["Omar", "Youssef", "Adam", "Malik", "Zain", "Hamza", "Kareem", "Hassan", "Ali", "Ibrahim"]
    },
    "NG": {
        first: ["Okafor", "Adebayo", "Okonkwo", "Eze", "Oluwaseun", "Adegoke", "Afolabi", "Ogunleye", "Adeniyi", "Adesina"],
        last: ["Oluwadamilare", "Oluwatobiloba", "Ayomide", "Temitope", "Oluwaseun", "Adebayo", "Chibuike", "Chisom", "Chidi", "Obinna"]
    },
    "ID": {
        first: ["Wijaya", "Kusuma", "Suryanto", "Halim", "Santoso", "Tanaka", "Wibowo", "Susanto", "Hidayat", "Putra"],
        last: ["Muhammad", "Ahmad", "Abdul", "Aditya", "Budi", "Dimas", "Eko", "Fajar", "Gading", "Hadi"]
    },
    "ZA": {
        first: ["Nkosi", "Van der Merwe", "Botha", "Mkhize", "Khumalo", "Pretorius", "Venter", "Ndlovu", "Fourie", "Nel"],
        last: ["Bandile", "Themba", "Sipho", "Thabo", "Jabu", "Mandla", "Blessing", "Gift", "Lucky", "Precious"]
    }
};

// 电话号码格式配置
const phoneFormats = {
    "US": {
        format: "+1 (XXX) XXX-XXXX",
        areaCodeRanges: [[201, 989]]
    },
    "CN": {
        format: "+86 1XX-XXXX-XXXX",
        mobilePrefix: ["30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "50", "51", "52", "53", "55", "56", "57", "58", "59", "66", "70", "71", "72", "73", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89"]
    },
    "JP": {
        format: "+81 XX-XXXX-XXXX",
        mobilePrefix: ["70", "80", "90"]
    },
    "KR": {
        format: "+82 10-XXXX-XXXX"
    },
    "UK": {
        format: "+44 7XXX XXXXXX",
        mobilePrefix: ["7"]
    },
    "FR": {
        format: "+33 6 XX XX XX XX",
        mobilePrefix: ["6", "7"]
    },
    "DE": {
        format: "+49 15X XXXXXXXX",
        mobilePrefix: ["15", "16", "17"]
    },
    "TW": {
        format: "+886 9XX-XXX-XXX"
    },
    "HK": {
        format: "+852 XXXX XXXX",
        mobilePrefix: ["5", "6", "9"]
    },
    "AU": {
        format: "+61 4XX XXX XXX",
        mobilePrefix: ["4"]
    },
    "CA": {
        format: "+1 (XXX) XXX-XXXX",
        areaCodeRanges: [[204, 989]]
    },
    "MX": {
        format: "+52 1XX XXX XXXX"
    },
    "TR": {
        format: "+90 5XX XXX XXXX",
        mobilePrefix: ["5"]
    },
    "SA": {
        format: "+966 5XX XXX XXXX",
        mobilePrefix: ["5"]
    },
    "AR": {
        format: "+54 9XX XXXX-XXXX"
    },
    "EG": {
        format: "+20 1XX XXX XXXX",
        mobilePrefix: ["1"]
    },
    "NG": {
        format: "+234 8XX XXX XXXX",
        mobilePrefix: ["7", "8", "9"]
    },
    "ID": {
        format: "+62 8XX-XXXX-XXXX",
        mobilePrefix: ["8"]
    },
    "ZA": {
        format: "+27 8X XXX XXXX",
        mobilePrefix: ["6", "7", "8"]
    },
    // 巴西手机号：地区码（DDD）+ 9 开头的 9 位号码；地区码按种子城市匹配
    "BR": {
        format: "+55 XX 9XXXX-XXXX",
        mobilePrefix: ["11", "21"]
    },
    // 印度手机号：10 位，首位 6-9
    "IN": {
        format: "+91 XXXXX XXXXX",
        mobilePrefix: ["6", "7", "8", "9"]
    },
    // 俄罗斯手机号以 9 开头
    "RU": {
        format: "+7 9XX XXX-XX-XX"
    },
    // 意大利手机号以 3 开头
    "IT": {
        format: "+39 3XX XXX XXXX"
    },
    // 西班牙手机号以 6 或 7 开头
    "ES": {
        format: "+34 XXX XX XX XX",
        mobilePrefix: ["6", "7"]
    }
};

// 工具函数
function getRandomLocation(country, options = {}) {
    const coordsArray = country === 'US' && options.taxFree ? US_TAX_FREE_CITIES : countryCoordinates[country];
    const randomCity = coordsArray[Math.floor(Math.random() * coordsArray.length)];
    const lat = randomCity.lat + (Math.random() - 0.5) * 0.1;
    const lng = randomCity.lng + (Math.random() - 0.5) * 0.1;
    // seed：随机点所围绕的城市，用于匹配本地电话区号
    return { lat, lng, seed: randomCity };
}

function getRandomName(country) {
    if (!namesByCountry[country]) {
        return null;
    }
    const names = namesByCountry[country];
    const firstName = names.first[Math.floor(Math.random() * names.first.length)];
    const lastName = names.last[Math.floor(Math.random() * names.last.length)];
    return `${firstName} ${lastName}`;
}

function generateAreaCode(ranges) {
    const range = ranges[Math.floor(Math.random() * ranges.length)];
    const [min, max] = range;
    return Math.floor(min + Math.random() * (max - min + 1));
}

// 美国地址的区号：优先用地址所在城市（随机点的来源城市）的本地区号，
// 州不一致时退回按州匹配，都没有时返回 null（使用全美随机区号）
function pickUsAreaCodes(seed, stateCode) {
    if (seed && seed.areaCodes && seed.state === stateCode) return seed.areaCodes;
    return US_AREA_CODES[stateCode] || null;
}

// areaCodes：可选的区号/前缀列表（如美国城市区号、巴西地区码），不传则按号码格式随机
function getRandomPhoneNumber(country, areaCodes) {
    const format = phoneFormats[country] || phoneFormats["US"];
    let phone = format.format;

    if (format.areaCodeRanges) {
        // 北美号码（美国、加拿大）
        const areaCode = areaCodes
            ? areaCodes[Math.floor(Math.random() * areaCodes.length)]
            : generateAreaCode(format.areaCodeRanges);
        phone = phone.replace("XXX", areaCode);
        // 北美号码的交换局号（中间三位）首位只能是 2-9
        phone = phone.replace("X", () => 2 + Math.floor(Math.random() * 8));
        phone = phone.replace(/X/g, () => Math.floor(Math.random() * 10));
    } else if (areaCodes || format.mobilePrefix) {
        const prefixes = areaCodes || format.mobilePrefix;
        const prefix = String(prefixes[Math.floor(Math.random() * prefixes.length)]);
        // 先替换前缀
        if (prefix.length === 2) {
            phone = phone.replace(/XX/, prefix);
        } else {
            phone = phone.replace(/X/, prefix);
        }
        // 然后替换剩余的X
        phone = phone.replace(/X/g, () => Math.floor(Math.random() * 10));
    } else {
        phone = phone.replace(/X/g, () => Math.floor(Math.random() * 10));
    }
    return phone;
}

// ==================== 地址数据源 ====================
// 思路：不再"随机取点 → 反查 → 碰运气"，而是查询随机点附近"已知带门牌号"的对象，再从中随机挑一个。
// 主数据源 Photon（layer=house 只返回门牌级对象），失败时回退到 Overpass；缺城市/邮编时用 Nominatim 补全。
// 三者的数据都来自 OpenStreetMap。
const USER_AGENT = 'AddressGenerator (https://github.com/jiangnan1224/AddressGenerator)';
// 浏览器里不能自定义 User-Agent，且自定义头会触发 CORS 预检，所以只在 Worker 中设置
const IS_BROWSER = typeof window !== 'undefined';

const PHOTON_REVERSE_URL = 'https://photon.komoot.io/reverse';
const OVERPASS_ENDPOINTS = [
    'https://overpass-api.de/api/interpreter',
    'https://maps.mail.ru/osm/tools/overpass/api/interpreter'
];
const NOMINATIM_REVERSE_URL = 'https://nominatim.openstreetmap.org/reverse';

const MAX_ROUNDS = 6;
const TIME_BUDGET_MS = 25000;
const ADDRESS_TYPES = ['residential', 'commercial', 'any'];

// 住宅/商业的判定标签
const RESIDENTIAL_BUILDINGS = ['house', 'residential', 'apartments', 'detached', 'semidetached_house', 'terrace', 'dormitory', 'bungalow'];
const COMMERCIAL_BUILDINGS = ['commercial', 'retail', 'office'];
// 算作"商户"的 amenity / tourism；其余带门牌的 amenity/tourism（医院、学校、宗教场所、博物馆等）归为公共设施
const COMMERCIAL_AMENITIES = ['restaurant', 'cafe', 'fast_food', 'bar', 'pub', 'biergarten', 'food_court', 'ice_cream', 'nightclub', 'bank', 'bureau_de_change', 'pharmacy', 'clinic', 'dentist', 'doctors', 'veterinary', 'car_rental', 'car_wash', 'fuel', 'cinema', 'marketplace', 'driving_school', 'language_school', 'coworking_space'];
const COMMERCIAL_TOURISM = ['hotel', 'hostel', 'guest_house', 'motel', 'apartment'];
// 带门牌号但不算地址的设施
const IGNORED_AMENITIES = ['vending_machine', 'parking', 'parking_space', 'parking_entrance', 'bicycle_parking', 'motorcycle_parking', 'atm', 'bench', 'waste_basket', 'recycling', 'charging_station', 'post_box', 'telephone', 'toilets', 'ticket_validator', 'drinking_water', 'shelter', 'bicycle_rental', 'taxi'];

// Photon 的 osm_tag 过滤（多个条件之间是"或"）
const PHOTON_TAG_FILTERS = {
    residential: [...RESIDENTIAL_BUILDINGS.map(b => `building:${b}`), 'place:house'],
    commercial: [
        'shop', 'office', 'craft',
        ...COMMERCIAL_AMENITIES.map(a => `amenity:${a}`),
        ...COMMERCIAL_TOURISM.map(t => `tourism:${t}`),
        ...COMMERCIAL_BUILDINGS.map(b => `building:${b}`)
    ],
    any: []
};

// 与 OSM 返回的国家代码不一致的情况（Photon 把香港标为 CN）
const ACCEPTED_COUNTRY_CODES = { UK: ['GB'], HK: ['HK', 'CN'] };
// 带门牌号但本身不是地址的对象（公交站、道路、公园、纪念碑等）；同时带 building 标签的仍视为建筑
const NON_ADDRESS_KEYS = ['highway', 'railway', 'public_transport', 'landuse', 'leisure', 'natural', 'man_made', 'power', 'barrier', 'waterway', 'boundary', 'historic'];

const COUNTRY_NAMES = {
    US: 'United States', UK: 'United Kingdom', FR: 'France', DE: 'Germany', CN: 'China', TW: 'Taiwan',
    HK: 'Hong Kong', JP: 'Japan', IN: 'India', AU: 'Australia', BR: 'Brazil', CA: 'Canada', RU: 'Russia',
    ZA: 'South Africa', MX: 'Mexico', KR: 'South Korea', IT: 'Italy', ES: 'Spain', TR: 'Turkey',
    SA: 'Saudi Arabia', AR: 'Argentina', EG: 'Egypt', NG: 'Nigeria', ID: 'Indonesia'
};

// 各国地址的书写顺序
const ADDRESS_STYLES = {
    CN: 'cn', TW: 'tw', JP: 'jp', KR: 'kr',
    US: 'numberFirst', CA: 'numberFirst', AU: 'numberFirst', IN: 'numberFirst', ZA: 'numberFirst',
    NG: 'numberFirst', EG: 'numberFirst', SA: 'numberFirst',
    HK: 'hk', UK: 'uk', FR: 'fr',
    DE: 'streetFirst', RU: 'streetFirst', TR: 'streetFirst', ID: 'streetFirst',
    IT: 'latin', ES: 'latin', BR: 'latin', MX: 'latin', AR: 'latin'
};

// Photon 对这些国家通常不返回"区"一级（中国的区/县、韩国的구/군），需要每次都用 Nominatim 补全
const ADMIN_ENRICH_COUNTRIES = ['CN', 'KR'];
const CN_DISTRICT_PATTERN = /[区县旗]$/;
// 日本町丁目只有"N丁目"、缺了町名的情况
const JP_BARE_CHOME = /^[0-9０-９一二三四五六七八九十]+丁目$/;

// 香港三大区域与 18 区（地址中的"新界/九龙/香港岛"由所属分区决定）
const HK_REGIONS = {
    HKI: { en: 'Hong Kong Island', zh: '香港島' },
    KLN: { en: 'Kowloon', zh: '九龍' },
    NT: { en: 'New Territories', zh: '新界' }
};
const HK_DISTRICTS = [
    { en: 'Central and Western', zh: '中西區', region: 'HKI' },
    { en: 'Wan Chai', zh: '灣仔區', region: 'HKI' },
    { en: 'Eastern', zh: '東區', region: 'HKI' },
    { en: 'Southern', zh: '南區', region: 'HKI' },
    { en: 'Yau Tsim Mong', zh: '油尖旺區', region: 'KLN' },
    { en: 'Sham Shui Po', zh: '深水埗區', region: 'KLN' },
    { en: 'Kowloon City', zh: '九龍城區', region: 'KLN' },
    { en: 'Wong Tai Sin', zh: '黃大仙區', region: 'KLN' },
    { en: 'Kwun Tong', zh: '觀塘區', region: 'KLN' },
    { en: 'Tsuen Wan', zh: '荃灣區', region: 'NT' },
    { en: 'Tuen Mun', zh: '屯門區', region: 'NT' },
    { en: 'Yuen Long', zh: '元朗區', region: 'NT' },
    { en: 'North', zh: '北區', region: 'NT' },
    { en: 'Tai Po', zh: '大埔區', region: 'NT' },
    { en: 'Sha Tin', zh: '沙田區', region: 'NT' },
    { en: 'Sai Kung', zh: '西貢區', region: 'NT' },
    { en: 'Kwai Tsing', zh: '葵青區', region: 'NT' },
    { en: 'Islands', zh: '離島區', region: 'NT' }
];

// 处理CORS请求的headers
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

async function fetchJson(url, options = {}, timeoutMs = 10000) {
    const headers = { ...(IS_BROWSER ? {} : { 'User-Agent': USER_AGENT }), ...(options.headers || {}) };
    const response = await fetch(url, { ...options, headers, signal: AbortSignal.timeout(timeoutMs) });
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }
    return response.json();
}

// 单次请求的超时不能超过整个请求剩余的时间预算
function budgetedTimeout(deadline, maxMs) {
    return Math.max(0, Math.min(maxMs, deadline - Date.now()));
}

function shuffle(list) {
    const arr = [...list];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// 根据 OSM 标签判断地址用途：
// residential / commercial / public（公共设施）/ unspecified（只有门牌，用途未标注）/ other（不作为地址使用）
function classifyTags(tags) {
    if (tags.amenity && IGNORED_AMENITIES.includes(tags.amenity)) return 'other';
    if (tags.shop || tags.office || tags.craft) return 'commercial';
    if (COMMERCIAL_AMENITIES.includes(tags.amenity) || COMMERCIAL_TOURISM.includes(tags.tourism)) return 'commercial';
    if (tags.amenity || tags.tourism) return 'public';
    if (COMMERCIAL_BUILDINGS.includes(tags.building)) return 'commercial';
    if (RESIDENTIAL_BUILDINGS.includes(tags.building)) return 'residential';
    if (!tags.building && NON_ADDRESS_KEYS.some(key => tags[key])) return 'other';
    if (!tags.building || tags.building === 'yes') return 'unspecified';
    return 'other';
}

function osmUrl(type, id) {
    return type && id ? `https://www.openstreetmap.org/${type}/${id}` : '';
}

function fromPhotonFeature(feature) {
    const p = feature.properties || {};
    const [lng, lat] = feature.geometry.coordinates;
    const osmTypes = { N: 'node', W: 'way', R: 'relation' };
    return {
        parts: {
            houseNumber: p.housenumber,
            street: p.street,
            locality: p.locality,
            district: p.district,
            city: p.city,
            county: p.county,
            state: p.state,
            postcode: p.postcode
        },
        countryCode: p.countrycode,
        kind: classifyTags({ [p.osm_key]: p.osm_value }),
        category: `${p.osm_key}=${p.osm_value}`,
        placeName: p.name || '',
        lat,
        lng,
        osmUrl: osmUrl(osmTypes[p.osm_type], p.osm_id)
    };
}

function fromOverpassElement(element) {
    const t = element.tags || {};
    const lat = element.lat ?? element.center?.lat;
    const lng = element.lon ?? element.center?.lon;
    const categoryKey = ['shop', 'office', 'amenity', 'tourism', 'craft', 'building'].find(k => t[k]);
    return {
        parts: {
            houseNumber: t['addr:housenumber'],
            // 日本地址用"番"（addr:block_number）代替街道
            street: t['addr:street'] || t['addr:block_number'] || t['addr:place'],
            locality: t['addr:neighbourhood'] || t['addr:quarter'],
            district: t['addr:district'] || t['addr:suburb'],
            city: t['addr:city'] || t['addr:town'] || t['addr:village'],
            county: t['addr:county'],
            state: t['addr:province'] || t['addr:state'],
            postcode: t['addr:postcode']
        },
        countryCode: t['addr:country'],
        kind: classifyTags(t),
        category: categoryKey ? `${categoryKey}=${t[categoryKey]}` : 'address',
        placeName: t.name || '',
        lat,
        lng,
        osmUrl: osmUrl(element.type, element.id)
    };
}

async function searchPhoton(location, type, radiusKm, deadline) {
    const params = new URLSearchParams({
        lat: location.lat.toFixed(6),
        lon: location.lng.toFixed(6),
        limit: '50',
        radius: String(radiusKm),
        layer: 'house',
        // 固定返回当地名称，否则会随浏览器的 Accept-Language 变成英文等其他语言
        lang: 'default'
    });
    PHOTON_TAG_FILTERS[type].forEach(tag => params.append('osm_tag', tag));
    const data = await fetchJson(`${PHOTON_REVERSE_URL}?${params}`, {}, budgetedTimeout(deadline, 8000));
    return (data.features || []).map(fromPhotonFeature);
}

function buildOverpassQuery(location, type, radiusKm) {
    const around = `(around:${Math.min(radiusKm * 1000, 1500)},${location.lat.toFixed(6)},${location.lng.toFixed(6)})`;
    const hn = '["addr:housenumber"]';
    let body;
    if (type === 'residential') {
        body = `nwr${hn}["building"~"^(${RESIDENTIAL_BUILDINGS.join('|')})$"]${around};
                node${hn}[!"building"][!"shop"][!"amenity"][!"office"][!"tourism"][!"craft"]${around};`;
    } else if (type === 'commercial') {
        body = ['shop', 'office', 'craft'].map(k => `nwr${hn}["${k}"]${around};`).join('') +
               `nwr${hn}["amenity"~"^(${COMMERCIAL_AMENITIES.join('|')})$"]${around};` +
               `nwr${hn}["tourism"~"^(${COMMERCIAL_TOURISM.join('|')})$"]${around};` +
               `nwr${hn}["building"~"^(${COMMERCIAL_BUILDINGS.join('|')})$"]${around};`;
    } else {
        body = `nwr${hn}${around};`;
    }
    return `[out:json][timeout:10];(${body});out center tags 50;`;
}

async function searchOverpass(location, type, radiusKm, deadline, errors) {
    const query = buildOverpassQuery(location, type, radiusKm);
    for (const endpoint of OVERPASS_ENDPOINTS) {
        if (budgetedTimeout(deadline, 12000) < 2000) break;
        try {
            const data = await fetchJson(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: 'data=' + encodeURIComponent(query)
            }, budgetedTimeout(deadline, 12000));
            return (data.elements || []).map(fromOverpassElement);
        } catch (error) {
            errors.push(`overpass(${new URL(endpoint).host}): ${error.message}`);
        }
    }
    throw new Error('所有 Overpass 节点均不可用');
}

// 从 Nominatim 结果中取"区"一级：中国的区/县/旗（Nominatim 常把它放在 city 里）、韩国的구/군
function extractCityDistrict(country, parts, a) {
    if (country === 'CN') {
        return [a.city_district, a.district, a.county, a.city].find(name => name &&
            (CN_DISTRICT_PATTERN.test(name) || (/市$/.test(name) && name !== parts.city && name !== parts.state)));
    }
    if (country === 'KR') {
        return a.borough || a.county || a.city_district;
    }
    return undefined;
}

// 用 Nominatim 补全缺失的城市/省州/邮编（只补空字段，不覆盖已有值）
async function fillFromNominatim(candidate, country, deadline, errors) {
    // accept-language 传一个不匹配任何语言的值，Nominatim 会回退到当地名称（与 Photon 的 lang=default 一致）
    const url = `${NOMINATIM_REVERSE_URL}?format=json&lat=${candidate.lat}&lon=${candidate.lng}&zoom=18&addressdetails=1&accept-language=default`;
    try {
        const data = await fetchJson(url, {}, budgetedTimeout(deadline, 8000));
        const a = data.address || {};
        const p = candidate.parts;
        p.cityDistrict = p.cityDistrict || extractCityDistrict(country, p, a);
        const nominatimCity = a.city || a.town || a.village || a.municipality;
        // 中国的 Nominatim city 常常其实是区，不能当作城市
        if (!(country === 'CN' && CN_DISTRICT_PATTERN.test(nominatimCity || ''))) {
            p.city = p.city || nominatimCity;
        }
        p.district = p.district || a.city_district || a.suburb;
        p.county = p.county || a.county;
        p.state = p.state || a.state || a.province;
        p.postcode = p.postcode || a.postcode;
        // 日本：町丁目缺失或只有"N丁目"时，用 Nominatim 的完整町丁目名替换
        if (country === 'JP' && (!p.locality || JP_BARE_CHOME.test(p.locality))) {
            const chome = a.neighbourhood || a.quarter;
            if (chome && !JP_BARE_CHOME.test(chome)) p.locality = chome;
        }
        p.locality = p.locality || a.neighbourhood || a.quarter;
        // 香港：三大区域在 region 或 city_district 中，分区有时在 suburb/town 中，留给 normalizeHongKong 判断
        if (country === 'HK') {
            p.hkHints = [a.city_district, a.region, a.suburb, a.town].filter(Boolean);
        }
        candidate.countryCode = candidate.countryCode || a.country_code;
    } catch (error) {
        errors.push(`nominatim: ${error.message}`);
    }
}

// 州名或缩写（Photon 可能返回 "Oregon" 或 "OR"）→ 缩写
function getUsStateCode(state) {
    if (!state) return null;
    const normalized = state.trim().toLowerCase();
    return Object.keys(US_STATES).find(code =>
        code.toLowerCase() === normalized || US_STATES[code].toLowerCase() === normalized) || null;
}

function getTaxFreeState(state) {
    const code = getUsStateCode(state);
    return code && US_TAX_FREE_STATES[code] ? { code, ...US_TAX_FREE_STATES[code] } : null;
}

function hasHouseAndStreet(candidate) {
    return Boolean(candidate.parts.houseNumber && candidate.parts.street);
}

function hasAdminInfo(parts) {
    return Boolean(parts.city || parts.cityDistrict || parts.district || parts.county || parts.state);
}

// 是否需要调用 Nominatim 补全行政区信息（香港没有邮编，因此总会补全）
function needsNominatim(country, parts) {
    if (!hasAdminInfo(parts) || !parts.postcode || ADMIN_ENRICH_COUNTRIES.includes(country)) return true;
    return country === 'JP' && (!parts.locality || JP_BARE_CHOME.test(parts.locality));
}

function matchesCountry(candidate, country) {
    if (!candidate.countryCode) return true;
    return (ACCEPTED_COUNTRY_CODES[country] || [country]).includes(candidate.countryCode.toUpperCase());
}

// 住宅模式优先用明确标注为住宅的建筑，没有时再退回"只有门牌、用途未标注"的地址
function selectPool(candidates, type) {
    const ofKind = kind => candidates.filter(c => c.kind === kind);
    if (type === 'commercial') return ofKind('commercial');
    if (type === 'residential') {
        const strict = ofKind('residential');
        return strict.length ? strict : ofKind('unspecified');
    }
    return candidates.filter(c => c.kind !== 'other');
}

async function findRealAddress(country, type, options = {}) {
    // 免税州模式下，靠近州界的随机点可能落到隔壁州，结果必须仍在免税州内
    const stateAllowed = parts => !options.taxFree || Boolean(getTaxFreeState(parts.state));
    const errors = [];
    const deadline = Date.now() + TIME_BUDGET_MS;
    let photonFailures = 0;

    for (let round = 1; round <= MAX_ROUNDS && Date.now() < deadline; round++) {
        const location = getRandomLocation(country, options);
        const radiusKm = round <= 2 ? 1.5 : 3;
        let candidates = null;
        let source = '';

        // Photon 连续失败两次后，本次请求不再尝试它
        if (photonFailures < 2) {
            try {
                candidates = await searchPhoton(location, type, radiusKm, deadline);
                source = 'photon';
            } catch (error) {
                photonFailures++;
                errors.push(`photon: ${error.message}`);
            }
        }
        if (!candidates) {
            try {
                candidates = await searchOverpass(location, type, radiusKm, deadline, errors);
                source = 'overpass';
            } catch (error) {
                errors.push(error.message);
                continue;
            }
        }

        const usable = candidates.filter(c => hasHouseAndStreet(c) && matchesCountry(c, country) &&
            (!c.parts.state || stateAllowed(c.parts)));
        for (const candidate of shuffle(selectPool(usable, type)).slice(0, 3)) {
            if (needsNominatim(country, candidate.parts)) {
                await fillFromNominatim(candidate, country, deadline, errors);
            }
            if (hasAdminInfo(candidate.parts) && matchesCountry(candidate, country) && stateAllowed(candidate.parts)) {
                return { ...candidate, source, rounds: round, seed: location.seed };
            }
        }
        errors.push(`第 ${round} 轮（${source}）：附近没有符合条件的门牌地址`);
    }

    const error = new Error('未能找到符合条件的真实地址，请重试或换一个类型/国家');
    error.details = errors;
    throw error;
}

// ==================== 地址格式化 ====================
function joinNonEmpty(list, separator) {
    return list.map(s => (s || '').trim()).filter(Boolean).join(separator);
}

// 去掉重复或互相包含的行政区名（如"上海"与"上海市"、city 与 district 相同）
function uniqueAdmin(list) {
    const result = [];
    for (const item of list) {
        if (!item || result.some(x => x.includes(item) || item.includes(x))) continue;
        result.push(item);
    }
    return result;
}

function hasCjk(value) {
    return /[\u3400-\u9fff]/.test(value || '');
}

// 拆分中英混写的名称，如"彌敦道 Nathan Road" → { zh: '彌敦道', en: 'Nathan Road' }
function splitBilingual(value) {
    if (!value) return { zh: null, en: null };
    if (!hasCjk(value)) return { zh: null, en: value.trim() };
    const match = value.match(/[A-Za-z].*$/);
    if (!match) return { zh: value.trim(), en: null };
    return { zh: value.slice(0, match.index).trim() || null, en: match[0].trim() };
}

function findHkDistrict(value) {
    const { zh, en } = splitBilingual(value);
    const enKey = en && en.replace(/&/g, 'and').replace(/\s+District$/i, '').toLowerCase();
    const zhKey = zh && zh.replace(/區$/, '');
    return HK_DISTRICTS.find(d => d.en.toLowerCase() === enKey || d.zh.replace(/區$/, '') === zhKey) || null;
}

function findHkRegion(value) {
    const { zh, en } = splitBilingual(value);
    return Object.keys(HK_REGIONS).find(key =>
        HK_REGIONS[key].en.toLowerCase() === (en || '').toLowerCase() || HK_REGIONS[key].zh === zh) || null;
}

// 香港：确定分区与三大区域，并按指定语言（'en' 英文 / 'zh' 繁体中文）整理字段。
// 整条地址只用一种语言，避免中英混杂；街道没有该语言的名称时返回 null
function normalizeHongKong(parts, lang) {
    const street = splitBilingual(parts.street)[lang];
    if (!street) return null;
    const english = lang === 'en';
    const hints = [parts.district, parts.locality, ...(parts.hkHints || [])];
    const district = hints.map(findHkDistrict).find(Boolean);
    const regionKey = district ? district.region : hints.map(findHkRegion).find(Boolean);
    const region = regionKey ? HK_REGIONS[regionKey] : null;
    // 地区名（如 Quarry Bay）：优先 Photon 的 locality；Photon 的 district 有时是村名而不是 18 区之一，也可当作地区名；
    // 都没有时再从 Nominatim 的 suburb/town 中找。排除分区、三大区域和"香港"本身，并取第一个有该语言名称的
    const isHongKong = v => { const { zh, en } = splitBilingual(v); return en === 'Hong Kong' || zh === '香港'; };
    const area = [parts.locality, parts.district, ...(parts.hkHints || [])]
        .filter(v => v && !findHkDistrict(v) && !findHkRegion(v) && !isHongKong(v))
        .map(v => splitBilingual(v)[lang])
        .find(Boolean);
    return {
        houseNumber: parts.houseNumber,
        street,
        locality: area || undefined,
        cityDistrict: district ? (english ? `${district.en} District` : district.zh) : undefined,
        city: english ? 'Hong Kong' : '香港',
        state: region ? (english ? region.en : region.zh) : undefined
    };
}

// 香港地址的英文与繁体中文版本；缺少某种语言的街道名时该版本为 null
function buildHongKongVersions(found) {
    const versions = {};
    for (const lang of ['en', 'zh']) {
        const parts = normalizeHongKong(found.parts, lang);
        versions[lang] = parts ? {
            address: formatAddress('HK', parts),
            addressParts: { ...parts, country: lang === 'en' ? 'Hong Kong' : '中國香港' },
            placeName: splitBilingual(found.placeName)[lang] || found.placeName
        } : null;
    }
    return versions;
}

// 按国家整理结构化字段，格式化和返回给前端的都是整理后的结果
function normalizeParts(country, parts) {
    if (country === 'HK') {
        // 默认英文；街道只有中文名时用繁体中文
        return normalizeHongKong(parts, 'en') || normalizeHongKong(parts, 'zh');
    }
    const result = { ...parts };
    if (country === 'US') {
        // 州统一为全称，另给出缩写供地址格式化和表单填写使用
        const code = getUsStateCode(result.state);
        if (code) {
            result.state = US_STATES[code];
            result.stateCode = code;
        }
    }
    if (country === 'CN') {
        // 直辖市的数据里 city 常常其实是区：挪到"区/县"，城市改用直辖市名
        if (CN_DISTRICT_PATTERN.test(result.city || '')) {
            result.cityDistrict = result.cityDistrict || result.city;
            result.city = /市$/.test(result.state || '') ? result.state : undefined;
        }
        // Photon 有时把区放在 district 字段（其余情况下 district 是"街道"）
        if (!result.cityDistrict && CN_DISTRICT_PATTERN.test(result.district || '')) {
            result.cityDistrict = result.district;
        }
    }
    if (country === 'TW' && /[區鄉鎮市]$/.test(result.district || '') && result.district !== result.city) {
        result.cityDistrict = result.district;
    }
    if (country === 'JP') {
        // 政令指定都市的区（东京 23 区本身就是 city，不重复）
        if (/[区町村]$/.test(result.district || '') && result.district !== result.city) {
            result.cityDistrict = result.district;
        }
        // Photon 有时把都道府县（如"東京都"）放在 city：挪到 state，东京特别区等作为城市
        if (/[都道府県]$/.test(result.city || '') && (!result.state || result.state === result.city)) {
            result.state = result.city;
            result.city = result.cityDistrict || undefined;
            result.cityDistrict = undefined;
        }
        // 日本地址不用街道名："番"并入门牌号（番-号），街道字段改为町丁目
        if (/^\d+$/.test(result.street || '')) {
            result.houseNumber = `${result.street}-${result.houseNumber}`;
            result.street = result.locality;
        } else if (result.locality) {
            result.street = result.locality;
        }
    }
    return result;
}

function formatAddress(country, parts) {
    const p = parts;
    const cityLike = p.city || p.district || p.county;
    const countryName = COUNTRY_NAMES[country] || country;

    switch (ADDRESS_STYLES[country]) {
        case 'cn': {
            // 中国：省/直辖市 + 市 + 区县 + 路 + 号；"街道""社区"不属于邮寄地址，邮编单独作为字段
            const district = p.cityDistrict || (CN_DISTRICT_PATTERN.test(p.district || '') ? p.district : null);
            const number = /\d$/.test(p.houseNumber) ? p.houseNumber + '号' : p.houseNumber;
            return uniqueAdmin([p.state, p.city, p.county, district]).join('') + p.street + number;
        }
        case 'tw': {
            // 台湾：郵遞區號 + 縣市 + 鄉鎮市區 + 路段 + 號
            const district = p.cityDistrict || (/[區鄉鎮市]$/.test(p.district || '') ? p.district : null);
            const number = /\d$/.test(p.houseNumber) ? p.houseNumber + '號' : p.houseNumber;
            return (p.postcode || '') + uniqueAdmin([p.state, p.city, p.county, district]).join('') + p.street + number;
        }
        case 'jp': {
            // 日本：〒邮编 都道府县 + 市区町村 + 町丁目 + 番-号（normalizeParts 已把町丁目放进 street、番-号放进 houseNumber）
            const line = uniqueAdmin([p.state, p.city, p.cityDistrict]).join('') + (p.street || '') + p.houseNumber;
            return joinNonEmpty([p.postcode ? `〒${p.postcode}` : '', line], ' ');
        }
        case 'kr':
            // 韩国道路名地址：시/도 + 구/군 + 도로명 + 건물번호（동 不属于道路名地址主体，邮编单独作为字段）
            return joinNonEmpty([...uniqueAdmin([p.state, p.city, p.cityDistrict || p.county]), p.street, p.houseNumber], ' ');
        case 'hk': {
            // 香港没有邮编。英文：门牌 街道, 地区, 三大区域, Hong Kong；中文：香港 + 三大区域 + 地区 + 街道 + 号
            const locality = p.locality && !p.street.includes(p.locality) ? p.locality : null;
            if (!hasCjk(p.street)) {
                const area = locality || p.cityDistrict;
                return joinNonEmpty([`${p.houseNumber} ${p.street}`, area, p.state, 'Hong Kong'], ', ');
            }
            // 中文习惯写"大埔"而不是"大埔區"（"東區""北區"这类两字区名保留）
            const zhDistrict = p.cityDistrict && p.cityDistrict.length > 2 ? p.cityDistrict.replace(/區$/, '') : p.cityDistrict;
            const number = /\d$/.test(p.houseNumber) ? p.houseNumber + '號' : p.houseNumber;
            // 中文习惯中港岛地址只写"香港"，不再加"香港島"
            const region = p.state === '香港島' ? '' : (p.state || '');
            return '香港' + region + (locality || zhDistrict || '') + p.street + number;
        }
        case 'uk':
            return joinNonEmpty([`${p.houseNumber} ${p.street}`, cityLike, p.postcode, countryName], ', ');
        case 'fr':
            return joinNonEmpty([`${p.houseNumber} ${p.street}`, joinNonEmpty([p.postcode, cityLike], ' '), countryName], ', ');
        case 'streetFirst':
            return joinNonEmpty([`${p.street} ${p.houseNumber}`, joinNonEmpty([p.postcode, cityLike], ' '), countryName], ', ');
        case 'latin':
            return joinNonEmpty([`${p.street}, ${p.houseNumber}`, joinNonEmpty([p.postcode, cityLike], ' '), countryName], ', ');
        case 'numberFirst':
        default:
            return joinNonEmpty([`${p.houseNumber} ${p.street}`, cityLike, joinNonEmpty([p.stateCode || p.state, p.postcode], ' '), countryName], ', ');
    }
}

// HTML 模板
const htmlContent = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <meta name="description" content="基于 OpenStreetMap 的真实门牌地址生成器，支持住宅与商业地址">
    <title>随机地址生成器</title>
    <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' rx='7' fill='%230d1220'/%3E%3Cpath d='M12 5.5a4.5 4.5 0 0 0-4.5 4.5c0 3.4 4.5 8.5 4.5 8.5s4.5-5.1 4.5-8.5A4.5 4.5 0 0 0 12 5.5zm0 6.2a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4z' fill='white'/%3E%3C/svg%3E">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <!-- 非阻塞加载：字体服务不可用时直接使用系统字体，不影响页面渲染 -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap" media="print" onload="this.media='all'">
    <style>
        /* 布局：顶部命令栏 + 一体化工作台（左：寄件标签式地址，右：满幅地图）+ 收藏列表 */
        :root {
            --bg: #f3f4f7;
            --graticule: rgba(22, 32, 64, .07);
            --surface: #ffffff;
            --surface-2: #f6f7f9;
            --line: #e7e9ef;
            --line-strong: #d6dae3;
            --ink: #0d1220;
            --ink-2: #4b5364;
            --ink-3: #8b92a1;
            --accent: #2f5bff;
            --accent-soft: rgba(47, 91, 255, .1);
            --btn: #0d1220;
            --btn-hover: #262d3e;
            --btn-fg: #ffffff;
            --res: #0f8a5f;
            --res-soft: rgba(15, 138, 95, .1);
            --com: #b0610a;
            --com-soft: rgba(176, 97, 10, .1);
            --pub: #6a41d6;
            --pub-soft: rgba(106, 65, 214, .1);
            --tax: #0b7a74;
            --tax-soft: rgba(11, 122, 116, .1);
            --danger: #d23b3b;
            --danger-soft: rgba(210, 59, 59, .08);
            --shadow: 0 1px 1px rgba(13, 18, 32, .03), 0 12px 32px -12px rgba(13, 18, 32, .12);
            --font-display: "Geist", -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif;
            --font-body: "Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif;
            --font-mono: "Geist Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
            color-scheme: light;
        }

        @media (prefers-color-scheme: dark) {
            :root:not([data-theme="light"]) {
                --bg: #0a0c11;
                --graticule: rgba(255, 255, 255, .05);
                --surface: #11141b;
                --surface-2: #161a23;
                --line: #222734;
                --line-strong: #2e3444;
                --ink: #eef0f5;
                --ink-2: #a4abba;
                --ink-3: #6b7385;
                --accent: #7390ff;
                --accent-soft: rgba(115, 144, 255, .14);
                --btn: #eef0f5;
                --btn-hover: #ffffff;
                --btn-fg: #0a0c11;
                --res: #3ccf91;
                --res-soft: rgba(60, 207, 145, .12);
                --com: #f0a54a;
                --com-soft: rgba(240, 165, 74, .12);
                --pub: #a98bff;
                --pub-soft: rgba(169, 139, 255, .14);
                --tax: #45d3c7;
                --tax-soft: rgba(69, 211, 199, .12);
                --danger: #ff7272;
                --danger-soft: rgba(255, 114, 114, .1);
                --shadow: 0 1px 1px rgba(0, 0, 0, .3), 0 16px 40px -16px rgba(0, 0, 0, .6);
                color-scheme: dark;
            }
        }

        :root[data-theme="dark"] {
            --bg: #0a0c11;
            --graticule: rgba(255, 255, 255, .05);
            --surface: #11141b;
            --surface-2: #161a23;
            --line: #222734;
            --line-strong: #2e3444;
            --ink: #eef0f5;
            --ink-2: #a4abba;
            --ink-3: #6b7385;
            --accent: #7390ff;
            --accent-soft: rgba(115, 144, 255, .14);
            --btn: #eef0f5;
            --btn-hover: #ffffff;
            --btn-fg: #0a0c11;
            --res: #3ccf91;
            --res-soft: rgba(60, 207, 145, .12);
            --com: #f0a54a;
            --com-soft: rgba(240, 165, 74, .12);
            --pub: #a98bff;
            --pub-soft: rgba(169, 139, 255, .14);
            --tax: #45d3c7;
            --tax-soft: rgba(69, 211, 199, .12);
            --danger: #ff7272;
            --danger-soft: rgba(255, 114, 114, .1);
            --shadow: 0 1px 1px rgba(0, 0, 0, .3), 0 16px 40px -16px rgba(0, 0, 0, .6);
            color-scheme: dark;
        }

        *, *::before, *::after { box-sizing: border-box; }
        [hidden] { display: none !important; }

        body {
            margin: 0;
            min-height: 100vh;
            background: var(--bg);
            color: var(--ink);
            font-family: var(--font-body);
            font-size: 14px;
            line-height: 1.55;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        /* 淡淡的经纬网点阵，铺在页面顶部并向下渐隐 */
        body::before {
            content: "";
            position: absolute;
            inset: 0 0 auto 0;
            height: 520px;
            background-image: radial-gradient(var(--graticule) 1px, transparent 1.3px);
            background-size: 22px 22px;
            background-position: -11px -11px;
            -webkit-mask-image: linear-gradient(to bottom, #000 20%, transparent);
            mask-image: linear-gradient(to bottom, #000 20%, transparent);
            pointer-events: none;
            z-index: 0;
        }

        a { color: inherit; text-decoration: none; }
        button, input, select { font: inherit; color: inherit; }
        :focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; border-radius: 6px; }

        .shell { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; padding-inline: 24px; }

        /* 顶栏 */
        .topbar { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding-block: 20px; }
        .wordmark { display: flex; align-items: center; gap: 10px; }
        .wordmark-mark { width: 30px; height: 30px; border-radius: 9px; background: var(--btn); color: var(--btn-fg); display: grid; place-items: center; }
        .wordmark-name { font-family: var(--font-display); font-weight: 600; font-size: 15px; letter-spacing: -.01em; }
        .topbar-links { display: flex; align-items: center; gap: 4px; }
        .ghost-link { display: inline-flex; align-items: center; gap: 6px; height: 34px; padding: 0 12px; border-radius: 9px; color: var(--ink-2); font-size: 13px; transition: background .15s, color .15s; }
        .ghost-link:hover { background: var(--surface); color: var(--ink); }

        /* 标题区 */
        .intro { padding-block: 24px 24px; }
        .intro h1 { margin: 0; font-family: var(--font-display); font-size: clamp(28px, 4vw, 40px); font-weight: 650; line-height: 1.15; letter-spacing: -.03em; text-wrap: balance; }

        /* 工作台 */
        .workbench { background: var(--surface); border: 1px solid var(--line); border-radius: 20px; box-shadow: var(--shadow); overflow: hidden; }

        .toolbar { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; padding: 14px 16px; border-bottom: 1px solid var(--line); }
        .select-wrap { position: relative; display: flex; align-items: center; min-width: 220px; flex: 0 1 280px; }
        .select-wrap svg { position: absolute; left: 12px; color: var(--ink-3); pointer-events: none; }
        .select {
            width: 100%;
            height: 40px;
            padding: 0 34px 0 36px;
            border: 1px solid var(--line);
            border-radius: 11px;
            background: var(--surface-2) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%238b92a1' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M7 10l5 5 5-5'/%3E%3C/svg%3E") no-repeat right 11px center;
            appearance: none;
            -webkit-appearance: none;
            font-weight: 500;
            cursor: pointer;
            transition: border-color .15s;
        }
        .select:hover { border-color: var(--line-strong); }

        .segmented { position: relative; display: inline-flex; padding: 3px; height: 40px; border: 1px solid var(--line); border-radius: 11px; background: var(--surface-2); }
        .segmented button { position: relative; z-index: 1; border: 0; background: transparent; padding: 0 16px; border-radius: 8px; color: var(--ink-2); font-weight: 500; cursor: pointer; white-space: nowrap; transition: color .2s; }
        .segmented button:hover { color: var(--ink); }
        .segmented button[aria-checked="true"] { color: var(--ink); }
        .segmented-thumb { position: absolute; top: 3px; bottom: 3px; left: 3px; border-radius: 8px; background: var(--surface); box-shadow: 0 1px 2px rgba(13, 18, 32, .08), 0 0 0 1px var(--line); transition: transform .25s cubic-bezier(.3, .7, .2, 1), width .25s cubic-bezier(.3, .7, .2, 1); }

        /* 免税州开关（仅美国显示） */
        .switch-chip { display: inline-flex; align-items: center; gap: 9px; height: 40px; padding: 0 14px 0 12px; border: 1px solid var(--line); border-radius: 11px; background: var(--surface-2); color: var(--ink-2); font-weight: 500; cursor: pointer; white-space: nowrap; transition: border-color .15s, color .15s, background .15s; }
        .switch-chip:hover { border-color: var(--line-strong); color: var(--ink); }
        .switch-track { position: relative; width: 28px; height: 16px; border-radius: 999px; background: var(--line-strong); transition: background .2s; }
        .switch-track::after { content: ""; position: absolute; top: 2px; left: 2px; width: 12px; height: 12px; border-radius: 50%; background: var(--surface); box-shadow: 0 1px 2px rgba(13, 18, 32, .2); transition: transform .2s cubic-bezier(.3, .7, .2, 1); }
        .switch-chip[aria-pressed="true"] { border-color: var(--tax); background: var(--tax-soft); color: var(--tax); }
        .switch-chip[aria-pressed="true"] .switch-track { background: var(--tax); }
        .switch-chip[aria-pressed="true"] .switch-track::after { transform: translateX(12px); }

        .toolbar-end { margin-left: auto; display: flex; align-items: center; gap: 12px; }
        .hint { display: inline-flex; align-items: center; gap: 6px; color: var(--ink-3); font-size: 12px; }
        kbd { display: inline-grid; place-items: center; min-width: 20px; height: 20px; padding: 0 5px; border: 1px solid var(--line-strong); border-bottom-width: 2px; border-radius: 5px; background: var(--surface); font-family: var(--font-mono); font-size: 11px; color: var(--ink-2); }

        .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; height: 40px; padding: 0 18px; border: 1px solid transparent; border-radius: 11px; font-weight: 600; cursor: pointer; white-space: nowrap; transition: background .15s, border-color .15s, color .15s, transform .1s; }
        .btn:active:not(:disabled) { transform: translateY(1px); }
        .btn:disabled { cursor: default; }
        .btn-primary { background: var(--btn); color: var(--btn-fg); }
        .btn-primary:hover:not(:disabled) { background: var(--btn-hover); }
        .btn-quiet { height: 32px; padding: 0 11px; border-color: var(--line); background: var(--surface); color: var(--ink-2); font-size: 13px; font-weight: 500; border-radius: 9px; }
        .btn-quiet:hover:not(:disabled) { border-color: var(--line-strong); color: var(--ink); }
        .btn-quiet.danger:hover:not(:disabled) { color: var(--danger); background: var(--danger-soft); border-color: transparent; }

        .spinner { display: none; width: 15px; height: 15px; border: 2px solid currentColor; border-right-color: transparent; border-radius: 50%; animation: spin .7s linear infinite; }
        .btn.is-loading .spinner { display: inline-block; }
        .btn.is-loading .btn-icon { display: none; }
        @keyframes spin { to { transform: rotate(360deg); } }

        .alert { display: grid; gap: 4px; margin: 16px 16px 0; padding: 12px 14px; border-radius: 12px; background: var(--danger-soft); color: var(--danger); font-size: 13px; }
        .alert strong { font-weight: 600; }
        .alert summary { cursor: pointer; color: var(--ink-2); }
        .alert pre { margin: 8px 0 0; padding: 10px 12px; border-radius: 8px; background: var(--surface); color: var(--ink-2); font-family: var(--font-mono); font-size: 12px; white-space: pre-wrap; word-break: break-word; }

        .panes { display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(0, 1fr); min-height: 560px; }

        /* 左：地址标签 */
        .label-pane { position: relative; display: flex; flex-direction: column; min-width: 0; padding: 28px 30px 24px; border-right: 1px solid var(--line); }
        .progress { position: absolute; top: 0; left: 0; right: 0; height: 2px; overflow: hidden; opacity: 0; transition: opacity .2s; }
        .progress::after { content: ""; position: absolute; top: 0; left: -35%; width: 35%; height: 100%; background: var(--accent); animation: slide 1s ease-in-out infinite; }
        .label-pane.is-loading .progress { opacity: 1; }
        .label-pane.is-loading .label-body { opacity: .4; filter: saturate(.6); pointer-events: none; }
        @keyframes slide { to { left: 100%; } }

        .label-body { display: flex; flex-direction: column; gap: 24px; flex: 1; transition: opacity .2s, filter .2s; }
        .label-body.reveal { animation: reveal .45s cubic-bezier(.2, .7, .2, 1); }
        @keyframes reveal { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }

        .meta { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; min-height: 26px; font-size: 13px; color: var(--ink-2); }
        .pill { display: inline-flex; align-items: center; gap: 7px; height: 26px; padding: 0 11px 0 9px; border-radius: 999px; background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--line); color: var(--ink-2); font-size: 12px; font-weight: 600; }
        .pill::before { content: ""; width: 7px; height: 7px; border-radius: 50%; background: currentColor; }
        .pill-res { background: var(--res-soft); color: var(--res); box-shadow: none; }
        .pill-com { background: var(--com-soft); color: var(--com); box-shadow: none; }
        .pill-pub { background: var(--pub-soft); color: var(--pub); box-shadow: none; }
        .pill-tax { background: var(--tax-soft); color: var(--tax); box-shadow: none; }
        .meta-sep { width: 3px; height: 3px; border-radius: 50%; background: var(--ink-3); }
        .place-name { color: var(--ink); font-weight: 600; }

        .address-block { display: grid; gap: 12px; }
        .address-text { margin: 0; font-family: var(--font-display); font-size: clamp(22px, 2.6vw, 30px); font-weight: 600; line-height: 1.3; letter-spacing: -.02em; text-wrap: balance; overflow-wrap: anywhere; }
        .coords { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; font-family: var(--font-mono); font-size: 12px; color: var(--ink-3); font-variant-numeric: tabular-nums; }
        .coords a:hover { color: var(--accent); }
        .tax-note { display: flex; align-items: center; gap: 8px; margin: 0; font-size: 13px; color: var(--tax); }
        .address-actions { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        /* 香港地址的语言切换 */
        .lang-switch { display: inline-flex; gap: 2px; margin-left: auto; padding: 2px; height: 32px; border: 1px solid var(--line); border-radius: 9px; background: var(--surface-2); }
        .lang-switch button { border: 0; background: transparent; padding: 0 11px; border-radius: 7px; color: var(--ink-2); font-size: 12px; font-weight: 500; cursor: pointer; transition: color .15s, background .15s; }
        .lang-switch button:hover { color: var(--ink); }
        .lang-switch button[aria-checked="true"] { background: var(--surface); color: var(--ink); box-shadow: 0 1px 2px rgba(13, 18, 32, .08), 0 0 0 1px var(--line); }

        .group-title { display: flex; align-items: center; gap: 10px; margin: 0 0 4px; font-size: 12px; font-weight: 600; color: var(--ink-3); letter-spacing: .04em; }
        .group-title::after { content: ""; flex: 1; height: 1px; background: var(--line); }

        .kv-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); column-gap: 4px; }
        .kv { position: relative; display: grid; gap: 1px; min-width: 0; padding: 10px 30px 10px 10px; margin-inline: -10px 0; border: 0; border-radius: 10px; background: transparent; text-align: left; cursor: pointer; transition: background .15s; }
        .kv:hover { background: var(--surface-2); }
        .kv-label { font-size: 12px; color: var(--ink-3); }
        .kv-value { font-size: 15px; font-weight: 500; color: var(--ink); overflow-wrap: anywhere; }
        .kv-icon { position: absolute; top: 11px; right: 9px; display: grid; color: var(--ink-3); opacity: 0; transition: opacity .15s; }
        .kv:hover .kv-icon, .kv:focus-visible .kv-icon, .kv.copied .kv-icon { opacity: 1; }
        .kv .icon-check { display: none; color: var(--res); }
        .kv.copied .icon-copy { display: none; }
        .kv.copied .icon-check { display: block; }

        .save-row { display: flex; gap: 8px; margin-top: auto; padding-top: 18px; border-top: 1px dashed var(--line-strong); }
        .save-row .btn { height: 40px; }
        .input { flex: 1; min-width: 0; height: 40px; padding: 0 12px; border: 1px solid var(--line); border-radius: 11px; background: var(--surface-2); transition: border-color .15s; }
        .input:hover { border-color: var(--line-strong); }
        .input::placeholder { color: var(--ink-3); }

        /* 首次加载骨架 */
        .skeleton { display: grid; gap: 18px; }
        .label-pane:not(.is-empty) .skeleton { display: none; }
        .label-pane.is-empty .label-body { display: none; }
        .sk { height: 14px; border-radius: 7px; background: linear-gradient(90deg, var(--surface-2) 25%, var(--line) 50%, var(--surface-2) 75%); background-size: 200% 100%; animation: shimmer 1.4s linear infinite; }
        .sk-pill { width: 96px; height: 26px; border-radius: 999px; }
        .sk-title { height: 34px; width: 88%; }
        .sk-title.short { width: 55%; }
        .sk-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; margin-top: 10px; }
        .sk-grid .sk { height: 38px; }
        @keyframes shimmer { from { background-position: 200% 0; } to { background-position: -200% 0; } }

        /* 右：地图 */
        .map-pane { display: flex; flex-direction: column; min-width: 0; background: var(--surface-2); }
        .map-wrap { position: relative; flex: 1; min-height: 360px; }
        .map-wrap iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
        .map-foot { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; padding: 12px 16px; border-top: 1px solid var(--line); background: var(--surface); font-size: 13px; }
        .source { font-family: var(--font-mono); font-size: 12px; color: var(--ink-3); }
        .map-links { display: flex; gap: 4px; }
        .map-links a { display: inline-flex; align-items: center; gap: 5px; height: 30px; padding: 0 10px; border-radius: 8px; color: var(--ink-2); font-weight: 500; transition: background .15s, color .15s; }
        .map-links a:hover { background: var(--surface-2); color: var(--ink); }

        /* 收藏 */
        .saved { margin-top: 20px; background: var(--surface); border: 1px solid var(--line); border-radius: 20px; }
        .saved-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 16px 20px; }
        .saved-head h2 { display: flex; align-items: center; gap: 10px; margin: 0; font-family: var(--font-display); font-size: 16px; font-weight: 600; letter-spacing: -.01em; }
        .count { display: inline-grid; place-items: center; min-width: 22px; height: 22px; padding: 0 7px; border-radius: 999px; background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--line); color: var(--ink-2); font-family: var(--font-mono); font-size: 11px; }
        .saved-list { list-style: none; margin: 0; padding: 0; }
        .saved-item { display: grid; grid-template-columns: minmax(150px, .8fr) minmax(0, 2fr) auto; gap: 18px; align-items: center; padding: 14px 20px; border-top: 1px solid var(--line); transition: background .15s; }
        .saved-item:hover { background: var(--surface-2); }
        .saved-who { display: grid; gap: 2px; min-width: 0; }
        .saved-name { font-weight: 600; }
        .saved-phone { font-family: var(--font-mono); font-size: 12px; color: var(--ink-3); }
        .saved-where { display: grid; gap: 4px; min-width: 0; }
        .saved-address { overflow-wrap: anywhere; }
        .saved-tags { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; font-size: 12px; color: var(--ink-3); }
        .saved-tags .pill { height: 22px; font-size: 11px; }
        .saved-actions { display: flex; gap: 6px; }

        /* 页脚：一行品牌 + 数据来源 + 项目链接，下方版权与说明 */
        .site-footer { position: relative; z-index: 1; margin-top: 48px; border-top: 1px solid var(--line); color: var(--ink-3); font-size: 13px; }
        .footer-top { display: flex; align-items: center; justify-content: space-between; gap: 16px 32px; flex-wrap: wrap; padding-block: 22px; }
        .footer-top .wordmark-name { color: var(--ink); }
        .footer-sources { display: flex; align-items: center; gap: 6px 14px; flex-wrap: wrap; }
        .footer-sources-label { color: var(--ink-3); font-size: 12px; }
        .footer-sources a { color: var(--ink-2); transition: color .15s; }
        .footer-sources a:hover { color: var(--ink); }
        .footer-sources a + a::before { content: "·"; margin-right: 14px; color: var(--line-strong); }
        .footer-actions { display: flex; gap: 8px; }
        .footer-actions .btn { text-decoration: none; }
        .footer-bottom { display: flex; justify-content: space-between; gap: 8px 24px; flex-wrap: wrap; padding-block: 16px 36px; border-top: 1px dashed var(--line-strong); font-size: 12px; }
        .footer-bottom a { color: var(--ink-2); text-decoration: underline; text-decoration-color: var(--line-strong); text-underline-offset: 3px; }
        .footer-bottom a:hover { color: var(--ink); }

        .toast { position: fixed; left: 50%; bottom: calc(24px + env(safe-area-inset-bottom, 0px)); z-index: 50; display: inline-flex; align-items: center; gap: 8px; max-width: calc(100% - 32px); padding: 10px 16px; border-radius: 12px; background: var(--btn); color: var(--btn-fg); font-size: 13px; font-weight: 500; box-shadow: var(--shadow); transform: translate(-50%, 10px); opacity: 0; pointer-events: none; transition: opacity .2s, transform .2s; }
        .toast.show { opacity: 1; transform: translate(-50%, 0); }

        @media (max-width: 960px) {
            .panes { grid-template-columns: minmax(0, 1fr); min-height: 0; }
            .label-pane { border-right: 0; border-bottom: 1px solid var(--line); }
            .map-wrap { flex: none; height: 320px; min-height: 0; }
            .hint { display: none; }
        }

        @media (max-width: 640px) {
            .shell { padding-inline: 16px; }
            .topbar { padding-block: 14px; }
            .ghost-link span { display: none; }
            .intro { padding-block: 10px 16px; }
            .footer-sources a + a::before { content: none; }
            .workbench, .saved { border-radius: 16px; }
            .toolbar { padding: 12px; }
            .select-wrap { flex: 1 1 100%; min-width: 0; }
            .segmented { flex: 1; }
            .segmented button { flex: 1; padding: 0 8px; }
            .toolbar-end { margin-left: 0; }
            .label-pane { padding: 22px 18px 18px; }
            .kv-grid, .sk-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            /* 两列时落单的最后一项占满整行，避免电话等长值被折行 */
            .kv-grid .kv:last-child:nth-child(odd) { grid-column: 1 / -1; }
            .save-row { flex-direction: column; }
            .save-row .input { flex: none; width: 100%; }
            .saved-head { padding: 14px 16px; }
            .saved-item { grid-template-columns: minmax(0, 1fr); gap: 8px; padding: 14px 16px; }
        }

        @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; }
        }
    </style>
</head>
<body>
    <div class="shell">
        <header class="topbar">
            <div class="wordmark">
                <span class="wordmark-mark" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-6.5-5.8-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.2-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/></svg>
                </span>
                <span class="wordmark-name">随机地址生成器</span>
            </div>
            <nav class="topbar-links">
                <a class="ghost-link" href="https://github.com/jiangnan1224/AddressGenerator/" target="_blank" rel="noopener">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
                    <span>GitHub</span>
                </a>
            </nav>
        </header>

        <section class="intro">
            <h1>每一个地址，都真实存在</h1>
        </section>

        <main class="workbench">
            <div class="toolbar" role="group" aria-label="生成选项">
                <label class="select-wrap" for="country">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>
                    <select id="country" class="select" aria-label="国家/地区"></select>
                </label>
                <div class="segmented" id="typeSwitch" role="radiogroup" aria-label="地址类型">
                    <span class="segmented-thumb" id="typeThumb" aria-hidden="true"></span>
                    <button type="button" role="radio" data-type="residential" aria-checked="true">住宅</button>
                    <button type="button" role="radio" data-type="commercial" aria-checked="false">商业</button>
                    <button type="button" role="radio" data-type="any" aria-checked="false">不限</button>
                </div>
                <button type="button" id="taxFreeToggle" class="switch-chip" aria-pressed="false" hidden title="只在不征收州销售税的州（OR、DE、NH、MT、AK）中生成">
                    <span class="switch-track" aria-hidden="true"></span>
                    免税州
                </button>
                <div class="toolbar-end">
                    <span class="hint">按 <kbd>R</kbd> 换一个</span>
                    <button type="button" id="generateBtn" class="btn btn-primary">
                        <span class="spinner" aria-hidden="true"></span>
                        <svg class="btn-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg>
                        <span>生成新地址</span>
                    </button>
                </div>
            </div>

            <div id="errorBox" class="alert" role="alert" hidden>
                <strong id="errorMessage"></strong>
                <details id="errorDetailsWrap">
                    <summary>查看详情</summary>
                    <pre id="errorDetails"></pre>
                </details>
            </div>

            <div class="panes">
                <section id="labelPane" class="label-pane is-empty" aria-live="polite" aria-label="地址">
                    <div class="progress" aria-hidden="true"></div>

                    <div class="skeleton" aria-hidden="true">
                        <div class="sk sk-pill"></div>
                        <div class="sk sk-title"></div>
                        <div class="sk sk-title short"></div>
                        <div class="sk-grid"><div class="sk"></div><div class="sk"></div><div class="sk"></div><div class="sk"></div><div class="sk"></div><div class="sk"></div></div>
                    </div>

                    <div id="labelBody" class="label-body">
                        <div class="meta">
                            <span id="typePill" class="pill"></span>
                            <span id="taxPill" class="pill pill-tax" hidden></span>
                            <span id="placeName" class="place-name"></span>
                            <span id="categorySep" class="meta-sep" aria-hidden="true"></span>
                            <span id="category"></span>
                        </div>

                        <div class="address-block">
                            <p id="fullAddress" class="address-text"></p>
                            <div class="coords">
                                <span id="coords"></span>
                                <a id="osmRef" href="#" target="_blank" rel="noopener"></a>
                            </div>
                            <p id="taxNote" class="tax-note" hidden></p>
                            <div class="address-actions">
                                <button type="button" id="copyAddressBtn" class="btn btn-quiet">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/></svg>
                                    复制地址
                                </button>
                                <button type="button" id="copyAllBtn" class="btn btn-quiet">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>
                                    复制全部信息
                                </button>
                                <div class="lang-switch" id="langSwitch" role="radiogroup" aria-label="地址语言" hidden>
                                    <button type="button" role="radio" data-lang="en" aria-checked="true">English</button>
                                    <button type="button" role="radio" data-lang="zh" aria-checked="false">繁體中文</button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 class="group-title">地址明细</h2>
                            <div id="addressFields" class="kv-grid"></div>
                        </div>

                        <div>
                            <h2 class="group-title">收件人</h2>
                            <div id="personFields" class="kv-grid"></div>
                        </div>

                        <div class="save-row">
                            <input id="noteInput" class="input" type="text" maxlength="60" placeholder="添加备注（可选），回车保存">
                            <button type="button" id="saveBtn" class="btn btn-quiet">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                                保存
                            </button>
                        </div>
                    </div>
                </section>

                <section class="map-pane" aria-label="地图">
                    <div class="map-wrap">
                        <iframe id="map" title="地图预览" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div class="map-foot">
                        <span id="sourceInfo" class="source"></span>
                        <div class="map-links">
                            <a id="googleLink" href="https://www.google.com/maps" target="_blank" rel="noopener">Google 地图
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"/></svg>
                            </a>
                            <a id="osmLink" href="https://www.openstreetmap.org/" target="_blank" rel="noopener">OpenStreetMap
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"/></svg>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </main>

        <!-- 有保存记录时才显示 -->
        <section id="savedSection" class="saved" aria-label="已保存的地址" hidden>
            <div class="saved-head">
                <h2>已保存 <span id="savedCount" class="count"></span></h2>
                <button type="button" id="clearAllBtn" class="btn btn-quiet danger">清空</button>
            </div>
            <ul id="savedList" class="saved-list"></ul>
        </section>

        <footer class="site-footer">
            <div class="footer-top">
                <div class="wordmark">
                    <span class="wordmark-mark" aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-6.5-5.8-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.2-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/></svg>
                    </span>
                    <span class="wordmark-name">随机地址生成器</span>
                </div>
                <nav class="footer-sources" aria-label="数据来源">
                    <span class="footer-sources-label">数据来源</span>
                    <a href="https://www.openstreetmap.org/" target="_blank" rel="noopener">OpenStreetMap</a>
                    <a href="https://photon.komoot.io/" target="_blank" rel="noopener">Photon</a>
                    <a href="https://overpass-api.de/" target="_blank" rel="noopener">Overpass</a>
                    <a href="https://nominatim.org/" target="_blank" rel="noopener">Nominatim</a>
                </nav>
                <div class="footer-actions">
                    <a class="btn btn-quiet" href="https://github.com/jiangnan1224/AddressGenerator/" target="_blank" rel="noopener">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
                        GitHub
                    </a>
                    <a class="btn btn-quiet" href="https://github.com/jiangnan1224/AddressGenerator/issues" target="_blank" rel="noopener">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                        反馈问题
                    </a>
                </div>
            </div>
            <div class="footer-bottom">
                <span>地址数据 © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap 贡献者</a>，采用 ODbL 授权</span>
                <span>姓名与电话为随机生成，与真实住户无关</span>
            </div>
        </footer>
    </div>

    <div id="toast" class="toast" role="status" aria-live="polite"></div>

    <script>
    // 包在函数作用域里，避免与全局变量冲突（local.html 中页面与 worker.js 共享全局作用域）
    (function () {
        'use strict';

        const COUNTRIES = [
            { code: 'US', name: '美国' },
            { code: 'UK', name: '英国' },
            { code: 'FR', name: '法国' },
            { code: 'DE', name: '德国' },
            { code: 'CN', name: '中国' },
            { code: 'TW', name: '中国台湾' },
            { code: 'HK', name: '中国香港' },
            { code: 'JP', name: '日本' },
            { code: 'IN', name: '印度' },
            { code: 'AU', name: '澳大利亚' },
            { code: 'BR', name: '巴西' },
            { code: 'CA', name: '加拿大' },
            { code: 'RU', name: '俄罗斯' },
            { code: 'ZA', name: '南非' },
            { code: 'MX', name: '墨西哥' },
            { code: 'KR', name: '韩国' },
            { code: 'IT', name: '意大利' },
            { code: 'ES', name: '西班牙' },
            { code: 'TR', name: '土耳其' },
            { code: 'SA', name: '沙特阿拉伯' },
            { code: 'AR', name: '阿根廷' },
            { code: 'EG', name: '埃及' },
            { code: 'NG', name: '尼日利亚' },
            { code: 'ID', name: '印度尼西亚' }
        ];

        const TYPE_META = {
            residential: { label: '住宅', className: 'pill-res' },
            commercial: { label: '商业', className: 'pill-com' },
            public: { label: '公共设施', className: 'pill-pub' },
            unspecified: { label: '用途未标注', className: '' }
        };
        // OSM 标签的中文说明；未收录的按主键归类，原始标签放在悬停提示里
        const CATEGORY_LABELS = {
            'building=apartments': '公寓楼', 'building=house': '独栋住宅', 'building=residential': '住宅楼',
            'building=detached': '独立住宅', 'building=semidetached_house': '双拼住宅', 'building=terrace': '联排住宅',
            'building=dormitory': '宿舍', 'building=bungalow': '平房', 'building=commercial': '商业楼',
            'building=retail': '零售商铺', 'building=office': '办公楼', 'building=yes': '建筑', 'place=house': '门牌地址',
            'amenity=restaurant': '餐厅', 'amenity=cafe': '咖啡馆', 'amenity=fast_food': '快餐店', 'amenity=bar': '酒吧',
            'amenity=pub': '酒馆', 'amenity=bank': '银行', 'amenity=pharmacy': '药店', 'amenity=clinic': '诊所',
            'amenity=dentist': '牙科诊所', 'amenity=doctors': '诊所', 'amenity=hospital': '医院', 'amenity=school': '学校',
            'amenity=university': '大学', 'amenity=college': '学院', 'amenity=kindergarten': '幼儿园',
            'amenity=place_of_worship': '宗教场所', 'amenity=cinema': '电影院', 'amenity=fuel': '加油站',
            'amenity=post_office': '邮局', 'amenity=library': '图书馆', 'amenity=townhall': '政府机构', 'amenity=police': '警察局',
            'tourism=hotel': '酒店', 'tourism=hostel': '青年旅舍', 'tourism=guest_house': '民宿', 'tourism=motel': '汽车旅馆',
            'tourism=apartment': '公寓酒店', 'tourism=museum': '博物馆', 'tourism=attraction': '景点',
            'shop=supermarket': '超市', 'shop=convenience': '便利店', 'shop=clothes': '服装店', 'shop=bakery': '面包店'
        };
        const CATEGORY_KEY_LABELS = { shop: '商店', office: '办公', craft: '工坊', amenity: '服务设施', tourism: '旅游设施' };
        const ICON_COPY = '<svg class="icon-copy" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/></svg>';
        const ICON_CHECK = '<svg class="icon-check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>';
        const ADDRESS_TYPES = ['residential', 'commercial', 'any'];
        // 地址字段的默认名称，以及按当地习惯的替换
        const FIELD_LABELS = { houseNumber: '门牌号', street: '街道', cityDistrict: '区/县', city: '城市', state: '州/省', postcode: '邮编' };
        const COUNTRY_FIELD_LABELS = {
            JP: { houseNumber: '番地', street: '町丁目', state: '都道府县' },
            HK: { state: '区域' }
        };
        const GENDER_LABELS = { Male: '男', Female: '女' };
        const PREFS_KEY = 'addressGenerator.prefs';
        const SAVED_KEY = 'savedAddresses';
        const NEWLINE = String.fromCharCode(10);

        // current：接口返回的原始结果；view：当前显示的版本（香港地址可切换英文 / 繁体中文）
        const state = { country: 'US', type: 'residential', taxFree: false, hkLang: 'en', current: null, view: null, requestId: 0 };

        function byId(id) {
            return document.getElementById(id);
        }

        function el(tag, className, text) {
            const node = document.createElement(tag);
            if (className) node.className = className;
            if (text !== undefined && text !== null) node.textContent = text;
            return node;
        }

        // localStorage 在隐私模式等情况下可能不可用，读写都要兜底
        function readStorage(key, fallback) {
            try {
                const raw = localStorage.getItem(key);
                return raw ? JSON.parse(raw) : fallback;
            } catch (error) {
                return fallback;
            }
        }

        function writeStorage(key, value) {
            try {
                localStorage.setItem(key, JSON.stringify(value));
            } catch (error) {
                showToast('浏览器存储不可用，无法保存');
            }
        }

        let toastTimer = null;
        function showToast(message) {
            const toast = byId('toast');
            toast.textContent = message;
            toast.classList.add('show');
            clearTimeout(toastTimer);
            toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 1800);
        }

        function legacyCopy(text) {
            const textarea = el('textarea');
            textarea.value = text;
            textarea.setAttribute('readonly', '');
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            let ok = false;
            try {
                ok = document.execCommand('copy');
            } catch (error) {
                ok = false;
            }
            textarea.remove();
            return ok;
        }

        function copyText(text, label) {
            if (!text) return;
            const done = function () { showToast('已复制' + (label ? '「' + label + '」' : '')); };
            const fallback = function () {
                if (legacyCopy(text)) done();
                else showToast('复制失败，请手动选择文本');
            };
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(text).then(done, fallback);
            } else {
                fallback();
            }
        }

        function savePrefs() {
            writeStorage(PREFS_KEY, { country: state.country, type: state.type, taxFree: state.taxFree, hkLang: state.hkLang });
        }

        // 分段控件的滑块跟随选中项
        function syncTypeSwitch() {
            let active = null;
            document.querySelectorAll('#typeSwitch button').forEach(function (button) {
                const checked = button.dataset.type === state.type;
                button.setAttribute('aria-checked', String(checked));
                if (checked) active = button;
            });
            const thumb = byId('typeThumb');
            if (active) {
                thumb.style.width = active.offsetWidth + 'px';
                thumb.style.transform = 'translateX(' + (active.offsetLeft - 3) + 'px)';
            }
        }

        // 免税州开关只对美国有效
        function syncTaxFreeToggle() {
            const toggle = byId('taxFreeToggle');
            toggle.hidden = state.country !== 'US';
            toggle.setAttribute('aria-pressed', String(state.taxFree));
        }

        function setLoading(loading) {
            const button = byId('generateBtn');
            button.classList.toggle('is-loading', loading);
            button.disabled = loading;
            byId('labelPane').classList.toggle('is-loading', loading);
            byId('labelPane').setAttribute('aria-busy', String(loading));
        }

        function showError(message, details) {
            byId('errorMessage').textContent = message;
            const hasDetails = Boolean(details && details.length);
            byId('errorDetails').textContent = hasDetails ? details.join(NEWLINE) : '';
            byId('errorDetailsWrap').hidden = !hasDetails;
            byId('errorBox').hidden = false;
        }

        function hideError() {
            byId('errorBox').hidden = true;
        }

        function describeCategory(category) {
            if (!category) return '';
            return CATEGORY_LABELS[category] || CATEGORY_KEY_LABELS[category.split('=')[0]] || '';
        }

        function formatCoord(value, positive, negative) {
            return Math.abs(value).toFixed(5) + '° ' + (value >= 0 ? positive : negative);
        }

        // rows: [标签, 复制的值, 显示的文本（可选）]，空值不显示
        function renderFields(container, rows) {
            container.replaceChildren();
            rows.forEach(function (row) {
                const label = row[0];
                const value = row[1];
                if (!value) return;
                const item = el('button', 'kv');
                item.type = 'button';
                item.title = '点击复制' + label;
                item.appendChild(el('span', 'kv-label', label));
                item.appendChild(el('span', 'kv-value', row[2] || value));
                const icon = el('span', 'kv-icon');
                icon.innerHTML = ICON_COPY + ICON_CHECK;
                item.appendChild(icon);
                item.addEventListener('click', function () {
                    copyText(value, label);
                    item.classList.add('copied');
                    setTimeout(function () { item.classList.remove('copied'); }, 1200);
                });
                container.appendChild(item);
            });
        }

        // 香港地址两种语言都有时显示切换，并按所选语言替换地址、字段和商户名
        function resolveView(data) {
            const versions = data.localized;
            const both = Boolean(versions && versions.en && versions.zh);
            const langSwitch = byId('langSwitch');
            langSwitch.hidden = !both;
            langSwitch.querySelectorAll('button').forEach(function (button) {
                button.setAttribute('aria-checked', String(button.dataset.lang === state.hkLang));
            });
            const chosen = both ? versions[state.hkLang] : null;
            if (!chosen) return data;
            return Object.assign({}, data, {
                address: chosen.address,
                addressParts: chosen.addressParts,
                placeName: data.placeName ? chosen.placeName : ''
            });
        }

        function renderResult(data, options) {
            const keepMap = Boolean(options && options.keepMap);
            const view = resolveView(data);
            state.view = view;
            const parts = view.addressParts || {};
            const meta = TYPE_META[data.type] || { label: data.type, className: '' };

            const pill = byId('typePill');
            pill.textContent = meta.label;
            pill.className = 'pill ' + meta.className;
            byId('placeName').textContent = view.placeName || '';
            byId('placeName').hidden = !view.placeName;
            const categoryText = describeCategory(data.category);
            const category = byId('category');
            category.textContent = categoryText;
            category.title = data.category || '';
            byId('categorySep').hidden = !(view.placeName && categoryText);

            byId('fullAddress').textContent = view.address;

            const taxFree = data.taxFree;
            byId('taxPill').hidden = !taxFree;
            byId('taxNote').hidden = !taxFree;
            if (taxFree) {
                byId('taxPill').textContent = '免税州 · ' + taxFree.code;
                byId('taxNote').textContent = taxFree.name + '：' + taxFree.note;
            }

            const coords = data.coordinates || {};
            byId('coords').textContent = typeof coords.lat === 'number'
                ? formatCoord(coords.lat, 'N', 'S') + '  ' + formatCoord(coords.lng, 'E', 'W')
                : '';
            const osmRef = byId('osmRef');
            const osmPath = (data.osmUrl || '').split('/').slice(-2);
            osmRef.textContent = osmPath.length === 2 && osmPath[1] ? 'OSM ' + osmPath[0] + ' ' + osmPath[1] : '';
            osmRef.href = data.osmUrl || '#';

            const labels = Object.assign({}, FIELD_LABELS, COUNTRY_FIELD_LABELS[state.country]);
            renderFields(byId('addressFields'), [
                [labels.houseNumber, parts.houseNumber],
                [labels.street, parts.street],
                [labels.cityDistrict, parts.cityDistrict],
                [labels.city, parts.city || parts.district || parts.county],
                [labels.state, parts.state, parts.stateCode ? parts.state + ' · ' + parts.stateCode : null],
                [labels.postcode, parts.postcode]
            ]);

            const genderLabel = GENDER_LABELS[data.gender];
            renderFields(byId('personFields'), [
                ['姓名', data.name],
                ['性别', data.gender, genderLabel ? data.gender + ' · ' + genderLabel : data.gender],
                ['电话', data.phone]
            ]);

            // 用地址文本查询，Google 才会解析出真实地点（点击标记可看地址详情）；
            // 只传坐标会得到无 Place ID 的坐标标记，点击时 GetPlace 返回 404。
            // 商户带上名称以便匹配到具体店铺。
            // 地图始终用接口返回的默认版本查询，切换语言时不重新加载地图
            const query = data.placeName ? data.placeName + ', ' + data.address : data.address;
            if (!keepMap) byId('map').src = 'https://www.google.com/maps?q=' + encodeURIComponent(query) + '&output=embed';
            byId('googleLink').href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(query);
            byId('osmLink').href = data.osmUrl || 'https://www.openstreetmap.org/';
            byId('sourceInfo').textContent = 'via ' + data.source + (data.rounds > 1 ? ' · 第 ' + data.rounds + ' 轮命中' : '');

            byId('labelPane').classList.remove('is-empty');
            const body = byId('labelBody');
            body.classList.remove('reveal');
            void body.offsetWidth;
            body.classList.add('reveal');
        }

        async function generate() {
            // 连续切换时只采用最后一次请求的结果
            const requestId = ++state.requestId;
            setLoading(true);
            hideError();
            try {
                const taxFreeParam = state.country === 'US' && state.taxFree ? '&taxFree=1' : '';
                const response = await fetch('/api?country=' + encodeURIComponent(state.country) + '&type=' + encodeURIComponent(state.type) + taxFreeParam);
                const data = await response.json();
                if (requestId !== state.requestId) return;
                if (!response.ok || data.error) {
                    showError(data.error || '请求失败（HTTP ' + response.status + '）', data.details);
                    return;
                }
                state.current = data;
                renderResult(data);
            } catch (error) {
                if (requestId !== state.requestId) return;
                showError('网络错误，请检查网络后重试', [String(error)]);
            } finally {
                if (requestId === state.requestId) setLoading(false);
            }
        }

        function copyAll() {
            const data = state.view;
            if (!data) return;
            const parts = data.addressParts || {};
            const lines = ['姓名：' + data.name, '性别：' + data.gender, '电话：' + data.phone, '地址：' + data.address];
            if (parts.postcode) lines.push('邮编：' + parts.postcode);
            copyText(lines.join(NEWLINE), '全部信息');
        }

        function saveCurrent() {
            const data = state.view;
            if (!data) return;
            const list = readStorage(SAVED_KEY, []);
            list.push({
                name: data.name,
                gender: data.gender,
                phone: data.phone,
                address: data.address,
                type: (TYPE_META[data.type] || {}).label || data.type,
                taxFree: data.taxFree ? data.taxFree.code : '',
                note: byId('noteInput').value.trim(),
                country: state.country,
                createdAt: Date.now()
            });
            writeStorage(SAVED_KEY, list);
            byId('noteInput').value = '';
            renderSaved();
            showToast('已保存');
        }

        function deleteSaved(index) {
            if (!confirm('确定删除这条记录吗？')) return;
            const list = readStorage(SAVED_KEY, []);
            list.splice(index, 1);
            writeStorage(SAVED_KEY, list);
            renderSaved();
        }

        function clearSaved() {
            if (!confirm('确定清空所有已保存的地址吗？')) return;
            writeStorage(SAVED_KEY, []);
            renderSaved();
        }

        function typeClassFromLabel(label) {
            const match = Object.keys(TYPE_META).find(function (key) { return TYPE_META[key].label === label; });
            return match ? TYPE_META[match].className : '';
        }

        // 存储顺序为旧 → 新（兼容旧版数据），展示时最新的在最上面
        function renderSaved() {
            const list = readStorage(SAVED_KEY, []);
            const ul = byId('savedList');
            ul.replaceChildren();
            byId('savedSection').hidden = !list.length;
            byId('savedCount').textContent = String(list.length);

            for (let index = list.length - 1; index >= 0; index--) {
                const entry = list[index];
                const item = el('li', 'saved-item');

                const who = el('div', 'saved-who');
                who.appendChild(el('span', 'saved-name', entry.name || '—'));
                if (entry.phone) who.appendChild(el('span', 'saved-phone', entry.phone));

                const where = el('div', 'saved-where');
                where.appendChild(el('span', 'saved-address', entry.address || ''));
                const tags = el('div', 'saved-tags');
                if (entry.type) tags.appendChild(el('span', 'pill ' + typeClassFromLabel(entry.type), entry.type));
                if (entry.taxFree) tags.appendChild(el('span', 'pill pill-tax', '免税州 · ' + entry.taxFree));
                if (entry.note) tags.appendChild(el('span', null, entry.note));
                if (tags.childNodes.length) where.appendChild(tags);

                const actions = el('div', 'saved-actions');
                const copyButton = el('button', 'btn btn-quiet', '复制');
                copyButton.type = 'button';
                copyButton.addEventListener('click', function () {
                    copyText([entry.name, entry.phone, entry.address].filter(Boolean).join(NEWLINE), '已保存的地址');
                });
                const deleteButton = el('button', 'btn btn-quiet danger', '删除');
                deleteButton.type = 'button';
                deleteButton.addEventListener('click', function () { deleteSaved(index); });
                actions.appendChild(copyButton);
                actions.appendChild(deleteButton);

                item.appendChild(who);
                item.appendChild(where);
                item.appendChild(actions);
                ul.appendChild(item);
            }
        }

        function isTyping(target) {
            return target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT' || target.isContentEditable);
        }

        function init() {
            const prefs = readStorage(PREFS_KEY, {});
            if (COUNTRIES.some(function (c) { return c.code === prefs.country; })) state.country = prefs.country;
            if (ADDRESS_TYPES.indexOf(prefs.type) >= 0) state.type = prefs.type;
            state.taxFree = prefs.taxFree === true;
            if (prefs.hkLang === 'zh') state.hkLang = 'zh';

            const select = byId('country');
            COUNTRIES.forEach(function (country) {
                const option = el('option', null, country.name + '  ' + country.code);
                option.value = country.code;
                select.appendChild(option);
            });
            select.value = state.country;
            select.addEventListener('change', function () {
                state.country = select.value;
                syncTaxFreeToggle();
                savePrefs();
                generate();
            });

            syncTaxFreeToggle();
            byId('taxFreeToggle').addEventListener('click', function () {
                state.taxFree = !state.taxFree;
                syncTaxFreeToggle();
                savePrefs();
                generate();
            });

            document.querySelectorAll('#typeSwitch button').forEach(function (button) {
                button.addEventListener('click', function () {
                    if (state.type === button.dataset.type) return;
                    state.type = button.dataset.type;
                    syncTypeSwitch();
                    savePrefs();
                    generate();
                });
            });
            syncTypeSwitch();
            // 字体加载完成后按钮宽度会变化，重新对齐滑块
            if (document.fonts && document.fonts.ready) document.fonts.ready.then(syncTypeSwitch);
            window.addEventListener('resize', syncTypeSwitch);

            byId('langSwitch').querySelectorAll('button').forEach(function (button) {
                button.addEventListener('click', function () {
                    if (state.hkLang === button.dataset.lang || !state.current) return;
                    state.hkLang = button.dataset.lang;
                    savePrefs();
                    renderResult(state.current, { keepMap: true });
                });
            });

            byId('generateBtn').addEventListener('click', generate);
            byId('copyAllBtn').addEventListener('click', copyAll);
            byId('copyAddressBtn').addEventListener('click', function () {
                if (state.view) copyText(state.view.address, '完整地址');
            });
            byId('saveBtn').addEventListener('click', saveCurrent);
            byId('noteInput').addEventListener('keydown', function (event) {
                if (event.key === 'Enter') saveCurrent();
            });
            byId('clearAllBtn').addEventListener('click', clearSaved);

            // 快捷键 R：换一个地址（输入时不触发）
            document.addEventListener('keydown', function (event) {
                if (event.key.toLowerCase() !== 'r' || event.metaKey || event.ctrlKey || event.altKey || isTyping(event.target)) return;
                if (!byId('generateBtn').disabled) generate();
            });

            renderSaved();
            generate();
        }

        // 脚本位于 body 末尾，DOM 已就绪
        init();
    })();
    </script>
</body>
</html>`;

function jsonResponse(body, status = 200) {
    return new Response(JSON.stringify(body), {
        status,
        headers: {
            'Content-Type': 'application/json',
            ...corsHeaders
        }
    });
}

async function handleRequest(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    // 处理 API 请求
    if (path === '/api') {
        return handleApiRequest(request);
    }

    // 处理根路径请求，返回 HTML 页面
    return new Response(htmlContent, {
        headers: {
            'Content-Type': 'text/html;charset=UTF-8',
            ...corsHeaders
        }
    });
}

// GET /api?country=US&type=residential|commercial|any[&taxFree=1]
async function handleApiRequest(request) {
    if (request.method === 'OPTIONS') {
        return new Response(null, {
            headers: corsHeaders
        });
    }

    if (request.method !== 'GET') {
        return new Response('Method not allowed', { status: 405 });
    }

    const url = new URL(request.url);
    const country = url.searchParams.get('country') || 'US';
    const type = url.searchParams.get('type') || 'any';
    const taxFree = ['1', 'true'].includes(url.searchParams.get('taxFree'));

    if (!countryCoordinates[country]) {
        return jsonResponse({ error: 'Invalid country code' }, 400);
    }
    if (!ADDRESS_TYPES.includes(type)) {
        return jsonResponse({ error: `Invalid type, expected one of: ${ADDRESS_TYPES.join(', ')}` }, 400);
    }
    if (taxFree && country !== 'US') {
        return jsonResponse({ error: 'taxFree is only supported for country=US' }, 400);
    }

    try {
        const found = await findRealAddress(country, type, { taxFree });
        const parts = normalizeParts(country, found.parts);
        return jsonResponse({
            name: getRandomName(country),
            gender: Math.random() > 0.5 ? 'Male' : 'Female',
            phone: getRandomPhoneNumber(country, country === 'US'
                ? pickUsAreaCodes(found.seed, parts.stateCode)
                : (found.seed && found.seed.areaCodes) || null),
            address: formatAddress(country, parts),
            addressParts: { ...parts, country: COUNTRY_NAMES[country] || country },
            type: found.kind,
            category: found.category,
            placeName: ['commercial', 'public'].includes(found.kind) ? found.placeName : '',
            coordinates: {
                lat: found.lat,
                lng: found.lng
            },
            // 美国地址位于免税州时返回州信息，否则为 null
            taxFree: country === 'US' ? getTaxFreeState(parts.state) : null,
            // 香港地址的英文 / 繁体中文版本（{ en, zh }，缺少的语言为 null），其他地区不返回
            localized: country === 'HK' ? buildHongKongVersions(found) : undefined,
            osmUrl: found.osmUrl,
            source: found.source,
            rounds: found.rounds
        });
    } catch (error) {
        return jsonResponse({ error: error.message, details: error.details || [] }, 503);
    }
}

// 注册事件监听器（在浏览器中由 local.html 加载时，该监听器不会被触发）
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});
