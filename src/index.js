// Importing 'prompt' for user input (but comment out if you don't need it)
const prompt = require("readline-sync").question;

// Add your code below!
const display_intro = () => {
    console.log(`Welcome to the Academy Anagram Game!👋 `)

    console.log(`
    HOW TO COMPLETE THE GAME\n
    - Choose a category.\n
    - Unscramble the jumbled word and type out your guess.\n
    - If you get it wrong, not to worry, you can get a clue!\n
    - Guess all the words from each category!\n
    - However, be careful not to get too many wrong!\n
    - NOTE: YOU ONLY HAVE 3 LIVES!👀\n
    `)
}    

const create_categories = () => {
    return {
        "CONTINENT": ["EUROPE", "ASIA", "AFRICA", "NORTH AMERICA", "SOUTH AMERICA", "ANTARTICA", "OCEANIA"],
        "COLOUR": ["RED", "BLUE", "GREEN", "PINK", "PURPLE"],
        "SPORT": ["TENNIS", "BASKETBALL", "FOOTBALL", "VOLLEYBALL", "HOCKEY"],
        "UK CITY": ["LONDON", "BIRMINGHAM", "MANCHESTER", "LIVERPOOL", "YORK"],
        "CODING LANGUAGE": ["PYTHON", "JAVASCRIPT", "JAVA", "TYPESCRIPT", "RUBY", "C"]
    }

}

const get_category_choice = (categories) => {
    console.log(`\nSelect a category out of:`)
    for (let variantArray of arrayOfVariantArrays) {
    
    
    for key in categories:
        print(key.title())
    print(dashes)
    category_name = input("Category Choice: ").upper()
    while category_name not in categories:
        category_name = input("Select from list above: ").upper()

    category = categories[category_name]
    del categories[category_name]

    return category, category_name

}

const play = () => {
    let lives = 3
    let score = 0 
    let categories = create_categories()

    display_intro()

  while (categories.length > 0 && lives > 0) {
      let category_holder = get_category_choice(categories)
      let category = category_holder[0]
      let category_name = category_holder[1]
  } 
}

