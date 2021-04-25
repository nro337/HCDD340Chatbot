import {Images} from '../../../Themes'

const take_assessment_score = [

    {
        _id: 1,
        text: "Thank you for answering the questions!",
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
                    title: 'Show the Result',
                    value: "take-assessment/result.js",
                },
            ],
        },
        // options: ["Show the result"],
        // dialogue: ["take-assessment/result.js"]
    }
]

export default take_assessment_score