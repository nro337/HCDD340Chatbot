import {Images} from '../../../Themes'

const learn_more_repeat = [
    {
        _id: 1,
        text: "Do you want to know about PTSD more?",
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
                    value: "learn-more/choice.js",
                },
                {
                    title: 'No',
                    value: "get-support/other-tools.js",
                },

            ],
        },
        // options: ["Yes", "No"],
        // dialogue: ["learn-more/choice.js", "get-support/other-tools.js"]
    }
]

export default learn_more_repeat