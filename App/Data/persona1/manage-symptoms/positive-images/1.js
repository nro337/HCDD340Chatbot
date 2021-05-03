import {Images} from '../../../../Themes'

const manage_symptoms_positive_images_1 = [
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
        image: "https://cdn.pixabay.com/photo/2021/03/20/10/26/field-6109500_960_720.jpg",
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
                    value: "manage-symptoms/positive-images/2.js",
                },
            ],
        },
        //options: ["Next"],
        //dialogue: ["manage-symptoms/positive-images/2.json"]
    }
]

export default manage_symptoms_positive_images_1;