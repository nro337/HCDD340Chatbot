import {Images} from '../../../../Themes'

const learn_more_symptoms_end = [
    {
        _id: 1,
        text: "OK",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 2,
        text: "These symptoms last for a month or more and are bothersome, and/or lead to problems in social or family life, work, and school.",
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
                    value: "learn-more/symptoms/review.js",
                },
                {
                    title: 'No',
                    value: "learn-more/repeat.js",
                },

            ],
        },
        // options: ["Yes", "No"],
        // dialogue: ["learn-more/symptoms/review.json", "learn-more/repeat.json"]
    }
]

export default learn_more_symptoms_end