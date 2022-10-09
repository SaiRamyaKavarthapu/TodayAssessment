export default {
  name: "questionaire",
  type: "optional",
  quantity: "20",
  values: [
    {
      id: 1,
      question: "Have you been diagnosed with this problem ?",
      options: ["Not relevant", "Yes", "No"],
      optionType: "radio",
      correctAnswer: ""
    },
    {
      id: 2,
      question: "Did the problem start after a physical trauma ?",
      options: ["Not relevant", "Yes", "No"],
      optionType: "radio",
      correctAnswer: ""
    },
    {
      id: 3,
      question: "Did the problem start after a mental trauma ?",
      options: ["Not relevant", "Yes", "No"],
      optionType: "radio",
      correctAnswer: ""
    },
    {
      id: 4,
      question: "How often did you experience the problem ?",
      options: [
        "Not relevant",
        "Daily",
        "A few times/months",
        "A few times/years"
      ],
      optionType: "radio",
      correctAnswer: ""
    },
    {
      id: 5,
      question: "Did you experience the problem ?",
      options: [
        "Not relevant",
        "When lying down",
        "When sitting",
        "When standing",
        "In walking"
      ],
      optionType: "checkbox",
      correctAnswer: ""
    },
    {
      id: 6,
      question:
        "How intense is the experience the problem on average on a 0-10 scale?",
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      optionType: "radio",
      correctAnswer: ""
    },
    {
      id: 7,
      optionType: "radio",
      question:
        "How would you describe the pain you usually have from your knee?",
      options: ["None", "Very mild", "Mild", "Moderate", "Severe"]
    },
    {
      id: 8,
      optionType: "radio",
      question:
        "Have you had any trouble with washing and drying yourself (all over) because of your knee?",
      choices: [
        "No trouble at all",
        "Very little trouble",
        "Moderate trouble",
        "Extremely difficult",
        "Impossible to do"
      ]
    },
    {
      id: 9,
      optionType: "radio",
      question:
        "Have you had any trouble getting in and out of a car or using public transport because of your knee? (whichever you tend to use)",
      choices: [
        "No trouble at all",
        "Very little trouble",
        "Moderate trouble",
        "Extremely difficult",
        "Impossible to do"
      ]
    }
  ]
};
