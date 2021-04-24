import {Images} from '../../Themes'

const startconversation = [
    {
        _id: 1,
        text: "That's great!",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 2,
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
        text: "In order to get to know you better, let's take an assessment first, shall we?",
        //options: ["Sure", "Later"],
        //dialogue: ["take-assessment/start.js","take-assessment/later.js"],
        quickReplies: {
            type: 'radio', // or 'checkbox',
            keepIt: true,
            values: [
                {
                    title: 'Sure',
                    value: "take-assessment/start.js",
                },
                {
                    title: 'Later',
                    value: "take-assessment/later.js",
                },
            ],
        },
    }
]

export default startconversation;