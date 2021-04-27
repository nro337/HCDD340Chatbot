import {Images} from '../../../Themes'

const daily_check_survey = [
    {
        text: "Great! Let's start it"
    },
    {
        text: "CLEAR"
    },
    {
        text: "1. Can you sleep well?",
        options: ["Not at all", "A little bit", "Moderately", "Quite a bit", "Extremely"]
    },
    {
        text: "2. Do you feel anger often?",
        options: ["Not at all", "A little bit", "Moderately", "Quite a bit", "Extremely"]
    },
    {
        text: "3. Do you feel worried or anxious often?",
        options: ["Not at all", "A little bit", "Moderately", "Quite a bit", "Extremely"]
    },
    {
        text: "4. Do you feel sad or hopeless often?",
        options: ["Not at all", "A little bit", "Moderately", "Quite a bit", "Extremely"]
    },
    {
        text: "5. Do you think you are disconnected from reality?",
        options: ["Not at all", "A little bit", "Moderately", "Quite a bit", "Extremely"]
    },
    {
        text: "6. Do you think you are disconnected from people?",
        options: ["Not at all", "A little bit", "Moderately", "Quite a bit", "Extremely"]
    },
    {
        text: "7. Do you remind trauma often?",
        options: ["Not at all", "A little bit", "Moderately", "Quite a bit", "Extremely"],
        dialogue: ["daily-check/score.js", "daily-check/score.js", "daily-check/score.js", "daily-check/score.js", "daily-check/score.js"]
    }
]

export default daily_check_survey