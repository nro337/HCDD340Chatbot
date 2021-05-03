import {Images} from '../../../../Themes'

const manage_symptoms_positive_images_4 = [
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
        image: "https://cdn.pixabay.com/photo/2014/07/01/12/36/tea-381235_960_720.jpg",
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
                    value: "manage-symptoms/positive-images/5.js",
                },
            ],
        },
        //options: ["Next"],
        //dialogue: ["manage-symptoms/positive-images/5.json"]
    }
]

export default manage_symptoms_positive_images_4