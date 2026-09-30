// 国家坐标数据
const countryCoordinates = {
    "US": [{ lat: 37.7749, lng: -122.4194 }, { lat: 34.0522, lng: -118.2437 }],
    "UK": [{ lat: 51.5074, lng: -0.1278 }, { lat: 53.4808, lng: -2.2426 }],
    "FR": [{ lat: 48.8566, lng: 2.3522 }, { lat: 45.7640, lng: 4.8357 }],
    "DE": [{ lat: 52.5200, lng: 13.4050 }, { lat: 48.1351, lng: 11.5820 }],
    "CN": [{ lat: 39.9042, lng: 116.4074 }, { lat: 31.2304, lng: 121.4737 }, {"lat": 23.1291, "lng": 113.2644}, {"lat": 30.6799, "lng": 104.0679}, {"lat": 30.2582, "lng": 120.1646}],
    "TW": [{ lat: 25.0330, lng: 121.5654 }, { lat: 22.6273, lng: 120.3014 }],
    "HK": [{ lat: 22.3193, lng: 114.1694 },{ lat: 22.3964, lng: 114.1095 }],
    "JP": [{ lat: 35.6895, lng: 139.6917 }, { lat: 34.6937, lng: 135.5023 }],
    "IN": [{ lat: 28.6139, lng: 77.2090 }, { lat: 19.0760, lng: 72.8777 }],
    "AU": [{ lat: -33.8688, lng: 151.2093 }, { lat: -37.8136, lng: 144.9631 }],
    "BR": [{ lat: -23.5505, lng: -46.6333 }, { lat: -22.9068, lng: -43.1729 }],
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
    }
};

// 工具函数
function getRandomLocation(country) {
    const coordsArray = countryCoordinates[country];
    const randomCity = coordsArray[Math.floor(Math.random() * coordsArray.length)];
    const lat = randomCity.lat + (Math.random() - 0.5) * 0.1;
    const lng = randomCity.lng + (Math.random() - 0.5) * 0.1;
    return { lat, lng };
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

function getRandomPhoneNumber(country) {
    const format = phoneFormats[country] || phoneFormats["US"];
    let phone = format.format;

    if (format.areaCodeRanges) {
        const areaCode = generateAreaCode(format.areaCodeRanges);
        phone = phone.replace("XXX", areaCode);
        phone = phone.replace(/X/g, () => Math.floor(Math.random() * 10));
    } else if (format.mobilePrefix) {
        const prefix = format.mobilePrefix[Math.floor(Math.random() * format.mobilePrefix.length)];
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

function isValidAddress(data) {
    return data && 
           data.address && 
           data.address.house_number && 
           data.address.road && 
           (data.address.city || data.address.town);
}

// 处理CORS请求的headers
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

// HTML 模板
const htmlContent = `<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>随机地址生成器</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    animation: {
                        'gradient': 'gradient 8s linear infinite',
                    },
                    keyframes: {
                        gradient: {
                            '0%, 100%': {
                                'background-size': '200% 200%',
                                'background-position': 'left center'
                            },
                            '50%': {
                                'background-size': '200% 200%',
                                'background-position': 'right center'
                            }
                        }
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-gradient-to-br from-blue-50 via-white to-blue-50 text-gray-800 min-h-screen font-['Noto_Sans_SC']">
    <!-- 头部 -->
    <header class="bg-gradient-to-r from-blue-500 via-sky-500 to-blue-500 animate-gradient w-full p-6 shadow-lg">
        <div class="max-w-4xl mx-auto flex items-center justify-between">
            <div class="flex items-center gap-3">
                <img src="https://img.freepik.com/premium-vector/minimal-location-map-icon-logo-symbol-vector-design-transparent_965979-613.jpg?w=2000" alt="Logo" class="w-12 h-12 transform hover:scale-105 transition-transform">
                <h1 class="text-2xl font-bold text-white">随机地址生成器</h1>
            </div>
            <a href="https://github.com/jiangnan1224/AddressGenerator/" 
               target="_blank" 
               class="flex items-center gap-2 text-white hover:text-gray-200 transition-colors">
                <svg viewBox="0 0 16 16" class="w-6 h-6 fill-current" aria-hidden="true">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                <span class="font-medium">GitHub</span>
            </a>
        </div>
    </header>

    <!-- 主要内容 -->
    <main class="container mx-auto px-4 py-8 max-w-5xl">
        <!-- 加载动画 -->
        <div id="loading" class="hidden fixed inset-0 bg-white bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50">
            <div class="bg-white rounded-2xl p-8 flex flex-col items-center shadow-2xl">
                <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mb-4"></div>
                <div class="text-gray-800 text-lg font-medium">正在加载...</div>
            </div>
        </div>

        <div id="copied" class="hidden fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-40 transform transition-transform duration-300">
            已复制到剪贴板！
        </div>

        <!-- 国家选择 -->
        <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-200 mb-8">
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div class="w-full sm:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-2 flex-grow">
                    <label for="country" class="text-blue-600 font-bold whitespace-nowrap">选择国家/地区：</label>
                    <select id="country" 
                            onchange="changeCountry(this.value)" 
                            class="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                    </select>
                </div>
                <button onclick="generateNewAddress(document.getElementById('country').value)" 
                        class="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    获取新地址
                </button>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- 左侧面板 -->
            <div class="space-y-6">
                <!-- 信息卡片 -->
                <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
                    <h2 class="text-xl font-bold mb-6 text-blue-600">个人信息</h2>
                    <div class="space-y-4">
                        <div class="bg-gray-50 p-4 rounded-xl cursor-pointer hover:bg-gray-100 transition-all transform hover:scale-[1.02] hover:shadow-lg" 
                             onclick="copyToClipboard(this.querySelector('span').textContent)">
                            <strong class="text-blue-600">姓名：</strong><span id="name" class="ml-2"></span>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-xl cursor-pointer hover:bg-gray-100 transition-all transform hover:scale-[1.02] hover:shadow-lg" 
                             onclick="copyToClipboard(this.querySelector('span').textContent)">
                            <strong class="text-blue-600">性别：</strong><span id="gender" class="ml-2"></span>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-xl cursor-pointer hover:bg-gray-100 transition-all transform hover:scale-[1.02] hover:shadow-lg" 
                             onclick="copyToClipboard(this.querySelector('span').textContent)">
                            <strong class="text-blue-600">电话：</strong><span id="phone" class="ml-2"></span>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-xl cursor-pointer hover:bg-gray-100 transition-all transform hover:scale-[1.02] hover:shadow-lg" 
                             onclick="copyToClipboard(this.querySelector('span').textContent)">
                            <strong class="text-blue-600">地址：</strong><span id="address" class="ml-2"></span>
                        </div>
                    </div>
                </div>

                <!-- 保存按钮 -->
                <button onclick="saveAddress()" 
                        class="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                    保存地址
                </button>
            </div>

            <!-- 右侧面板 -->
            <div class="space-y-6">
                <!-- 地图 -->
                <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
                    <h2 class="text-xl font-bold mb-6 text-blue-600">地图预览</h2>
                    <iframe id="map" class="w-full h-[400px] rounded-xl border border-gray-200"></iframe>
                </div>
            </div>
        </div>

        <!-- 已保存的地址表格 -->
        <div class="mt-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
            <h2 class="text-xl font-bold mb-6 text-blue-600">已保存的地址</h2>
            <div class="overflow-x-auto">
                <table class="w-full border-collapse" id="savedAddressesTable">
                    <thead>
                        <tr class="bg-gradient-to-r from-blue-500 to-sky-500 text-white">
                            <th class="p-4 text-left rounded-tl-lg">姓名</th>
                            <th class="p-4 text-left">性别</th>
                            <th class="p-4 text-left">电话号码</th>
                            <th class="p-4 text-left">地址</th>
                            <th class="p-4 text-left">备注</th>
                            <th class="p-4 text-left rounded-tr-lg">操作</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    </main>

    <!-- 页脚 -->
    <footer class="text-center py-8 text-gray-600 text-sm mt-8 bg-gray-50 border-t border-gray-200">
        <p class="max-w-4xl mx-auto px-4">
            All right reserved
            <a href="https://github.com/jiangnan1224/AddressGenerator/" 
               target="_blank" 
               class="inline-flex items-center hover:text-blue-600 transition-colors">
                <img src="https://pic.imgdb.cn/item/66e7ab36d9c307b7e9cefd24.png" alt="GitHub" class="w-5 h-5 ml-1">
            </a>
        </p>
    </footer>

    <script>
        // 国家数据
        const countries = [
            { name: "美国", code: "US" },
            { name: "英国", code: "UK" },
            { name: "法国", code: "FR" },
            { name: "德国", code: "DE" },
            { name: "中国", code: "CN" },
            { name: "中国台湾", code: "TW" },
            { name: "中国香港", code: "HK" },
            { name: "日本", code: "JP" },
            { name: "印度", code: "IN" },
            { name: "澳大利亚", code: "AU" },
            { name: "巴西", code: "BR" },
            { name: "加拿大", code: "CA" },
            { name: "俄罗斯", code: "RU" },
            { name: "南非", code: "ZA" },
            { name: "墨西哥", code: "MX" },
            { name: "韩国", code: "KR" },
            { name: "意大利", code: "IT" },
            { name: "西班牙", code: "ES" },
            { name: "土耳其", code: "TR" },
            { name: "沙特阿拉伯", code: "SA" },
            { name: "阿根廷", code: "AR" },
            { name: "埃及", code: "EG" },
            { name: "尼日利亚", code: "NG" },
            { name: "印度尼西亚", code: "ID" }
        ];

        // 初始化国家选择下拉框
        function initCountrySelect() {
            const select = document.getElementById('country');
            countries.forEach(country => {
                const option = document.createElement('option');
                option.value = country.code;
                option.textContent = country.name;
                select.appendChild(option);
            });
        }

        // 复制到剪贴板
        function copyToClipboard(text) {
            navigator.clipboard.writeText(text).then(() => {
                const copied = document.getElementById('copied');
                copied.classList.remove('hidden');
                copied.classList.add('translate-y-0');
                copied.classList.remove('translate-y-[-100%]');
                
                setTimeout(() => {
                    copied.classList.add('translate-y-[-100%]');
                    copied.classList.remove('translate-y-0');
                    setTimeout(() => {
                        copied.classList.add('hidden');
                    }, 300);
                }, 2000);
            });
        }

        // 显示/隐藏加载动画
        function toggleLoading(show) {
            const loading = document.getElementById('loading');
            if (show) {
                loading.classList.remove('hidden');
            } else {
                loading.classList.add('hidden');
            }
        }

        // 更改国家
        function changeCountry(country) {
            toggleLoading(true);
            generateNewAddress(country);
        }

        // 保存地址
        function saveAddress() {
            const note = prompt('请输入备注（可以留空）') || '';
            const savedAddresses = JSON.parse(localStorage.getItem('savedAddresses') || '[]');
            const newEntry = {
                note: note,
                name: document.getElementById('name').textContent,
                gender: document.getElementById('gender').textContent,
                phone: document.getElementById('phone').textContent,
                address: document.getElementById('address').textContent
            };
            savedAddresses.push(newEntry);
            localStorage.setItem('savedAddresses', JSON.stringify(savedAddresses));
            renderSavedAddresses();
        }

        // 渲染保存的地址
        function renderSavedAddresses() {
            const savedAddresses = JSON.parse(localStorage.getItem('savedAddresses') || '[]');
            const tbody = document.querySelector('#savedAddressesTable tbody');
            tbody.innerHTML = '';
            
            savedAddresses.forEach((entry, index) => {
                const row = tbody.insertRow();
                row.className = 'border-t border-gray-200 hover:bg-gray-50 transition-colors';
                
                const cells = ['name', 'gender', 'phone', 'address', 'note', ''];
                cells.forEach((cell, i) => {
                    const td = row.insertCell();
                    td.className = 'p-4';
                    
                    if (i === cells.length - 1) {
                        const deleteBtn = document.createElement('button');
                        deleteBtn.textContent = '删除';
                        deleteBtn.className = 'bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all transform hover:scale-105 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50';
                        deleteBtn.onclick = () => {
                            if (confirm('确定要删除这条记录吗？')) {
                                savedAddresses.splice(index, 1);
                                localStorage.setItem('savedAddresses', JSON.stringify(savedAddresses));
                                renderSavedAddresses();
                            }
                        };
                        td.appendChild(deleteBtn);
                    } else {
                        td.textContent = entry[cell];
                    }
                });
            });
        }

        // 生成新地址
        async function generateNewAddress(country) {
            if (!country) {
                country = document.getElementById('country').value;
            }
            toggleLoading(true);
            
            try {
                const response = await fetch(\`\${window.location.href}api?country=\${encodeURIComponent(country)}\`);
                const data = await response.json();
                
                if (data.error) {
                    alert(data.error);
                    return;
                }
                
                document.getElementById('name').textContent = data.name;
                document.getElementById('gender').textContent = data.gender;
                document.getElementById('phone').textContent = data.phone;
                document.getElementById('address').textContent = data.address;
                
                // 更新地图
                document.getElementById('map').src = \`https://www.google.com/maps?q=\${encodeURIComponent(data.address)}&output=embed\`;
            } catch (error) {
                console.error('Error fetching address:', error);
                alert('获取地址时发生错误，请重试');
            } finally {
                toggleLoading(false);
            }
        }

        // 页面加载时初始化
        window.onload = function() {
            initCountrySelect();
            generateNewAddress();
            renderSavedAddresses();
        };
    </script>
</body>
</html>`;

async function handleRequest(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    // 处理 API 请求
    if (path === '/api') {
        // 原有的 API 处理逻辑
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

// 将原有的处理逻辑移到单独的函数中
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

    if (!countryCoordinates[country]) {
        return new Response(JSON.stringify({
            error: 'Invalid country code'
        }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
                ...corsHeaders
            }
        });
    }

    let attempts = 0;
    const maxAttempts = 20;
    
    while (attempts < maxAttempts) {
        try {
            const location = getRandomLocation(country);
            const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${location.lat}&lon=${location.lng}&zoom=18&addressdetails=1`;
            
            const response = await fetch(apiUrl, {
                headers: {
                    'User-Agent': 'Cloudflare Worker Random Address Generator'
                }
            });
            
            const data = await response.json();
            
            if (isValidAddress(data)) {
                let city = data.address.city || data.address.town || '';
                city = city.split(';')[0].trim();
                
                const address = `${data.address.house_number} ${data.address.road}, ${city}, ${data.address.postcode || ''}, ${country}`.replace(/\s+/g, ' ').trim();
                
                const name = getRandomName(country);
                const gender = Math.random() > 0.5 ? 'Male' : 'Female';
                const phone = getRandomPhoneNumber(country);
                
                const result = {
                    name,
                    gender,
                    phone,
                    address,
                    coordinates: {
                        lat: location.lat,
                        lng: location.lng
                    }
                };
                
                return new Response(JSON.stringify(result), {
                    headers: {
                        'Content-Type': 'application/json',
                        ...corsHeaders
                    }
                });
            }
            
            attempts++;
            if (attempts < maxAttempts) {
                await new Promise(resolve => setTimeout(resolve, 100));
            }
        } catch (error) {
            attempts++;
            if (attempts < maxAttempts) {
                await new Promise(resolve => setTimeout(resolve, 100));
            }
        }
    }
    
    return new Response(JSON.stringify({
        error: 'Failed to generate valid address after multiple attempts'
    }), {
        status: 500,
        headers: {
            'Content-Type': 'application/json',
            ...corsHeaders
        }
    });
}

// 注册事件监听器
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
}); 
