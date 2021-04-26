import {Images} from '../../../Themes'

const learn_more_symptoms_examples_second = [
    {
        _id: 1,
        text: "If someone shows persistent avoidance, he/she might experience: avoiding places, people or conversations that remind you of the trauma, and/or avoiding thoughts, feelings, or memories closely associated with traumatic events.",
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
                    title: 'Ok. Tell me about the third symptom',
                    value: "learn-more/symptoms/intro/third.js",
                },

            ],
        },
        // options: ["Ok. Tell me about the third symptom"],
        // dialogue: ["learn-more/symptoms/intro/third.json"]
    }
]

export default learn_more_symptoms_examples_second