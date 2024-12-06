
        document.getElementById('recipe-form').addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the form from refreshing the page

            // Get user inputs
            const ingredients = document.getElementById('ingredients').value;
            const diet = document.getElementById('diet').value;
            const time = document.getElementById('time').value;

            // Validate inputs
            if (!ingredients) {
                alert("Please enter some ingredients.");
                return;
            }

            // Generate recipe based on diet preference
            let recipe = generateRecipe(ingredients, diet, time);

            // Display the recipe
            const recipeContainer = document.getElementById('recipe-container');
            recipeContainer.innerHTML = `<p><strong>Generated Recipe:</strong></p><p>${recipe}</p>`;
        });

        function generateRecipe(ingredients, diet, time) {
            // Simulate vegetarian and non-vegetarian recipes
            const vegetarianRecipes = [
                `Vegetarian Stir-Fry with ${ingredients} and tofu.`,
                `Quinoa Salad with ${ingredients} and a tangy lemon dressing.`,
                `Vegetable Curry featuring ${ingredients}, served with rice.`,
            ];

            const nonVegetarianRecipes = [
                `Grilled Chicken with ${ingredients} and roasted vegetables.`,
                `Spaghetti with ${ingredients}, chicken, and a rich tomato sauce.`,
                `Beef Stir-Fry with ${ingredients} served over rice.`,
            ];

            // Choose recipe based on diet
            let recipePool = (diet === "vegetarian") ? vegetarianRecipes : nonVegetarianRecipes;

            // Choose a random recipe from the appropriate pool
            let randomIndex = Math.floor(Math.random() * recipePool.length);
            return recipePool[randomIndex];
        }
    