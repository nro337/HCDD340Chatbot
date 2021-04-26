import {Images} from '../../../Themes'

const learn_more_symptoms_examples_first = [
    {
        _id: 1,
        text: "If someone is under re-experiencing or reliving the trauma, he/she might experience: disturbing memories, nightmares, feeling or acting like the trauma is happening again, and/or becoming very upset when reminded of the trauma.",
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
                    title: 'Ok. Tell me about the second symptom',
                    value: "learn-more/symptoms/intro/second.js",
                },

            ],
        },
        // options: ["Ok. Tell me about the second symptom"],
        // dialogue: ["learn-more/symptoms/intro/second.json"]
    }
]

export default learn_more_symptoms_examples_first