import {Images} from '../../../Themes'

const get_support_immediate = [
    {
        _id: 1,
        text: "I would like to provide contacts that you could get some immediate support.",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 2,
        text: "National Suicide Prevention Lifeline: 1-800-273-8255",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 3,
        text: "National Domestic Violence Hotline: 1-800-799-7233",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 4,
        text: "National Sexual Assault Hotline: 1-800-656-4673",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 5,
        text: "These numbers and other resources are also linked on the 'Additional Resources' tab of the navigation bar for easy access.",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 6,
        text: "Do you want to find professional care?",
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
                    value: "get-support/professional.js",
                },
                {
                    title: 'No',
                    value: "get-support/other-tools.js",
                },
            ],
        },
        // options: ["Yes", "No"],
        // dialogue: ["get-support/professional.js","get-support/other-tools.js"]
    }
]

export default get_support_immediate