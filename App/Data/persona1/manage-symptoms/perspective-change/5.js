import {Images} from '../../../../Themes'

const manage_symptoms_perspective_change_5 =  [
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
        text: "This tossing and turning at night will pass.",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 3,
        text: "Do you feel better?",
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
                    value: "manage-symptoms/feel-good.js",
                },
                {
                    title: 'No',
                    value: "manage-symptoms/feel-bad.json",
                },
            ],
        },
        // options: ["Yes", "No"],
        // dialogue: ["manage-symptoms/feel-good.json", "manage-symptoms/feel-bad.json"]
    }
]

export default manage_symptoms_perspective_change_5