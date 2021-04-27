import {Images} from '../../../../Themes'

const learn_more_symptoms_review = [
    {
        _id: 1,
        text: "Ok. Which symptom would you like to review?",
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
                    title: 'First Symptom',
                    value: "learn-more/symptoms/intro/first.js",
                },
                {
                    title: 'Second Symptom',
                    value: "learn-more/symptoms/intro/second.js",
                },
                {
                    title: 'Third Symptom',
                    value: "learn-more/symptoms/intro/third.js",
                },
                {
                    title: 'Fourth Symptom',
                    value: "learn-more/symptoms/intro/fourth.js",
                },

            ],
        },
        // options: ["First Symptom", "Second Symptom", "Third Symptom", "Fourth Symptom"],
        // dialogue: ["learn-more/symptoms/intro/first.json", "learn-more/symptoms/intro/second.json", "learn-more/symptoms/intro/third.json", "learn-more/symptoms/intro/fourth.json"]
    }
]

export default learn_more_symptoms_review