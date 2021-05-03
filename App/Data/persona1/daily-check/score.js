import {Images} from '../../../Themes'

const daily_check_score = [
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
        text: "Thank you for answering the questions!",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 3,
        text: "You are feeling: ",
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
                    title: 'Good',
                    value: "daily-check/good.js",
                },
                {
                    title: 'Bad',
                    value: "daily-check/bad.js",
                },
            ],
        },
        // options: ["Good", "Bad"],
        // dialogue: ["daily-check/good.js", "daily-check/bad.js"]
    }
]

export default daily_check_score;