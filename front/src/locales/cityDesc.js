const cityDesc = {
  en: {
    'chefchaouen': "Chefchaouen — Where Blue Becomes Emotion. Some places you see in pictures, and some places you must feel. This magical blue city nestled in the Rif Mountains is one of them. Every alley looks like a painting, every moment feels like a dream. The air is fresh, the pace is calm, and something inside you simply slows down. Wander through breathtaking blue streets, discover authentic local art, and explore unique markets unlike anywhere else in the world. This is not just another destination—it's a deep, emotional experience that stays with you long after you leave. If you're looking for beauty, peace, and a true connection, Chefchaouen is waiting for you.",
    'fes': "Fes is one of Morocco's oldest and most enchanting cities, home to the world's oldest university and a UNESCO World Heritage Site. The ancient medina (old town) is a labyrinth of narrow streets filled with traditional crafts, spice markets, and leather tanneries. Wander through centuries-old souks, discover hidden riads with intricate tilework, and experience the authentic heartbeat of Morocco in this culturally rich destination.",
    'casablanca': "Casablanca — The White City Where Modernity Meets the Atlantic. Casablanca is more than just Morocco's heartbeat; it's a bridge between a glorious past and a soaring future. From the majestic Hassan II Mosque, standing proudly over the ocean waves, to the sleek skyscrapers and the Art Deco charm of its boulevards, the city pulses with a unique cosmopolitan energy. Feel the salty breeze at the Corniche, witness the grandeur of its architecture, and lose yourself in the vibrant rhythm of a metropolis that never sleeps. Casablanca isn't just a destination—it's the soul of modern Morocco, waiting to share its story with you.",
    'marrakech': "Marrakech, the Red City, is a vibrant destination filled with exotic markets, beautiful gardens, and stunning architecture. The iconic Jemaa el-Fnaa square pulses with snake charmers, musicians, and food stalls, while serene gardens like Menara and Majorelle provide peaceful retreats. Experience the perfect blend of bustling medinas and tranquil palaces in this magical city that has captivated travelers for centuries.",
    'merzouga-sahara': "Merzouga & Sahara – Where the Desert Becomes an Experience. Discover the magic of Merzouga and the Sahara Desert — one of the most breathtaking journeys in Morocco. Ride camels across golden dunes, witness unforgettable sunrises and sunsets, and sleep beneath a sky filled with millions of stars. From luxury desert camps and traditional music around the fire to thrilling quad biking and 4x4 adventures, the Sahara offers a rare experience of beauty, silence, and deep emotion. A place where silence speaks, the stars shine brighter, and every moment feels timeless.",
    'ourika-valley': "Ourika Valley, nestled in the High Atlas Mountains just outside Marrakech, is a hidden gem of natural beauty and Berber culture. Crystal-clear rivers, cascading waterfalls, and lush green valleys create a stunning backdrop for hiking and village exploration. Visit traditional Berber villages, enjoy authentic home-cooked cuisine, and discover the warm hospitality of mountain communities in this peaceful alpine retreat.",
    'ifran': "Known as the \"Little Switzerland\" of Morocco, Ifran is a unique mountain town nestled in the Middle Atlas. Unlike any other city in the country, it features alpine-style architecture, red-tiled roofs, and lush parks that transform into a winter wonderland during the snow season. Home to the prestigious Al Akhawayn University, Ifran offers a refreshing escape with its crisp mountain air, clean streets, and the famous stone lion statue. It's the perfect destination for nature lovers, skiers, and those seeking tranquility in a European-style setting in the heart of Africa.",
    'rabat': "Rabat, the elegant capital of Morocco, is a city where ancient history and modern life coexist in perfect harmony. As one of the four imperial cities, it boasts magnificent landmarks like the iconic Hassan Tower and the solemn Mausoleum of Mohammed V. Wander through the blue and white streets of the Oudaya Kasbah, enjoy the tranquil beauty of the Chellah necropolis, and experience the refined atmosphere of a city that serves as the nation's political and administrative heart. With its Atlantic breeze, manicured gardens, and wide boulevards, Rabat offers a sophisticated and peaceful glimpse into Morocco's royal heritage.",
    'tangier': "Tangier, the gateway to Africa, is a legendary city where the Mediterranean meets the Atlantic. Throughout history, it has been a sanctuary for artists, writers, and explorers, creating a unique cosmopolitan atmosphere that sets it apart from any other Moroccan destination. From the mysterious Caves of Hercules and the iconic Cape Spartel to the winding alleys of the Kasbah and the bustling cafes of the Petit Socco, Tangier is a city of myths and modern energy. Experience the salt-tinged breeze, the panoramic views across the Strait of Gibraltar, and the vibrant cultural tapestry of this \"Bride of the North.\"",
    'essaouira': "Discover Essaouira — Morocco’s most charming coastal city. A historic port where the Atlantic Ocean, ancient medina walls, fresh seafood, and vibrant music come together. From blue fishing boats and ocean breeze to Gnawa rhythms and cultural festivals, Essaouira offers a unique blend of relaxation, authenticity, and artistic soul."
  },
  fr: {
    'chefchaouen': "Chefchaouen — Là où le Bleu devient Émotion. Certains endroits se voient en images, d'autres doivent être ressentis. Cette ville bleue magique nichée dans les montagnes du Rif en fait partie. Chaque ruelle ressemble à un tableau, chaque instant est comme un rêve. L'air est pur, le rythme est calme, et quelque chose en vous ralentit tout simplement. Promenez-vous dans les magnifiques rues bleues, découvrez l'art local authentique et explorez des marchés uniques au monde. Si vous recherchez la beauté, la paix et une véritable connexion, Chefchaouen vous attend.",
    'fes': "Fès est l'une des villes les plus anciennes et les plus enchanteresses du Maroc, abritant la plus ancienne université du monde et classée au patrimoine mondial de l'UNESCO. L'ancienne médina est un labyrinthe de rues étroites remplies d'artisanat traditionnel, de marchés aux épices et de tanneries de cuir. Promenez-vous dans les souks, découvrez des riads cachés et découvrez le rythme authentique du Maroc.",
    'casablanca': "Casablanca — La Ville Blanche où la Modernité rencontre l'Atlantique. Casablanca est plus que le cœur du Maroc ; c'est un pont entre un passé glorieux et un avenir prometteur. De la majestueuse mosquée Hassan II, aux gratte-ciel élégants et au charme Art déco de ses boulevards, la ville vibre d'une énergie cosmopolite unique. Casablanca n'est pas qu'une destination, c'est l'âme du Maroc moderne.",
    'marrakech': "Marrakech, la Ville Rouge, est une destination vibrante remplie de marchés exotiques, de jardins magnifiques et d'une architecture époustouflante. L'emblématique place Jemaa el-Fna vibre au rythme des charmeurs de serpents et des musiciens, tandis que les jardins sereins comme la Menara et Majorelle offrent des retraites paisibles. Découvrez le mélange parfait entre médinas animées et palais tranquilles.",
    'merzouga-sahara': "Merzouga & Sahara – Là où le Désert devient une Expérience. Découvrez la magie de Merzouga et du désert du Sahara. Promenez-vous à dos de chameau sur les dunes dorées, assistez à des levers et couchers de soleil inoubliables et dormez sous un ciel rempli de millions d'étoiles. Des camps de luxe dans le désert aux aventures palpitantes, le Sahara offre une expérience rare de beauté et de silence.",
    'ourika-valley': "La vallée de l'Ourika, nichée dans le Haut Atlas juste à côté de Marrakech, est un joyau caché de beauté naturelle et de culture berbère. Rivières cristallines, cascades et vallées verdoyantes créent une toile de fond magnifique pour la randonnée. Visitez des villages berbères traditionnels et découvrez la chaleureuse hospitalité de la montagne.",
    'ifran': "Surnommée la \"Petite Suisse\" du Maroc, Ifrane est une ville de montagne unique nichée dans le Moyen Atlas. Contrairement à toute autre ville du pays, elle présente une architecture de style alpin et des toits de tuiles rouges. Elle offre une escapade rafraîchissante avec son air pur des montagnes et sa célèbre statue de lion en pierre.",
    'rabat': "Rabat, l'élégante capitale du Maroc, est une ville où l'histoire ancienne et la vie moderne coexistent en parfaite harmonie. Elle abrite de magnifiques monuments tels que la Tour Hassan et le Mausolée de Mohammed V. Promenez-vous dans les rues de la Kasbah des Oudayas et profitez de la beauté tranquille de la nécropole du Chellah.",
    'tangier': "Tanger, la porte de l'Afrique, est une ville mythique où la Méditerranée rencontre l'Atlantique. Elle a toujours été un refuge pour les artistes et les écrivains, créant une atmosphère cosmopolite unique. Des mystérieuses grottes d'Hercule aux ruelles sinueuses de la Kasbah, Tanger est une ville pleine d'énergie moderne.",
    'essaouira': "Découvrez Essaouira — la ville côtière la plus charmante du Maroc. Un port historique où l'océan Atlantique, les anciens remparts de la médina, les fruits de mer frais et la musique vibrante se rencontrent. Essaouira offre un mélange unique de détente, d'authenticité et d'âme artistique."
  },
  es: {
    'chefchaouen': "Chefchaouen — Donde el azul se convierte en emoción. Hay lugares que ves en fotos, y otros que debes sentir. Esta mágica ciudad azul enclavada en las montañas del Rif es uno de ellos. Cada callejón parece una pintura, cada momento se siente como un sueño. Pasea por impresionantes calles azules, descubre arte local auténtico y explora mercados únicos.",
    'fes': "Fez es una de las ciudades más antiguas y encantadoras de Marruecos, hogar de la universidad más antigua del mundo y Patrimonio de la Humanidad por la UNESCO. La antigua medina es un laberinto de calles estrechas llenas de artesanía tradicional, mercados de especias y curtidurías de cuero.",
    'casablanca': "Casablanca — La Ciudad Blanca donde la Modernidad se encuentra con el Atlántico. Casablanca es más que el corazón de Marruecos; es un puente entre un pasado glorioso y un futuro prometedor. Siente la brisa salada en la Corniche, admira la grandeza de su arquitectura y piérdete en el ritmo vibrante de una metrópolis que nunca duerme.",
    'marrakech': "Marrakech, la Ciudad Roja, es un destino vibrante lleno de mercados exóticos, hermosos jardines y una arquitectura impresionante. La icónica plaza Jemaa el-Fna palpita con encantadores de serpientes, músicos y puestos de comida, mientras que los tranquilos jardines ofrecen retiros pacíficos.",
    'merzouga-sahara': "Merzouga y el Sahara – Donde el Desierto se convierte en una Experiencia. Descubre la magia de Merzouga y el desierto del Sahara. Monta en camello por dunas doradas, contempla amaneceres y atardeceres inolvidables y duerme bajo un cielo lleno de millones de estrellas.",
    'ourika-valley': "El valle de Ourika, enclavado en las montañas del Alto Atlas a las afueras de Marrakech, es una joya escondida de belleza natural y cultura bereber. Ríos cristalinos, cascadas y valles verdes crean un telón de fondo impresionante para el senderismo.",
    'ifran': "Conocida como la \"Pequeña Suiza\" de Marruecos, Ifrane es una ciudad de montaña única enclavada en el Medio Atlas. Cuenta con una arquitectura de estilo alpino, techos de tejas rojas y exuberantes parques que se transforman en un paraíso invernal durante la temporada de nieve.",
    'rabat': "Rabat, la elegante capital de Marruecos, es una ciudad donde la historia antigua y la vida moderna coexisten en perfecta armonía. Pasea por las calles azules y blancas de la Kasbah de los Oudayas y disfruta de la belleza tranquila de la necrópolis de Chellah.",
    'tangier': "Tánger, la puerta de entrada a África, es una ciudad mítica donde el Mediterráneo se encuentra con el Atlántico. Ha sido un santuario para artistas y escritores, creando una atmósfera cosmopolita única que la distingue de cualquier otro destino marroquí.",
    'essaouira': "Descubre Essaouira — la ciudad costera más encantadora de Marruecos. Un puerto histórico donde el Océano Atlántico, las antiguas murallas de la medina, los mariscos frescos y la música vibrante se unen."
  },
  ar: {
    'chefchaouen': "شفشاون — حيث يتحول الأزرق إلى إحساس. بعض الأماكن تراها في الصور، وبعضها يجب أن تشعر بها. هذه المدينة الزرقاء الساحرة في جبال الريف هي واحدة منها. كل زقاق يبدو وكأنه لوحة فنية.",
    'fes': "فاس هي واحدة من أقدم وأروع المدن في المغرب، وموطن لأقدم جامعة في العالم وموقع تراث عالمي لليونسكو. المدينة القديمة هي متاهة من الشوارع الضيقة المليئة بالحرف التقليدية.",
    'casablanca': "الدار البيضاء — المدينة البيضاء حيث تلتقي الحداثة بالمحيط الأطلسي. الدار البيضاء هي أكثر من مجرد قلب المغرب؛ إنها جسر بين ماضٍ مجيد ومستقبل مشرق. من مسجد الحسن الثاني المهيب إلى ناطحات السحاب الأنيقة.",
    'marrakech': "مراكش، المدينة الحمراء، هي وجهة نابضة بالحياة مليئة بالأسواق الغريبة والحدائق الجميلة والهندسة المعمارية المذهلة. ساحة جامع الفنا الشهيرة تنبض بسحرة الثعابين والموسيقيين.",
    'merzouga-sahara': "مرزوكة والصحراء - حيث تصبح الصحراء تجربة. اكتشف سحر مرزوكة والصحراء الكبرى. اركب الجمال عبر الكثبان الذهبية، وشاهد شروق الشمس وغروبها الذي لا يُنسى، ونم تحت سماء مليئة بملايين النجوم.",
    'ourika-valley': "وادي أوريكا، الواقع في جبال الأطلس الكبير خارج مراكش مباشرة، هو جوهرة خفية من الجمال الطبيعي والثقافة الأمازيغية. الأنهار الصافية والشلالات والوديان الخضراء المورقة.",
    'ifran': "تُعرف إفران باسم \"سويسرا الصغيرة\" في المغرب، وهي مدينة جبلية فريدة تقع في الأطلس المتوسط. تتميز بهندسة معمارية على طراز جبال الألب وأسقف من القرميد الأحمر.",
    'rabat': "الرباط، العاصمة الأنيقة للمغرب، هي مدينة يتعايش فيها التاريخ القديم والحياة الحديثة في وئام تام. كواحدة من المدن الإمبراطورية الأربع، تفتخر بمعالم رائعة مثل صومعة حسان.",
    'tangier': "طنجة، بوابة إفريقيا، هي مدينة أسطورية حيث يلتقي البحر الأبيض المتوسط بالمحيط الأطلسي. على مر التاريخ، كانت ملاذًا للفنانين والكتاب والمستكشفين.",
    'essaouira': "اكتشف الصويرة - المدينة الساحلية الأكثر سحرًا في المغرب. ميناء تاريخي حيث يلتقي المحيط الأطلسي بأسوار المدينة القديمة والمأكولات البحرية الطازجة والموسيقى النابضة بالحياة."
  },
  he: {
    'chefchaouen': "שפשאוון - איפה שהכחול הופך לרגש. המקום הקסום הזה בהרי הריף הוא אחד המקומות שצריך להרגיש. כל סמטה נראית כמו ציור, כל רגע מרגיש כמו חלום. אוויר הרים צלול ושקט פנימי אמיתי.",
    'fes': "פס היא אחת הערים העתיקות והקסומות במרוקו, ביתה של האוניברסיטה העתיקה בעולם. המדינה העתיקה היא מבוך של רחובות צרים מלאים באומנות מסורתית, שווקי תבלינים ובורסקאות.",
    'casablanca': "קזבלנקה - העיר הלבנה שבה המודרניות פוגשת את האוקיינוס האטלנטי. קזבלנקה היא הלב הפועם של מרוקו; גשר בין עבר מפואר לעתיד מזהיר. ממסגד חסן השני ועד לגורדי השחקים המרשימים.",
    'marrakech': "מרקש, העיר האדומה, היא יעד תוסס המלא בשווקים אקזוטיים, גנים יפים וארכיטקטורה מדהימה. כיכר ג'אמע אל-פנא פועמת עם קוסמים, מוזיקאים ודוכני אוכל מסורתיים.",
    'merzouga-sahara': "מרזוגה והסהרה - חוויה במדבר. גלו את הקסם של מדבר הסהרה. רכבו על גמלים בדיונות הזהב, צפו בזריחות ושקיעות בלתי נשכחות, וישנו תחת שמיים זרועי כוכבים.",
    'ourika-valley': "עמק האוריקה, השוכן בהרי האטלס הגבוה מחוץ למרקש, הוא פנינה נסתרת של טבע ותרבות ברברית. נהרות צלולים, מפלים מרהיבים ועמקים ירוקים.",
    'ifran': "איפרן, הידועה כ\"שוויץ הקטנה\" של מרוקו, היא עיירת הרים ייחודית באטלס התיכון. היא מתאפיינת באדריכלות בסגנון אלפיני, גגות רעפים אדומים ופארקים ירוקים.",
    'rabat': "רבאט, הבירה האלגנטית של מרוקו, היא עיר שבה היסטוריה עתיקה וחיים מודרניים מתקיימים יחד בהרמוניה. כעיר אימפריאלית היא מתהדרת בציוני דרך מרהיבים כמו מגדל חסן.",
    'tangier': "טנג'יר, השער לאפריקה, היא עיר אגדית שבה הים התיכון פוגש את האוקיינוס האטלנטי. לאורך ההיסטוריה היא היוותה מקלט לאמנים, סופרים ומגלי ארצות.",
    'essaouira': "אסאווירה - עיר החוף המקסימה ביותר במרוקו. נמל היסטורי שבו האוקיינוס האטלנטי, חומות המדינה העתיקות, פירות ים טריים ומוזיקה תוססת נפגשים."
  },
  de: {
    'chefchaouen': "Chefchaouen — Wo Blau zu Emotion wird. Diese magische blaue Stadt im Rif-Gebirge ist ein Ort, den man fühlen muss. Jede Gasse wirkt wie ein Gemälde.",
    'fes': "Fès ist eine der ältesten und bezauberndsten Städte Marokkos. Die alte Medina ist ein Labyrinth aus engen Gassen voller traditionellem Kunsthandwerk und Gewürzmärkten.",
    'casablanca': "Casablanca — Die weiße Stadt, in der die Moderne auf den Atlantik trifft. Von der majestätischen Hassan-II.-Moschee bis zu den eleganten Wolkenkratzern und dem Art-déco-Charme ihrer Boulevards.",
    'marrakech': "Marrakesch, die Rote Stadt, ist ein lebendiges Reiseziel voller exotischer Märkte, wunderschöner Gärten und atemberaubender Architektur. Erleben Sie den berühmten Platz Djemaa el Fna.",
    'merzouga-sahara': "Merzouga & die Sahara – Wo die Wüste zum Erlebnis wird. Entdecken Sie die Magie der Sahara, reiten Sie auf Kamelen über goldene Dünen und schlafen Sie unter einem Sternenhimmel.",
    'ourika-valley': "Das Ourika-Tal, eingebettet im Hohen Atlas in der Nähe von Marrakesch, ist ein verstecktes Juwel an natürlicher Schönheit und Berberkultur.",
    'ifran': "Ifrane, bekannt als die „kleine Schweiz“ Marokkos, ist eine einzigartige Bergstadt im Mittleren Atlas mit alpenländischer Architektur.",
    'rabat': "Rabat, die elegante Hauptstadt Marokkos, in der alte Geschichte und modernes Leben in perfekter Harmonie zusammenleben. Bewundern Sie den majestätischen Hassan-Turm.",
    'tangier': "Tanger, das Tor zu Afrika, ist eine legendäre Stadt, in der das Mittelmeer auf den Atlantik trifft. Ein historischer Zufluchtsort für Künstler und Schriftsteller.",
    'essaouira': "Entdecken Sie Essaouira — Marokkos bezauberndste Küstenstadt. Ein historischer Hafen, an dem der Atlantik, frische Meeresfrüchte und lebendige Musik zusammenkommen."
  },
  it: {
    'chefchaouen': "Chefchaouen — Dove il blu diventa emozione. Questa magica città blu incastonata nelle montagne del Rif è un luogo che devi sentire. Ogni vicolo sembra un dipinto.",
    'fes': "Fes è una delle città più antiche e affascinanti del Marocco. L'antica medina è un labirinto di stradine piene di artigianato tradizionale e mercati delle spezie.",
    'casablanca': "Casablanca — La città bianca dove la modernità incontra l'Atlantico. Dalla maestosa Moschea Hassan II ai grattacieli eleganti e al fascino Art Déco dei suoi viali.",
    'marrakech': "Marrakech, la Città Rossa, è una destinazione vibrante ricca di mercati esotici, splendidi giardini e un'architettura mozzafiato.",
    'merzouga-sahara': "Merzouga e il Sahara: dove il deserto diventa un'esperienza. Cavalca i cammelli sulle dune dorate e dormi sotto un cielo pieno di milioni di stelle.",
    'ourika-valley': "La Valle dell'Ourika, incastonata nelle montagne dell'Alto Atlante, è una gemma nascosta di bellezze naturali e cultura berbera.",
    'ifran': "Nota come la \"Piccola Svizzera\" del Marocco, Ifrane è una città di montagna unica con un'architettura in stile alpino.",
    'rabat': "Rabat, l'elegante capitale del Marocco, dove la storia antica e la vita moderna coesistono in perfetta armonia.",
    'tangier': "Tangeri, la porta d'Africa, è una città leggendaria dove il Mediterraneo incontra l'Atlantico. Un rifugio cosmopolita per artisti e scrittori.",
    'essaouira': "Scopri Essaouira: la città costiera più affascinante del Marocco, dove l'Oceano Atlantico e le antiche mura della medina si incontrano."
  },
  ja: {
    'chefchaouen': "シャウエン — 青が感情になる場所。リーフ山脈に抱かれたこの魔法のような青い街は、写真で見るだけでなく、肌で感じるべき場所です。",
    'fes': "フェズはモロッコで最も古く魅力的な都市の一つであり、世界最古の大学があるユネスコ世界遺産です。",
    'casablanca': "カサブランカ — 現代性と大西洋が出会う白い都市。雄大なハッサン2世モスクからアールデコ調の魅力的な大通りまで。",
    'marrakech': "赤い街マラケシュは、エキゾチックな市場、美しい庭園、素晴らしい建築に満ちた活気ある目的地です。",
    'merzouga-sahara': "メルズーガとサハラ砂漠 — 砂漠が体験となる場所。黄金の砂丘をラクダで進み、何百万もの星空の下で眠りましょう。",
    'ourika-valley': "マラケシュ郊外の高アトラス山脈に位置するウリカ渓谷は、自然の美しさとベルベル文化の隠れた宝石です。",
    'ifran': "モロッコの「小さなスイス」として知られるイフランは、中アトラス山脈にあるアルプス風の建築が特徴のユニークな山岳都市です。",
    'rabat': "モロッコのエレガントな首都ラバトは、古代の歴史と現代の生活が完璧に調和している都市です。",
    'tangier': "アフリカの玄関口であるタンジェは、地中海と大西洋が出会う伝説的な都市です。",
    'essaouira': "エッサウィラ — モロッコで最も魅力的な沿岸都市。大西洋、古代のメディナの城壁、新鮮なシーフードが融合する歴史的な港。"
  },
  zh: {
    'chefchaouen': "舍夫沙万 — 蓝色化为情感的地方。这座坐落在里夫山脉中的神奇蓝色城市，是您必须亲自去感受的地方。",
    'fes': "非斯是摩洛哥最古老、最迷人的城市之一，也是世界上最古老大学的所在地，被联合国教科文组织列为世界遗产。",
    'casablanca': "卡萨布兰卡 — 现代与大西洋交汇的白色之城。从雄伟的哈桑二世清真寺，到时尚的摩天大楼和拥有装饰艺术魅力的林荫大道。",
    'marrakech': "马拉喀什，这座红色之城，是一个充满异国情调的市场、美丽的花园和迷人建筑的充满活力的目的地。",
    'merzouga-sahara': "梅尔祖卡与撒哈拉 — 沙漠成为体验的地方。骑着骆驼穿越金色的沙丘，在数百万颗星星闪烁的夜空下入睡。",
    'ourika-valley': "奥里卡山谷依偎在马拉喀什郊外的高阿特拉斯山脉中，是自然美景和柏柏尔文化的隐藏宝石。",
    'ifran': "伊夫兰被誉为摩洛哥的“小瑞士”，是中阿特拉斯山脉中一座独特的山城，拥有高山风格的建筑。",
    'rabat': "拉巴特，摩洛哥优雅的首都，是一座古老历史与现代生活完美和谐共存的城市。",
    'tangier': "丹吉尔是通往非洲的门户，是一座地中海与大西洋交汇的传奇城市。在历史上，它一直是艺术家和作家的避难所。",
    'essaouira': "探索索维拉 — 摩洛哥最迷人的海滨城市。这是一个历史悠久的港口，大西洋、古老的麦地那城墙和新鲜的海鲜在这里完美结合。"
  },
  ko: {
    'chefchaouen': "쉐프샤우엔 — 파란색이 감정이 되는 곳. 리프 산맥에 자리 잡은 이 마법 같은 파란 도시는 직접 느껴봐야 할 곳입니다.",
    'fes': "페스는 모로코에서 가장 오래되고 매혹적인 도시 중 하나로, 세계에서 가장 오래된 대학이 있는 유네스코 세계 문화 유산입니다.",
    'casablanca': "카사블랑카 — 현대성과 대서양이 만나는 하얀 도시. 웅장한 하산 2세 모스크부터 세련된 마천루까지 카사블랑카의 매력을 느껴보세요.",
    'marrakech': "붉은 도시 마라케시는 이국적인 시장, 아름다운 정원, 놀라운 건축물로 가득한 활기찬 목적지입니다.",
    'merzouga-sahara': "메르주가 & 사하라 — 사막이 경험이 되는 곳. 황금빛 모래 언덕을 가로지르는 낙타 타기와 수백만 개의 별 아래에서 잠들기.",
    'ourika-valley': "마라케시 외곽 하이 아틀라스 산맥에 자리잡은 오리카 계곡은 자연의 아름다움과 베르베르 문화가 숨겨진 보석입니다.",
    'ifran': "모로코의 '작은 스위스'로 알려진 이프란은 미들 아틀라스 산맥에 위치한 독특한 산악 도시로 알프스 스타일의 건축물이 특징입니다.",
    'rabat': "모로코의 우아한 수도 라바트는 고대 역사와 현대 생활이 완벽한 조화를 이루며 공존하는 도시입니다.",
    'tangier': "아프리카의 관문인 탕헤르는 지중해와 대서양이 만나는 전설적인 도시로, 수많은 예술가와 작가들의 안식처였습니다.",
    'essaouira': "에사우이라 — 모로코에서 가장 매력적인 해안 도시. 대서양과 고대 메디나 성벽, 신선한 해산물이 어우러진 역사적인 항구입니다."
  },
  vi: {
    'chefchaouen': "Chefchaouen — Nơi màu xanh trở thành cảm xúc. Thành phố màu xanh kỳ diệu nép mình trong Dãy núi Rif này là nơi bạn phải tự mình cảm nhận.",
    'fes': "Fes là một trong những thành phố lâu đời và mê hoặc nhất của Maroc, nơi có trường đại học lâu đời nhất thế giới và là Di sản Thế giới của UNESCO.",
    'casablanca': "Casablanca — Thành phố trắng nơi sự hiện đại giao thoa với Đại Tây Dương. Từ Nhà thờ Hồi giáo Hassan II hùng vĩ đến những đại lộ mang nét quyến rũ Art Deco.",
    'marrakech': "Marrakech, Thành phố Đỏ, là một điểm đến sôi động với các khu chợ kỳ lạ, khu vườn xinh đẹp và kiến trúc tuyệt đẹp.",
    'merzouga-sahara': "Merzouga & Sahara – Nơi sa mạc trở thành một trải nghiệm. Cưỡi lạc đà qua những cồn cát vàng và ngủ dưới bầu trời đầy hàng triệu vì sao.",
    'ourika-valley': "Thung lũng Ourika, nép mình trong Dãy núi High Atlas ngay ngoại ô Marrakech, là một viên ngọc ẩn giấu của vẻ đẹp thiên nhiên và văn hóa Berber.",
    'ifran': "Được mệnh danh là \"Thụy Sĩ thu nhỏ\" của Maroc, Ifran là một thị trấn miền núi độc đáo với kiến trúc theo phong cách Alpine.",
    'rabat': "Rabat, thủ đô thanh lịch của Maroc, là thành phố nơi lịch sử cổ đại và cuộc sống hiện đại cùng tồn tại trong sự hài hòa hoàn hảo.",
    'tangier': "Tangier, cửa ngõ vào châu Phi, là một thành phố huyền thoại nơi Biển Địa Trung Hải gặp gỡ Đại Tây Dương.",
    'essaouira': "Khám phá Essaouira — thành phố ven biển quyến rũ nhất của Maroc, nơi Đại Tây Dương và những bức tường medina cổ kính hội tụ."
  },
  ru: {
    'chefchaouen': "Шефшауэн — где синий цвет становится эмоцией. Этот волшебный синий город, расположенный в горах Риф, нужно прочувствовать.",
    'fes': "Фес — один из старейших и самых очаровательных городов Марокко. Древняя медина — это лабиринт узких улочек с традиционными ремеслами.",
    'casablanca': "Касабланка — Белый город, где современность встречается с Атлантикой. От величественной мечети Хасана II до гладких небоскребов.",
    'marrakech': "Марракеш, Красный город, — это яркое место, наполненное экзотическими рынками, прекрасными садами и потрясающей архитектурой.",
    'merzouga-sahara': "Мерзуга и Сахара — где пустыня становится приключением. Катайтесь на верблюдах по золотым дюнам и спите под звездным небом.",
    'ourika-valley': "Долина Оурика, расположенная в горах Высокого Атласа, является скрытой жемчужиной природной красоты и берберской культуры.",
    'ifran': "Ифран, известный как «Маленькая Швейцария» Марокко, — уникальный горный городок с архитектурой в альпийском стиле.",
    'rabat': "Рабат, элегантная столица Марокко, — город, где древняя история и современная жизнь сосуществуют в идеальной гармонии.",
    'tangier': "Танжер, ворота в Африку, — легендарный город, где Средиземное море встречается с Атлантикой.",
    'essaouira': "Откройте для себя Эс-Сувейру — самый очаровательный прибрежный город Марокко с древними стенами медины и свежими морепродуктами."
  }
};

export default cityDesc;
