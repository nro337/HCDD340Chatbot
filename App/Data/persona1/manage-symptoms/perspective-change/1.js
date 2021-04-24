import {Images} from '../../../../Themes'

const manage_symptoms_perspective_change_1 = [
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
        text: "It’s not always like this. There are times I have felt pretty amazing, too.",
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
                    value: "manage-symptoms/perspective-change/2.js",
                },
            ],
        },
        // options: ["Next"],
        // dialogue: ["manage-symptoms/perspective-change/2.js"]
    }
]

export default manage_symptoms_perspective_change_1