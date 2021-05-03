import {Images} from '../../../Themes'

const daily_check_bad = [
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
        text: "I am sorry to hear that.",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 3,
        text: "To reduce your symptom, I can suggest multiple functions.",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 4,
        text: "In this app, there is a function called ''Get Support'', it has included some resources for you to find professional help.",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 5,
        text: "Other than that, I have some coping tools that might help you manage your symptoms. Would you like to try?",
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
                    title: 'Get Support',
                    value: "get-support/immediate.js",
                },
            ],
        },
        //options: ["Manage Symptoms","Get Support"],
        //dialogue: ["manage-symptoms/init.js","get-support/immediate.js"]
    }
]

export default daily_check_bad;