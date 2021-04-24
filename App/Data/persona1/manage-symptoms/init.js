import {Images} from '../../../Themes'

const manage_symptoms_init = [
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
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
        text: "I can relieve your symptom in two different ways. Which method do you want to try?",
        quickReplies: {
            type: 'radio', // or 'checkbox',
            keepIt: true,
            values: [
                {
                    title: 'Change Your Perspective',
                    value: "manage-symptoms/perspective-change/init.js",
                },
                {
                    title: 'Positive Images',
                    value: "manage-symptoms/positive-images/init.js",
                },
            ],
        },
        // options: ["Change your perspective", "Positive images"],
        // dialogue: ["manage-symptoms/perspective-change/init.js", "manage-symptoms/positive-images/init.js"]
    }
]

export default manage_symptoms_init