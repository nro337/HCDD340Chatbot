import {Images} from '../../../Themes'

const learn_more_symptoms_intro_first = [
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
        text: "The first symptom of PTSD is: re-experiencing or reliving the trauma",
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
        text: "Do you need some examples?",
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
                    value: "learn-more/symptoms/examples/first.js",
                },
                {
                    title: 'No',
                    value: "learn-more/symptoms/intro/second.js",
                },

            ],
        },
        // options: ["Yes", "No"],
        // dialogue: ["learn-more/symptoms/examples/first.json", "learn-more/symptoms/intro/second.json"]
    }
]

export default learn_more_symptoms_intro_first