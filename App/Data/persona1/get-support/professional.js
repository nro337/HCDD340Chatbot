import {Images} from '../../../Themes'

const get_support_professional = [
    {
        _id: 1,
        text: "To learn more about treatment, visit the National Center for PTSD website.",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 2,
        text: "In the website, you can find the location of treatment.",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 3,
        text: "The National Center for PTSD Website: https://www.ptsd.va.gov",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 4,
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
        // dialogue: ["get-support/tool-list.js","end-conversation.js"]
    }
]

export default get_support_professional