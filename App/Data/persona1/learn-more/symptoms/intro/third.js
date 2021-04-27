import {Images} from '../../../../../Themes'

const learn_more_symptoms_intro_third = [
    {
        _id: 1,
        text: "Third symptom is negative thoughts and moods",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 2,
        text: "There are various signs of negative thoughts and moods",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    { 
        _id: 3,
        text: "Do you want to learn more about?",
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
                    value: "learn-more/symptoms/examples/third.js",
                },
                {
                    title: 'No',
                    value: "learn-more/symptoms/intro/fourth.js",
                },

            ],
        },
        // options: ["Yes", "No"],
        // dialogue: ["learn-more/symptoms/examples/third.json", "learn-more/symptoms/intro/fourth.json"]
    }
]

export default learn_more_symptoms_intro_third