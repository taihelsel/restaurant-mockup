const menuData = {
    appsides: [{
        name: 'Gai Sate',
        price: '9.00',
        desc: 'Grill chicken on stick with peanut sauce, pickled cucumber and toast (5 sticks) (GF)'
    }, {
        name: 'Tod Mun Pla',
        price: '8.00',
        desc: 'Fish cake with curry mix with mince green bean, sweet chili sauce with cucumber, peanuts (6 pieces)'
    }, {
        name: 'Tao Hu Tod',
        price: '7.50',
        desc: 'Fried Tofu with sweet chili sauce, crush peanuts'
    }, {
        name: 'Por Pia Tod',
        price: '7.50',
        desc: 'Deep fried egg roll, veggie, bean thread noodles (8 pieces)'
    }, {
        name: 'Neu Daad Deaw',
        price: '9.00',
        desc: 'Fried marinated beef with Sriracha sauce'
    }, {
        name: 'White Rice',
        price: '1.00',
        desc: null
    }, {
        name: 'Brown Rice',
        price: '2.00',
        desc: null
    }, {
        name: 'Fried Egg',
        price: '1.50',
        desc: null
    }, {
        name: 'Peanut Sauce',
        price: '3.00',
        desc: null
    }, {
        name: 'Crispy pork belly',
        price: '8.50',
        desc: null
    }],
    soupsalad: [{
        name: "Tom Yum",
        price: "10.00",
        desc: "Hot & Sour soup, herbs, lemon grass, mushrooms, onions choice of chicken, tofu or shrimps (GF)"
    }, {
        name: "Tom Kha",
        price: "10.00",
        desc: "Hot & Sour soup, coconut milk, herbs, lemon grass,… onions choice of chicken, tofu, or shrimps. (GF)"
    }, {
        name: "Larb",
        price: "10.00",
        desc: "Minced chicken, pork, or beef with mint leaves, onions, and lime juice",
        options: [{
            title: "Protein",
            optionItems: [{
                name: "Chicken",
                cost: 0
            }, {
                name: "Pork",
                cost: 0
            }, {
                name: "Beef",
                cost: 1.50
            }]
        }, {
            title: "Spice",
            optionItems: [{
                name: "Medium",
                cost: 0
            }, {
                name: "Spicy",
                cost: 0
            }]
        }, {
            title: "Remove",
            optionItems: [{
                name: "No onions",
                cost: 0
            }, {
                name: "No cilantro",
                cost: 0
            }]
        }]
    }, {
        name: "Yum MAMA",
        price: "10.00",
        desc: "Ground pork mixed with MAMA noodles, tomatoes, onions, mints",
        options: [{
            title: "Spice",
            optionItems: [{
                name: "Medium",
                cost: 0
            }, {
                name: "Spicy",
                cost: 0
            }]
        }, {
            title: "Remove",
            optionItems: [{
                name: "No onions",
                cost: 0
            }, {
                name: "No cilantro",
                cost: 0
            }]
        }]
    }, {
        name: "Neua Nam Tok",
        price: "11.50",
        desc: "Slice Beef with tomatoes, cucumber, onions, mint, lime juice",
        options: [{
            title: "Spice",
            optionItems: [{
                name: "Medium",
                cost: 0
            }, {
                name: "Spicy",
                cost: 0
            }]
        }, {
            title: "Remove",
            optionItems: [{
                name: "No onions",
                cost: 0
            }, {
                name: "No cilantro",
                cost: 0
            }]
        }]
    }, {
        name: "Yum Woon Sen",
        price: "13.50",
        desc: "Shrimps + Ground Pork mixed with bean thread, tomatoes, onions, mints, lime juice",
        options: [{
            title: "Spice",
            optionItems: [{
                name: "Medium",
                cost: 0
            }, {
                name: "Spicy",
                cost: 0
            }]
        }, {
            title: "Remove",
            optionItems: [{
                name: "No onions",
                cost: 0
            }, {
                name: "No cilantro",
                cost: 0
            }]
        }]
    }],
    entree: [{
        name: "Gaeng Massaman",
        price: "10.00",
        desc: "Massaman curry paste coconut milk, peanuts, potato, onions",
        options: [{
            title: "Protein",
            optionItems: [{
                name: "Chicken",
                cost: 0
            }, {
                name: "Pork",
                cost: 0
            }, {
                name: "Beef",
                cost: 1.50
            }, {
                name: "Shrimp",
                cost: 3.50
            }, {
                name: "Tofu",
                cost: 0
            }, {
                name: "No Meat",
                cost: 0
            }]
        }, {
            title: "Rice",
            optionItems: [{
                name: "White Rice",
                cost: 0
            }, {
                name: "Brown Rice",
                cost: 1
            }, {
                name: "No Rice",
                cost: 0
            }]
        }, {
            title: "Spice",
            optionItems: [{
                name: "Medium",
                cost: 0
            }, {
                name: "Spicy",
                cost: 0
            }]
        }, {
            title: "Add Extra",
            optionItems: [{
                name: "Tofu",
                cost: 2
            }, {
                name: "Chicken",
                cost: 2
            }, {
                name: "Pork",
                cost: 2
            }, {
                name: "Beef",
                cost: 2.50
            }, {
                name: "Shrimp",
                cost: 3.50
            }]
        }, {
            title: "Remove",
            optionItems: [{
                name: "No onions",
                cost: 0
            }, {
                name: "No peanuts",
                cost: 0
            }]
        }]
    }, {
        name: "Gaeng Dang",
        price: "10.00",
        desc: "Red curry paste, coconut milk, bamboo shoots, basil, bell peppers",
        options: [{
            title: "Protein",
            optionItems: [{
                name: "Chicken",
                cost: 0
            }, {
                name: "Pork",
                cost: 0
            }, {
                name: "Beef",
                cost: 1.50
            }, {
                name: "Shrimp",
                cost: 3.50
            }, {
                name: "Tofu",
                cost: 0
            }, {
                name: "No Meat",
                cost: 0
            }]
        }, {
            title: "Rice",
            optionItems: [{
                name: "White Rice",
                cost: 0
            }, {
                name: "Brown Rice",
                cost: 1
            }, {
                name: "No Rice",
                cost: 0
            }]
        }, {
            title: "Spice",
            optionItems: [{
                name: "Medium",
                cost: 0
            }, {
                name: "Spicy",
                cost: 0
            }]
        }, {
            title: "Add Extra",
            optionItems: [{
                name: "Tofu",
                cost: 2
            }, {
                name: "Chicken",
                cost: 2
            }, {
                name: "Pork",
                cost: 2
            }, {
                name: "Beef",
                cost: 2.50
            }, {
                name: "Shrimp",
                cost: 3.50
            }]
        }, {
            title: "Remove",
            optionItems: [{
                name: "No bell peppers",
                cost: 0
            }, {
                name: "No bamboo",
                cost: 0
            }]
        }]
    }, {
        name: "Gaeng Panang",
        price: "10.00",
        desc: "Panang curry paste, coconut milk, bell peppers, lime leaves",
        options: [{
            title: "Protein",
            optionItems: [{
                name: "Chicken",
                cost: 0
            }, {
                name: "Pork",
                cost: 0
            }, {
                name: "Beef",
                cost: 1.50
            }, {
                name: "Shrimp",
                cost: 3.50
            }, {
                name: "Tofu",
                cost: 0
            }, {
                name: "No Meat",
                cost: 0
            }]
        }, {
            title: "Rice",
            optionItems: [{
                name: "White Rice",
                cost: 0
            }, {
                name: "Brown Rice",
                cost: 1
            }, {
                name: "No Rice",
                cost: 0
            }]
        }, {
            title: "Spice",
            optionItems: [{
                name: "Medium",
                cost: 0
            }, {
                name: "Spicy",
                cost: 0
            }]
        }, {
            title: "Add Extra",
            optionItems: [{
                name: "Tofu",
                cost: 2
            }, {
                name: "Chicken",
                cost: 2
            }, {
                name: "Pork",
                cost: 2
            }, {
                name: "Beef",
                cost: 2.50
            }, {
                name: "Shrimp",
                cost: 3.50
            }]
        }, {
            title: "Remove",
            optionItems: [{
                name: "No bell peppers",
                cost: 0
            }]
        }]
    }, {
        name: "Gaeng Kiew Wan",
        price: "10.00",
        desc: "Green curry paste, coconut milk, bell peppers, bamboo shoots, basil leaves, Thai egg plants",
        options: [{
            title: "Protein",
            optionItems: [{
                name: "Chicken",
                cost: 0
            }, {
                name: "Pork",
                cost: 0
            }, {
                name: "Beef",
                cost: 1.50
            }, {
                name: "Shrimp",
                cost: 3.50
            }, {
                name: "Tofu",
                cost: 0
            }, {
                name: "No Meat",
                cost: 0
            }]
        }, {
            title: "Rice",
            optionItems: [{
                name: "White Rice",
                cost: 0
            }, {
                name: "Brown Rice",
                cost: 1
            }, {
                name: "No Rice",
                cost: 0
            }]
        }, {
            title: "Spice",
            optionItems: [{
                name: "Medium",
                cost: 0
            }, {
                name: "Spicy",
                cost: 0
            }]
        }, {
            title: "Add Extra",
            optionItems: [{
                name: "Tofu",
                cost: 2
            }, {
                name: "Chicken",
                cost: 2
            }, {
                name: "Pork",
                cost: 2
            }, {
                name: "Beef",
                cost: 2.50
            }, {
                name: "Shrimp",
                cost: 3.50
            }]
        }, {
            title: "Remove",
            optionItems: [{
                name: "No bell peppers",
                cost: 0
            }, {
                name: "No bamboo",
                cost: 0
            }, {
                name: "No egg plants",
                cost: 0
            }]
        }]
    }, {
        name: "Pad Med Mamuang",
        price: "10.00",
        desc: "Stir crispy choice of meat, cashew nuts, bell peppers, onions, chili sauce",
        options: [{
            title: "Protein",
            optionItems: [{
                name: "Chicken",
                cost: 0
            }, {
                name: "Pork",
                cost: 0
            }, {
                name: "Beef",
                cost: 1.50
            }, {
                name: "Shrimp",
                cost: 3.50
            }, {
                name: "Tofu",
                cost: 0
            }, {
                name: "No Meat",
                cost: 0
            }]
        }, {
            title: "Rice",
            optionItems: [{
                name: "White Rice",
                cost: 0
            }, {
                name: "Brown Rice",
                cost: 1
            }, {
                name: "No Rice",
                cost: 0
            }]
        }, {
            title: "Spice",
            optionItems: [{
                name: "Medium",
                cost: 0
            }, {
                name: "Spicy",
                cost: 0
            }]
        }, {
            title: "Add Extra",
            optionItems: [{
                name: "Protein",
                cost: 2
            }, {
                name: "Shrimp",
                cost: 3.50
            }]
        }, {
            title: "Remove",
            optionItems: [{
                name: "No onions",
                cost: 0
            }, {
                name: "No bell peppers",
                cost: 0
            }, {
                name: "No cashew nuts",
                cost: 0
            }]
        }]
    }, {
        name: "Pad Ka Prao",
        price: "10.00",
        desc: "Stir fried minced choice of meat, green beans, bel…ot basil (seasonal) or basil leaves, garlic sauce",
        options: [{
            title: "Protein",
            optionItems: [{
                name: "Chicken",
                cost: 0
            }, {
                name: "Pork",
                cost: 0
            }, {
                name: "Pork Belly",
                cost: 1.50
            }, {
                name: "Beef",
                cost: 1.50
            }, {
                name: "Shrimp",
                cost: 3.50
            }, {
                name: "Tofu",
                cost: 0
            }]
        }, {
            title: "Rice",
            optionItems: [{
                name: "White Rice",
                cost: 0
            }, {
                name: "Brown Rice",
                cost: 1
            }, {
                name: "No Rice",
                cost: 0
            }]
        }, {
            title: "Spice",
            optionItems: [{
                name: "Mild",
                cost: 0
            }, {
                name: "Medium",
                cost: 0
            }, {
                name: "Spicy",
                cost: 0
            }]
        }, {
            title: "Add Extra",
            optionItems: [{
                name: "Tofu",
                cost: 2
            }, {
                name: "Chicken",
                cost: 2
            }, {
                name: "Pork",
                cost: 2
            }, {
                name: "Beef",
                cost: 2.50
            }, {
                name: "Shrimp",
                cost: 3.50
            }, {
                name: "Green Beans",
                cost: 1
            }]
        }, {
            title: "Remove",
            optionItems: [{
                name: "No bell peppers",
                cost: 0
            }, {
                name: "No green beans",
                cost: 0
            }]
        }]
    }, {
        name: "Ka Na Moo Krob",
        price: "11.50",
        desc: "Stir fried Chinese broccoli with crispy pork belly",
        options: [{
            title: "Rice",
            optionItems: [{
                name: "White Rice",
                cost: 0
            }, {
                name: "Brown Rice",
                cost: 1
            }, {
                name: "No Rice",
                cost: 0
            }]
        }, {
            title: "Spice",
            optionItems: [{
                name: "Mild",
                cost: 0
            }, {
                name: "Medium",
                cost: 0
            }, {
                name: "Spicy",
                cost: 0
            }]
        }, {
            title: "Add Extra",
            optionItems: [{
                name: "broccoli",
                cost: 1
            }, {
                name: "Pork Belly",
                cost: 2.50
            }]
        }]
    }, {
        name: "Pad Ga Tiem Prik Thai",
        price: "10.00",
        desc: "Stir fried garlic, white peppers, side cucumbers, top with cilantro",
        options: [{
            title: "Protein",
            optionItems: [{
                name: "Chicken",
                cost: 0
            }, {
                name: "Pork",
                cost: 0
            }, {
                name: "Beef",
                cost: 1.50
            }, {
                name: "Shrimp",
                cost: 3.50
            }, {
                name: "Tofu",
                cost: 0
            }, {
                name: "No Meat",
                cost: 0
            }]
        }, {
            title: "Rice",
            optionItems: [{
                name: "White Rice",
                cost: 0
            }, {
                name: "Brown Rice",
                cost: 1
            }, {
                name: "No Rice",
                cost: 0
            }]
        }, {
            title: "Spice",
            optionItems: [{
                name: "Mild",
                cost: 0
            }, {
                name: "Medium",
                cost: 0
            }, {
                name: "Spicy",
                cost: 0
            }]
        }, {
            title: "Add Extra",
            optionItems: [{
                name: "Tofu",
                cost: 2
            }, {
                name: "Chicken",
                cost: 2
            }, {
                name: "Pork",
                cost: 2
            }, {
                name: "Beef",
                cost: 2.50
            }, {
                name: "Shrimp",
                cost: 3.50
            }]
        }, {
            title: "Remove",
            optionItems: [{
                name: "No onions",
                cost: 0
            }, {
                name: "No cilantro",
                cost: 0
            }]
        }]
    }, {
        name: "Pra Ram Long Song",
        price: "10.00",
        desc: "Peanut sauce, sautéed spinach",
        options: [{
            title: "Protein",
            optionItems: [{
                name: "Chicken",
                cost: 0
            }, {
                name: "Pork",
                cost: 0
            }, {
                name: "Beef",
                cost: 1.50
            }, {
                name: "Shrimp",
                cost: 3.50
            }, {
                name: "Tofu",
                cost: 0
            }, {
                name: "No Meat",
                cost: 0
            }]
        }, {
            title: "Rice",
            optionItems: [{
                name: "White Rice",
                cost: 0
            }, {
                name: "Brown Rice",
                cost: 1
            }, {
                name: "No Rice",
                cost: 0
            }]
        }, {
            title: "Spice",
            optionItems: [{
                name: "Mild",
                cost: 0
            }, {
                name: "Medium",
                cost: 0
            }, {
                name: "Spicy",
                cost: 0
            }]
        }, {
            title: "Add Extra",
            optionItems: [{
                name: "Tofu",
                cost: 2
            }, {
                name: "Chicken",
                cost: 2
            }, {
                name: "Pork",
                cost: 2
            }, {
                name: "Beef",
                cost: 2.50
            }, {
                name: "Shrimp",
                cost: 3.50
            }]
        }]
    }, {
        name: "Pad Prik Khing",
        price: "10.00",
        desc: "Stir fried green beans with red curry paste, lime leaves, bell peppers",
        options: [{
            title: "Protein",
            optionItems: [{
                name: "Chicken",
                cost: 0
            }, {
                name: "Pork",
                cost: 0
            }, {
                name: "Beef",
                cost: 1.50
            }, {
                name: "Shrimp",
                cost: 3.50
            }, {
                name: "Tofu",
                cost: 0
            }, {
                name: "No Meat",
                cost: 0
            }]
        }, {
            title: "Rice",
            optionItems: [{
                name: "White Rice",
                cost: 0
            }, {
                name: "Brown Rice",
                cost: 1
            }, {
                name: "No Rice",
                cost: 0
            }]
        }, {
            title: "Spice",
            optionItems: [{
                name: "Medium",
                cost: 0
            }, {
                name: "Spicy",
                cost: 0
            }]
        }, {
            title: "Add Extra",
            optionItems: [{
                name: "Tofu",
                cost: 2
            }, {
                name: "Chicken",
                cost: 2
            }, {
                name: "Pork",
                cost: 2
            }, {
                name: "Beef",
                cost: 2.50
            }, {
                name: "Shrimp",
                cost: 3.50
            }, {
                name: "Green beans",
                cost: 0
            }]
        }, {
            title: "Remove",
            optionItems: [{
                name: "No bell peppers",
                cost: 0
            }, {
                name: "No green beans",
                cost: 0
            }]
        }]
    }, {
        name: "Kao Pad",
        price: "10.00",
        desc: "Fried rice, onions, egg, Chinese broccoli, tomatoes",
        options: [{
            title: "Protein",
            optionItems: [{
                name: "Chicken",
                cost: 0
            }, {
                name: "Pork",
                cost: 0
            }, {
                name: "Beef",
                cost: 1.50
            }, {
                name: "Shrimp",
                cost: 3.50
            }, {
                name: "Tofu",
                cost: 0
            }, {
                name: "No Meat",
                cost: 0
            }]
        }, {
            title: "Rice",
            optionItems: [{
                name: "White Rice",
                cost: 0
            }, {
                name: "Brown Rice",
                cost: 1
            }, {
                name: "No Rice",
                cost: 0
            }]
        }, {
            title: "Spice",
            optionItems: [{
                name: "Mild",
                cost: 0
            }, {
                name: "Medium",
                cost: 0
            }, {
                name: "Spicy",
                cost: 0
            }]
        }, {
            title: "Add Extra",
            optionItems: [{
                name: "Tofu",
                cost: 2
            }, {
                name: "Chicken",
                cost: 2
            }, {
                name: "Pork",
                cost: 2
            }, {
                name: "Beef",
                cost: 2.50
            }, {
                name: "Shrimp",
                cost: 3.50
            }, {
                name: "broccoli",
                cost: 1
            }, {
                name: "Egg",
                cost: 1
            }]
        }, {
            title: "Remove",
            optionItems: [{
                name: "No onions",
                cost: 0
            }, {
                name: "No cilantro",
                cost: 0
            }, {
                name: "No broccoli",
                cost: 0
            }, {
                name: "No tomatoes",
                cost: 0
            }, {
                name: "No egg",
                cost: 0
            }]
        }]
    }, {
        name: "Kao Pad Sub Pa Rod",
        price: "10.00",
        desc: "Fried rice, pineapple, curry powder, egg, onions, bell peppers, cashew nuts",
        options: [{
            title: "Protein",
            optionItems: [{
                name: "Chicken",
                cost: 0
            }, {
                name: "Pork",
                cost: 0
            }, {
                name: "Beef",
                cost: 1.50
            }, {
                name: "Shrimp",
                cost: 3.50
            }, {
                name: "Tofu",
                cost: 0
            }, {
                name: "No Meat",
                cost: 0
            }]
        }, {
            title: "Rice",
            optionItems: [{
                name: "White Rice",
                cost: 0
            }, {
                name: "Brown Rice",
                cost: 1
            }, {
                name: "No Rice",
                cost: 0
            }]
        }, {
            title: "Spice",
            optionItems: [{
                name: "Medium",
                cost: 0
            }, {
                name: "Spicy",
                cost: 0
            }]
        }, {
            title: "Add Extra",
            optionItems: [{
                name: "Tofu",
                cost: 2
            }, {
                name: "Chicken",
                cost: 2
            }, {
                name: "Pork",
                cost: 2
            }, {
                name: "Beef",
                cost: 2.50
            }, {
                name: "Shrimp",
                cost: 3.50
            }, {
                name: "Green beans",
                cost: 0
            }]
        }, {
            title: "Remove",
            optionItems: [{
                name: "No bell peppers",
                cost: 0
            }, {
                name: "No green beans",
                cost: 0
            }]
        }]
    }, {
        name: "Kao Pad",
        price: "10.00",
        desc: "Fried rice, onions, egg, Chinese broccoli, tomatoes",
        options: [{
            title: "Protein",
            optionItems: [{
                name: "Chicken",
                cost: 0
            }, {
                name: "Pork",
                cost: 0
            }, {
                name: "Beef",
                cost: 1.50
            }, {
                name: "Shrimp",
                cost: 3.50
            }, {
                name: "Tofu",
                cost: 0
            }, {
                name: "No Meat",
                cost: 0
            }]
        }, {
            title: "Rice",
            optionItems: [{
                name: "White Rice",
                cost: 0
            }, {
                name: "Brown Rice",
                cost: 1
            }, {
                name: "No Rice",
                cost: 0
            }]
        }, {
            title: "Spice",
            optionItems: [{
                name: "Mild",
                cost: 0
            }, {
                name: "Medium",
                cost: 0
            }, {
                name: "Spicy",
                cost: 0
            }]
        }, {
            title: "Add Extra",
            optionItems: [{
                name: "Tofu",
                cost: 2
            }, {
                name: "Chicken",
                cost: 2
            }, {
                name: "Pork",
                cost: 2
            }, {
                name: "Beef",
                cost: 2.50
            }, {
                name: "Shrimp",
                cost: 3.50
            }, {
                name: "Egg",
                cost: 1
            }]
        }, {
            title: "Remove",
            optionItems: [{
                name: "No nuts",
                cost: 0
            }, {
                name: "No bell peppers",
                cost: 0
            }, {
                name: "No onions",
                cost: 0
            }, {
                name: "No raisens",
                cost: 0
            }, {
                name: "No cilantro",
                cost: 0
            }, {
                name: "No egg",
                cost: 0
            }]
        }]
    }, {
        name: "Pad Pak Boong",
        price: "9.00",
        desc: "Flash stir fried morning glory, fresh Thai chili, garlic sauce (Seasonal)",
        options: [{
            title: "Protein",
            optionItems: [{
                name: "Chicken",
                cost: 0
            }, {
                name: "Pork",
                cost: 0
            }, {
                name: "Beef",
                cost: 1.50
            }, {
                name: "Shrimp",
                cost: 3.50
            }, {
                name: "Tofu",
                cost: 0
            }, {
                name: "No Meat",
                cost: 0
            }]
        }, {
            title: "Rice",
            optionItems: [{
                name: "White Rice",
                cost: 0
            }, {
                name: "Brown Rice",
                cost: 1
            }, {
                name: "No Rice",
                cost: 0
            }]
        }, {
            title: "Spice",
            optionItems: [{
                name: "Medium",
                cost: 0
            }, {
                name: "Spicy",
                cost: 0
            }]
        }, {
            title: "Add Extra",
            optionItems: [{
                name: "Tofu",
                cost: 2
            }, {
                name: "Chicken",
                cost: 2
            }, {
                name: "Pork",
                cost: 2
            }, {
                name: "Beef",
                cost: 2.50
            }, {
                name: "Shrimp",
                cost: 3.50
            }, {
                name: "Green beans",
                cost: 0
            }]
        }, {
            title: "Remove",
            optionItems: [{
                name: "No bell peppers",
                cost: 0
            }, {
                name: "No green beans",
                cost: 0
            }]
        }]
    }, {
        name: "Kao Pad",
        price: "10.00",
        desc: "Fried rice, onions, egg, Chinese broccoli, tomatoes",
        options: [{
            title: "Rice",
            optionItems: [{
                name: "White Rice",
                cost: 0
            }, {
                name: "Brown Rice",
                cost: 1
            }, {
                name: "No Rice",
                cost: 0
            }]
        }, {
            title: "Spice",
            optionItems: [{
                name: "Medium",
                cost: 0
            }, {
                name: "Spicy",
                cost: 0
            }]
        }, {
            title: "Add Extra",
            optionItems: [{
                name: "Tofu",
                cost: 2
            }, {
                name: "Chicken",
                cost: 2
            }, {
                name: "Pork",
                cost: 2
            }, {
                name: "Beef",
                cost: 2.50
            }, {
                name: "Shrimp",
                cost: 3.50
            }]
        }]
    }],
    noodles: [],
    drinkdesert: []
};
  export default menuData