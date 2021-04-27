import {Images} from '../../../../../Themes'

const learn_more_symptoms_intro_fourth = [
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
        text: "Fourth symptom is feeling more on-edge and reactive",
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
                    value: "learn-more/symptoms/examples/fourth.js",
                },
                {
                    title: 'No',
                    value: "learn-more/symptoms/end.js",
                },

            ],
        },
        // options: ["Yes", "No"],
        // dialogue: ["learn-more/symptoms/examples/fourth.json", "learn-more/symptoms/end.json"]
    }
]

export default learn_more_symptoms_intro_fourth