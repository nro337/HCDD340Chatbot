import {Images} from '../../../../../Themes'

const learn_more_symptoms_examples_fourth = [
    {
        _id: 1,
        text: "If someone feel more on-edge and reactive, he/she might experience: feeling on guard, being irritable or angry, trouble sleeping, and/or startling easily.",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 2,
        text: "These symptoms last for a month or more and are bothersome, and/or lead to problems in social or family life, work, and school",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    { 
        _id: 3,
        text: "Do you want to review other symptom again?",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
        quickReplies: {
            type: 'radio', // or 'checkbox',
            keepIt: true,
            values: [
                {
                    title: 'Yes',
                    value: "learn-more/symptoms/choice.js",
                },
                {
                    title: 'No',
                    value: "learn-more/repeat.js",
                },

            ],
        },
        // options: ["Yes", "No"],
        // dialogue: ["learn-more/symptoms/choice.json", "learn-more/repeat.json"]
    }
]

export default learn_more_symptoms_examples_fourth