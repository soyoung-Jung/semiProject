const Accs = [
	{
		id: 'a1',
		name: 'TROSS 트로스',
		price: 10000,
		description: '천장트랙조명3등, 화이트',
		detail: '스폿등을 조절하여 원하는 곳에 쉽게 빛을 비출 수 있습니다. 전구는 별도 판매입니다. LED전구 GU10 사용을 권장합니다.',
		imgUrl: 'images/a1.png'
	},


	{
		id: 'a2',
		name: 'ÅRSTID 오르스티드',
		price: 24900,
		description: '탁상스탠드, 황동, 화이트',
		detail: '세월이 흘러도 변치 않는 아름다움을 지닌 근사한 조명을 소개합니다. 시리즈에 포함된 조명 제품과 함께 사용해 은은하고 부드러운 불빛으로 방안을 가득 채우고 통일감 있는 인테리어를 연출해보세요.',
		imgUrl: 'images/a2.png'
	},
	
	{
		id: 'a3',
		name: 'TÄRNABY 테르나뷔',
		price: 29900,
		description: '탁상스탠드, 다크그린',
		detail: '아담한 크기로 어디에든 놓고 포근함과 무드를 더할 수 있습니다. 다이얼을 돌려 밝기를 조절하세요. 불빛의 밝기를 약하게 하면 에너지도 절약되고 전기료도 줄어듭니다.',
		imgUrl: 'images/a3.png'
	},
	
	{
		id: 'a4',
		name: 'BÖJA 뵈야',
		price: 39900,
		description: '탁상스탠드, 니켈 도금, 라탄 대나무',
		detail: '대나무를 엮어서 만든 전등갓으로 벽에 멋진 패턴이 생깁니다. 핸드메이드 전등갓으로 제품마다 다른 개성을 느낄 수 있습니다.',
		imgUrl: 'images/a4.png'
	},
	
	{
		id: 'a5',
		name: 'STENMÄTARE 스텐메타레',
		price: 59900,
		description: '단모러그, 멀티컬러133x195 cm',
		detail: '이 러그는 합성 섬유로 제작되었으므로 내구성이 우수하며 오염 방지 효과가 있습니다. 소재는 물이 스며들지 않고 관리가 쉽습니다.',
		imgUrl: 'images/a5.png'
	},
	
	{
		id: 'a6',
		name: 'PILLEMARK 필레마르크',
		price: 14900,
		description: '도어매트, 실내, 무지개색50x90 cm',
		detail: '감각적인 패턴이나 다채로운 색상의 도어매트로 현관 입구에 개성을 더해보세요. 바닥에 미끄럼 방지 처리를 하여 도어매트가 밀리지 않고 미끄럼 사고도 예방할 수 있어요.',
		imgUrl: 'images/a6.png'
	},
	
	{
		id: 'a7',
		name: 'ÄPPLARÖ 에플라뢰 / KLASEN 클라센',
		price: 129900,
		description: '야외용카트, 브라운스테인77x58 cm',
		detail: '에플라뢰/클라센 카트는 추가 수납공간을 만들어주며 쉽게 옮길 수 있습니다. 바비큐 그릴에 꼭 맞는 크기로 접시나 바비큐용품 등을 올려놓기 좋습니다.',
		imgUrl: 'images/a7.png'
	},
	
	{
		id: 'a8',
		name: 'VATTENKRASSE 바텡크라세',
		price: 9900,
		description: '물뿌리개, 아이보리, 골드0.9 l',
		detail: '이 물뿌리개는 세련된 디자인 덕분에 사용하지 않을 때에도 기분 좋게 진열해 둘 수 있습니다. 항상 눈에 띄는 곳에 있으니 식물에 물을 주는 것도 기억하기 쉬워요!',
		imgUrl: 'images/a8.png'
	},
	
	{
		id: 'a9',
		name: 'TONAD 토나드',
		price: 14900,
		description: '장식품, 동물 블랙',
		detail: '놀랍고 재미있는 장식으로 모두의 눈길을 사로잡아보세요.',
		imgUrl: 'images/a9.png'
	},
	
	{
		id: 'a10',
		name: 'ÅTERTÅG 오테르토그',
		price: 14900,
		description: '꽃병3종, 그린/핑크, 옐로',
		detail: '꽃을 꽂으면 예쁜 꽃병이 되고, 그 자체만으로도 멋진 장식품이 됩니다.',
		imgUrl: 'images/a10.png'
	},
	
	{
		id: 'a11',
		name: 'LOSJÖN 로셴',
		price: 9900,
		description: '수건걸이, 혼합 색상 여러 가지 색상',
		detail: '벽에 쉽게 설치할 수 있습니다. 뒷면의 접착스티커나 나사를 이용하여 벽에 고정시켜주세요. 양면 테이프는 매끄러운 표면에만 사용하는 것이 좋습니다. 부착 가능 여부가 확실하지 않을 경우에는 나사를 이용해서 벽에 고정하세요.',
		imgUrl: 'images/a11.png'
	},
	
	{
		id: 'a12',
		name: 'VARDAGEN 바르다겐',
		price: 29900,
		description: '냄비+뚜껑, 에나멜 스틸3 l',
		detail: '지나간 세월을 떠올리게 하는 이 소박한 냄비로 기억에 남을 만한 저녁식사를 준비해 보세요. 음식 준비, 플레이팅, 보관에 적합하므로 화구 및 오븐에서부터 식탁과 냉장고에서까지 식사 준비의 기쁨을 극대화할 수 있습니다.',
		imgUrl: 'images/a12.png'
	},
	
	{
		id: 'a13',
		name: 'TILLSTÄLLNING 틸스텔닝',
		price: 7900,
		description: '냅킨꽂이, 황동색',
		detail: '냅킨의 매수와 상관없이 냅킨을 세워서 보관할 수 있습니다.',
		imgUrl: 'images/a13.png'
	},
	
	{
		id: 'a14',
		name: 'KNYCK 크뉘크',
		price: 4900,
		description: '냅킨꽂이, 블랙',
		detail: '메탈볼로 눌러두면 냅킨이 흐트러지지 않습니다. 메탈볼로 눌러두면 냅킨이 흐트러지지 않습니다.',
		imgUrl: 'images/a14.png'
	},
	
	{
		id: 'a15',
		name: 'KORKEN 코르켄',
		price: 1900,
		description: '병+마개, 유리, 패턴 그린0.5 l',
		detail: 'KORKEN/코르켄 시리즈로 피클이나 잼을 보관하고, 음료를 담아내고, 쿠키를 바삭하게 보관해보세요. 마개가 진공 상태를 유지해주어 신선함을 더욱 오래도록 맛볼 수 있습니다.',
		imgUrl: 'images/a15.png'
	},
	
	{
		id: 'a16',
		name: 'IKEA 365+ 이케아 365+',
		price: 3900,
		description: '유리병+마개, 유리, 코르크0.5 l',
		detail: '상차림에 필요한 모든 제품을 갖춘 IKEA 365+ 시리즈를 만나보세요. 매일을 깔끔하게 맞이하거나 다채로운 색과 소품으로 특별한 날을 위한 테이블을 꾸밀 수도 있어요. 강화유리로 제작되었기 때문에, 음료의 온기와 냉기를 오래도록 유지할 수 있습니다.',
		imgUrl: 'images/a16.png'
	},
	
	{
		id: 'a17',
		name: 'INTRESSANT 인트레산트',
		price: 16900,
		description: '향신료분쇄기, 아카시아나무27 cm',
		detail: '세라믹 제품으로 스틸 소재보다 단단하고 내구성이 뛰어납니다.',
		imgUrl: 'images/a17.png'
	},
	
	{
		id: 'a18',
		name: 'ÄNGSLILJA 엥슬릴리아',
		price: 24900,
		description: '이불커버+베개커버, 라이트옐로150x200/50x80 cm',
		detail: '부드러운 감촉과 은은한 색상이 돋보이는 이불커버입니다. 숨겨진 스냅 단추를 닫으면 이불이 빠져나오지 않죠. 순면 제품이라 부드럽고 통풍과 땀 흡수가 잘돼서 피부에 닿는 감촉이 좋죠.',
		imgUrl: 'images/a18.png'
	},
	
	{
		id: 'a19',
		name: 'STENMÄTARE 스텐메타레',
		price: 5900,
		description: '쿠션커버, 멀티컬러50x50 cm',
		detail: '지퍼식 커버로 쉽게 벗길 수 있습니다. 천연소재인 면은 부드럽고 세탁기 사용이 가능해 관리가 편리합니다.',
		imgUrl: 'images/a19.png'
	},
	
	{
		id: 'a20',
		name: 'BRÄDA 브레다',
		price: 14900,
		description: '노트북받침대, 대나무무늬목42x30 cm',
		detail: '노트북받침대의 다리를 접어서 벽에 걸어두면 공간을 거의 차지하지 않습니다. 경사가 있어서 눈높이에서 편하게 화면을 볼 수 있습니다.',
		imgUrl: 'images/a20.png'
	},

]

export default Accs;