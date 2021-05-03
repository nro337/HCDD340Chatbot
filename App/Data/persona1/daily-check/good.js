import {Images} from '../../../Themes'

const daily_check_good = [
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
        text: "Good to hear that!",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 3,
        text: "In this application, you can learn about PTSD. Would you like to learn more about PTSD?",
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
        //options: ["Yes","No"],
        //dialogue: ["learn-more/choice.js","get-support/other-tools.js"]
    }
]

export default daily_check_good;