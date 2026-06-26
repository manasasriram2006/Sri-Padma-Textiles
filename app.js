/* ==========================================
   SRI PADMA TEXTILES — E-Commerce App JS
   ========================================== */

// ===== PRODUCT DATA =====
const STATIC_PRODUCTS = [
    {
        id: 1, name: "Royal Kanjivaram Pure Silk Saree",
        category: "kanjivaram", fabric: "silk", color: "red",
        occasion: ["wedding", "bridal", "festival"], border: "temple",
        price: 15999, originalPrice: 22999, rating: 4.8, reviews: 342,
        image: "images/saree_red_kanjivaram.png",
        description: "Exquisite handwoven Kanjivaram pure silk saree in rich red with traditional temple border and heavy zari pallu. Perfect for weddings and special occasions.",
        tags: ["bestseller", "trending"],
        meta: { fabric: "Pure Mulberry Silk", weight: "850g", length: "6.3 meters", blouse: "Included (0.8m)", wash: "Dry Clean Only", origin: "Kanchipuram, Tamil Nadu" }
    },
    {
        id: 1001,
        name: "Elegant Green Silk Saree",
        category: "silk",
        fabric: "silk",
        color: "green",
        occasion: ["wedding", "festival", "party"],
        border: "gold zari",
        price: 13999,
        originalPrice: 18999,
        rating: 4.9,
        reviews: 120,
        image: "images/saree_green_cotton.png",
        description: "Elegant green silk saree with rich zari border and pallu. Perfect for weddings and festive occasions.",
        tags: ["new", "trending"],
        meta: { fabric: "Pure Silk", weight: "850g", length: "6.3 meters", blouse: "Included", wash: "Dry Clean Only", origin: "India" }
    },
    {
        id: 2, name: "Heritage Banarasi Silk Saree",
        category: "banarasi", fabric: "silk", color: "blue",
        occasion: ["wedding", "festival", "party"], border: "zari",
        price: 12999, originalPrice: 18999, rating: 4.7, reviews: 256,
        image: "images/saree_blue_banarasi.png",
        description: "Stunning royal blue Banarasi silk saree with intricate golden brocade work and floral motifs. A timeless piece of Indian textile artistry.",
        tags: ["bestseller", "new"],
        meta: { fabric: "Banarasi Silk", weight: "780g", length: "6.3 meters", blouse: "Included (0.8m)", wash: "Dry Clean Only", origin: "Varanasi, Uttar Pradesh" }
    },
    {
        id: 3, name: "Elegant Cotton Handloom Saree",
        category: "cotton", fabric: "cotton", color: "green",
        occasion: ["casual", "office", "festival"], border: "contrast",
        price: 2999, originalPrice: 4999, rating: 4.5, reviews: 189,
        image: "images/saree_green_cotton.png",
        description: "Beautiful emerald green handloom cotton saree with contrast golden temple border. Comfortable and elegant for everyday wear.",
        tags: ["trending", "sale"],
        meta: { fabric: "Pure Cotton", weight: "450g", length: "6 meters", blouse: "Included (0.8m)", wash: "Hand Wash", origin: "Mangalgiri, Andhra Pradesh" }
    },
    {
        id: 4, name: "Designer Georgette Party Saree",
        category: "designer", fabric: "georgette", color: "pink",
        occasion: ["party", "festival"], border: "stonework",
        price: 7999, originalPrice: 12999, rating: 4.6, reviews: 128,
        image: "images/saree_pink_designer.png",
        description: "Gorgeous pink designer georgette saree with delicate silver sequin embroidery and scalloped border. Perfect for parties and celebrations.",
        tags: ["new", "trending"],
        meta: { fabric: "Georgette", weight: "520g", length: "6.3 meters", blouse: "Included (0.8m)", wash: "Dry Clean Only", origin: "Surat, Gujarat" }
    },
    {
        id: 5, name: "Grand Pattu Silk Wedding Saree",
        category: "pattu", fabric: "silk", color: "gold",
        occasion: ["wedding", "bridal"], border: "temple",
        price: 24999, originalPrice: 35999, rating: 4.9, reviews: 412,
        image: "images/saree_gold_pattu.png",
        description: "Luxurious golden cream Pattu silk saree with rich maroon and gold zari border. A grand piece for brides and wedding ceremonies.",
        tags: ["bestseller", "bridal"],
        meta: { fabric: "Pure Pattu Silk", weight: "950g", length: "6.3 meters", blouse: "Included (0.8m)", wash: "Dry Clean Only", origin: "Dharmavaram, Andhra Pradesh" }
    },
    {
        id: 6, name: "Classic Chanderi Silk Cotton Saree",
        category: "chanderi", fabric: "silk", color: "cream",
        occasion: ["casual", "office", "festival"], border: "zari",
        price: 5499, originalPrice: 7999, rating: 4.4, reviews: 97,
        image: "images/saree_gold_pattu.png",
        description: "Lightweight and lustrous Chanderi silk cotton saree in cream with delicate zari border and buttas. Ideal for daily elegance.",
        tags: ["new"],
        meta: { fabric: "Silk Cotton Blend", weight: "380g", length: "6 meters", blouse: "Included (0.8m)", wash: "Hand Wash", origin: "Chanderi, Madhya Pradesh" }
    },
    {
        id: 7, name: "Maroon Kanjivaram Bridal Saree",
        category: "kanjivaram", fabric: "silk", color: "maroon",
        occasion: ["bridal", "wedding"], border: "temple",
        price: 28999, originalPrice: 42999, rating: 4.9, reviews: 567,
        image: "images/saree_red_kanjivaram.png",
        description: "Magnificent maroon Kanjivaram silk saree with heavy gold zari work and grand pallu. The ultimate bridal saree for your special day.",
        tags: ["bestseller", "bridal"],
        meta: { fabric: "Pure Mulberry Silk", weight: "1050g", length: "6.3 meters", blouse: "Included (0.8m)", wash: "Dry Clean Only", origin: "Kanchipuram, Tamil Nadu" }
    },
    {
        id: 8, name: "Purple Organza Designer Saree",
        category: "designer", fabric: "organza", color: "purple",
        occasion: ["party", "festival"], border: "threadwork",
        price: 6499, originalPrice: 9999, rating: 4.3, reviews: 85,
        image: "images/saree_pink_designer.png",
        description: "Ethereal purple organza saree with intricate thread work embroidery and sequin detailing. Light, elegant, and perfect for events.",
        tags: ["new", "trending"],
        meta: { fabric: "Pure Organza", weight: "350g", length: "6.3 meters", blouse: "Included (0.8m)", wash: "Dry Clean Only", origin: "Surat, Gujarat" }
    },
    {
        id: 9, name: "Yellow Cotton Casual Saree",
        category: "cotton", fabric: "cotton", color: "yellow",
        occasion: ["casual", "office"], border: "contrast",
        price: 1999, originalPrice: 3499, rating: 4.2, reviews: 143,
        image: "images/saree_green_cotton.png",
        description: "Cheerful yellow cotton saree with contrast border, perfect for everyday wear. Comfortable, breathable, and stylish.",
        tags: ["sale"],
        meta: { fabric: "Pure Cotton", weight: "400g", length: "6 meters", blouse: "Included (0.8m)", wash: "Machine Wash", origin: "Salem, Tamil Nadu" }
    },
    {
        id: 10, name: "Navy Blue Tussar Silk Saree",
        category: "tussar", fabric: "tussar", color: "blue",
        occasion: ["festival", "party", "office"], border: "zari",
        price: 8999, originalPrice: 13999, rating: 4.5, reviews: 112,
        image: "images/saree_blue_banarasi.png",
        description: "Rich navy blue Tussar silk saree with subtle zari border and buttas. The natural texture of Tussar gives an unmatched elegance.",
        tags: ["trending"],
        meta: { fabric: "Pure Tussar Silk", weight: "580g", length: "6.3 meters", blouse: "Included (0.8m)", wash: "Dry Clean Only", origin: "Bhagalpur, Bihar" }
    },
    {
        id: 11, name: "Orange Chiffon Festive Saree",
        category: "chiffon", fabric: "chiffon", color: "orange",
        occasion: ["festival", "party"], border: "stonework",
        price: 4999, originalPrice: 7499, rating: 4.4, reviews: 76,
        image: "images/saree_pink_designer.png",
        description: "Vibrant orange chiffon saree with stone work border, perfect for festive celebrations. Lightweight and flowing drape.",
        tags: ["sale", "trending"],
        meta: { fabric: "Pure Chiffon", weight: "320g", length: "6.3 meters", blouse: "Included (0.8m)", wash: "Dry Clean Only", origin: "Surat, Gujarat" }
    },
    {
        id: 12, name: "Black Georgette Evening Saree",
        category: "designer", fabric: "georgette", color: "black",
        occasion: ["party"], border: "stonework",
        price: 9999, originalPrice: 14999, rating: 4.7, reviews: 203,
        image: "images/saree_blue_banarasi.png",
        description: "Sophisticated black georgette saree with heavy stone work and crystal embellishments. A statement piece for evening events.",
        tags: ["bestseller"],
        meta: { fabric: "Georgette", weight: "560g", length: "6.3 meters", blouse: "Included (0.8m)", wash: "Dry Clean Only", origin: "Mumbai, Maharashtra" }
    },
    {
        id: 13, name: "White Linen Summer Saree",
        category: "cotton", fabric: "linen", color: "white",
        occasion: ["casual", "office"], border: "contrast",
        price: 3499, originalPrice: 5499, rating: 4.3, reviews: 91,
        image: "images/saree_green_cotton.png",
        description: "Crisp white linen saree with elegant contrast border. Breathable and perfect for summer days and office wear.",
        tags: ["new"],
        meta: { fabric: "Pure Linen", weight: "350g", length: "6 meters", blouse: "Included (0.8m)", wash: "Hand Wash", origin: "Bhagalpur, Bihar" }
    },
    {
        id: 14, name: "Green Banarasi Brocade Saree",
        category: "banarasi", fabric: "silk", color: "green",
        occasion: ["wedding", "festival"], border: "zari",
        price: 16999, originalPrice: 24999, rating: 4.8, reviews: 178,
        image: "images/saree_green_cotton.png",
        description: "Spectacular green Banarasi silk saree with rich brocade pattern and heavy gold zari work throughout. A magnificent festive choice.",
        tags: ["bestseller", "trending"],
        meta: { fabric: "Banarasi Silk", weight: "820g", length: "6.3 meters", blouse: "Included (0.8m)", wash: "Dry Clean Only", origin: "Varanasi, Uttar Pradesh" }
    },
    {
        id: 15, name: "Peach Crepe Designer Saree",
        category: "designer", fabric: "crepe", color: "pink",
        occasion: ["party", "casual"], border: "threadwork",
        price: 5999, originalPrice: 8999, rating: 4.4, reviews: 67,
        image: "images/saree_pink_designer.png",
        description: "Delicate peach crepe saree with minimal thread work embroidery. Modern, stylish, and perfect for contemporary occasions.",
        tags: ["new"],
        meta: { fabric: "Crepe", weight: "420g", length: "6.3 meters", blouse: "Included (0.8m)", wash: "Dry Clean Only", origin: "Surat, Gujarat" }
    },
    {
        id: 16, name: "Red Bridal Kanjivaram Grand Saree",
        category: "kanjivaram", fabric: "silk", color: "red",
        occasion: ["bridal", "wedding"], border: "temple",
        price: 45999, originalPrice: 65999, rating: 5.0, reviews: 892,
        image: "images/saree_red_kanjivaram.png",
        description: "The ultimate bridal Kanjivaram silk saree. Heavy pure gold zari with traditional temple motifs, peacock designs, and grand pallu. A generational heirloom piece.",
        tags: ["bestseller", "bridal"],
        meta: { fabric: "Pure Mulberry Silk (3-shuttle)", weight: "1200g", length: "6.3 meters", blouse: "Included (0.8m)", wash: "Dry Clean Only", origin: "Kanchipuram, Tamil Nadu" }
    }
];

const EXTRA_PRODUCTS = [
    {
        id: 101, name: "Moonlit Organza Pearl Saree",
        category: "organza", fabric: "organza", color: "silver lilac",
        occasion: ["party", "reception", "festival"], border: "sequin",
        price: 8899, originalPrice: 12499, rating: 4.7, reviews: 68,
        image: "images/saree_pink_designer.png",
        description: "Airy organza saree with pearl sheen, scalloped sequin border, and a dreamy evening drape.",
        tags: ["new", "trending"],
        meta: { fabric: "Pearl Organza", weight: "340g", length: "6.3 meters", blouse: "Included", wash: "Dry Clean Only", origin: "Surat" }
    },
    {
        id: 102, name: "Sunset Chiffon Ruffle Saree",
        category: "chiffon", fabric: "chiffon", color: "coral",
        occasion: ["party", "festival", "casual"], border: "threadwork",
        price: 5799, originalPrice: 8499, rating: 4.5, reviews: 53,
        image: "images/saree_pink_designer.png",
        description: "A soft flowing chiffon saree with sunset tones and graceful ruffle-inspired pallu detailing.",
        tags: ["new", "sale"],
        meta: { fabric: "Pure Chiffon", weight: "300g", length: "6.3 meters", blouse: "Included", wash: "Dry Clean Only", origin: "Surat" }
    },
    {
        id: 103, name: "Ivory Chanderi Gold Butta Saree",
        category: "chanderi", fabric: "silk cotton", color: "ivory",
        occasion: ["office", "festival", "casual"], border: "zari",
        price: 6999, originalPrice: 9999, rating: 4.6, reviews: 74,
        image: "images/saree_gold_pattu.png",
        description: "Elegant Chanderi silk-cotton saree with subtle gold buttas and a lightweight festive finish.",
        tags: ["new"],
        meta: { fabric: "Chanderi Silk Cotton", weight: "390g", length: "6.1 meters", blouse: "Included", wash: "Hand Wash", origin: "Chanderi" }
    },
    {
        id: 104, name: "Indigo Tussar Kalamkari Saree",
        category: "tussar", fabric: "tussar", color: "indigo",
        occasion: ["office", "festival", "party"], border: "contrast",
        price: 10299, originalPrice: 14999, rating: 4.7, reviews: 81,
        image: "images/saree_blue_banarasi.png",
        description: "Textured tussar silk saree with artisanal kalamkari-inspired motifs and a rich indigo body.",
        tags: ["new", "trending"],
        meta: { fabric: "Pure Tussar Silk", weight: "590g", length: "6.3 meters", blouse: "Included", wash: "Dry Clean Only", origin: "Bhagalpur" }
    },
    {
        id: 105, name: "Rose Gold Pattu Celebration Saree",
        category: "pattu", fabric: "silk", color: "rose gold",
        occasion: ["wedding", "festival", "bridal"], border: "temple",
        price: 27499, originalPrice: 38999, rating: 4.9, reviews: 129,
        image: "images/saree_gold_pattu.png",
        description: "A luminous pattu silk saree with rose-gold zari and a grand temple border for special celebrations.",
        tags: ["new", "bridal"],
        meta: { fabric: "Pure Pattu Silk", weight: "990g", length: "6.3 meters", blouse: "Included", wash: "Dry Clean Only", origin: "Dharmavaram" }
    },
    {
        id: 106, name: "Emerald Banarasi Jaal Saree",
        category: "banarasi", fabric: "silk", color: "emerald",
        occasion: ["wedding", "festival", "reception"], border: "zari",
        price: 18299, originalPrice: 25899, rating: 4.8, reviews: 94,
        image: "images/saree_blue_banarasi.png",
        description: "Banarasi silk saree with emerald body, all-over jaal weaving, and regal gold zari highlights.",
        tags: ["new", "bestseller"],
        meta: { fabric: "Banarasi Katan Silk", weight: "810g", length: "6.3 meters", blouse: "Included", wash: "Dry Clean Only", origin: "Varanasi" }
    },
    {
        id: 107, name: "South Indian Crimson Silk Saree",
        category: "silk", fabric: "silk", color: "red",
        occasion: ["wedding", "festival", "party"], border: "zari",
        price: 11999, originalPrice: 16999, rating: 4.7, reviews: 88,
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Silk_saree.jpg?width=700",
        description: "A graceful south Indian silk saree with a festive crimson body and traditional zari accents.",
        tags: ["new", "trending"],
        meta: { fabric: "Pure Silk", weight: "760g", length: "6.3 meters", blouse: "Included", wash: "Dry Clean Only", origin: "South India" }
    },
    {
        id: 108, name: "Classic Rose Silk Saree",
        category: "silk", fabric: "silk", color: "pink",
        occasion: ["festival", "party", "reception"], border: "zari",
        price: 10499, originalPrice: 14999, rating: 4.6, reviews: 72,
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Silk_saree_2.jpg?width=700",
        description: "Soft rose-toned silk saree with an elegant drape for festive evenings and receptions.",
        tags: ["new"],
        meta: { fabric: "Silk", weight: "730g", length: "6.3 meters", blouse: "Included", wash: "Dry Clean Only", origin: "India" }
    },
    {
        id: 109, name: "Green Brocade Silk Saree",
        category: "banarasi", fabric: "silk", color: "green",
        occasion: ["wedding", "festival"], border: "brocade",
        price: 17499, originalPrice: 23999, rating: 4.8, reviews: 116,
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Green_brocade_silk_saree.jpg?width=700",
        description: "Rich green brocade silk saree with a regal woven finish and festive appeal.",
        tags: ["bestseller", "premium"],
        meta: { fabric: "Brocade Silk", weight: "830g", length: "6.3 meters", blouse: "Included", wash: "Dry Clean Only", origin: "India" }
    },
    {
        id: 110, name: "Heritage Banarasi Silk Saree",
        category: "banarasi", fabric: "silk", color: "gold",
        occasion: ["wedding", "festival", "bridal"], border: "zari",
        price: 18999, originalPrice: 26999, rating: 4.9, reviews: 143,
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Banarasi_Silk_Saree.jpg?width=700",
        description: "Traditional Banarasi silk saree with classic woven richness and ceremonial charm.",
        tags: ["new", "bridal"],
        meta: { fabric: "Banarasi Silk", weight: "850g", length: "6.3 meters", blouse: "Included", wash: "Dry Clean Only", origin: "Varanasi" }
    },
    {
        id: 111, name: "Pure Banarasi Occasion Saree",
        category: "banarasi", fabric: "silk", color: "maroon",
        occasion: ["wedding", "festival", "reception"], border: "zari",
        price: 16499, originalPrice: 22999, rating: 4.7, reviews: 97,
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Shrimaa_banarasi_saree.jpg?width=700",
        description: "A pure Banarasi-inspired occasion saree with a refined fall and festive woven detail.",
        tags: ["trending"],
        meta: { fabric: "Banarasi Silk", weight: "800g", length: "6.3 meters", blouse: "Included", wash: "Dry Clean Only", origin: "Varanasi" }
    },
    {
        id: 112, name: "Mysore Golden Zari Silk Saree",
        category: "silk", fabric: "silk", color: "gold",
        occasion: ["wedding", "festival", "party"], border: "zari",
        price: 14299, originalPrice: 19999, rating: 4.6, reviews: 84,
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mysore_Silk_Saree.jpg?width=700",
        description: "Mysore silk saree with golden zari styling, ideal for refined festive dressing.",
        tags: ["new", "premium"],
        meta: { fabric: "Mysore Silk", weight: "720g", length: "6.3 meters", blouse: "Included", wash: "Dry Clean Only", origin: "Mysore" }
    },
    {
        id: 113, name: "South Silk Temple Border Saree",
        category: "silk", fabric: "silk", color: "orange",
        occasion: ["festival", "wedding"], border: "temple",
        price: 13499, originalPrice: 18499, rating: 4.7, reviews: 76,
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/South_Silk_Saree.jpg?width=700",
        description: "South silk saree with a traditional temple-border look and a rich festive presence.",
        tags: ["new"],
        meta: { fabric: "South Silk", weight: "780g", length: "6.3 meters", blouse: "Included", wash: "Dry Clean Only", origin: "South India" }
    },
    {
        id: 114, name: "Kanchipuram Pattu Silk Saree",
        category: "kanjivaram", fabric: "silk", color: "purple",
        occasion: ["wedding", "bridal", "festival"], border: "zari",
        price: 21499, originalPrice: 29999, rating: 4.9, reviews: 158,
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/KanchipuramSlik_Saree.JPG?width=700",
        description: "Kanchipuram pattu silk saree with a grand woven look for weddings and heirloom occasions.",
        tags: ["bridal", "premium"],
        meta: { fabric: "Kanchipuram Silk", weight: "940g", length: "6.3 meters", blouse: "Included", wash: "Dry Clean Only", origin: "Kanchipuram" }
    },
    {
        id: 115, name: "Kanchipuram Silk Store Saree",
        category: "kanjivaram", fabric: "silk", color: "multi",
        occasion: ["festival", "wedding", "party"], border: "contrast",
        price: 15499, originalPrice: 21999, rating: 4.5, reviews: 69,
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kanchipuram_silk_sareer.JPG?width=700",
        description: "Colorful Kanchipuram silk saree selection with a vibrant festive personality.",
        tags: ["new", "exclusive"],
        meta: { fabric: "Kanchipuram Silk", weight: "820g", length: "6.3 meters", blouse: "Included", wash: "Dry Clean Only", origin: "Kanchipuram" }
    },
    {
        id: 116, name: "Traditional Assam Silk Saree",
        category: "silk", fabric: "assam silk", color: "cream",
        occasion: ["festival", "office", "casual"], border: "contrast",
        price: 9499, originalPrice: 13499, rating: 4.6, reviews: 61,
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Traditional_Assam_silk_saree.jpg?width=700",
        description: "Traditional Assam silk saree with a graceful cream base and heritage-inspired styling.",
        tags: ["new"],
        meta: { fabric: "Assam Silk", weight: "560g", length: "6.3 meters", blouse: "Included", wash: "Dry Clean Only", origin: "Assam" }
    },
    {
        id: 117, name: "Kanchipuram Showcase Silk Saree",
        category: "kanjivaram", fabric: "silk", color: "multi",
        occasion: ["wedding", "festival"], border: "zari",
        price: 17999, originalPrice: 24999, rating: 4.8, reviews: 102,
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kanchipuram_sarees_(7642282772).jpg?width=700",
        description: "A vivid Kanchipuram silk saree with showroom-style richness and bright woven borders.",
        tags: ["trending", "premium"],
        meta: { fabric: "Kanchipuram Silk", weight: "860g", length: "6.3 meters", blouse: "Included", wash: "Dry Clean Only", origin: "Kanchipuram" }
    },
    {
        id: 118, name: "Royal Kanchipuram Wedding Saree",
        category: "kanjivaram", fabric: "silk", color: "red",
        occasion: ["bridal", "wedding", "festival"], border: "temple",
        price: 23499, originalPrice: 32999, rating: 4.9, reviews: 131,
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kanchipuram_sarees_(7642287496).jpg?width=700",
        description: "Royal Kanchipuram wedding saree with festive colors, temple-border character, and a grand finish.",
        tags: ["bridal", "bestseller"],
        meta: { fabric: "Kanchipuram Silk", weight: "980g", length: "6.3 meters", blouse: "Included", wash: "Dry Clean Only", origin: "Kanchipuram" }
    }
];

// ===== CUSTOMIZATION OPTIONS =====
const CUSTOMIZATION = {
    sareeTypes: [
        { id: "pattu", name: "Pattu Classic", icon: "🏵️", price: 3800, note: "Rich silk styling with timeless South Indian elegance" },
        { id: "festive", name: "Festive Classic", icon: "✨", price: 2600, note: "Balanced elegance for celebrations" },
        { id: "party", name: "Party Glam", icon: "🌟", price: 2200, note: "Modern drape with statement finish" },
        { id: "handloom", name: "Handloom Grace", icon: "🧵", price: 1800, note: "Subtle artisanal everyday luxury" },
        { id: "reception", name: "Reception Statement", icon: "💫", price: 3200, note: "Shimmering premium occasion wear" }
    ],
    fabrics: [
        { id: "pattu", name: "Pure Pattu", icon: "Pattu", price: 9500 },
        { id: "puresilk", name: "Pure Silk", icon: "✨", price: 8000 },
        { id: "artsilk", name: "Art Silk", icon: "🎭", price: 3000 },
        { id: "cotton", name: "Pure Cotton", icon: "🌿", price: 2000 },
        { id: "chiffon", name: "Chiffon", icon: "🌊", price: 2500 },
        { id: "georgette", name: "Georgette", icon: "💎", price: 3000 },
        { id: "organza", name: "Organza", icon: "🦋", price: 3500 },
        { id: "crepe", name: "Crepe", icon: "🌸", price: 2800 },
        { id: "linen", name: "Linen", icon: "🍃", price: 2200 },
        { id: "tussar", name: "Tussar Silk", icon: "🍂", price: 5000 },
        { id: "satin", name: "Satin", icon: "💫", price: 3200 },
        { id: "banarasi", name: "Banarasi Silk", icon: "👑", price: 10000 },
        { id: "kanchi", name: "Kanjivaram Silk", icon: "🏛️", price: 12000 }
    ],
    colors: [
        { name: "Red", hex: "#D32F2F" },
        { name: "Maroon", hex: "#800020" },
        { name: "Gold", hex: "#C4A265" },
        { name: "Royal Blue", hex: "#1565C0" },
        { name: "Emerald Green", hex: "#2E7D32" },
        { name: "Pink", hex: "#E91E8C" },
        { name: "Purple", hex: "#7B1FA2" },
        { name: "Orange", hex: "#EF6C00" },
        { name: "Yellow", hex: "#F9A825" },
        { name: "Black", hex: "#212121" },
        { name: "White", hex: "#FAFAFA" },
        { name: "Cream", hex: "#FFFDD0" },
        { name: "Teal", hex: "#00897B" },
        { name: "Peach", hex: "#FFAB91" },
        { name: "Magenta", hex: "#AD1457" },
        { name: "Navy", hex: "#0D47A1" }
    ],
    borders: [
        { id: "temple", name: "Temple Border", icon: "🏛️", price: 1500 },
        { id: "zari", name: "Zari Border", icon: "✨", price: 2000 },
        { id: "contrast", name: "Contrast Border", icon: "🎨", price: 800 },
        { id: "plain", name: "Plain Border", icon: "▫️", price: 0 },
        { id: "kasuti", name: "Kasuti Work", icon: "🧵", price: 1800 },
        { id: "threadwork", name: "Thread Work", icon: "🪡", price: 1200 },
        { id: "stonework", name: "Stone Work", icon: "💎", price: 2500 },
        { id: "kutchwork", name: "Kutch Work", icon: "🪞", price: 2200 },
        { id: "gotapatti", name: "Gota Patti", icon: "🌟", price: 1800 },
        { id: "sequin", name: "Sequin Border", icon: "✦", price: 1600 }
    ],
    borderWidths: ["Narrow", "Medium", "Wide", "Extra Wide"],
    borderColors: [
        { name: "Gold", hex: "#C4A265" },
        { name: "Antique Gold", hex: "#B08D2D" },
        { name: "Champagne Gold", hex: "#D6C08D" },
        { name: "Silver", hex: "#C0C0C0" },
        { name: "Platinum", hex: "#E5E4E2" },
        { name: "Maroon", hex: "#800020" },
        { name: "Wine", hex: "#722F37" },
        { name: "Red", hex: "#D32F2F" },
        { name: "Crimson", hex: "#B71C1C" },
        { name: "Green", hex: "#2E7D32" },
        { name: "Emerald", hex: "#006B3C" },
        { name: "Bottle Green", hex: "#064420" },
        { name: "Royal Blue", hex: "#1565C0" },
        { name: "Navy Blue", hex: "#0D47A1" },
        { name: "Teal", hex: "#00897B" },
        { name: "Purple", hex: "#7B1FA2" },
        { name: "Magenta", hex: "#AD1457" },
        { name: "Rani Pink", hex: "#C2185B" },
        { name: "Peach", hex: "#FFAB91" },
        { name: "Orange", hex: "#EF6C00" },
        { name: "Mustard", hex: "#D4A017" },
        { name: "Black", hex: "#212121" },
        { name: "Ivory", hex: "#FFFFF0" },
        { name: "Cream", hex: "#FFFDD0" },
        { name: "Copper", hex: "#B87333" },
        { name: "Bronze", hex: "#8C7853" },
        { name: "Rose Gold", hex: "#B76E79" }
    ],
    pallus: [
        { id: "heavyzari", name: "Heavy Zari Pallu", icon: "👑", price: 3000 },
        { id: "lightzari", name: "Light Zari", icon: "✨", price: 1500 },
        { id: "embroidered", name: "Embroidered Pallu", icon: "🧵", price: 2000 },
        { id: "plain", name: "Plain Pallu", icon: "▫️", price: 0 },
        { id: "brocade", name: "Brocade Pallu", icon: "🎭", price: 2500 },
        { id: "contrast", name: "Contrast Pallu", icon: "🎨", price: 1000 },
        { id: "printed", name: "Printed Pallu", icon: "🖼️", price: 800 },
        { id: "mirror", name: "Mirror Work Pallu", icon: "🪞", price: 2200 }
    ],
    weaves: [
        { id: "plain", name: "Plain", icon: "▫️", price: 0 },
        { id: "checks", name: "Checks", icon: "🔲", price: 500, pattern: "repeating-conic-gradient(#0003 0% 25%, transparent 0% 50%) 0 0/20px 20px" },
        { id: "stripes", name: "Stripes", icon: "📏", price: 500, pattern: "repeating-linear-gradient(90deg, #0003, #0003 2px, transparent 2px, transparent 20px)" },
        { id: "floral", name: "Floral", icon: "🌺", price: 1500, pattern: "radial-gradient(circle at 15px 15px, #fff2 4px, transparent 4px)" },
        { id: "paisley", name: "Paisley / Mango", icon: "🥭", price: 1800 },
        { id: "peacock", name: "Peacock", icon: "🦚", price: 2000 },
        { id: "elephant", name: "Elephant Motif", icon: "🐘", price: 1800 },
        { id: "geometric", name: "Geometric", icon: "◆", price: 800, pattern: "repeating-linear-gradient(45deg, #0002, #0002 2px, transparent 2px, transparent 15px)" },
        { id: "butta", name: "Butta / Butis", icon: "•", price: 1200, pattern: "radial-gradient(circle at 10px 10px, #fff2 2px, transparent 2px)" },
        { id: "temple", name: "Temple Motif", icon: "🏛️", price: 2000 }
    ],
    blouses: [
        { id: "matching", name: "Matching Blouse Piece", price: 0 },
        { id: "contrast", name: "Contrast Blouse Piece", price: 500 },
        { id: "readymade", name: "Ready-Made Blouse", price: 1500 },
        { id: "none", name: "No Blouse", price: -200 }
    ],
    occasions: ["Wedding", "Bridal", "Festival", "Party Wear", "Casual", "Office Wear", "Reception", "Engagement"]
};

// ===== CATEGORIES =====
const CATEGORIES = [
    { id: 'kanjivaram', name: 'Kanjivaram Silk', icon: '👘', gradient: 'linear-gradient(135deg, #800020 0%, #C62828 100%)', image: 'images/saree_red_kanjivaram.png' },
    { id: 'banarasi', name: 'Banarasi Silk', icon: '✨', gradient: 'linear-gradient(135deg, #1565C0 0%, #1976D2 100%)', image: 'images/saree_blue_banarasi.png' },
    { id: 'cotton', name: 'Cotton Sarees', icon: '🍃', gradient: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)', image: 'images/saree_green_cotton.png' },
    { id: 'designer', name: 'Designer Sarees', icon: '👗', gradient: 'linear-gradient(135deg, #AD1457 0%, #D81B60 100%)', image: 'images/saree_pink_designer.png' },
    { id: 'chiffon', name: 'Chiffon & Georgette', icon: '💨', gradient: 'linear-gradient(135deg, #F06292 0%, #F48FB1 100%)', image: 'images/saree_pink_designer.png' },
    { id: 'bridal', name: 'Bridal Collection', icon: '👰', gradient: 'linear-gradient(135deg, #C62828 0%, #800020 100%)', image: 'images/saree_red_kanjivaram.png' },
    { id: 'pattu', name: 'Pattu Silk', icon: '🧶', gradient: 'linear-gradient(135deg, #B8892A 0%, #D4A93A 100%)', image: 'images/saree_gold_pattu.png' },
    { id: 'organza', name: 'Organza Silk', icon: '🦋', gradient: 'linear-gradient(135deg, #9C27B0 0%, #BA68C8 100%)', image: 'images/saree_pink_designer.png' }
];

const DISPLAY_CATEGORIES = [
    { id: 'kanjivaram', name: 'Kanjivaram Silk', icon: 'Silk', gradient: 'linear-gradient(135deg, #800020 0%, #C62828 100%)', image: 'images/saree_red_kanjivaram.png' },
    { id: 'banarasi', name: 'Banarasi Silk', icon: 'Zari', gradient: 'linear-gradient(135deg, #1565C0 0%, #1976D2 100%)', image: 'images/saree_blue_banarasi.png' },
    { id: 'cotton', name: 'Cotton Sarees', icon: 'Cotton', gradient: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)', image: 'images/saree_green_cotton.png' },
    { id: 'designer', name: 'Designer Sarees', icon: 'Design', gradient: 'linear-gradient(135deg, #AD1457 0%, #D81B60 100%)', image: 'images/saree_pink_designer.png' },
    { id: 'chiffon', name: 'Chiffon Sarees', icon: 'Flow', gradient: 'linear-gradient(135deg, #F06292 0%, #F48FB1 100%)', image: 'images/saree_pink_designer.png' },
    { id: 'bridal', name: 'Bridal Collection', icon: 'Bridal', gradient: 'linear-gradient(135deg, #C62828 0%, #800020 100%)', image: 'images/saree_red_kanjivaram.png' },
    { id: 'pattu', name: 'Pattu Silk', icon: 'Pattu', gradient: 'linear-gradient(135deg, #B8892A 0%, #D4A93A 100%)', image: 'images/saree_gold_pattu.png' },
    { id: 'organza', name: 'Organza Silk', icon: 'Organza', gradient: 'linear-gradient(135deg, #9C27B0 0%, #BA68C8 100%)', image: 'images/saree_pink_designer.png' },
    { id: 'chanderi', name: 'Chanderi Silk', icon: 'Chanderi', gradient: 'linear-gradient(135deg, #D9B980 0%, #F4E1B6 100%)', image: 'images/saree_gold_pattu.png' },
    { id: 'tussar', name: 'Tussar Silk', icon: 'Tussar', gradient: 'linear-gradient(135deg, #27496D 0%, #4B7A9C 100%)', image: 'images/saree_blue_banarasi.png' }
];

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem('spt_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('spt_wishlist') || '[]');
let currentUser = JSON.parse(localStorage.getItem('spt_user') || 'null');
let authToken = localStorage.getItem('spt_token') || null;
let products = []; // Will be fetched from backend
const LOCAL_USERS_KEY = 'spt_local_users';
const DEFAULT_SAREE_IMAGE = 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_saree.jpg?width=700';

function commonsImage(fileName, width = 700) {
    return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName).replace(/%20/g, '_')}?width=${width}`;
}

const PRODUCT_IMAGE_OVERRIDES = {
    1: commonsImage('KanchipuramSlik Saree.JPG'),
    2: commonsImage("'Sari' from Varanasi (north-central India), silk and gold-wrapped silk yarn with supplementary weft brocade.jpg"),
    3: commonsImage('Sambalpuri saree.jpg'),
    4: commonsImage('Turquoise Chiffon Sari.jpg'),
    5: commonsImage('Wedding saree (4120283).jpg'),
    6: commonsImage('Chanderi saree.webp'),
    7: commonsImage('Koorai silk saree 1.jpg'),
    8: commonsImage('PURE SILK SAREE.jpg'),
    9: commonsImage('Yellow Sari (13041351095).jpg'),
    10: commonsImage('Tasar Sarees.jpg'),
    11: commonsImage('Bandhej Saree.jpg'),
    12: commonsImage('MET 1988 104 96.jpeg'),
    13: commonsImage('Yellowish brown saree.jpg'),
    14: commonsImage('Green brocade silk saree.jpg'),
    15: commonsImage('Peach saree.jpg'),
    16: commonsImage('Wedding saree (1050936).jpg'),
    17: commonsImage('Tussore Sarees - Phulia 2016-11-12 1893.JPG'),
    18: commonsImage('Saree with pallu.jpg'),
    101: commonsImage('Alka Sari.jpg'),
    102: commonsImage('Sambalpuri saree pallu.jpg'),
    103: commonsImage('A man weaving the famous handloom Chanderi Saree.jpg'),
    104: commonsImage('Tussore Sarees - Phulia 2016-11-12 1891.JPG'),
    105: commonsImage('Parrot Peacock border paithani saree.jpg'),
    106: commonsImage('Shrimaa banarasi saree.jpg'),
    107: commonsImage('Silk saree.jpg'),
    108: commonsImage('Silk saree 2.jpg'),
    109: commonsImage('Benaras brocade sari.jpg'),
    110: commonsImage('Banarasi Silk Saree.jpg'),
    111: commonsImage('Sari, Varanasi, Uttar Pradesh, India, 1960s, silk, gold thread, satin - Textile Museum of Canada - DSC00943.JPG'),
    112: commonsImage('Mysore Silk Saree.jpg'),
    113: commonsImage('South Silk Saree.jpg'),
    114: commonsImage('Kanchipuram sarees (7642282772).jpg'),
    115: commonsImage('Kanchipuram sarees (7642285396).jpg'),
    116: commonsImage('Traditional Assam silk saree.jpg'),
    117: commonsImage('Kanchipuram sarees (7642282200).jpg'),
    118: commonsImage('Kanchipuram sarees (7642287014).jpg'),
    1001: commonsImage('Bangalore Saree.jpg')
};

let currentPage = 'home';
let currentFilter = null;
let currentSearchQuery = '';
let currentSort = 'featured';
let shopCurrentPage = 1;
const ITEMS_PER_PAGE = 12;
let heroInterval = null;
let currentHeroSlide = 0;

let customization = {
    fabric: null, color: null, border: null, borderWidth: 'Medium',
    borderColor: '#C4A265', pallu: null, weave: null,
    blouse: 'matching'
};

function isLocalFileMode() {
    return window.location.protocol === 'file:';
}

function getLocalUsers() {
    return JSON.parse(localStorage.getItem(LOCAL_USERS_KEY) || '[]');
}

function saveLocalUsers(users) {
    localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(users));
}

function makeLocalAuthPayload(user) {
    return {
        access_token: `local-${Date.now()}`,
        token_type: 'bearer',
        user: {
            name: user.name,
            email: user.email
        }
    };
}

function registerLocalUser({ name, email, password, phone = '' }) {
    const users = getLocalUsers();
    const existingUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (existingUser) {
        throw new Error('Email already registered');
    }

    const newUser = { name, email, password, phone, createdAt: new Date().toISOString() };
    users.push(newUser);
    saveLocalUsers(users);
    return makeLocalAuthPayload(newUser);
}

function loginLocalUser(email, password) {
    const users = getLocalUsers();
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user || user.password !== password) {
        throw new Error('Incorrect email or password');
    }
    return makeLocalAuthPayload(user);
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', async () => {
    await fetchProducts();
    if (typeof initRouter === 'function') initRouter();
    if (typeof initHeroCarousel === 'function') initHeroCarousel();
    if (typeof renderCategories === 'function') renderCategories();
    if (typeof renderFeaturedProducts === 'function') renderFeaturedProducts('bestseller');
    if (typeof renderNewArrivalsProducts === 'function') renderNewArrivalsProducts();
    if (typeof renderTrendingProducts === 'function') renderTrendingProducts();
    if (typeof initSearch === 'function') initSearch();
    if (typeof initCart === 'function') initCart();
    if (typeof initAuth === 'function') initAuth();
    if (typeof initCustomizer === 'function') initCustomizer();
    if (typeof initAiGeneration === 'function') initAiGeneration();
    if (typeof initBackToTop === 'function') initBackToTop();
    if (typeof initMobileNav === 'function') initMobileNav();
    if (typeof initFilterToggles === 'function') initFilterToggles();
    if (typeof updateCartUI === 'function') updateCartUI();
    if (typeof updateWishlistCount === 'function') updateWishlistCount();
    if (typeof checkAuthStatus === 'function') checkAuthStatus();
});

async function fetchProducts() {
    try {
        const response = await fetch('/api/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        products = mergeProducts((await response.json()).map(normalizeProduct), EXTRA_PRODUCTS.map(normalizeProduct));
    } catch (error) {
        console.error('Error fetching products:', error);
        // Fallback to local array if server fails
        products = mergeProducts(STATIC_PRODUCTS.map(normalizeProduct), EXTRA_PRODUCTS.map(normalizeProduct));
    }
}

function normalizeProduct(product) {
    const categoryFallbacks = {
        silk: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_saree.jpg?width=700',
        kanjivaram: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kanchipuram_sarees_%287642282772%29.jpg?width=700',
        organza: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_saree_2.jpg?width=700',
        chiffon: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_sarees.jpg?width=700',
        chanderi: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mysore_Silk_Saree.jpg?width=700',
        tussar: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_saree_on_the_making_at_Kanchipuram_%287642281054%29.jpg?width=700',
        pattu: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mysore_Silk_Saree.jpg?width=700',
        banarasi: 'https://commons.wikimedia.org/wiki/Special:FilePath/Banarasi_Silk_Saree.jpg?width=700',
        designer: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_saree_2.jpg?width=700'
    };
    return {
        ...product,
        image: PRODUCT_IMAGE_OVERRIDES[product.id] || resolveImagePath(product.image) || categoryFallbacks[product.category] || DEFAULT_SAREE_IMAGE,
        originalPrice: product.originalPrice ?? product.original_price ?? product.price,
        occasion: Array.isArray(product.occasion) ? product.occasion : String(product.occasion || '').split(',').filter(Boolean),
        tags: Array.isArray(product.tags) ? product.tags : String(product.tags || '').split(',').filter(Boolean),
        meta: product.meta || {}
    };
}

function mergeProducts(primary, additions) {
    const map = new Map();
    [...primary, ...additions].forEach((product) => map.set(product.id, product));
    return [...map.values()];
}

function resolveImagePath(path) {
    if (!path) return '';
    const sareeImageMap = {
        'images/saree_red_kanjivaram.png': 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_saree.jpg?width=700',
        'images/saree_blue_banarasi.png': 'https://commons.wikimedia.org/wiki/Special:FilePath/Banarasi_Silk_Saree.jpg?width=700',
        'images/saree_green_cotton.png': 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_sarees.jpg?width=700',
        'images/saree_pink_designer.png': 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_saree_2.jpg?width=700',
        'images/saree_gold_pattu.png': 'https://commons.wikimedia.org/wiki/Special:FilePath/Mysore_Silk_Saree.jpg?width=700',
        'images/kanjivaram_lavender.png': 'https://commons.wikimedia.org/wiki/Special:FilePath/Kanchipuram_sarees_%287642282772%29.jpg?width=700',
        'images/silk_saree_real.png': 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_saree.jpg?width=700',
        'images/kanjivaram_maroon.png': 'https://commons.wikimedia.org/wiki/Special:FilePath/Kanchipuram_sarees_%287642287496%29.jpg?width=700',
        'images/kanjivaram_turquoise.png': 'https://commons.wikimedia.org/wiki/Special:FilePath/Kanchipuram_sarees_%287642282200%29.jpg?width=700',
        'images/kanjivaram_purple_silver.png': 'https://commons.wikimedia.org/wiki/Special:FilePath/Kanchipuram_sarees_%287642282772%29.jpg?width=700',
        'images/organza_mist.svg': 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_saree_2.jpg?width=700',
        'images/chiffon_sunset.svg': 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_sarees.jpg?width=700',
        'images/chanderi_cream.svg': 'https://commons.wikimedia.org/wiki/Special:FilePath/Mysore_Silk_Saree.jpg?width=700',
        'images/tussar_indigo.svg': 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_saree_on_the_making_at_Kanchipuram_%287642281054%29.jpg?width=700',
        'images/pattu_rose.svg': 'https://commons.wikimedia.org/wiki/Special:FilePath/Mysore_Silk_Saree.jpg?width=700',
        'images/banarasi_emerald.svg': 'https://commons.wikimedia.org/wiki/Special:FilePath/Shrimaa_banarasi_saree.jpg?width=700',
        'images/designer_noir.svg': 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_saree_2.jpg?width=700',
        'images/saree_pink_designer.svg': 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_saree_2.jpg?width=700'
    };
    return sareeImageMap[path] || path;
}

// ===== ROUTER =====
function initRouter() {
    window.addEventListener('hashchange', handleRoute);
    document.querySelectorAll('[data-page]').forEach(el => {
        el.addEventListener('click', (e) => {
            const page = el.dataset.page;
            const filter = el.dataset.filter;

            if (filter) {
                currentFilter = filter;
                currentSearchQuery = '';
                shopCurrentPage = 1; // Reset to first page when filtering
                if (window.location.hash === '#shop') {
                    renderShopPage(); // Force re-render if already on shop page
                }
            } else if (page === 'shop' && !filter) {
                currentFilter = null; // Clear filter if clicking "Shop All"
                currentSearchQuery = '';
                shopCurrentPage = 1;
                if (window.location.hash === '#shop') {
                    renderShopPage();
                }
            }

            closeMobileNav();
        });
    });


    handleRoute();
}

function handleRoute() {
    const hash = window.location.hash.replace('#', '') || 'home';
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.nav-link');

    pages.forEach(p => p.classList.remove('active'));
    navLinks.forEach(n => n.classList.remove('active'));

    let pageId;
    if (hash === 'home' || hash === '') {
        pageId = 'homePage';
        currentPage = 'home';
    } else if (hash === 'shop') {
        pageId = 'shopPage';
        currentPage = 'shop';
        renderShopPage();
    } else if (hash === 'customize') {
        pageId = 'customize';
        currentPage = 'customize';
    } else if (hash === 'checkout') {
        pageId = 'checkoutPage';
        currentPage = 'checkout';
        renderCheckoutPage();
    } else if (hash === 'orders') {
        pageId = 'ordersPage';
        currentPage = 'orders';
        renderOrdersPage();
    } else {
        pageId = 'homePage';
        currentPage = 'home';
    }

    const targetPage = document.getElementById(pageId);
    if (targetPage) targetPage.classList.add('active');

    const activeNav = document.querySelector(`.nav-link[data-page="${currentPage}"]`);
    if (activeNav) activeNav.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== HERO CAROUSEL =====
function initHeroCarousel() {
    const slides = document.querySelectorAll('.hero-slide');
    const dotsContainer = document.getElementById('heroDots');

    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = `hero-dot${i === 0 ? ' active' : ''}`;
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    document.getElementById('heroPrev').addEventListener('click', () => {
        goToSlide((currentHeroSlide - 1 + slides.length) % slides.length);
    });

    document.getElementById('heroNext').addEventListener('click', () => {
        goToSlide((currentHeroSlide + 1) % slides.length);
    });

    startHeroAutoplay();
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');

    slides[currentHeroSlide].classList.remove('active');
    dots[currentHeroSlide].classList.remove('active');

    currentHeroSlide = index;

    slides[currentHeroSlide].classList.add('active');
    dots[currentHeroSlide].classList.add('active');

    startHeroAutoplay();
}

function startHeroAutoplay() {
    clearInterval(heroInterval);
    heroInterval = setInterval(() => {
        const slides = document.querySelectorAll('.hero-slide');
        goToSlide((currentHeroSlide + 1) % slides.length);
    }, 5000);
}

// ===== CATEGORIES =====
function renderCategories() {
    const grid = document.getElementById('categoryGrid');
    grid.innerHTML = DISPLAY_CATEGORIES.map(cat => `
        <a href="#shop" class="category-card" data-page="shop" data-filter="${cat.id}" onclick="currentFilter='${cat.id}'">
            <div class="category-card-bg" style="background: ${cat.gradient}">
                <img src="${resolveImagePath(cat.image)}" alt="${cat.name}" class="category-card-img" onerror="this.style.display='none'">
                <span class="category-icon-fallback" style="font-size: 56px; opacity: 0.3">${cat.icon}</span>
            </div>
            <div class="category-card-content">
                <h3>${cat.name}</h3>
                <span>${products.filter(p => p.category === cat.id || (cat.id === 'bridal' && p.occasion.includes('bridal'))).length} Products</span>
            </div>
        </a>
    `).join('');
}

// ===== PRODUCT CARD RENDERER =====
function createProductCard(product) {
    const discount = Math.round((1 - product.price / product.originalPrice) * 100);
    const stars = '★'.repeat(Math.floor(product.rating)) + (product.rating % 1 >= 0.5 ? '½' : '');
    const isWishlisted = wishlist.includes(product.id);

    let badges = '';
    if (product.tags.includes('bestseller')) badges += '<span class="card-badge badge-bestseller">Bestseller</span>';
    if (product.tags.includes('new')) badges += '<span class="card-badge badge-new">New</span>';
    if (discount >= 25) badges += `<span class="card-badge badge-sale">${discount}% Off</span>`;
    if (product.tags.includes('trending')) badges += '<span class="card-badge badge-trending">Trending</span>';

    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-card-image" onclick="openProductModal(${product.id})">
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='${DEFAULT_SAREE_IMAGE}'">
                <div class="product-card-badges">${badges}</div>
                <div class="product-card-actions">
                    <button class="product-action-btn ${isWishlisted ? 'wishlisted' : ''}" onclick="event.stopPropagation(); toggleWishlist(${product.id})" title="Add to Wishlist">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="product-action-btn" onclick="event.stopPropagation(); openProductModal(${product.id})" title="Quick View">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
            <div class="product-card-body" onclick="openProductModal(${product.id})">
                <div class="product-card-category">${product.category}</div>
                <h3 class="product-card-name">${product.name}</h3>
                <div class="product-card-rating">
                    <span class="stars">${stars}</span>
                    <span>${product.rating}</span>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-card-price">
                    <span class="current-price">₹${product.price.toLocaleString()}</span>
                    <span class="original-price">₹${product.originalPrice.toLocaleString()}</span>
                    <span class="discount-tag">${discount}% off</span>
                </div>
            </div>
            <div class="product-card-footer">
                <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `;
}

// ===== FEATURED products =====
function renderFeaturedProducts(tab) {
    const grid = document.getElementById('featuredGrid');
    let filtered;

    if (tab === 'bestseller') {
        filtered = products.filter(p => p.tags.includes('bestseller')).sort((a, b) => b.reviews - a.reviews);
    } else if (tab === 'new') {
        filtered = products.filter(p => p.tags.includes('new'));
    } else if (tab === 'trending') {
        filtered = products.filter(p => p.tags.includes('trending'));
    } else if (tab === 'sale') {
        filtered = products.filter(p => {
            const discount = Math.round((1 - p.price / p.originalPrice) * 100);
            return discount >= 25 || p.tags.includes('sale');
        });
    } else {
        filtered = products.slice(0, 8);
    }

    grid.innerHTML = filtered.slice(0, 8).map(createProductCard).join('');

    // Tab buttons
    document.querySelectorAll('#featuredTabs .tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tab);
        btn.onclick = () => renderFeaturedProducts(btn.dataset.tab);
    });
}

function renderNewArrivalsProducts() {
    const grid = document.getElementById('newArrivalsGrid');
    if (!grid) return;
    const arrivals = products
        .filter(p => p.tags.includes('new'))
        .sort((a, b) => (b.rating * 100 + b.reviews) - (a.rating * 100 + a.reviews))
        .slice(0, 6);
    grid.innerHTML = arrivals.map(createProductCard).join('');
}

// ===== TRENDING products =====
function renderTrendingProducts() {
    const container = document.getElementById('trendingScroll');
    const trending = products.filter(p => p.tags.includes('trending') || p.tags.includes('bestseller')).slice(0, 10);
    container.innerHTML = trending.map(createProductCard).join('');
}

// ===== SHOP PAGE =====
function renderShopPage() {
    let filtered = [...products];

    if (currentSearchQuery) {
        const query = currentSearchQuery.toLowerCase();
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query) ||
            p.fabric.toLowerCase().includes(query) ||
            p.color.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query) ||
            p.tags.some(tag => tag.toLowerCase().includes(query)) ||
            p.occasion.some(o => o.toLowerCase().includes(query))
        );
    }

    // Apply category filter from navigation
    if (currentFilter) {
        const f = currentFilter.toLowerCase();
        if (f === 'new') {
            filtered = filtered.filter(p => p.tags.includes('new'));
        } else if (f === 'sale') {
            filtered = filtered.filter(p => p.tags.includes('sale') || Math.round((1 - p.price / p.originalPrice) * 100) >= 25);
        } else if (f === 'bestseller') {
            filtered = filtered.filter(p => p.tags.includes('bestseller'));
        } else if (f === 'bridal') {
            filtered = filtered.filter(p => p.occasion.includes('bridal'));
        } else if (f === 'wedding') {
            filtered = filtered.filter(p => p.occasion.includes('wedding'));
        } else if (f === 'festival') {
            filtered = filtered.filter(p => p.occasion.includes('festival'));
        } else if (f === 'party') {
            filtered = filtered.filter(p => p.occasion.includes('party'));
        } else if (f === 'casual') {
            filtered = filtered.filter(p => p.occasion.includes('casual'));
        } else if (f === 'wishlist') {
            filtered = filtered.filter(p => wishlist.includes(p.id));
        } else {
            filtered = filtered.filter(p => p.category === f || p.fabric === f);
        }
    }

    // Apply sidebar filters
    const checkedFabrics = [...document.querySelectorAll('#fabricFilter input:checked')].map(i => i.value);
    if (checkedFabrics.length) filtered = filtered.filter(p => checkedFabrics.includes(p.fabric));

    const checkedOccasions = [...document.querySelectorAll('#occasionFilter input:checked')].map(i => i.value);
    if (checkedOccasions.length) filtered = filtered.filter(p => p.occasion.some(o => checkedOccasions.includes(o)));

    const checkedBorders = [...document.querySelectorAll('#borderFilter input:checked')].map(i => i.value);
    if (checkedBorders.length) filtered = filtered.filter(p => checkedBorders.includes(p.border));

    const selectedColors = [...document.querySelectorAll('#colorFilter .color-swatch.active')].map(s => s.dataset.color);
    if (selectedColors.length) filtered = filtered.filter(p => selectedColors.includes(p.color));

    const maxPrice = document.getElementById('priceSlider').value;
    filtered = filtered.filter(p => p.price <= maxPrice);

    const ratingFilter = document.querySelector('#ratingFilter input:checked');
    if (ratingFilter) {
        filtered = filtered.filter(p => p.rating >= parseInt(ratingFilter.value));
    }

    // Sort
    const sortSelect = document.getElementById('sortSelect');
    const sort = sortSelect.value;
    if (sort === 'price-low') filtered.sort((a, b) => a.price - b.price);
    else if (sort === 'price-high') filtered.sort((a, b) => b.price - a.price);
    else if (sort === 'rating') filtered.sort((a, b) => b.rating - a.rating);
    else if (sort === 'newest') filtered.sort((a, b) => (b.tags.includes('new') ? 1 : 0) - (a.tags.includes('new') ? 1 : 0));
    else if (sort === 'name-az') filtered.sort((a, b) => a.name.localeCompare(b.name));

    // Update breadcrumb
    const breadcrumb = document.getElementById('shopBreadcrumb');
    if (currentSearchQuery) {
        breadcrumb.textContent = `Search: ${currentSearchQuery}`;
    } else if (currentFilter) {
        breadcrumb.textContent = currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1) + ' Sarees';
    } else {
        breadcrumb.textContent = 'All Sarees';
    }

    // Results count
    document.getElementById('resultsCount').textContent = `${filtered.length} products`;

    // Pagination
    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    if (shopCurrentPage > totalPages) shopCurrentPage = 1;
    const startIdx = (shopCurrentPage - 1) * ITEMS_PER_PAGE;
    const pageProducts = filtered.slice(startIdx, startIdx + ITEMS_PER_PAGE);

    // Render
    const grid = document.getElementById('shopGrid');
    if (pageProducts.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 80px 20px; color: var(--text-muted);">
                <i class="fas fa-search" style="font-size: 48px; margin-bottom: 16px; display: block;"></i>
                <h3 style="margin-bottom: 8px;">No products found</h3>
                <p>Try adjusting your filters or browse all sarees.</p>
                <button class="btn btn-outline" style="margin-top: 16px;" onclick="currentFilter=null; document.getElementById('clearFilters').click();">Clear Filters</button>
            </div>
        `;
    } else {
        grid.innerHTML = pageProducts.map(createProductCard).join('');
    }

    // Pagination buttons
    renderPagination(totalPages);

    // Active filters display
    renderActiveFilters();
}

function renderPagination(totalPages) {
    const container = document.getElementById('shopPagination');
    if (totalPages <= 1) {
        container.innerHTML = '';
        return;
    }

    let html = `<button class="page-btn" onclick="goToShopPage(${shopCurrentPage - 1})" ${shopCurrentPage === 1 ? 'disabled' : ''}><i class="fas fa-chevron-left"></i></button>`;

    for (let i = 1; i <= totalPages; i++) {
        html += `<button class="page-btn ${i === shopCurrentPage ? 'active' : ''}" onclick="goToShopPage(${i})">${i}</button>`;
    }

    html += `<button class="page-btn" onclick="goToShopPage(${shopCurrentPage + 1})" ${shopCurrentPage === totalPages ? 'disabled' : ''}><i class="fas fa-chevron-right"></i></button>`;

    container.innerHTML = html;
}

function goToShopPage(page) {
    shopCurrentPage = page;
    renderShopPage();
    document.getElementById('shopPage').scrollIntoView({ behavior: 'smooth' });
}

function renderActiveFilters() {
    const container = document.getElementById('activeFilters');
    let tags = [];

    if (currentFilter) {
        tags.push(`<div class="active-filter-tag">${currentFilter} <button onclick="currentFilter=null; renderShopPage()">×</button></div>`);
    }

    document.querySelectorAll('.shop-sidebar input:checked').forEach(input => {
        tags.push(`<div class="active-filter-tag">${input.value} <button onclick="document.querySelector('.shop-sidebar input[value=\\'${input.value}\\']').click();">×</button></div>`);
    });

    document.querySelectorAll('#colorFilter .color-swatch.active').forEach(swatch => {
        tags.push(`<div class="active-filter-tag">${swatch.title} <button onclick="document.querySelector('#colorFilter .color-swatch[data-color=\\'${swatch.dataset.color}\\']').click();">×</button></div>`);
    });

    container.innerHTML = tags.join('');
}

// ===== SHOP FILTERS & EVENTS =====
function initFilterToggles() {
    // Filter title toggles
    document.querySelectorAll('.filter-title').forEach(title => {
        title.addEventListener('click', () => {
            const target = document.getElementById(title.dataset.toggle);
            if (target) {
                target.style.display = target.style.display === 'none' ? 'flex' : 'none';
                title.classList.toggle('collapsed');
            }
        });
    });

    // Sort change
    document.getElementById('sortSelect').addEventListener('change', () => {
        if (currentPage === 'shop') renderShopPage();
    });

    // Price slider
    document.getElementById('priceSlider').addEventListener('input', (e) => {
        document.getElementById('priceSliderVal').textContent = `₹${parseInt(e.target.value).toLocaleString()}`;
        if (currentPage === 'shop') renderShopPage();
    });

    // Checkbox filters
    document.querySelectorAll('.shop-sidebar input[type="checkbox"], .shop-sidebar input[type="radio"]').forEach(input => {
        input.addEventListener('change', () => {
            if (currentPage === 'shop') renderShopPage();
        });
    });

    // Color swatches
    document.querySelectorAll('#colorFilter .color-swatch').forEach(swatch => {
        swatch.addEventListener('click', () => {
            swatch.classList.toggle('active');
            if (currentPage === 'shop') renderShopPage();
        });
    });

    // Clear filters
    document.getElementById('clearFilters').addEventListener('click', () => {
        currentFilter = null;
        currentSearchQuery = '';
        document.querySelectorAll('.shop-sidebar input:checked').forEach(i => i.checked = false);
        document.querySelectorAll('#colorFilter .color-swatch.active').forEach(s => s.classList.remove('active'));
        document.getElementById('priceSlider').value = 50000;
        document.getElementById('priceSliderVal').textContent = '₹50,000';
        document.getElementById('priceMin').value = '';
        document.getElementById('priceMax').value = '';
        renderShopPage();
    });

    // View toggle
    document.getElementById('viewGrid').addEventListener('click', () => {
        document.getElementById('shopGrid').classList.remove('list-view');
        document.getElementById('viewGrid').classList.add('active');
        document.getElementById('viewList').classList.remove('active');
    });

    document.getElementById('viewList').addEventListener('click', () => {
        document.getElementById('shopGrid').classList.add('list-view');
        document.getElementById('viewList').classList.add('active');
        document.getElementById('viewGrid').classList.remove('active');
    });

    // Mobile filter toggle
    document.getElementById('filterToggleBtn').addEventListener('click', () => {
        const sidebar = document.getElementById('shopSidebar');
        sidebar.classList.toggle('active');
    });
}

// ===== SEARCH =====
function initSearch() {
    const input = document.getElementById('searchInput');
    const suggestions = document.getElementById('searchSuggestions');

    input.addEventListener('input', () => {
        const q = input.value.trim().toLowerCase();
        if (q.length < 2) {
            suggestions.classList.remove('active');
            return;
        }

        const results = products.filter(p =>
            p.name.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.fabric.toLowerCase().includes(q) ||
            p.color.toLowerCase().includes(q)
        ).slice(0, 6);

        if (results.length === 0) {
            suggestions.classList.remove('active');
            return;
        }

        suggestions.innerHTML = results.map(p => `
            <div class="search-suggestion-item" onclick="openProductModal(${p.id}); document.getElementById('searchSuggestions').classList.remove('active'); document.getElementById('searchInput').value='';">
                <img src="${p.image}" alt="${p.name}" onerror="this.onerror=null;this.src='${DEFAULT_SAREE_IMAGE}'">
                <div class="suggestion-text">
                    <div class="suggestion-name">${p.name}</div>
                    <div class="suggestion-price">₹${p.price.toLocaleString()}</div>
                </div>
            </div>
        `).join('');

        suggestions.classList.add('active');
    });

    input.addEventListener('blur', () => {
        setTimeout(() => suggestions.classList.remove('active'), 200);
    });

    document.getElementById('searchBtn').addEventListener('click', () => {
        const q = input.value.trim();
        if (q) {
            currentSearchQuery = q;
            currentFilter = null;
            shopCurrentPage = 1;
            window.location.hash = '#shop';
            input.value = '';
            suggestions.classList.remove('active');
        }
    });

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            document.getElementById('searchBtn').click();
        }
    });
}

// ===== PRODUCT MODAL =====
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const discount = Math.round((1 - product.price / product.originalPrice) * 100);
    const stars = '★'.repeat(Math.floor(product.rating)) + (product.rating % 1 >= 0.5 ? '½' : '');

    document.getElementById('productMainImage').innerHTML = `<img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='${DEFAULT_SAREE_IMAGE}'">`;
    document.getElementById('productBadge').textContent = product.category.toUpperCase();
    document.getElementById('productDetailName').textContent = product.name;
    document.getElementById('productDetailRating').innerHTML = `<span class="stars">${stars}</span> ${product.rating} <span class="rating-count">(${product.reviews} reviews)</span>`;
    document.getElementById('productDetailPrice').textContent = `₹${product.price.toLocaleString()}`;
    document.getElementById('productDetailOriginal').textContent = `₹${product.originalPrice.toLocaleString()}`;
    document.getElementById('productDetailDiscount').textContent = `${discount}% off`;
    document.getElementById('productDetailDesc').textContent = product.description;

    document.getElementById('productDetailMeta').innerHTML = Object.entries(product.meta).map(([key, val]) => `
        <div class="meta-item"><span class="meta-label">${key.charAt(0).toUpperCase() + key.slice(1)}:</span> <span class="meta-value">${val}</span></div>
    `).join('');

    document.getElementById('qtyInput').value = 1;

    // Actions
    document.getElementById('addToCartDetail').onclick = () => {
        const qty = parseInt(document.getElementById('qtyInput').value);
        addToCart(productId, qty);
        closeProductModal();
    };

    document.getElementById('buyNowDetail').onclick = () => {
        const qty = parseInt(document.getElementById('qtyInput').value);
        addToCart(productId, qty);
        closeProductModal();
        openCart();
    };

    document.getElementById('wishlistDetail').onclick = () => toggleWishlist(productId);

    document.getElementById('qtyMinus').onclick = () => {
        const inp = document.getElementById('qtyInput');
        if (parseInt(inp.value) > 1) inp.value = parseInt(inp.value) - 1;
    };

    document.getElementById('qtyPlus').onclick = () => {
        const inp = document.getElementById('qtyInput');
        if (parseInt(inp.value) < 10) inp.value = parseInt(inp.value) + 1;
    };

    document.getElementById('productModalOverlay').classList.add('active');
    document.getElementById('productModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    document.getElementById('productModalOverlay').classList.remove('active');
    document.getElementById('productModal').classList.remove('active');
    document.body.style.overflow = '';
}

document.getElementById('productModalClose').addEventListener('click', closeProductModal);
document.getElementById('productModalOverlay').addEventListener('click', closeProductModal);

// ===== CART =====
function initCart() {
    document.getElementById('cartBtn').addEventListener('click', openCart);
    document.getElementById('cartClose').addEventListener('click', closeCart);
    document.getElementById('cartOverlay').addEventListener('click', closeCart);
    document.getElementById('checkoutBtn').addEventListener('click', (event) => {
        event.stopImmediatePropagation();
        if (cart.length === 0) {
            showToast('Your cart is empty!', 'error');
            return;
        }
        closeCart();
        window.location.hash = '#checkout';
    }, true);

    document.getElementById('applyCouponBtn').addEventListener('click', () => {
        const code = document.getElementById('couponInput').value.trim().toUpperCase();
        if (code === 'PADMA20' || code === 'SILK30') {
            showToast('Coupon applied successfully!', 'success');
            updateCartUI();
        } else {
            showToast('Invalid coupon code', 'error');
        }
    });

    document.getElementById('checkoutBtn').addEventListener('click', () => {
        if (cart.length === 0) {
            showToast('Your cart is empty!', 'error');
            return;
        }
        showToast('Order placed successfully! 🎉', 'success');
        cart = [];
        saveCart();
        updateCartUI();
        closeCart();
    });
}

function openCart() {
    document.getElementById('cartOverlay').classList.add('active');
    document.getElementById('cartSidebar').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cartOverlay').classList.remove('active');
    document.getElementById('cartSidebar').classList.remove('active');
    document.body.style.overflow = '';
}

function addToCart(productId, qty = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId && !item.custom);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
            qty: qty
        });
    }

    saveCart();
    updateCartUI();
    showToast(`${product.name} added to cart!`, 'success');
}

function addCustomToCart(customItem) {
    cart.push(customItem);
    saveCart();
    updateCartUI();
    showToast('Custom saree added to cart!', 'success');
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
}

function updateCartQty(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
        removeFromCart(index);
        return;
    }
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('spt_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cartCount').textContent = count;
    document.getElementById('cartItemCount').textContent = count;

    const cartItems = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartFooter = document.getElementById('cartFooter');

    if (cart.length === 0) {
        cartEmpty.style.display = 'flex';
        cartItems.style.display = 'none';
        cartFooter.style.display = 'none';
        return;
    }

    cartEmpty.style.display = 'none';
    cartItems.style.display = 'flex';
    cartFooter.style.display = 'block';

    cartItems.innerHTML = cart.map((item, i) => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${resolveImagePath(item.image)}" alt="${item.name}" onerror="this.onerror=null;this.src='${DEFAULT_SAREE_IMAGE}'">
            </div>
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <div class="cart-item-variant">${item.category || 'Custom Design'}</div>
                <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString()}</div>
                <div class="cart-item-qty">
                    <button class="cart-qty-btn" onclick="updateCartQty(${i}, -1)">−</button>
                    <span>${item.qty}</span>
                    <button class="cart-qty-btn" onclick="updateCartQty(${i}, 1)">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${i})" title="Remove"><i class="fas fa-trash-alt"></i></button>
        </div>
    `).join('');

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const coupon = document.getElementById('couponInput').value.trim().toUpperCase();
    let discount = 0;
    if (coupon === 'PADMA20') discount = Math.round(subtotal * 0.2);
    if (coupon === 'SILK30') discount = Math.round(subtotal * 0.3);
    const shipping = subtotal >= 2999 ? 0 : 199;
    const total = subtotal - discount + shipping;

    document.getElementById('cartSubtotal').textContent = `₹${subtotal.toLocaleString()}`;
    document.getElementById('cartDiscount').textContent = `-₹${discount.toLocaleString()}`;
    document.getElementById('cartShipping').textContent = shipping === 0 ? 'Free' : `₹${shipping}`;
    document.getElementById('cartTotal').textContent = `₹${total.toLocaleString()}`;
}

// ===== WISHLIST =====
function toggleWishlist(productId) {
    const idx = wishlist.indexOf(productId);
    if (idx > -1) {
        wishlist.splice(idx, 1);
        showToast('Removed from wishlist', 'info');
    } else {
        wishlist.push(productId);
        showToast('Added to wishlist ❤️', 'success');
    }
    localStorage.setItem('spt_wishlist', JSON.stringify(wishlist));
    updateWishlistCount();

    // Re-render current product cards
    if (currentPage === 'home') {
        // Re-render without breaking tab state
    } else if (currentPage === 'shop') {
        renderShopPage();
    }
}

function updateWishlistCount() {
    document.getElementById('wishlistCount').textContent = wishlist.length;
}

function openWishlistPage() {
    currentFilter = 'wishlist';
    currentSearchQuery = '';
    shopCurrentPage = 1;
    window.location.hash = '#shop';
}

// ===== AUTH =====
function initAuth() {
    document.getElementById('wishlistBtn').addEventListener('click', openWishlistPage);
    document.getElementById('locationBtn').addEventListener('click', () => {
        showToast('Location selection will be added soon. Delivery is available across India.', 'info');
    });
    const navAllCategories = document.getElementById('navAllCategories');
    if (navAllCategories) {
        navAllCategories.addEventListener('click', () => {
            currentFilter = null;
            currentSearchQuery = '';
            shopCurrentPage = 1;
            window.location.hash = '#shop';
        });
    }

    document.getElementById('accountBtn').addEventListener('click', () => {
        if (currentUser) {
            // If already logged in, maybe show a profile menu? 
            // For now, let's just toggle a logout option or stay as is.
            if (confirm(`Logged in as ${currentUser.name}. Do you want to logout?`)) {
                logout();
            }
            return;
        }
        switchAuthTab('login');
        clearAuthErrors();
        document.getElementById('authOverlay').classList.add('active');
        document.getElementById('authModal').classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    document.getElementById('authClose').addEventListener('click', closeAuth);
    document.getElementById('authOverlay').addEventListener('click', closeAuth);

    document.getElementById('loginTab').addEventListener('click', () => switchAuthTab('login'));
    document.getElementById('registerTab').addEventListener('click', () => switchAuthTab('register'));

    document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        clearAuthErrors();
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;
        setAuthLoading('login', true);

        try {
            let data;

            if (isLocalFileMode()) {
                data = loginLocalUser(email, password);
            } else {
                const formData = new FormData();
                formData.append('username', email);
                formData.append('password', password);

                const response = await fetch('/api/auth/login', {
                    method: 'POST',
                    body: formData
                });

                if (!response.ok) {
                    const err = await response.json();
                    throw new Error(err.detail || 'Login failed');
                }

                data = await response.json();
            }

            loginUser(data);
            showToast(`Signed in successfully! Welcome back${isLocalFileMode() ? ' (local mode)' : ''}.`, 'success');
            closeAuth();
        } catch (error) {
            const message = /incorrect email or password/i.test(error.message)
                ? 'We could not find an account with those login details. If you are new here, create an account first.'
                : /failed to fetch/i.test(error.message)
                    ? 'Backend is not running. Open the site through FastAPI, or use this page in local mode after creating an account here.'
                    : error.message;
            showAuthError('login', message);
            showToast(message, 'error');
        } finally {
            setAuthLoading('login', false);
        }
    });

    document.getElementById('registerForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        clearAuthErrors();
        const name = document.getElementById('regName').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const phone = document.getElementById('regPhone').value.trim();
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('regConfirmPassword').value;

        if (password !== confirmPassword) {
            showAuthError('register', 'Passwords do not match. Please re-enter them.');
            return;
        }

        setAuthLoading('register', true);

        try {
            let data;

            if (isLocalFileMode()) {
                data = registerLocalUser({ name, email, password, phone });
            } else {
                const response = await fetch('/api/auth/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password, name })
                });

                if (!response.ok) {
                    const err = await response.json();
                    throw new Error(err.detail || 'Registration failed');
                }

                data = await response.json();
            }

            loginUser(data);
            showToast(`Account created successfully! Welcome${isLocalFileMode() ? ' (local mode)' : ''}.`, 'success');
            closeAuth();
        } catch (error) {
            const alreadyExists = /already registered/i.test(error.message);
            const message = alreadyExists
                ? 'This email already has an account. Please log in instead.'
                : /failed to fetch/i.test(error.message)
                    ? 'Backend is not running. Open the site through FastAPI, or keep using this page in local mode.'
                    : error.message;
            showAuthError('register', message);
            if (alreadyExists) {
                document.getElementById('loginEmail').value = email;
                switchAuthTab('login');
            }
            showToast(message, 'error');
        } finally {
            setAuthLoading('register', false);
        }
    });
}

function switchAuthTab(tab) {
    const isLogin = tab === 'login';
    document.getElementById('loginTab').classList.toggle('active', isLogin);
    document.getElementById('registerTab').classList.toggle('active', !isLogin);
    document.getElementById('loginForm').classList.toggle('hidden', !isLogin);
    document.getElementById('registerForm').classList.toggle('hidden', isLogin);
    clearAuthErrors();
}

function clearAuthErrors() {
    const loginError = document.getElementById('loginError');
    const registerError = document.getElementById('registerError');
    if (loginError) {
        loginError.textContent = '';
        loginError.classList.remove('active');
    }
    if (registerError) {
        registerError.textContent = '';
        registerError.classList.remove('active');
    }
}

function showAuthError(type, message) {
    const target = document.getElementById(type === 'login' ? 'loginError' : 'registerError');
    if (!target) return;
    target.textContent = message;
    target.classList.add('active');
}

function setAuthLoading(type, loading) {
    const btn = document.getElementById(type === 'login' ? 'loginSubmitBtn' : 'registerSubmitBtn');
    if (!btn) return;
    const text = btn.querySelector('.btn-text');
    const spinner = btn.querySelector('.btn-loading');
    btn.disabled = loading;
    if (text) text.classList.toggle('hidden', loading);
    if (spinner) spinner.classList.toggle('hidden', !loading);
}

function togglePasswordVisibility(inputId, button) {
    const input = document.getElementById(inputId);
    if (!input || !button) return;
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    const icon = button.querySelector('i');
    if (icon) {
        icon.classList.toggle('fa-eye', !isPassword);
        icon.classList.toggle('fa-eye-slash', isPassword);
    }
}

function loginUser(data) {
    currentUser = data.user;
    authToken = data.access_token;
    localStorage.setItem('spt_user', JSON.stringify(currentUser));
    localStorage.setItem('spt_token', authToken);
    checkAuthStatus();
}

function logout() {
    currentUser = null;
    authToken = null;
    localStorage.removeItem('spt_user');
    localStorage.removeItem('spt_token');
    checkAuthStatus();
    window.location.hash = '#home';
    showToast('Logged out successfully', 'info');
}

function checkAuthStatus() {
    const accountBtn = document.querySelector('#accountBtn .action-text');
    const navOrders = document.getElementById('navOrdersLink');
    const mobileOrders = document.getElementById('mobileOrdersLink');

    if (currentUser) {
        accountBtn.innerHTML = `Hello, ${currentUser.name.split(' ')[0]}<br><strong>Account</strong>`;
        if (navOrders) navOrders.style.display = 'block';
        if (mobileOrders) mobileOrders.style.display = 'flex';
    } else {
        accountBtn.innerHTML = 'Hello, Sign in<br><strong>Account</strong>';
        if (navOrders) navOrders.style.display = 'none';
        if (mobileOrders) mobileOrders.style.display = 'none';
    }
}

function closeAuth() {
    document.getElementById('authOverlay').classList.remove('active');
    document.getElementById('authModal').classList.remove('active');
    document.body.style.overflow = '';
}

// ===== CUSTOMIZER =====
function initCustomizer() {
    renderFabricOptions();
    renderColorOptions();
    renderBorderOptions();
    renderBorderWidthOptions();
    renderBorderColorOptions();
    renderPalluOptions();
    renderWeaveOptions();
    renderBlouseOptions();
    updateCustomPreview();
    initAiGeneration();

    document.getElementById('customColorPicker').addEventListener('input', (e) => {
        customization.color = e.target.value;
        document.getElementById('customColorHex').textContent = e.target.value;
        // Deselect palette colors
        document.querySelectorAll('#colorOptions .color-option').forEach(c => c.classList.remove('selected'));
        updateCustomPreview();
    });

    document.getElementById('addCustomToCart').addEventListener('click', () => {
        if (!customization.fabric) {
            showToast('Please select a fabric type', 'error');
            return;
        }
        if (!customization.color) {
            showToast('Please select a color', 'error');
            return;
        }

        const price = calculateCustomPrice();
        const fabricInfo = CUSTOMIZATION.fabrics.find(f => f.id === customization.fabric);
        const borderInfo = CUSTOMIZATION.borders.find(b => b.id === customization.border);
        const palluInfo = CUSTOMIZATION.pallus.find(p => p.id === customization.pallu);
        const generatedImage = document.getElementById('aiGeneratedImage').src;

        const item = {
            id: 'custom_' + Date.now(),
            name: `Custom ${fabricInfo?.name || ''} Saree`.trim(),
            price: price,
            image: generatedImage || 'images/saree_red_kanjivaram.svg',
            category: `Custom: ${fabricInfo?.name || ''}, ${borderInfo?.name || 'No Border'}, ${palluInfo?.name || 'No Pallu'}`,
            qty: 1,
            custom: true
        };

        addCustomToCart(item);
        openCart();
    });

    document.getElementById('resetCustomization').addEventListener('click', () => {
        customization = {
            fabric: null, color: null, border: null, borderWidth: 'Medium',
            borderColor: '#C4A265', pallu: null, weave: null,
            blouse: 'matching', occasion: 'Wedding'
        };
        initCustomizer();
        showToast('Customization reset', 'info');
    });
}

function renderSareeTypeOptions() {
    const container = document.getElementById('sareeTypeOptions');
    if (!container) return;
    container.innerHTML = CUSTOMIZATION.sareeTypes.map(type => `
        <div class="option-card" onclick="selectSareeType('${type.id}')">
            <span class="option-icon">${type.icon}</span>
            <span class="option-name">${type.name}</span>
            <span class="option-price">+₹${type.price.toLocaleString()}</span>
        </div>
    `).join('');
}

function selectSareeType(id) {
    renderSareeTypeOptions();
    updateCustomPreview();
}

function renderFabricOptions() {
    const container = document.getElementById('fabricOptions');
    container.innerHTML = CUSTOMIZATION.fabrics.map(f => `
        <div class="option-card ${customization.fabric === f.id ? 'selected' : ''}" onclick="selectFabric('${f.id}')">
            <span class="option-icon">${f.icon}</span>
            <span class="option-name">${f.name}</span>
            <span class="option-price">₹${f.price.toLocaleString()}</span>
        </div>
    `).join('');
}

function selectFabric(id) {
    customization.fabric = id;
    renderFabricOptions();
    updateCustomPreview();
}

function renderColorOptions() {
    const container = document.getElementById('colorOptions');
    container.innerHTML = CUSTOMIZATION.colors.map(c => `
        <button class="color-option ${customization.color === c.hex ? 'selected' : ''}"
            style="background: ${c.hex}${c.name === 'White' || c.name === 'Cream' ? '; border: 1px solid #555' : ''}"
            title="${c.name}"
            onclick="selectColor('${c.hex}')">
        </button>
    `).join('');
}

function selectColor(hex) {
    customization.color = hex;
    document.getElementById('customColorPicker').value = hex;
    document.getElementById('customColorHex').textContent = hex;
    renderColorOptions();
    updateCustomPreview();
}

function renderBorderOptions() {
    const container = document.getElementById('borderOptions');
    container.innerHTML = CUSTOMIZATION.borders.map(b => `
        <div class="option-card ${customization.border === b.id ? 'selected' : ''}" onclick="selectBorder('${b.id}')">
            <span class="option-icon">${b.icon}</span>
            <span class="option-name">${b.name}</span>
            <span class="option-price">+₹${b.price.toLocaleString()}</span>
        </div>
    `).join('');
}

function selectBorder(id) {
    customization.border = id;
    renderBorderOptions();
    updateCustomPreview();
}

function renderBorderWidthOptions() {
    const container = document.getElementById('borderWidthOptions');
    container.innerHTML = CUSTOMIZATION.borderWidths.map(w => `
        <button class="option-pill ${customization.borderWidth === w ? 'selected' : ''}" onclick="selectBorderWidth('${w}')">${w}</button>
    `).join('');
}

function selectBorderWidth(w) {
    customization.borderWidth = w;
    renderBorderWidthOptions();
    updateCustomPreview();
}

function renderBorderColorOptions() {
    const container = document.getElementById('borderColorOptions');
    container.innerHTML = CUSTOMIZATION.borderColors.map(c => `
        <button class="color-option ${customization.borderColor === c.hex ? 'selected' : ''}"
            style="background: ${c.hex}" title="${c.name}"
            onclick="selectBorderColor('${c.hex}')">
        </button>
    `).join('');
}

function selectBorderColor(hex) {
    customization.borderColor = hex;
    renderBorderColorOptions();
    updateCustomPreview();
}

function renderPalluOptions() {
    const container = document.getElementById('palluOptions');
    container.innerHTML = CUSTOMIZATION.pallus.map(p => `
        <div class="option-card ${customization.pallu === p.id ? 'selected' : ''}" onclick="selectPallu('${p.id}')">
            <span class="option-icon">${p.icon}</span>
            <span class="option-name">${p.name}</span>
            <span class="option-price">+₹${p.price.toLocaleString()}</span>
        </div>
    `).join('');
}

function selectPallu(id) {
    customization.pallu = id;
    renderPalluOptions();
    updateCustomPreview();
}

function renderWeaveOptions() {
    const container = document.getElementById('weaveOptions');
    container.innerHTML = CUSTOMIZATION.weaves.map(w => `
        <div class="option-card ${customization.weave === w.id ? 'selected' : ''}" onclick="selectWeave('${w.id}')">
            <span class="option-icon">${w.icon}</span>
            <span class="option-name">${w.name}</span>
            <span class="option-price">+₹${w.price.toLocaleString()}</span>
        </div>
    `).join('');
}

function selectWeave(id) {
    customization.weave = id;
    renderWeaveOptions();
    updateCustomPreview();
}

function renderBlouseOptions() {
    const container = document.getElementById('blouseOptions');
    container.innerHTML = CUSTOMIZATION.blouses.map(b => `
        <button class="option-pill ${customization.blouse === b.id ? 'selected' : ''}" onclick="selectBlouse('${b.id}')">${b.name} ${b.price > 0 ? '(+₹' + b.price + ')' : b.price < 0 ? '(-₹' + Math.abs(b.price) + ')' : ''}</button>
    `).join('');
}

function selectBlouse(id) {
    customization.blouse = id;
    renderBlouseOptions();
    updateCustomPreview();
}

function calculateCustomPrice() {
    let price = 0;
    const fabric = CUSTOMIZATION.fabrics.find(f => f.id === customization.fabric);
    if (fabric) price += fabric.price;
    const border = CUSTOMIZATION.borders.find(b => b.id === customization.border);
    if (border) price += border.price;
    const pallu = CUSTOMIZATION.pallus.find(p => p.id === customization.pallu);
    if (pallu) price += pallu.price;
    const weave = CUSTOMIZATION.weaves.find(w => w.id === customization.weave);
    if (weave) price += weave.price;
    const blouse = CUSTOMIZATION.blouses.find(b => b.id === customization.blouse);
    if (blouse) price += blouse.price;

    // Width multiplier
    if (customization.borderWidth === 'Wide') price += 500;
    if (customization.borderWidth === 'Extra Wide') price += 1000;

    return Math.max(0, price);
}

function updateCustomPreview() {
    // Preview body color
    const body = document.getElementById('previewBody');
    body.style.background = customization.color || '#D32F2F';

    // Border
    const borderTop = document.getElementById('previewBorderTop');
    const borderBottom = document.getElementById('previewBorderBottom');
    const borderColor = customization.borderColor || '#C4A265';

    let borderH = 30;
    if (customization.borderWidth === 'Narrow') borderH = 15;
    if (customization.borderWidth === 'Wide') borderH = 45;
    if (customization.borderWidth === 'Extra Wide') borderH = 60;

    borderTop.style.height = borderH + 'px';
    borderBottom.style.height = borderH + 'px';

    const borderStyle = customization.border || (customization.fabric === 'pattu' ? 'zari' : null);
    if (borderStyle === 'temple') {
        borderTop.style.background = `repeating-linear-gradient(90deg, ${borderColor}, ${borderColor} 15px, transparent 15px, transparent 17px)`;
        borderBottom.style.background = borderTop.style.background;
    } else if (borderStyle === 'zari') {
        borderTop.style.background = `linear-gradient(90deg, ${borderColor}, #E8D5A8, ${borderColor})`;
        borderBottom.style.background = borderTop.style.background;
    } else if (borderStyle === 'contrast') {
        borderTop.style.background = borderColor;
        borderBottom.style.background = borderColor;
    } else {
        borderTop.style.background = `linear-gradient(90deg, ${borderColor}, #E8D5A8, ${borderColor})`;
        borderBottom.style.background = borderTop.style.background;
    }

    // Pallu
    const pallu = document.getElementById('previewPallu');
    if (customization.pallu === 'heavyzari') {
        pallu.style.background = `linear-gradient(180deg, ${borderColor}80, transparent 70%)`;
        pallu.style.width = '45%';
    } else if (customization.pallu === 'embroidered') {
        pallu.style.background = `linear-gradient(180deg, ${borderColor}50, transparent 50%)`;
        pallu.style.width = '35%';
    } else if (customization.pallu === 'plain') {
        pallu.style.background = 'transparent';
    } else {
        pallu.style.background = `linear-gradient(180deg, ${borderColor}40, transparent 60%)`;
        pallu.style.width = '40%';
    }

    // Motifs
    const motifs = document.getElementById('previewMotifs');
    const weave = CUSTOMIZATION.weaves.find(w => w.id === customization.weave);
    if (weave && weave.pattern) {
        motifs.style.background = weave.pattern;
        motifs.style.opacity = '0.2';
    } else if (customization.weave === 'plain') {
        motifs.style.background = 'none';
    } else if (customization.weave) {
        motifs.style.background = `radial-gradient(circle at 20px 20px, ${borderColor}20 3px, transparent 3px)`;
        motifs.style.backgroundSize = '40px 40px';
        motifs.style.opacity = '0.3';
    } else {
        motifs.style.background = 'none';
    }

    // Info
    const fabricInfo = CUSTOMIZATION.fabrics.find(f => f.id === customization.fabric);
    const borderInfo = CUSTOMIZATION.borders.find(b => b.id === customization.border);
    const palluInfo = CUSTOMIZATION.pallus.find(p => p.id === customization.pallu);
    const weaveInfo = CUSTOMIZATION.weaves.find(w => w.id === customization.weave);

    document.getElementById('previewTitle').textContent = fabricInfo ? `Custom ${fabricInfo.name} Saree` : 'Your Custom Saree';
    document.getElementById('previewDesc').textContent = fabricInfo ? `${fabricInfo.name} with ${borderInfo?.name || 'custom border'} and ${palluInfo?.name || 'elegant pallu'}` : 'Select options to see your design come to life';

    const price = calculateCustomPrice();
    document.getElementById('previewPrice').textContent = `₹${price.toLocaleString()}`;
    document.getElementById('customTotalPrice').textContent = `₹${price.toLocaleString()}`;

    // Summary
    const summary = document.getElementById('customSummary');
    summary.innerHTML = `
        <div class="summary-item"><span class="label">Fabric</span><span class="value">${fabricInfo?.name || '—'}</span></div>
        <div class="summary-item"><span class="label">Color</span><span class="value"><span style="display:inline-block;width:14px;height:14px;border-radius:50%;background:${customization.color || '#999'};vertical-align:middle;margin-right:4px;border:1px solid #555"></span> ${customization.color || '—'}</span></div>
        <div class="summary-item"><span class="label">Border</span><span class="value">${borderInfo?.name || '—'}</span></div>
        <div class="summary-item"><span class="label">Border Width</span><span class="value">${customization.borderWidth}</span></div>
        <div class="summary-item"><span class="label">Border Color</span><span class="value"><span style="display:inline-block;width:14px;height:14px;border-radius:50%;background:${customization.borderColor};vertical-align:middle;margin-right:4px;border:1px solid #555"></span></span></div>
        <div class="summary-item"><span class="label">Pallu</span><span class="value">${palluInfo?.name || '—'}</span></div>
        <div class="summary-item"><span class="label">Weave</span><span class="value">${weaveInfo?.name || '—'}</span></div>
        <div class="summary-item"><span class="label">Blouse</span><span class="value">${CUSTOMIZATION.blouses.find(b => b.id === customization.blouse)?.name || '—'}</span></div>
    `;
}

// ===== AI IMAGE GENERATION =====
// Backend proxies Pollinations.ai so the browser avoids CORS issues.

function getAiBackendUrl() {
    const { protocol, hostname, port, origin } = window.location;

    if (protocol === 'file:') {
        return 'http://localhost:8000/generate';
    }

    if ((hostname === 'localhost' || hostname === '127.0.0.1') && port && port !== '8000') {
        return 'http://localhost:8000/generate';
    }

    return `${origin}/generate`;
}

const AI_CONFIG = {
    backendUrl: getAiBackendUrl(),
    fallbackUrl: 'https://image.pollinations.ai/prompt/',
    useBackend: true
};

let isGeneratingAi = false;

function escapeSvgText(value) {
    return String(value || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

function getBorderHeight() {
    if (customization.borderWidth === 'Narrow') return 15;
    if (customization.borderWidth === 'Wide') return 45;
    if (customization.borderWidth === 'Extra Wide') return 60;
    return 30;
}

/**
 * Convert a hex color string to its closest human-readable name.
 * First tries CUSTOMIZATION.borderColors, then CUSTOMIZATION.colors,
 * then falls back to a broad color-name map.
 */
function hexToColorName(hex) {
    if (!hex) return 'gold';
    const h = hex.toLowerCase();

    // Check border color palette first
    const borderMatch = CUSTOMIZATION.borderColors.find(c => c.hex.toLowerCase() === h);
    if (borderMatch) return borderMatch.name;

    // Check main saree color palette
    const colorMatch = CUSTOMIZATION.colors.find(c => c.hex.toLowerCase() === h);
    if (colorMatch) return colorMatch.name;

    // Broad fallback map for custom picker values
    function getColorName(hex) {
        if (!hex) return "Pink";

        const preset = {
            "#D32F2F": "Red",
            "#800020": "Maroon",
            "#C4A265": "Gold",
            "#1565C0": "Royal Blue",
            "#2E7D32": "Emerald Green",
            "#E91E8C": "Pink",
            "#7B1FA2": "Purple",
            "#EF6C00": "Orange",
            "#F9A825": "Yellow",
            "#212121": "Black",
            "#FAFAFA": "White",
            "#FFFDD0": "Cream",
            "#00897B": "Teal",
            "#FFAB91": "Peach",
            "#AD1457": "Magenta",
            "#0D47A1": "Navy Blue"
        };

        hex = hex.toUpperCase();

        if (preset[hex]) return preset[hex];

        return "custom color " + hex;
    }
    // Very rough hue-based fallback
    try {
        const r = parseInt(h.slice(1, 3), 16), g = parseInt(h.slice(3, 5), 16), b = parseInt(h.slice(5, 7), 16);
        const max = Math.max(r, g, b);
        if (max === r && r > 150) return 'Red';
        if (max === g && g > 120) return 'Green';
        if (max === b && b > 120) return 'Blue';
        if (r > 150 && g > 130 && b < 80) return 'Golden';
        if (r < 60 && g < 60 && b < 60) return 'Black';
        if (r > 220 && g > 220 && b > 220) return 'White';
    } catch (e) { }
    return 'metallic';
}

function initAiGeneration() {
    const generateBtn = document.getElementById('generateAiBtn');
    if (generateBtn) {
        generateBtn.addEventListener('click', generateAiPreview);
    }
}

function getFabricTextureSvg(fabricId) {
    const textures = {
        pattu: '<rect width="100%" height="100%" fill="url(#silkShine)" opacity="0.72" /><rect width="100%" height="100%" fill="url(#brocadeTexture)" opacity="0.42" /><path d="M92 190 H628 M92 300 H628 M92 410 H628 M92 520 H628 M92 630 H628 M92 740 H628 M92 850 H628" stroke="rgba(255,215,120,0.34)" stroke-width="5" /><path d="M150 120 V940 M270 120 V940 M390 120 V940 M510 120 V940" stroke="rgba(255,245,190,0.18)" stroke-width="4" />',
        puresilk: '<rect width="100%" height="100%" fill="url(#silkShine)" opacity="0.55" /><path d="M0 110 C120 70 220 150 340 110 S560 70 720 120" stroke="rgba(255,255,255,0.28)" stroke-width="18" fill="none" />',
        artsilk: '<rect width="100%" height="100%" fill="url(#silkShine)" opacity="0.35" /><path d="M0 180 C160 140 240 220 420 180 S640 140 720 200" stroke="rgba(255,255,255,0.18)" stroke-width="12" fill="none" />',
        cotton: '<rect width="100%" height="100%" fill="url(#cottonTexture)" opacity="0.45" />',
        chiffon: '<rect width="100%" height="100%" fill="url(#softFlow)" opacity="0.4" />',
        georgette: '<rect width="100%" height="100%" fill="url(#grainTexture)" opacity="0.35" />',
        organza: '<rect width="100%" height="100%" fill="url(#organzaGloss)" opacity="0.55" />',
        crepe: '<rect width="100%" height="100%" fill="url(#grainTexture)" opacity="0.28" />',
        linen: '<rect width="100%" height="100%" fill="url(#linenTexture)" opacity="0.4" />',
        tussar: '<rect width="100%" height="100%" fill="url(#tussarTexture)" opacity="0.45" />',
        satin: '<rect width="100%" height="100%" fill="url(#silkShine)" opacity="0.65" />',
        banarasi: '<rect width="100%" height="100%" fill="url(#brocadeTexture)" opacity="0.5" />',
        kanchi: '<rect width="100%" height="100%" fill="url(#silkShine)" opacity="0.6" /><rect width="100%" height="100%" fill="url(#brocadeTexture)" opacity="0.22" />'
    };

    return textures[fabricId] || '<rect width="100%" height="100%" fill="url(#silkShine)" opacity="0.3" />';
}

function getWeavePatternSvg(weaveId, accentColor) {
    if (!weaveId || weaveId === 'plain') return '';

    const stroke = `${accentColor}66`;
    const fill = `${accentColor}40`;
    const patterns = {
        checks: `<path d="M120 0 V1080 M240 0 V1080 M360 0 V1080 M480 0 V1080 M600 0 V1080 M0 180 H720 M0 360 H720 M0 540 H720 M0 720 H720 M0 900 H720" stroke="${stroke}" stroke-width="2" />`,
        stripes: `<path d="M120 0 V1080 M220 0 V1080 M320 0 V1080 M420 0 V1080 M520 0 V1080 M620 0 V1080" stroke="${stroke}" stroke-width="6" opacity="0.7" />`,
        floral: `<g fill="${fill}"><circle cx="130" cy="180" r="10" /><circle cx="115" cy="195" r="7" /><circle cx="145" cy="195" r="7" /><circle cx="130" cy="210" r="7" /><circle cx="130" cy="165" r="7" /></g>`,
        paisley: `<g fill="none" stroke="${stroke}" stroke-width="4"><path d="M120 220 C120 150 200 145 205 210 C210 270 155 300 125 260 C110 240 112 228 120 220 Z" /><circle cx="160" cy="220" r="8" fill="${fill}" stroke="none" /></g>`,
        peacock: `<g fill="none" stroke="${stroke}" stroke-width="4"><path d="M145 240 C175 180 225 165 255 220 C215 215 190 240 175 280" /><path d="M175 280 C165 320 190 345 220 342" /></g>`,
        elephant: `<g fill="none" stroke="${stroke}" stroke-width="4"><path d="M115 235 H175 C195 235 205 248 205 268 V292 H188 V278 H126 V295 H110 V248 C110 240 112 237 115 235 Z" /><path d="M205 268 C222 268 222 290 208 298" /></g>`,
        geometric: `<path d="M140 180 L180 220 L140 260 L100 220 Z M300 180 L340 220 L300 260 L260 220 Z M460 180 L500 220 L460 260 L420 220 Z" fill="none" stroke="${stroke}" stroke-width="4" />`
    };

    const base = patterns[weaveId] || `<circle cx="140" cy="200" r="10" fill="${fill}" />`;
    return `<g opacity="0.85">${base}</g>`;
}

function getBorderSvg(borderId, borderColor, y, height) {
    if (!borderId) return `<rect x="0" y="${y}" width="720" height="${height}" fill="${borderColor}" />`;

    if (borderId === 'temple') {
        let triangles = '';
        for (let x = 0; x <= 720; x += 24) {
            triangles += `<path d="M${x} ${y + height} L${x + 12} ${y} L${x + 24} ${y + height} Z" fill="${borderColor}" />`;
        }
        return `<rect x="0" y="${y}" width="720" height="${height}" fill="${borderColor}22" />${triangles}`;
    }

    if (borderId === 'zari') {
        return `<rect x="0" y="${y}" width="720" height="${height}" fill="${borderColor}" /><rect x="0" y="${y + (height * 0.2)}" width="720" height="${height * 0.22}" fill="rgba(255,255,255,0.22)" /><rect x="0" y="${y + (height * 0.62)}" width="720" height="${height * 0.12}" fill="rgba(255,255,255,0.18)" />`;
    }

    if (borderId === 'contrast') {
        return `<rect x="0" y="${y}" width="720" height="${height}" fill="${borderColor}" />`;
    }

    if (borderId === 'stonework' || borderId === 'sequin') {
        let stones = '';
        for (let x = 16; x <= 704; x += 26) {
            stones += `<circle cx="${x}" cy="${y + (height / 2)}" r="${Math.max(3, Math.round(height / 8))}" fill="rgba(255,255,255,0.78)" />`;
        }
        return `<rect x="0" y="${y}" width="720" height="${height}" fill="${borderColor}" />${stones}`;
    }

    return `<rect x="0" y="${y}" width="720" height="${height}" fill="${borderColor}" /><rect x="0" y="${y + (height * 0.4)}" width="720" height="${height * 0.16}" fill="rgba(255,255,255,0.16)" />`;
}

function getPalluSvg(palluId, borderColor) {
    const configs = {
        heavyzari: { width: 280, opacity: 0.72, pattern: 'url(#brocadeTexture)' },
        lightzari: { width: 240, opacity: 0.48, pattern: 'url(#brocadeTexture)' },
        embroidered: { width: 230, opacity: 0.5, pattern: 'url(#grainTexture)' },
        plain: { width: 210, opacity: 0.18, pattern: '' },
        brocade: { width: 270, opacity: 0.62, pattern: 'url(#brocadeTexture)' },
        contrast: { width: 240, opacity: 0.38, pattern: '' },
        printed: { width: 235, opacity: 0.42, pattern: 'url(#softFlow)' },
        mirror: { width: 250, opacity: 0.52, pattern: 'url(#organzaGloss)' }
    };

    const config = configs[palluId] || { width: 240, opacity: 0.35, pattern: '' };
    const x = 720 - config.width;
    let svg = `<rect x="${x}" y="0" width="${config.width}" height="1080" fill="${borderColor}" opacity="${config.opacity}" />`;

    if (config.pattern) {
        svg += `<rect x="${x}" y="0" width="${config.width}" height="1080" fill="${config.pattern}" opacity="0.35" />`;
    }

    if (palluId === 'mirror') {
        for (let col = 0; col < 4; col += 1) {
            for (let row = 0; row < 6; row += 1) {
                const cx = x + 38 + (col * 48);
                const cy = 110 + (row * 130);
                svg += `<circle cx="${cx}" cy="${cy}" r="13" fill="rgba(255,255,255,0.6)" stroke="rgba(255,255,255,0.95)" stroke-width="3" />`;
            }
        }
    }

    return svg;
}

function buildLockedPreviewDataUrl() {
    const fabricInfo = CUSTOMIZATION.fabrics.find(f => f.id === customization.fabric);
    const borderInfo = CUSTOMIZATION.borders.find(b => b.id === customization.border);
    const palluInfo = CUSTOMIZATION.pallus.find(p => p.id === customization.pallu);
    const weaveInfo = CUSTOMIZATION.weaves.find(w => w.id === customization.weave);
    const blouseInfo = CUSTOMIZATION.blouses.find(b => b.id === customization.blouse);
    const bodyColor = customization.color || '#D32F2F';
    const borderColor = customization.borderColor || '#C4A265';
    const borderHeight = getBorderHeight();
    const title = `Custom ${fabricInfo?.name || 'Saree'}`;
    const subtitle = [
        borderInfo?.name || 'Custom Border',
        palluInfo?.name || 'Styled Pallu',
        weaveInfo?.name || 'Body Pattern',
        blouseInfo?.name || 'Matching Blouse'
    ].join(' • ');

    const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="720" height="1080" viewBox="0 0 720 1080">
<defs>
<linearGradient id="bgFrame" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#f7f0e1" /><stop offset="100%" stop-color="#ebdfc0" /></linearGradient>
<linearGradient id="silkShine" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="rgba(255,255,255,0.10)" /><stop offset="45%" stop-color="rgba(255,255,255,0.35)" /><stop offset="100%" stop-color="rgba(255,255,255,0.05)" /></linearGradient>
<pattern id="cottonTexture" width="18" height="18" patternUnits="userSpaceOnUse"><path d="M0 9 H18 M9 0 V18" stroke="rgba(255,255,255,0.12)" stroke-width="1" /></pattern>
<pattern id="linenTexture" width="26" height="26" patternUnits="userSpaceOnUse"><path d="M0 7 H26 M7 0 V26 M0 20 H26 M20 0 V26" stroke="rgba(255,255,255,0.10)" stroke-width="1" /></pattern>
<pattern id="grainTexture" width="12" height="12" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="1" fill="rgba(255,255,255,0.18)" /><circle cx="9" cy="8" r="1" fill="rgba(255,255,255,0.12)" /></pattern>
<pattern id="tussarTexture" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M0 12 C6 6 18 18 24 12" stroke="rgba(255,255,255,0.16)" stroke-width="2" fill="none" /></pattern>
<pattern id="brocadeTexture" width="42" height="42" patternUnits="userSpaceOnUse"><path d="M21 7 L28 21 L21 35 L14 21 Z" fill="rgba(255,255,255,0.16)" /><circle cx="21" cy="21" r="5" fill="rgba(255,255,255,0.12)" /></pattern>
<linearGradient id="softFlow" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(255,255,255,0.24)" /><stop offset="100%" stop-color="rgba(255,255,255,0.04)" /></linearGradient>
<linearGradient id="organzaGloss" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="rgba(255,255,255,0.08)" /><stop offset="50%" stop-color="rgba(255,255,255,0.32)" /><stop offset="100%" stop-color="rgba(255,255,255,0.08)" /></linearGradient>
</defs>
<rect width="720" height="1080" fill="url(#bgFrame)" />
<rect x="56" y="56" width="608" height="968" rx="32" fill="#fffaf0" />
<rect x="92" y="120" width="536" height="820" rx="24" fill="${bodyColor}" />
${getFabricTextureSvg(customization.fabric)}
${getPalluSvg(customization.pallu, borderColor)}
${getBorderSvg(customization.border, borderColor, 120, borderHeight)}
${getBorderSvg(customization.border, borderColor, 940 - borderHeight, borderHeight)}
<g transform="translate(92 120)">${getWeavePatternSvg(customization.weave, borderColor)}</g>
<rect x="92" y="120" width="536" height="820" rx="24" fill="none" stroke="rgba(88,56,8,0.18)" stroke-width="2" />
<text x="360" y="72" text-anchor="middle" font-size="30" font-family="Georgia, serif" fill="#7a5a18">${escapeSvgText(title)}</text>
<text x="360" y="1000" text-anchor="middle" font-size="22" font-family="Arial, sans-serif" fill="#5c4820">${escapeSvgText(subtitle)}</text>
<text x="360" y="1034" text-anchor="middle" font-size="18" font-family="Arial, sans-serif" fill="#8b6a1f">Color: ${escapeSvgText(hexToColorName(bodyColor))} | Border: ${escapeSvgText(hexToColorName(borderColor))}</text>
</svg>`;

    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

async function generateAiPreview() {
    if (isGeneratingAi) {
        showToast('AI is already generating an image, please wait...', 'info');
        return;
    }

    // Validate selections
    if (!customization.fabric) {
        showToast('Please select a fabric type first', 'error');
        return;
    }
    if (!customization.color) {
        showToast('Please select a color first', 'error');
        return;
    }

    // Gather customization details for an accurate, detailed AI prompt
    const fabricInfo = CUSTOMIZATION.fabrics.find(f => f.id === customization.fabric);
    const borderInfo = CUSTOMIZATION.borders.find(b => b.id === customization.border);
    const palluInfo = CUSTOMIZATION.pallus.find(p => p.id === customization.pallu);
    const weaveInfo = CUSTOMIZATION.weaves.find(w => w.id === customization.weave);
    const colorInfo = CUSTOMIZATION.colors.find(c => c.hex === customization.color);

    // Resolve border color name (never send a hex code to the AI)
    const borderColorName = hexToColorName(customization.borderColor || '#C4A265');

    const fabricText = fabricInfo?.id === 'pattu'
        ? 'Pure Pattu traditional heavy South Indian wedding saree cloth with rich zari brocade'
        : (fabricInfo?.name || 'Silk');
    const colorText = colorInfo?.name || hexToColorName(customization.color) || 'Red';
    const borderWidth = customization.borderWidth || 'Medium';
    const borderStyle = borderInfo?.name || 'Temple Border';
    const palluText = palluInfo?.name || 'elegant zari pallu';
    const weaveText = weaveInfo && weaveInfo.id !== 'plain' ? `${weaveInfo.name} design pattern on the body, ` : 'custom saree styling, ';
    const occasionText = 'Wedding';

    // Rich, fully-described border text — border COLOR is the dominant, first descriptor
    // SD pays most attention to the first few tokens, so lead with color
    const borderText = `a vivid ${borderColorName} colored ${borderWidth} ${borderStyle}, with ${borderColorName} thread work and ${borderColorName} zari embroidery on the border`;

    // Show loading state
    isGeneratingAi = true;
    const loadingEl = document.getElementById('aiLoading');
    const overlayEl = document.getElementById('aiImageOverlay');
    const generateBtn = document.getElementById('generateAiBtn');

    loadingEl.classList.add('active');
    overlayEl.classList.remove('active');
    generateBtn.disabled = true;
    generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';

    // Update loading message based on API being used
    const loadingSub = loadingEl.querySelector('.ai-loading-sub');
    if (loadingSub) {
        loadingSub.textContent = AI_CONFIG.useBackend
            ? 'Powered by Pollinations.ai via your FastAPI backend'
            : 'Powered directly by Pollinations.ai';
    }

    try {
        let imageUrl = null;

        if (AI_CONFIG.useBackend) {
            // ============================
            // METHOD 1: FastAPI Backend
            // POST to /generate endpoint
            // ============================
            try {
                const formData = new FormData();
                formData.append('fabric_text', fabricText);
                formData.append('color_text', colorText);
                formData.append('border_text', borderText);
                formData.append('pallu_text', palluText);
                formData.append('weave_text', weaveText);
                formData.append('occasion_text', occasionText);

                const response = await fetch(AI_CONFIG.backendUrl, {
                    method: 'POST',
                    body: formData
                });

                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({}));
                    throw new Error(errorData.detail || `Backend error: ${response.status}`);
                }

                const data = await response.json();

                if (data.image) {
                    // Backend returns base64 encoded image
                    imageUrl = `data:image/png;base64,${data.image}`;
                    console.log('✅ AI image generated via FastAPI backend (Stable Diffusion v1.5)');
                } else {
                    throw new Error('No image data in response');
                }

            } catch (backendError) {
                console.warn('⚠️ FastAPI backend unavailable, falling back to Pollinations.ai:', backendError.message);
                // Fallback to Pollinations.ai
                imageUrl = await generateWithPollinations(fabricText, colorText, borderText, palluText, weaveText, occasionText);
            }

        } else {
            // ============================
            // METHOD 2: Pollinations.ai (Free API, no key needed)
            // ============================
            imageUrl = await generateWithPollinations(fabricText, colorText, borderText, palluText, weaveText, occasionText);
        }

        // Display the generated image
        if (imageUrl) {
            const aiImage = document.getElementById('aiGeneratedImage');
            aiImage.src = imageUrl;

            aiImage.onload = () => {
                loadingEl.classList.remove('active');
                overlayEl.classList.add('active');
                showToast('🎨 AI saree preview generated successfully!', 'success');
            };

            aiImage.onerror = () => {
                throw new Error('Failed to load the generated image');
            };
        }

    } catch (error) {
        console.error('AI Generation Error:', error);
        loadingEl.classList.remove('active');
        showToast(`AI generation failed: ${error.message}. Try again!`, 'error');
    } finally {
        isGeneratingAi = false;
        generateBtn.disabled = false;
        generateBtn.innerHTML = '<i class="fas fa-wand-magic-sparkles"></i> Generate AI Preview';
    }
}

async function generateWithPollinations(fabricText, colorText, borderText, palluText, weaveText, occasionText) {
    // Build the richest possible prompt — all colour names, no hex codes
    const prompt = encodeURIComponent(
        `A faceless retail mannequin display idol in a shopping mall showroom wearing a ${fabricText} saree, ` +
        `no human face, no woman, no portrait, neutral mannequin head or headless mannequin, ` +
        `in ${colorText} color, draped perfectly in traditional style, ` +
        `featuring ${borderText}, ` +
        `with ${palluText}, ` +
        `${weaveText}` +
        `perfect for ${occasionText || 'wedding'}, ` +
        `full body product display shot, standing mannequin pose, ` +
        `high-end Indian saree showroom photography, studio lighting, clean mall display background, ` +
        `ultra realistic textile details, 8k quality, no text, no watermark, no visible face`
    );

    const seed = Math.floor(Math.random() * 999999);
    const imageUrl = `${AI_CONFIG.fallbackUrl}${prompt}?width=512&height=768&seed=${seed}&nologo=true&model=flux`;

    // Return the URL directly — the img tag will load it without CORS issues
    return new Promise((resolve, reject) => {
        const testImg = new Image();
        testImg.onload = () => {
            console.log('✅ AI image generated via Pollinations.ai');
            resolve(imageUrl);
        };
        testImg.onerror = () => {
            // Even if preload fails, try returning the URL anyway
            console.warn('Preload check failed, attempting direct load...');
            resolve(imageUrl);
        };
        testImg.src = imageUrl;

        // Timeout after 90 seconds
        setTimeout(() => reject(new Error('Image generation timed out (90s)')), 90000);
    });
}

// ===== MOBILE NAV =====
function initMobileNav() {
    document.getElementById('mobileMenuBtn').addEventListener('click', () => {
        document.getElementById('mobileNavOverlay').classList.add('active');
        document.getElementById('mobileNavSidebar').classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    document.getElementById('mobileNavClose').addEventListener('click', closeMobileNav);
    document.getElementById('mobileNavOverlay').addEventListener('click', closeMobileNav);

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (link.dataset.filter) {
                currentFilter = link.dataset.filter;
            }
            closeMobileNav();
        });
    });
}

function closeMobileNav() {
    document.getElementById('mobileNavOverlay').classList.remove('active');
    document.getElementById('mobileNavSidebar').classList.remove('active');
    document.body.style.overflow = '';
}

// ===== BACK TO TOP =====
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);

        // Sticky header shrink effect
        const header = document.getElementById('mainHeader');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== TOAST NOTIFICATIONS =====
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let icon = 'fa-info-circle';
    if (type === 'success') icon = 'fa-check-circle';
    if (type === 'error') icon = 'fa-exclamation-circle';

    toast.innerHTML = `<i class="fas ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===== NEWSLETTER =====
document.getElementById('newsletterForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Subscribed successfully! Welcome to the family.', 'success');
    e.target.reset();
});

// ===== CHECKOUT PAGE =====
function renderCheckoutPage() {
    if (cart.length === 0) {
        window.location.hash = '#shop';
        return;
    }

    const container = document.getElementById('checkoutSummaryItems');
    container.innerHTML = cart.map(item => `
        <div class="checkout-item-summary">
            <div class="item-img"><img src="${resolveImagePath(item.image)}" alt="" onerror="this.onerror=null;this.src='${DEFAULT_SAREE_IMAGE}'"></div>
            <div class="item-details">
                <h5>${item.name}</h5>
                <p>Qty: ${item.qty} × ₹${item.price.toLocaleString()}</p>
            </div>
            <div class="item-total">₹${(item.price * item.qty).toLocaleString()}</div>
        </div>
    `).join('');

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const shipping = subtotal >= 2999 ? 0 : 199;
    const total = subtotal + shipping;

    document.getElementById('checkoutSubtotal').textContent = `₹${subtotal.toLocaleString()}`;
    document.getElementById('checkoutShipping').textContent = shipping === 0 ? 'Free' : `₹${shipping}`;
    document.getElementById('checkoutTotal').textContent = `₹${total.toLocaleString()}`;

    // Prefill form if user logged in
    if (currentUser) {
        document.getElementById('shipName').value = currentUser.name || '';
    }
}

document.getElementById('checkoutForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!currentUser) {
        showToast('Please sign in to place your order', 'error');
        document.getElementById('accountBtn').click();
        return;
    }

    const shipping_address = `
        ${document.getElementById('shipName').value}, 
        ${document.getElementById('shipAddress').value}, 
        ${document.getElementById('shipCity').value}, 
        ${document.getElementById('shipState').value} - ${document.getElementById('shipZip').value}, 
        Ph: ${document.getElementById('shipPhone').value}
    `.trim();

    const orderItems = cart.map(item => ({
        product_id: item.custom ? null : item.id,
        name: item.name,
        price: item.price,
        qty: item.qty,
        is_custom: !!item.custom,
        custom_details: item.custom ? item.category : null
    }));

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const total_amount = subtotal + (subtotal >= 2999 ? 0 : 199);

    try {
        const response = await fetch('/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify({
                items: orderItems,
                total_amount: total_amount,
                shipping_address: shipping_address
            })
        });

        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.detail || 'Failed to place order');
        }

        const data = await response.json();
        showToast(`Order #${data.order_id} placed successfully! 🎉`, 'success');
        cart = [];
        saveCart();
        updateCartUI();
        window.location.hash = '#orders';
    } catch (error) {
        showToast(error.message, 'error');
    }
});

// ===== ORDERS PAGE =====
async function renderOrdersPage() {
    if (!currentUser) {
        document.getElementById('ordersList').innerHTML = '';
        document.getElementById('ordersEmpty').classList.remove('hidden');
        document.getElementById('ordersEmpty').querySelector('p').textContent = 'Please sign in to view your orders.';
        return;
    }

    try {
        const response = await fetch('/api/orders', {
            headers: { 'Authorization': `Bearer ${authToken}` }
        });

        if (!response.ok) throw new Error('Failed to fetch orders');
        const orders = await response.json();

        const list = document.getElementById('ordersList');
        if (orders.length === 0) {
            list.innerHTML = '';
            document.getElementById('ordersEmpty').classList.remove('hidden');
            return;
        }

        document.getElementById('ordersEmpty').classList.add('hidden');
        list.innerHTML = orders.map(o => `
            <div class="order-card">
                <div class="order-header">
                    <div class="order-id">Order #${o.id}</div>
                    <div class="order-date">${o.created_at}</div>
                    <div class="order-status status-${o.status.toLowerCase()}">${o.status}</div>
                </div>
                <div class="order-body">
                    ${o.items.map(item => `
                        <div class="order-item-row">
                            <span>${item.name} × ${item.qty}</span>
                            <span>₹${(item.price * item.qty).toLocaleString()}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="order-footer">
                    <span>Total Amount:</span>
                    <strong>₹${o.total.toLocaleString()}</strong>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Orders error:', error);
        showToast('Error loading orders', 'error');
    }
}
