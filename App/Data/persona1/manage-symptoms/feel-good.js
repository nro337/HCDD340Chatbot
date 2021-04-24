import {Images} from '../../../Themes'

const manage_symptoms_feel_good = [
    {
        _id: 1,
        text: "Great!",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 2,
        text: "I have some other tools that might help you. Would you like to try?",
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
                    value: "get-support/tool-list.js",
                },
                {
                    title: 'No',
                    value: "end-conversation.js",
                },
            ],
        },
        // options: ["Yes", "No"],
        // dialogue: ["get-support/tool-list.js", "end-conversation.js"]
    }
]

export default manage_symptoms_feel_good