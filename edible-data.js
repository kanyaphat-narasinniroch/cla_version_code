// edible-data.js — ข้อมูลของพืชกินได้แต่ละชนิด (ใช้กับ edible-detail.html)
// เพิ่ม/แก้ข้อมูลที่ไฟล์นี้ที่เดียว หน้ารายละเอียดจะอัปเดตเอง
// photo = ชื่อไฟล์ในโฟลเดอร์ img/edible/   (รูป 8-bit ใช้ชื่อ <ชื่อไฟล์>_8bit.png ในโฟลเดอร์ img/edible/8bit/)
// ถ้ายังไม่มีไฟล์รูป หน้าเว็บจะโชว์ emoji แทนให้เอง
window.EDIBLES = [
  {
    "id": "chaom",
    "photo": "chaom.jpg",
    "emoji": "🌿",
    "th": "ชะอม",
    "en": "Cha-om",
    "sci": "Acacia pennata",
    "author": "(L.) Willd.",
    "family": "FABACEAE",
    "taste": {
      "th": "รสมัน กลิ่นฉุน",
      "en": "Nutty & pungent"
    },
    "part": {
      "th": "ยอดอ่อนและใบอ่อน",
      "en": "Young shoots & leaves"
    },
    "dishes": {
      "th": "ไข่ชะอมทอด แกงส้ม แกงเลียง",
      "en": "Cha-om omelette, sour curry, Liang soup"
    },
    "group": {
      "th": "ผักพื้นบ้านและผักริมรั้ว",
      "en": "Local vegetable"
    },
    "props": [
      {
        "th": "ยอดอ่อนมีรสมันและกลิ่นฉุนเฉพาะตัว",
        "en": "Young shoots have a nutty taste and a distinctive pungent smell"
      },
      {
        "th": "ให้ใยอาหาร ช่วยเรื่องการขับถ่าย",
        "en": "Provides fiber that helps digestion"
      },
      {
        "th": "ปลูกง่าย ขยายพันธุ์ด้วยการปักชำกิ่ง",
        "en": "Easy to grow from stem cuttings"
      }
    ],
    "usage": [
      {
        "th": "ซอยชะอมผสมไข่ ทอดเป็นไข่ชะอม กินคู่กับน้ำพริกกะปิ",
        "en": "Chop and mix with egg, fry as a Cha-om omelette; eat with shrimp-paste chili dip"
      },
      {
        "th": "ใส่ในแกงส้มหรือแกงเลียงเพื่อเพิ่มกลิ่นและรสมัน",
        "en": "Add to sour curry or Liang soup for aroma and a nutty taste"
      },
      {
        "th": "ลวกหรือนึ่งพอสุก กินเป็นผักแนมน้ำพริก",
        "en": "Blanch or steam lightly and eat with chili dips"
      }
    ],
    "cautions": [
      {
        "th": "ต้นมีหนาม ต้องระวังเวลาเก็บยอด",
        "en": "The plant has thorns; be careful when picking the shoots"
      },
      {
        "th": "ควรล้างให้สะอาดและปรุงให้สุกก่อนกิน",
        "en": "Wash well and cook thoroughly before eating"
      },
      {
        "th": "ถ้าเพิ่งเคยกินครั้งแรก ควรเริ่มจากปริมาณน้อยๆ",
        "en": "If eating it for the first time, start with a small amount"
      }
    ]
  },
  {
    "id": "phakwanpa",
    "photo": "phakwanpa.jpg",
    "emoji": "🌱",
    "th": "ผักหวานป่า",
    "en": "Pak-Waan",
    "sci": "Melientha suavis",
    "author": "Pierre",
    "family": "OPILIACEAE",
    "taste": {
      "th": "รสหวานตามธรรมชาติ",
      "en": "Naturally sweet"
    },
    "part": {
      "th": "ยอดอ่อนและใบอ่อน",
      "en": "Young shoots & leaves"
    },
    "dishes": {
      "th": "แกงเลียง ต้มจืดหมูสับ",
      "en": "Liang soup, minced-pork clear soup"
    },
    "group": {
      "th": "ผักพื้นบ้านและผักริมรั้ว",
      "en": "Local vegetable"
    },
    "props": [
      {
        "th": "ได้ฉายา \"ราชินีผักป่า\" เพราะมีรสหวานกรอบตามธรรมชาติ",
        "en": "Called the \"queen of forest vegetables\" for its natural crisp sweetness"
      },
      {
        "th": "เป็นพืชกึ่งเบียน รากต้องอาศัยพืชอื่นเป็นพืชเลี้ยง จึงปลูกยากและโตช้า",
        "en": "A root hemiparasite that needs host plants, so it is slow and difficult to grow"
      }
    ],
    "usage": [
      {
        "th": "ต้มจืดหมูสับหรือแกงเลียง ใส่ผักตอนท้ายให้สุกพอดี จะได้รสหวานกรอบ",
        "en": "Add near the end of cooking in clear soup or Liang soup to keep it sweet and crisp"
      },
      {
        "th": "ลวกหรือผัดไฟแดงกินเป็นผักสด",
        "en": "Blanch or stir-fry quickly over high heat"
      }
    ],
    "cautions": [
      {
        "th": "อย่าสับสนกับ \"ผักหวานบ้าน\" (Sauropus androgynus) ซึ่งเป็นคนละชนิดและอันตรายถ้ากินดิบหรือคั้นน้ำดื่มปริมาณมาก",
        "en": "Do not confuse with \"Phak Waan Ban\" (Sauropus androgynus), a different plant that is harmful if eaten raw or juiced in large amounts"
      },
      {
        "th": "ควรเก็บยอดแต่พอดี ไม่ตัดหรือถอนต้น เพื่อให้ต้นโตต่อไปได้",
        "en": "Pick only some shoots and never cut down or uproot the plant"
      }
    ]
  },
  {
    "id": "tamlueng",
    "photo": "tamlueng.jpg",
    "emoji": "🥒",
    "th": "ตำลึง",
    "en": "Ivy Gourd",
    "sci": "Coccinia grandis",
    "author": "(L.) Voigt",
    "family": "CUCURBITACEAE",
    "taste": {
      "th": "รสจืดเย็น",
      "en": "Mild & cooling"
    },
    "part": {
      "th": "ยอดอ่อน ใบ และผลอ่อน",
      "en": "Young shoots, leaves & young fruit"
    },
    "dishes": {
      "th": "แกงจืดตำลึงหมูสับ ผัดตำลึงใส่ไข่",
      "en": "Ivy gourd clear soup, stir-fried with egg"
    },
    "group": {
      "th": "ผักพื้นบ้านและผักริมรั้ว",
      "en": "Local vegetable"
    },
    "props": [
      {
        "th": "มีเบตาแคโรทีนสูง ช่วยบำรุงสายตา",
        "en": "Rich in beta-carotene, which supports eyesight"
      },
      {
        "th": "มีใยอาหาร ช่วยระบบขับถ่าย",
        "en": "Contains fiber that helps digestion"
      },
      {
        "th": "เป็นไม้เลื้อยริมรั้ว ปลูกและดูแลง่าย",
        "en": "A fence-side climber that is easy to grow and care for"
      }
    ],
    "usage": [
      {
        "th": "ใส่ในแกงจืดหมูสับหรือต้มจืดเต้าหู้",
        "en": "Add to clear soup with minced pork or tofu"
      },
      {
        "th": "ผัดกับไข่หรือผัดน้ำมันหอย",
        "en": "Stir-fry with egg or oyster sauce"
      },
      {
        "th": "ผลอ่อนนำมาต้มหรือแกงได้",
        "en": "Young fruits can be boiled or cooked in curry"
      }
    ],
    "cautions": [
      {
        "th": "ตำลึงขึ้นริมรั้วริมทาง ควรล้างหลายน้ำ และเลือกเก็บจากที่สะอาดปลอดสารเคมี",
        "en": "It grows along fences and roads; wash well and pick from clean, chemical-free places"
      },
      {
        "th": "ผู้ที่ใช้ยาลดน้ำตาลในเลือดควรปรึกษาแพทย์ ถ้าจะกินปริมาณมากต่อเนื่อง",
        "en": "People taking blood-sugar medication should ask a doctor before eating large amounts regularly"
      }
    ]
  },
  {
    "id": "papaya",
    "photo": "papaya.jpg",
    "emoji": "🥭",
    "th": "มะละกอ",
    "en": "Papaya",
    "sci": "Carica papaya",
    "author": "L.",
    "family": "CARICACEAE",
    "taste": {
      "th": "ผลสุกหวานฉ่ำ ผลดิบจืดกรอบ",
      "en": "Sweet when ripe, mild & crisp when green"
    },
    "part": {
      "th": "ผลดิบและผลสุก",
      "en": "Green and ripe fruit"
    },
    "dishes": {
      "th": "ส้มตำ แกงส้มมะละกอ มะละกอสุกกินสด",
      "en": "Papaya salad, sour curry, fresh ripe papaya"
    },
    "group": {
      "th": "ผลไม้พื้นเมือง",
      "en": "Native fruit"
    },
    "props": [
      {
        "th": "มีเอนไซม์ปาเปน ช่วยย่อยโปรตีน",
        "en": "Contains the enzyme papain, which helps break down protein"
      },
      {
        "th": "ผลสุกมีวิตามินซีและเบตาแคโรทีน",
        "en": "Ripe fruit contains vitamin C and beta-carotene"
      },
      {
        "th": "มีใยอาหาร ช่วยระบบขับถ่าย",
        "en": "Contains fiber that helps digestion"
      }
    ],
    "usage": [
      {
        "th": "ผลดิบสับหรือขูดเป็นเส้น ตำเป็นส้มตำ หรือต้มแกงส้ม",
        "en": "Shred green fruit for papaya salad, or cook it in sour curry"
      },
      {
        "th": "ผลสุกกินสด ปั่นเป็นน้ำผลไม้ หรือกินเป็นของหวาน",
        "en": "Eat ripe fruit fresh, blend into juice, or serve as dessert"
      },
      {
        "th": "ใช้ผลดิบหรือใบห่อเนื้อสัตว์ไว้ ช่วยให้เนื้อนุ่มขึ้น",
        "en": "Wrapping meat with green fruit or leaves can tenderize it"
      }
    ],
    "cautions": [
      {
        "th": "ยางจากผลดิบอาจระคายผิว ควรล้างมือหลังปอก",
        "en": "Latex from green fruit can irritate skin; wash hands after peeling"
      },
      {
        "th": "ผู้ที่แพ้ยางพาราอาจแพ้มะละกอด้วย",
        "en": "People allergic to natural rubber latex may also react to papaya"
      },
      {
        "th": "สตรีมีครรภ์ไม่ควรกินมะละกอดิบหรือกินปริมาณมาก",
        "en": "Pregnant women should avoid green papaya and large amounts"
      }
    ]
  },
  {
    "id": "mangosteen",
    "photo": "mangosteen.jpg",
    "emoji": "🍇",
    "th": "มังคุด",
    "en": "Mangosteen",
    "sci": "Garcinia mangostana",
    "author": "L.",
    "family": "CLUSIACEAE",
    "taste": {
      "th": "หวานอมเปรี้ยว",
      "en": "Sweet with a little sour"
    },
    "part": {
      "th": "เนื้อผล (กลีบสีขาว)",
      "en": "Fruit flesh (white segments)"
    },
    "dishes": {
      "th": "กินสด ปั่น หรือทำของหวานเย็นๆ",
      "en": "Eaten fresh, blended, or in chilled desserts"
    },
    "group": {
      "th": "ผลไม้พื้นเมือง",
      "en": "Native fruit"
    },
    "props": [
      {
        "th": "ได้ชื่อว่า \"ราชินีแห่งผลไม้\" เนื้อขาวฉ่ำ หวานอมเปรี้ยว",
        "en": "Known as the \"queen of fruits\" with juicy white flesh"
      },
      {
        "th": "ให้ใยอาหารและน้ำ กินแล้วสดชื่นคลายร้อน",
        "en": "Provides fiber and water; refreshing in hot weather"
      },
      {
        "th": "เปลือกรสฝาดมีสารแทนนิน ใช้ในตำรายาพื้นบ้าน",
        "en": "The astringent rind contains tannins and is used in folk medicine"
      }
    ],
    "usage": [
      {
        "th": "ใช้มือบีบเปลือกรอบผลเบาๆ แล้วแกะกินเฉพาะเนื้อสีขาว",
        "en": "Gently squeeze around the rind, open it and eat the white flesh"
      },
      {
        "th": "กินสด ปั่นเป็นสมูทตี้ หรือแช่เย็นกินเป็นของหวาน",
        "en": "Eat fresh, blend into a smoothie, or chill as a dessert"
      }
    ],
    "cautions": [
      {
        "th": "ยางสีเหลืองจากเปลือกรสฝาดขมและติดเสื้อผ้าล้างออกยาก",
        "en": "Yellow sap from the rind is bitter and stains clothes"
      },
      {
        "th": "ไม่ควรกินเปลือกหรือผลิตภัณฑ์สกัดจากเปลือกเอง ผู้ใช้ยาละลายลิ่มเลือดควรปรึกษาแพทย์ก่อน",
        "en": "Do not eat the rind or rind extracts on your own; people on blood thinners should ask a doctor first"
      }
    ]
  },
  {
    "id": "jackfruit",
    "photo": "jackfruit.jpg",
    "emoji": "🍈",
    "th": "ขนุน",
    "en": "Jackfruit",
    "sci": "Artocarpus heterophyllus",
    "author": "Lam.",
    "family": "MORACEAE",
    "taste": {
      "th": "หวานหอม",
      "en": "Sweet & fragrant"
    },
    "part": {
      "th": "ยวง ผลอ่อน และเมล็ด",
      "en": "Flesh, young fruit & seeds"
    },
    "dishes": {
      "th": "ขนุนสุกกินสด แกงขนุน ตำขนุน",
      "en": "Ripe jackfruit, jackfruit curry, jackfruit salad"
    },
    "group": {
      "th": "ผลไม้พื้นเมือง",
      "en": "Native fruit"
    },
    "props": [
      {
        "th": "ยวงสุกให้พลังงานจากน้ำตาลธรรมชาติและมีใยอาหาร",
        "en": "Ripe flesh gives energy from natural sugars, plus fiber"
      },
      {
        "th": "ผลอ่อนนำมาปรุงเป็นอาหารคาวได้หลายอย่าง",
        "en": "Young fruit is used in many savory dishes"
      },
      {
        "th": "เมล็ดต้มสุกแล้วกินได้ มีแป้งและโปรตีน",
        "en": "Boiled seeds are edible and contain starch and protein"
      }
    ],
    "usage": [
      {
        "th": "แกะยวงสุกกินสดเป็นผลไม้ หรือนำไปทอดและทำของหวาน",
        "en": "Eat ripe flesh fresh, or fry it or use it in desserts"
      },
      {
        "th": "ผลอ่อนนำมาแกงคั่วหรือตำขนุน",
        "en": "Cook young fruit in curry or make jackfruit salad"
      },
      {
        "th": "เมล็ดต้มหรือปิ้งให้สุกก่อนกิน",
        "en": "Boil or roast the seeds until cooked before eating"
      }
    ],
    "cautions": [
      {
        "th": "ยางขนุนเหนียวติดมือ ให้ทาน้ำมันพืชที่มีดและมือก่อนปอก",
        "en": "Jackfruit sap is very sticky; oil your knife and hands before cutting"
      },
      {
        "th": "ห้ามกินเมล็ดดิบ ต้องทำให้สุกก่อน",
        "en": "Do not eat raw seeds; always cook them first"
      },
      {
        "th": "ผู้ที่ต้องควบคุมน้ำตาลหรือเป็นโรคไตควรจำกัดปริมาณ",
        "en": "People who must control blood sugar or have kidney disease should limit the amount"
      }
    ]
  },
  {
    "id": "bilimbi",
    "photo": "bilimbi.jpg",
    "emoji": "🍋",
    "th": "ตะลิงปลิง",
    "en": "Bilimbi",
    "sci": "Averrhoa bilimbi",
    "author": "L.",
    "family": "OXALIDACEAE",
    "taste": {
      "th": "เปรี้ยวจี๊ด",
      "en": "Very sour"
    },
    "part": {
      "th": "ผล",
      "en": "Fruit"
    },
    "dishes": {
      "th": "ต้มยำ ยำ จิ้มกะปิหวาน",
      "en": "Tom yum, Thai salads, with sweet shrimp paste"
    },
    "group": {
      "th": "ผลไม้พื้นเมือง",
      "en": "Native fruit"
    },
    "props": [
      {
        "th": "รสเปรี้ยวจัด ช่วยเจริญอาหาร",
        "en": "Its strong sourness stimulates the appetite"
      },
      {
        "th": "ใช้แทนมะนาวหรือมะขามเปรี้ยวในอาหารได้",
        "en": "Can replace lime or tamarind for sourness in cooking"
      },
      {
        "th": "ออกผลเป็นพวงตามลำต้นและกิ่งใหญ่",
        "en": "Fruits grow in clusters on the trunk and thick branches"
      }
    ],
    "usage": [
      {
        "th": "ซอยใส่ต้มยำหรือยำ เพิ่มรสเปรี้ยวสดชื่น",
        "en": "Slice into tom yum or Thai salads for fresh sourness"
      },
      {
        "th": "กินสดจิ้มกะปิหวานหรือน้ำปลาหวาน",
        "en": "Eat fresh with sweet shrimp paste or sweet fish sauce"
      },
      {
        "th": "นำไปแช่อิ่มหรือดองเป็นของกินเล่น",
        "en": "Preserve in syrup or brine as a snack"
      }
    ],
    "cautions": [
      {
        "th": "มีกรดออกซาลิกสูง ผู้ที่เป็นนิ่วในไตหรือโรคไตควรหลีกเลี่ยงหรือปรึกษาแพทย์",
        "en": "High in oxalic acid; people with kidney stones or kidney disease should avoid it or ask a doctor"
      },
      {
        "th": "ไม่ควรกินผลสดปริมาณมากหรือดื่มน้ำคั้นเข้มข้นต่อเนื่อง",
        "en": "Avoid eating large amounts or drinking concentrated juice regularly"
      },
      {
        "th": "เปรี้ยวจัด อาจระคายกระเพาะ",
        "en": "Very sour; may irritate the stomach"
      }
    ]
  },
  {
    "id": "pakkut",
    "photo": "pakkut.jpg",
    "emoji": "🥬",
    "th": "ผักกูด",
    "en": "Paco Fern",
    "sci": "Diplazium esculentum",
    "author": "(Retz.) Sw.",
    "family": "ATHYRIACEAE",
    "taste": {
      "th": "รสจืดกรอบ",
      "en": "Mild & crisp"
    },
    "part": {
      "th": "ยอดอ่อนที่ยังม้วนอยู่",
      "en": "Young curled fronds (fiddleheads)"
    },
    "dishes": {
      "th": "ยำผักกูดกุ้งสด ลวกจิ้มน้ำพริก",
      "en": "Fern salad with fresh shrimp, blanched with chili dip"
    },
    "group": {
      "th": "ผักพื้นบ้านและผักริมรั้ว",
      "en": "Local vegetable"
    },
    "props": [
      {
        "th": "เป็นเฟิร์นกินได้ ยอดอ่อนม้วนกรอบอร่อย",
        "en": "An edible fern with crisp, curled young fronds"
      },
      {
        "th": "มีใยอาหาร วิตามิน และแร่ธาตุ",
        "en": "Contains fiber, vitamins and minerals"
      },
      {
        "th": "ชอบความชื้น ขึ้นตามริมลำธารและที่ชุ่มชื้น",
        "en": "Loves moisture; grows beside streams and in damp places"
      }
    ],
    "usage": [
      {
        "th": "ลวกพอสุก ทำยำผักกูดกับกุ้งสดและน้ำยำรสเปรี้ยวเผ็ด",
        "en": "Blanch, then toss in a spicy-sour dressing with fresh shrimp"
      },
      {
        "th": "ลวกหรือผัดไฟแดง กินคู่น้ำพริก",
        "en": "Blanch or stir-fry on high heat; eat with chili dip"
      }
    ],
    "cautions": [
      {
        "th": "ควรเก็บจากแหล่งน้ำสะอาด ล้างหลายน้ำ และลวกหรือปรุงให้สุกก่อนกิน",
        "en": "Pick from clean water sources, wash several times and cook before eating"
      },
      {
        "th": "ห้ามเก็บเฟิร์นที่ไม่รู้จักมากิน เพราะเฟิร์นบางชนิดมีพิษ",
        "en": "Never eat ferns you cannot identify; some ferns are toxic"
      }
    ]
  },
  {
    "id": "makhwaen",
    "photo": "makhwaen.jpg",
    "emoji": "🌶️",
    "th": "มะแขว่น",
    "en": "Northern Pepper",
    "sci": "Zanthoxylum limonella",
    "author": "(Dennst.) Alston",
    "family": "RUTACEAE",
    "taste": {
      "th": "หอมซ่า ชาลิ้นเล็กน้อย",
      "en": "Citrusy, aromatic, lightly tingling"
    },
    "part": {
      "th": "ผลแห้ง (เปลือกและเมล็ด)",
      "en": "Dried fruit (husk & seeds)"
    },
    "dishes": {
      "th": "ลาบคั่ว แกงแค",
      "en": "Dry-spiced larb, Khaeng Khae curry"
    },
    "group": {
      "th": "เครื่องเทศและพืชแต่งกลิ่น",
      "en": "Spice & aromatic"
    },
    "props": [
      {
        "th": "กลิ่นหอมจากน้ำมันหอมระเหย ช่วยดับกลิ่นคาวเนื้อสัตว์",
        "en": "Aromatic oils help mask the smell of meat"
      },
      {
        "th": "เป็นเครื่องเทศเอกลักษณ์อาหารล้านนา",
        "en": "A signature spice of Lanna (northern Thai) cooking"
      },
      {
        "th": "ตามตำราพื้นบ้านใช้ผลช่วยขับลม",
        "en": "In folk medicine the fruit is used to relieve gas"
      }
    ],
    "usage": [
      {
        "th": "คั่วผลแห้งให้หอม โขลกหรือป่นใส่ลาบคั่วและแกงแค",
        "en": "Dry-roast until fragrant, then pound or grind into larb and curries"
      },
      {
        "th": "ใช้ในปริมาณน้อยก็หอมเด่นแล้ว",
        "en": "A small amount gives a strong aroma"
      }
    ],
    "cautions": [
      {
        "th": "มีรสซ่าชาลิ้น ควรใช้แต่น้อย เด็กเล็กอาจไม่ชอบ",
        "en": "It tingles the tongue; use sparingly, as young children may dislike it"
      },
      {
        "th": "ผู้ที่แพ้เครื่องเทศหรือพืชตระกูลส้มควรระวัง",
        "en": "People allergic to spices or citrus-family plants should be careful"
      }
    ]
  },
  {
    "id": "makrut",
    "photo": "makrut.jpg",
    "emoji": "🍋",
    "th": "มะกรูด",
    "en": "Kaffir Lime",
    "sci": "Citrus hystrix",
    "author": "DC.",
    "family": "RUTACEAE",
    "taste": {
      "th": "หอมฉุน เปรี้ยว",
      "en": "Fragrant & sour"
    },
    "part": {
      "th": "ใบ ผิวผล และน้ำมะกรูด",
      "en": "Leaves, rind & juice"
    },
    "dishes": {
      "th": "ต้มยำ พริกแกง",
      "en": "Tom yum, curry paste"
    },
    "group": {
      "th": "เครื่องเทศและพืชแต่งกลิ่น",
      "en": "Spice & aromatic"
    },
    "props": [
      {
        "th": "ใบและผิวมีน้ำมันหอมระเหย กลิ่นหอมช่วยให้ผ่อนคลาย",
        "en": "Leaves and rind contain aromatic oils with a relaxing scent"
      },
      {
        "th": "ผิวมะกรูดเป็นส่วนผสมสำคัญของพริกแกง",
        "en": "The rind is a key ingredient in curry paste"
      },
      {
        "th": "ตามภูมิปัญญาไทย ใช้น้ำมะกรูดสระผม",
        "en": "In Thai tradition the juice is used as a hair rinse"
      }
    ],
    "usage": [
      {
        "th": "ฉีกใบใส่ต้มยำหรือแกง หรือซอยละเอียดโรยหน้าทอดมัน",
        "en": "Tear leaves into tom yum or curries, or shred finely over fish cakes"
      },
      {
        "th": "ขูดผิวบางๆ ตำใส่พริกแกง",
        "en": "Grate a little rind into curry paste"
      },
      {
        "th": "บีบน้ำมะกรูดปรุงรสเปรี้ยว",
        "en": "Squeeze the juice for sourness"
      }
    ],
    "cautions": [
      {
        "th": "ผิวมีรสขมและกลิ่นแรง ใช้ในปริมาณน้อยพอดี",
        "en": "The rind is bitter and strong; use a small amount"
      },
      {
        "th": "น้ำมะกรูดเปรี้ยวจัด ผู้เป็นโรคกระเพาะหรือกรดไหลย้อนควรระวัง",
        "en": "The juice is very sour; people with gastritis or acid reflux should be careful"
      },
      {
        "th": "ผู้ที่แพ้พืชตระกูลส้มควรระวัง",
        "en": "People allergic to citrus should be careful"
      }
    ]
  },
  {
    "id": "phakphaeo",
    "photo": "phakphaeo.jpg",
    "emoji": "🍃",
    "th": "ผักแพว",
    "en": "Vietnamese Coriander",
    "sci": "Persicaria odorata",
    "author": "(Lour.) Soják",
    "family": "POLYGONACEAE",
    "taste": {
      "th": "เผ็ดร้อนปร่า กลิ่นหอมฉุน",
      "en": "Peppery & aromatic"
    },
    "part": {
      "th": "ใบและยอดอ่อน",
      "en": "Leaves & young shoots"
    },
    "dishes": {
      "th": "ลาบ น้ำตก ข้าวยำปักษ์ใต้",
      "en": "Larb, Nam Tok, southern rice salad"
    },
    "group": {
      "th": "ผักพื้นบ้านและผักริมรั้ว",
      "en": "Local vegetable"
    },
    "props": [
      {
        "th": "กลิ่นหอมฉุน ช่วยดับกลิ่นคาวและเจริญอาหาร",
        "en": "Its strong aroma masks fishy smells and stimulates appetite"
      },
      {
        "th": "ตามตำราไทยใช้ช่วยขับลม แก้ท้องอืด",
        "en": "In Thai folk medicine it is used to relieve gas and bloating"
      },
      {
        "th": "ปลูกง่ายในที่ชื้น ขยายพันธุ์ด้วยการปักชำลำต้น",
        "en": "Easy to grow in damp spots from stem cuttings"
      }
    ],
    "usage": [
      {
        "th": "เด็ดใบกินสดแนมกับลาบ น้ำตก และอาหารอีสาน",
        "en": "Eat the leaves fresh with larb, nam tok and northeastern dishes"
      },
      {
        "th": "ซอยใส่ข้าวยำปักษ์ใต้ หรือโรยหน้าอาหารเพิ่มกลิ่น",
        "en": "Shred into southern rice salad or sprinkle over dishes for aroma"
      }
    ],
    "cautions": [
      {
        "th": "ล้างให้สะอาดก่อนกิน เพราะปลูกใกล้พื้นดินที่ชื้น",
        "en": "Wash well before eating, as it grows close to damp soil"
      },
      {
        "th": "รสเผ็ดร้อน ผู้เป็นโรคกระเพาะควรกินแต่น้อย",
        "en": "It is peppery; people with stomach ulcers should eat only a little"
      }
    ]
  },
  {
    "id": "saibua",
    "photo": "saibua.jpg",
    "emoji": "🪷",
    "th": "สายบัว",
    "en": "Water Lily Stem",
    "sci": "Nymphaea lotus",
    "author": "L.",
    "family": "NYMPHAEACEAE",
    "taste": {
      "th": "รสจืดกรอบ หวานอ่อนๆ",
      "en": "Mild, crisp & lightly sweet"
    },
    "part": {
      "th": "ก้านดอก (สายบัว) ของบัวสาย",
      "en": "Flower stalk (sai bua) of the water lily"
    },
    "dishes": {
      "th": "ต้มกะทิสายบัวปลาทูสด แกงส้มสายบัว",
      "en": "Coconut-milk stew with mackerel, sour curry"
    },
    "group": {
      "th": "ผักพื้นบ้านและผักริมรั้ว",
      "en": "Local vegetable"
    },
    "props": [
      {
        "th": "ก้านดอกบัวสายกรอบ รสจืดหวานอ่อนๆ",
        "en": "Crisp stalks with a mild, lightly sweet taste"
      },
      {
        "th": "ให้พลังงานต่ำและมีใยอาหาร ช่วยการขับถ่าย",
        "en": "Low in energy and contains fiber for digestion"
      },
      {
        "th": "เป็นพืชน้ำ ขึ้นในบึง บ่อ และหนองน้ำ",
        "en": "An aquatic plant growing in ponds and swamps"
      }
    ],
    "usage": [
      {
        "th": "ลอกเปลือกนอก หั่นท่อน ต้มกับกะทิและปลาทูสด",
        "en": "Peel off the skin, cut into pieces, and simmer with coconut milk and fresh mackerel"
      },
      {
        "th": "ใส่แกงส้มหรือลวกกินกับน้ำพริก",
        "en": "Add to sour curry or blanch to eat with chili dip"
      }
    ],
    "cautions": [
      {
        "th": "พืชน้ำอาจมีพยาธิหรือสิ่งปนเปื้อน ควรเก็บจากแหล่งน้ำสะอาด ล้างให้สะอาด และปรุงให้สุกเสมอ",
        "en": "Aquatic plants may carry parasites or contaminants; pick from clean water, wash well and always cook"
      },
      {
        "th": "ไม่ควรกินดิบ",
        "en": "Do not eat raw"
      }
    ]
  }
];
