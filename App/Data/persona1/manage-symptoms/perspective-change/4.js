import {Images} from '../../../../Themes'

const manage_symptoms_perspective_change_4 = [
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
        text: "One night of poor sleep is not the end of the world.",
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
                    value: "manage-symptoms/perspective-change/5.js",
                },
            ],
        },
        // options: ["Next"],
        // dialogue: ["manage-symptoms/perspective-change/5.json"]
    }
]

export default manage_symptoms_perspective_change_4