import {Images} from '../../../../../Themes'

const learn_more_symptoms_intro_second = [
    {
        _id: 1,
        text: "CLEAR",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 2,
        text: "The second symptom of PTSD is persistent avoidance",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 3,
        text: "Various signs can be shown",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    { 
        _id: 4,
        text: "Do you want to know more about indicators of this symptom?",
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
                    value: "learn-more/symptoms/examples/second.js",
                },
                {
                    title: 'No',
                    value: "learn-more/symptoms/intro/third.js",
                },

            ],
        },
        // options: ["Yes", "No"],
        // dialogue: ["learn-more/symptoms/examples/second.json", "learn-more/symptoms/intro/third.json"]
    }
]

export default learn_more_symptoms_intro_second