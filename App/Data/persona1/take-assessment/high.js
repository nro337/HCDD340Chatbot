import {Images} from '../../../Themes'

const take_assessment_high = [
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
        text: "Your score is 66.",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 3,
        text: "Your score puts you in the high range, which means that you have some PTSD symptoms",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 4,
        text: "I strongly recommend you talk to your health provider can be really essential at this point. In this app, there is a function called “Get Support”, it has included some resources for you to find professional help.",
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
        // options: ["Manage Symptoms","Get Support"],
        // dialogue: ["manage-symptoms/init.js","get-support/immediate.js"]
    }
]

export default take_assessment_high