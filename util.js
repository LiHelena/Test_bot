const questions = require('./questions.json');

const getRandomQuestion = (topic) =>{
    let questionTopic = topic.toLowerCase();

    if (questionTopic === 'случайный вопрос'){
        questionTopic = 
        Object.keys(questions)[Math.floor(Math.random() * Object.keys(questions).length)]

    }
    const randomQuestionTopic = Math.floor(Math.random() * questions[questionTopic].length);

    return {
        question: questions[questionTopic][randomQuestionTopic],
        questionTopic,
    }
}

const getCorrectAnswer = (topic, id) =>{
    console.log(topic);
    const question = questions[topic.toLowerCase()].find((question) => question.id === id);

    if (!question.hasOptions){
        return question.answer;
    }
    return question.options.find((option) => option.isCorrect).text
}

module.exports = {getRandomQuestion,getCorrectAnswer}