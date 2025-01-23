<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 20px;
            max-width: 600px;
        }
        .question {
            margin-bottom: 20px;
        }
        .result {
            font-size: 20px;
            font-weight: bold;
            color: green;
        }
    </style>
</head>
<body>
    <h1>JavaScript Quiz</h1>
    <div id="quiz-container"></div>
    <button onclick="submitQuiz()">Submit</button>
    <p class="result" id="result"></p>

    <script>
        // Quiz Data
        const quizData = [
            {
                question: "What is JavaScript?",
                options: ["Programming Language", "Markup Language", "Operating System", "Database"],
                correct: "Programming Language"
            },
            {
                question: "Which method is used to add an element to an array?",
                options: ["push()", "pop()", "indexOf()", "join()"],
                correct: "push()"
            },
            {
                question: "Which of the following is not a JavaScript framework?",
                options: ["React", "Angular", "Vue", "Django"],
                correct: "Django"
            }
        ];

        // Render Quiz
        const quizContainer = document.getElementById("quiz-container");
        quizData.forEach((q, index) => {
            const questionHtml = `
                <div class="question">
                    <p><strong>${index + 1}. ${q.question}</strong></p>
                    ${q.options.map(option => `
                        <label>
                            <input type="radio" name="q${index}" value="${option}">
                            ${option}
                        </label><br>
                    `).join("")}
                </div>
            `;
            quizContainer.innerHTML += questionHtml;
        });

        // Submit Quiz
        function submitQuiz() {
            let score = 0;

            quizData.forEach((q, index) => {
                const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
                if (selectedOption && selectedOption.value === q.correct) {
                    score++;
                }
            });

            document.getElementById("result").innerText = `Your score is: ${score} / ${quizData.length}`;
        }
    </script>
</body>
</html>
