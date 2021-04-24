import {Images} from '../../../../Themes'

const manage_symptoms_perspective_change_2 = [
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
        text: "I know that I deserve love.",
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
                    title: 'Next',
                    value: "manage-symptoms/perspective-change/3.js",
                },
            ],
        },
        // options: ["Next"],
        // dialogue: ["manage-symptoms/perspective-change/3.json"]
    }
]

export default manage_symptoms_perspective_change_2