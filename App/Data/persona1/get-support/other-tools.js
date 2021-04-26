import {Images} from '../../../Themes'

const get_support_other_tools = [
    {
        _id: 1,
        text: "I have some other tools that might help you.",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 2,
        text: "Would you like to try?",
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
        // dialogue: ["get-support/tool-list.js","end-conversation.js"]
    }
]

export default get_support_other_tools