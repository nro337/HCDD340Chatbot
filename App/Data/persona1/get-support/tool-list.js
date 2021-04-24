import {Images} from '../../../Themes'

const get_support_tool_list = [
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
        text: "Which tool do you want to try?",
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
                    title: 'Manage Symptoms',
                    value: "manage-symptoms/init.js",
                },
                {
                    title: 'Take Assessment',
                    value: "take-assessment/start.js",
                },
                {
                    title: 'Get Support',
                    value: "get-support/immediate.js",
                },
                {
                    title: 'Learn About PTSD',
                    value: "learn-more/init.js",
                },
                {
                    title: 'Track Progress',
                    value: "track-progress/init.js",
                },
            ],
        },
        // options: ["Manage Symtoms", "Take Assessment", "Get Support", "Learn about PTSD", "Track Progress"],
        // dialogue: ["manage-symptoms/init.js","take-assessment/start.js", "get-support/immediate.js", "learn-more/init.js", "track-progress/init.js"]
    }
]