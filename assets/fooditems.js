const validwords = ["sabji","recipe", "ingredients", "food","rice", "potato", "cook", "cooking", "dish", "meal", "bake", "grill", "boil", "fry", "roast", "saute", "kitchen", "preparation", "serve", "serve hot", "serve cold", "seasoning", "flavor", "garnish", "taste", "mix", "blend", "chop", "slice", "dice", "mince", "stir", "combine", "batter", "dough", "marinate", "broth", "sauce", "pasta", "dessert", "snack", "appetizer", "main course", "beverage", "cuisine", "vegan", "vegetarian", "non-vegetarian", "protein", "carbs", "nutrition", "healthy", "quick meal", "easy recipe", "family dinner", "traditional", "fusion", "baking", "homemade", "delicious", "savory", "sweet", "spicy", "herbs", "spices", "flavors", "masala", "dal", "sambar", "roti", "paratha", "naan", "curry", "biryani", "pulav", "kachori", "idli", "dosa", "vada", "chutney", "pickle", "achar", "chaat", "pani puri", "golgappa", "pav bhaji", "tandoori", "kebab", "paneer", "rajma", "chole", "ladoo", "halwa", "gulab jamun", "jalebi", "kheer", "payasam", "rasgulla", "kulfi", "chaas", "lassi", "buttermilk", "spices", "garam masala", "turmeric", "coriander", "cumin", "mustard seeds", "fenugreek", "asafoetida", "curry leaves", "kokum", "tamarind", "besan", "atta", "maida", "ghee", "jaggery", "sabzi", "tadka", "bhojan", "thal", "rasam", "poha", "upma", "thepla", "dhokla","Aloo Paratha", "Baingan Bharta", "Bhindi Masala", "Chole", "Rajma", 
  "Paneer Butter Masala", "Dal Tadka", "Palak Paneer", "Sambar", "Rasam", 
  "Upma", "Poha", "Idli", "Dosa", "Vada", "Puri", "Aloo Sabzi", 
  "Masala Chai", "Lassi", "Roti", "Naan", "Kulcha", "Kachori", 
  "Pav Bhaji", "Misal Pav", "Biryani", "Pulao", "Vegetable Curry", 
  "Matar Paneer", "Shahi Paneer", "Malai Kofta", "Aloo Gobi", "Aloo Matar", 
  "Dal Makhani", "Chana Masala", "Gajar Ka Halwa", "Kheer", "Gulab Jamun", 
  "Jalebi", "Puran Poli", "Modak", "Thepla", "Handvo", "Dhokla", 
  "Kadhi", "Undhiyu", "Shrikhand", "Vada Pav", "Sev Puri", "Bhel Puri", 
  "Pani Puri", "Dabeli", "Chicken Curry", "Fish Curry", "Mutton Rogan Josh", 
  "Tandoori Chicken", "Butter Chicken", "Malabar Parotta", "Hyderabadi Biryani", 
  "Andhra Chicken Curry", "Chettinad Chicken", "Kappa and Meen Curry", 
  "Bengali Shorshe Ilish", "Kosha Mangsho", "Litti Chokha", "Mysore Pak", 
  "Banana Chips", "Neer Dosa", "Appam", "Idiyappam", "Paruppu Vadai", 
  "Keerai Masiyal", "Mor Kuzhambu", "Puliyodarai", "Bisi Bele Bath", 
  "Khar", "Pitika", "Masor Tenga", "Thukpa", "Sel Roti", "Aloo Posto", 
  "Shukto", "Champaran Meat", "Chhena Poda", "Pakhala Bhata", "Dalma", 
  "Makka ki Roti", "Sarson ka Saag", "Churma", "Dal Baati", "Kadhi Chawal", 
  "Butter Naan", "Chicken Tikka", "Seekh Kebab", "Paneer Tikka", "Haleem", 
  "Nihari", "Khichdi", "Dahi Vada", "Chutney", "Pickles", 
  "Bharwa Baingan", "Pindi Chole", "Moong Dal Halwa", "Kesari Bath", 
  "Rasgulla", "Sandesh", "Peda", "Murukku", "Kuzhi Paniyaram", 
  "Bombil Fry", "Sol Kadhi", "Chicken 65", "Egg Curry", "Egg Bhurji", 
  "Masala Omelette", "Veg Manchurian", "Gobi Manchurian", "Hakka Noodles", 
  "Fried Rice", "Chilli Paneer", "Chilli Chicken", "Spring Rolls", 
  "Momos", "Chowmein", "Aloo Tikki", "Dahi Ke Kebab", "Methi Paratha", 
  "Lachha Paratha", "Stuffed Kulcha", "Makhana Kheer", "Kofta Curry", 
  "Veg Pulao", "Sabudana Khichdi", "Sabudana Vada", "Vegetable Stew", 
  "Kadala Curry", "Kootu Curry", "Kori Rotti", "Tandoori Roti", 
  "Roomali Roti", "Malpua", "Rabri", "Basundi", "Nankhatai", 
  "Kulfi", "Falooda", "Sheer Khurma", "Baklava", "Gond Ke Laddu", 
  "Besan Ke Laddu", "Motichoor Laddu", "Til Ke Laddu", "Pinni", 
  "Chikki", "Peanut Chutney", "Coconut Chutney", "Onion Chutney", 
  "Tomato Chutney", "Mint Chutney", "Coriander Chutney", "Bhang Ki Chutney", 
  "Green Chilli Thecha", "Sattu Sharbat", "Bel Ka Sharbat", "Thandai", 
  "Aam Panna", "Jaljeera", "Rooh Afza", "Filter Coffee", "Masala Buttermilk", "Chawal", "Atta", "Maida", "Bajra", "Jowar", "Ragi", "Jau", "Daliya", "Sooji", 
    "Poha", "Sabudana",

    // Pulses and Lentils
    "Toor", "Moong", "Masoor", "Urad", "Chana", "Rajma", "Kabuli", "Lobia", "Moth", 
    "Arhar",

    // Vegetables
    "Aloo", "Tamatar", "Pyaz", "Lahsun", "Adrak", "Matar", "Gajar", "Mooli", "Bhindi", 
    "Baingan", "ShimlaMirch", "Karela", "Tinda", "Kaddu", "Palak", "Methi", 
    "Sarson", "Gobi", "PattaGobi", "Dhaniya", "Pudina",

    // Spices
    "Haldi", "LalMirch", "Jeera", "Dhania", "Ajwain", "Kalimirch", "Tejpatta", 
    "Hing", "Elaichi", "Clove", "Dalchini", "Amchur",

    // Dairy and Others
    "Dahi", "Paneer", "Ghee", "Makhan", "Malai", "Cheeni", "Gud", "Namak", "Tel", 
    "Achar", "Papad", "Chutney", "Petha", "Saunf",
    "Bread", "Baguette", "Croissant", "Bagel", "Pasta", "Spaghetti", "Macaroni", 
    "Lasagna", "Pizza", "Tortilla", "Quinoa", "Oats",

    // Dairy
    "Cheese", "Butter", "Cream", "Yogurt", "Milk", "Ricotta", "Parmesan", "Mozzarella", 
    "Cheddar",

    // Vegetables and Sides
    "Lettuce", "Spinach", "Broccoli", "Carrot", "Celery", "Cucumber", "Zucchini", 
    "Potato", "Avocado", "Asparagus", "Corn", "Tomato",

    // Meat and Seafood
    "Chicken", "Beef", "Pork", "Ham", "Bacon", "Salami", "Turkey", "Lamb", 
    "Fish", "Shrimp", "Salmon", "Tuna",

    // Condiments and Sauces
    "Ketchup", "Mustard", "Mayonnaise", "Vinegar", "Soy", "Barbecue", "Tabasco", 
    "Pesto", "Hollandaise",

    // Snacks
    "Burger", "Fries", "Hotdog", "Nachos", "Popcorn", "Chips", "Crackers", 
    "Cookies", "Brownie", "Cupcake",

    // Desserts
    "Cake", "Pie", "Tart", "Pudding", "Custard", "IceCream", "Waffle", 
    "Pancake", "Muffin", "Donut",

    // Beverages
    "Coffee", "Tea", "Latte", "Espresso", "Cappuccino", "Smoothie", 
    "Milkshake", "Soda", "Beer", "Wine", "Whiskey", "Juice"
];

export default validwords;