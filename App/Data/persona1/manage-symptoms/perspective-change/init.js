import {Images} from '../../../../Themes'

const manage_symptoms_perspective_change_init = [
    {
        _id: 1,
        text: "Changing the way you think can change the way you feel",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 2,
        text: "I help you to concentrate on helpful thought. Let’s change it together",
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
                    title: 'Start',
                    value: "manage-symptoms/perspective-change/1.js",
                },
            ],
        },
        // options: ["Start"],
        // dialogue: ["manage-symptoms/perspective-change/1.json"]
    }
]

export default manage_symptoms_perspective_change_init