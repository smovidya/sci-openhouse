//ไฟล์นี้เก็บคำถามทั้งหมด
const questionsSai = [
	{
		id: 1,
		question: 'นิสัยไหนที่เป็นตัวเองมากที่สุด',
		choices: [
			'ขี้สงสัย ช่างสังเกต',
			'มีการวางแผนก่อนทำสิ่งต่างๆ',
			'รับรู้ถึงการเปลี่ยนแปลงรอบตัวได้เร็ว',
			'ชอบความท้าทาย มีไอเดียอยู่ตลอด',
		],
	},
	{
		id: 2,
		question: 'ชอบคนที่มีนิสัยแบบไหนที่สุด',
		choices: [
			'คนที่จดจำรายละเอียดได้ดี',
			'คนที่มีเหตุผลรองรับเสมอ',
			'green flag รักน้ำรักปลารักเรา',
			'คนที่ชวนทำกิจกรรมใหม่ๆ',
		],
	},
	{
		id: 3,
		question: 'อยากกินอาหารแบบไหนที่สุด',
		choices: [
			'อาหารที่ทำด้วยความใส่ใจ',
			'อาหารที่อาโหร่ยยย',
			'อาหารที่ไม่ผ่านการแปรรูป',
			'อาหารที่ใช้วัตถุดิบคุณภาพดี',
		],
	},
	{
		id: 4,
		question: 'อยากกินอาหารที่ไหน',
		choices: [
			'ที่ไหนก็ได้ที่มีเธอ',
			'สั่งมากินที่ห้อง',
			'ปิกนิกในสวน',
			'ร้านดังที่กำลังฮิต',
		],
	},
	{
		id: 5,
		question: 'คิดยังไงกับมดที่ไต่เข้ามาในบ้าน',
		choices: [
			'คิดว่ามดอาจจะหิว',
			'คิดหาสาเหตุ/ที่มาของมด',
			'คิดว่าที่ตรงนี้อาจจะเคยเป็นที่อยู่ของมด',
			'แก..ไม่..มี..สิทธิ์ ! มาไต่บ้านนี้',
		],
	},
	// เพิ่มคำถามได้เรื่อย ๆ จนครบ 10 ข้อ
];

const questionsSaiExtra = [
	{
		id: 6,
		question: 'ถ้าไปตั้งแคมป์ เราจะทำหน้าที่ไหน',
		choices: [
			'ช่วยซัพพอร์ตคนรอบๆตัว',
			'วางแผนที่พัก การเดินทาง ค่าใช้จ่าย',
			'เดินสำรวจธรรมชาติ',
			'หาสิ่งของเครื่องใช้ ที่ช่วยอำนวยความสะดวก',
		],
	},
];

const bioQuestion = [
	{
		id: 6,
		question: 'งานอดิเรก',
		choices: [
			'เดินเล่นในสวน',
			'เล่นดนตรี',
			'จิบชายามว่าง',
			'ถ่าย content',
		],
	},
	{
		id: 7,
		question: 'พลังวิเศษ',
		choices: [
			'คุยกับสิ่งมีชีวิตได้ทุกชนิด',
			'เสกสิ่งของที่ต้องการ',
			'ฟื้นฟู/รักษาสิ่งมีชีวิต',
			'ย่อ/ขยายร่าง',
		],
	},
	{
		id: 8,
		question: 'หนังเรื่องที่ชอบ',
		choices: [
			'Zootopia',
			'Scoopy doo',
			'The incredibles',
			'The smurfs',
		],
	},
	{
		id: 9,
		question: 'สถานที่ที่สนใจที่สุด',
		choices: [
			'สวนสัตว์',
			'สวนพฤกษชาติ',
			'โรงบ่มไวน์',
			'อุทยานน้ำพุร้อน',
		],
	},
	{
		id: 10,
		question: 'เพลงที่ใช่ที่สุด',
		choices: [
			'17 - dept',
			'พบรัก Ink',
			'Pink - Blackbean',
			'เพลงรัก - Three man down',
		],
	},
];

const phyQuestion = [
	{
		id: 6,
		question: 'งานอดิเรก',
		choices: [
			'เล่นเกม',
			'ถ่าย content',
			'ร้องเพลง',
			'อ่านหนังสือ',
		],
	},
	{
		id: 7,
		question: 'พลังวิเศษ',
		choices: [
			'Teleport',
			'อ่านใจคนได้',
			'เปลี่ยนรูปร่าง',
			'รู้อนาคต',
		],
	},
	{
		id: 8,
		question: 'หนังเรื่องที่ชอบ',
		choices: [
			'Baymax',
			'Elemental',
			'Powerpuff Girl',
			'Interstella',
		],
	},
	{
		id: 9,
		question: 'สถานที่ที่สนใจที่สุด',
		choices: [
			'อินเตอร์เน็ตคาเฟ่',
			'ชาบูแลป',
			'ร้านเครื่องสำอาง',
			'อุทยานดาราศาสตร์',
		],
	},
	{
		id: 10,
		question: 'เพลงที่ใช่ที่สุด',
		choices: [
			'เพลงอนิเมะ',
			'K-Pop',
			'เพลงสากล',
			'เพลงไทย',
		],
	},
];

const enviQuestion = [
	{
		id: 6,
		question: 'งานอดิเรก',
		choices: [
			'เดินเล่นในสวน',
			'ชมอควาเรียม',
			'ปีนผา',
		],
	},
	{
		id: 7,
		question: 'พลังวิเศษ',
		choices: [
			'ควบคุมสภาพอากาศ',
			'คุยกับสัตว์',
			'มองทะลุสิ่งของ',
		],
	},
	{
		id: 8,
		question: 'หนังเรื่องที่ชอบ',
		choices: [
			'Wall E',
			'SpongeBob Squarepants',
			'Jurrassic Park',
		],
	},
	{
		id: 9,
		question: 'สถานที่ที่สนใจที่สุด',
		choices: [
			'Amazon Rainforest',
			'Maldives',
			'Pompeii',
		],
	},
	{
		id: 10,
		question: 'เพลงที่ใช่ที่สุด',
		choices: [
			'หมวกเมฆสีรุ้ง - yew',
			'วาฬเกยตื้น',
			'ภูเขาบังเส้นผม - stamp',
		],
	},
];

const techQuestion = [
	{
		id: 6,
		question: 'งานอดิเรก',
		choices: [
			'เล่นดนตรี',
			'ทำอาหาร',
			'ดูหนัง',
			'ถ่ายรูป',
			'ออกกำลังกาย',
			'ดูดวง',
		],
	},
	{
		id: 7,
		question: 'พลังวิเศษ',
		choices: [
			'อ่านใจคนได้',
			'กินเท่าไหร่ก็ไม่อ้วน',
			'ควบคุมสิ่งของ',
			'หยุดเวลา',
			'ฟื้นฟู/รักษาสิ่งมีชีวิต',
			'รู้อนาคต',
		],
	},
	{
		id: 8,
		question: 'หนังเรื่องที่ชอบ',
		choices: [
			'Megamind',
			'Ratatouille',
			'Elemental',
			'Bolt',
			'Jurrassic Park',
			'Phineaus&Ferb',
		],
	},
];

const bioExtra = [
	{
		id: 11,
		question: 'เทพเจ้ากรีก/สัตว์ในเทพนิยาย',
		choices: [
			'Aphrodite',
			'Dionysus',
			'Demeter',
			'Hermes',
		],
	},
];

const phyExtra = [
	{
		id: 11,
		question: 'เทพเจ้ากรีก/สัตว์ในเทพนิยาย',
		choices: [
			'Athena',
			'Zeus',
			'Aphrodite',
			'Apollo',
		],
	},
];

const enviExtra = [
	{
		id: 11,
		question: 'เทพเจ้ากรีก/สัตว์ในเทพนิยาย',
		choices: [
			'Diana',
			'Poseidon',
			'Gaia',
		],
	},
];

const techExtra = [
	{
		id: 9,
		question: 'สถานที่ที่สนใจที่สุด',
		choices: [
			'แท่นขุดเจาะน้ำมัน',
			'บรรทัดทอง',
			'IKEA',
			'Art gallery',
			'สวนพฤกษชาติ',
			'โรงบ่มไวน์',
		],
	},
	{
		id: 10,
		question: 'เพลงที่ใช่ที่สุด',
		choices: [
			'ธาตุทองซาวด์ - youngohm',
			'ขาหมู - tatoo colour',
			'ฮัม - plastic plastic',
			'รูปถ่าย - qler',
			'เด็กอินเตอร์ - youngohm',
			'New Woman',
		],
	},
];

const techSuperUltraSpecial = [
	{
		id: 11,
		question: 'เทพเจ้ากรีก/สัตว์ในเทพนิยาย',
		choices: [
			'Athena',
			'Demeter',
			'Hephaetus',
			'Aether',
			'Asclepius',
			'Jahus',
		],
	},
];

export { questionsSai, questionsSaiExtra, bioQuestion, phyQuestion, enviQuestion, techQuestion, bioExtra, phyExtra, enviExtra, techExtra, techSuperUltraSpecial };
