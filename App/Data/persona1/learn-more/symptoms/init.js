import {Images} from '../../../../Themes'

const learn_more_symptoms_init = [
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
        text: "PTSD includes 4 types of symptoms",
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
                    title: 'Tell me about the first symptom',
                    value: "learn-more/symptoms/intro/first.js",
                },

            ],
        },
        // options: ["Tell me about the first symptom"],
        // dialogue: ["learn-more/symptoms/intro/first.json"]
    }
]

export default learn_more_symptoms_init