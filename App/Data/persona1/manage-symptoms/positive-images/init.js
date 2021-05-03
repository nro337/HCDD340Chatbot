import {Images} from '../../../../Themes'

const manage_symptoms_positive_images_init = [
    {
        _id: 1,
        text: "Looking something pleasant helps you relax and positive",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 2,
        text: "Let’s change it together",
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
                    value: "manage-symptoms/positive-images/1.js",
                },
            ],
        },
        //options: ["Start"],
        //dialogue: ["manage-symptoms/positive-images/1.json"]
    }
]

export default manage_symptoms_positive_images_init;