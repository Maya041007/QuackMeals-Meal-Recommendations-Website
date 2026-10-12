// Retrieve stored survey responses
let data = JSON.parse(localStorage.getItem("surveyData"));

let resultsBox = document.getElementById("resultsBox");

if (!data) {
    resultsBox.innerHTML = "<p>Error: No survey data found. Please complete the survey.</p>";
} else {

    let meals = [];

    if (data.goal === "lose") {
            if (data.weight >= 250){
                if (data.budget >= 10){
                    meals.push("Ceasar Salad");
                    meals.push("Chicken Sandwich");
                }
                if (data.budget >= 2){
                    meals.push("Apple");
                }
            }
            if ((data.weight >= 150) && (data.weight < 250)){
                if (data.budget >= 8){
                    meals.push("Breakfast Smoothie");
                }
                if (data.budget >= 3){
                    meals.push("Broccoli");
                }
                if (data.budget >= 10){
                    meals.push("Fish and Eggs");
                }
            }
            if (data.weight < 150){
                if (data.budget >= 8){
                    meals.push("Oatmeal");
                }
                if (data.budget >= 18){
                    meals.push("Salmon and Sweet Potato");
                }
                if (data.budget >= 5){
                    meals.push("Asparagus");
                }
            }
    }
    else if (data.goal === "gain") {
            if (data.weight <= 120){
                if (data.budget >= 15){
                    meals.push("Steak and Rice");
                }
                if (data.budget >= 7){
                    meals.push("Eggs and Avocado");
                }
                if (data.budget >= 10){
                    meals.push("Pasta Bolognese");
                } 
            }  
            if ((data.weight <= 175) && (data.weight > 120)){
                if (data.budget >= 4){
                    meals.push("Texas Toast");
                }
                if (data.budget >= 5){
                    meals.push("Apple Juice");
                }
                if (data.budget >= 5){
                    meals.push("Rotisserie Chicken");                    
                }
            }
            if (data.weight > 175){
                if (data.budget >= 13){
                    meals.push("Steak");
                }
                if (data.budget >= 30){
                    meals.push("Protein Shake (2 scoops)");
                }
                if (data.budget >= 15){
                    meals.push("Chicken and Mashed Potatoes");
                }
            }
    }
    else if (data.goal === "maintain") {
            if (data.weight >= 250){
                if (data.budget >= 7){
                    meals.push("Ceasar Salad");
                }
                if (data.budget >= 15){
                    meals.push("Lean Beef and Rice");
                }
                if (data.budget >= 6){
                    meals.push("Cranberry Juice");
                }
            }
            if ((data.weight < 250) && (data.weight >= 150)){
                if (data.budget >= 7){
                    meals.push("Ceasar Salad");
                }
                if (data.budget >= 9){
                    meals.push("Turkey Sandwich");
                }
                if (data.budget >= 6){
                    meals.push("Diet Lemonade");
                }
            }

            if (data.weight < 150){
                if (data.budget >= 7){
                    meals.push("Ceasar Salad");
                } 
                if (data.budget >= 8){
                    meals.push("Oatmeal");
                }
                if (data.budget >= 15){
                    meals.push("Blueberry Smoothie");
                }
            }
    }


    resultsBox.innerHTML = "";

   
    let head = document.createElement("h2");
    head.textContent = "Your Meal Recommendations";
    resultsBox.appendChild(head);

   
    let paragraph = document.createElement("p");
    paragraph.innerHTML = `<strong>Based on your goal:</strong> ${data.goal}`;
    resultsBox.appendChild(paragraph);

    
    let unordered_list = document.createElement("ul");
    meals.forEach(meal => {
        let food = document.createElement("li");
        food.textContent = meal;
        unordered_list.appendChild(food);
    });

    resultsBox.appendChild(unordered_list);

    /*
    Old code

    resultsBox.innerHTML = `
        <h2>Your Meal Recommendations</h2>
        <p><strong>Based on your goal:</strong> ${data.goal}</p>
        <ul>
            <li>${meals[0]}</li>
            <li>${meals[1]}</li>
            <li>${meals[2]}</li>
        </ul>
    `;    
    */
}