import {Images} from '../../../Themes'

const learn_more_facts_init = [
    {
        id: 1,
        text: "CLEAR",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },

    },
    {
        _id: 2,
        text: "Did you know that PTSD is extremely common?",
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
                    value: "learn-more/facts/next.js",
                },
                {
                    title: 'No',
                    value: "learn-more/facts/next.js",
                },

            ],
        },
        // options: ["Yes", "No"],
        // dialogue: ["learn-more/facts/next.json", "learn-more/facts/next.json"]
    }
]

export default learn_more_facts_init