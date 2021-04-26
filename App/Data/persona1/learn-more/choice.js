import {Images} from '../../../Themes'

const learn_more_choice = [
    {
        _id: 1,
        text: "Which of the following topics do you want to know more about?",
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
                    title: '4 types of symptoms',
                    value: "learn-more/symptoms/init.js",
                },
                {
                    title: 'PTSD facts',
                    value: "learn-more/facts/init.js",
                },

            ],
        },

        // options: ["4 types of symptoms", "PTSD facts"],
        // dialogue: ["learn-more/symptoms/init.js", "learn-more/facts/init.js"]
    }
]

export default learn_more_choice