import {Images} from '../../../Themes'

const take_assessment_result =  [
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
        text: "Your score is: ",
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
                    title: 'High',
                    value: "take-assessment/high.js",
                },
                {
                    title: 'Low',
                    value: "take-assessment/low.js",
                },
            ],
        },
        // options: ["High", "Low"],
        // dialogue: ["take-assessment/high.js", "take-assessment/low.js"]
    }
]

export default take_assessment_result