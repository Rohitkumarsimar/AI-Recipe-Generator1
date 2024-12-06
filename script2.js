const formatBoldText = (text) => {

    const formattedBold = text.replace(/\*\*(.*?)\*\*/g, '<br><br>' + '<b>$1</b>');
    const formattedBullets = formattedBold.replace(/##/g, 'Recipe:' + '<br>');
    const formatbullet = formattedBullets.replace(/\*/g, '<br>' + '•')
    // const newline = formatbullet.replace(/(<b>.*?<\/b>)/g, '<br><br>$1');
    const serialnum = formatbullet.replace(/(\d+\.\s)/g, '');
    return serialnum;
};


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("recipe-form");
    const recipeContainer = document.getElementById("recipe-container");

    // Combine function to prepare the input for the API
    function combine() {
        const ingValue = document.getElementById("ingredients").value;
        const timeValue = document.getElementById("time").value;

        if (!ingValue || !timeValue) {
            return null; // Return null if fields are empty
        }

        return `Ingredients: ${ingValue}. Preparation time: ${timeValue} minutes.`;
    }

    // Handle form submission
    form.addEventListener("submit", async (e) => {
        e.preventDefault(); // Prevent page reload

        const combinedInput = combine();

        if (!combinedInput) {
            recipeContainer.innerHTML = "<p>Please fill in all fields.</p>";
            return;
        }

        try {
            recipeContainer.innerHTML = "<p>Generating your recipe...</p>"; // Show loading message

            const response = await fetch(
                "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBTCnyhCrHKS-sDz52x9yAsEEr7hp30cos",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        contents: [
                            {
                                parts: [
                                    {
                                        text: combinedInput,
                                    },
                                ],
                            },
                        ],
                    }),
                }
            );


            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error.message || "Failed to generate the recipe.");
            }
            const rawAnswer = result?.candidates[0]?.content?.parts[0]?.text || "No recipe generated."
            const formattedAnswer = formatBoldText(rawAnswer);
            // Display the API response in the UI
            recipeContainer.innerHTML = `
                <h3>Generated Recipe</h3><br><br>
                <p>${formattedAnswer}</p>
               `
        } catch (error) {
            console.error("Error:", error);
            recipeContainer.innerHTML = `<p>Error: ${error.message || "Failed to generate the recipe. Please try again later."}</p>`;
        }
    });
});
