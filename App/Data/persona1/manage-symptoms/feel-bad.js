import {Images} from '../../../Themes'

const manage_symptoms_feel_bad = [
    {
        _id: 1,
        text: "I can relieve your symptom in different ways,",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 2,
        text: "Do you want to try others?",
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
                    value: "manage-symptoms/init.js",
                },
                {
                    title: 'No',
                    value: "get-support/other-tools.js",
                },
            ],
        },
        //options: ["Yes", "No"],
        //dialogue: ["manage-symptoms/init.js", "get-support/other-tools.js"]
    }
]

export default manage_symptoms_feel_bad;