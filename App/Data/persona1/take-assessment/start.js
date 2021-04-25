import {Images} from '../../../Themes'

const take_assessment_start = [
    {
        _id: 1,
        text: "Great! Let's get started.",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 2,
        text: "I will ask you a couple of questions. Your answer will help me to better understand you.",
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
                    title: 'Take Assessment',
                    value: "take-assessment/survey.js",
                },
            ],
        },
        // options: ["Take assessment"],
        // dialogue: ["take-assessment/survey.js"]
    }
]

export default take_assessment_start