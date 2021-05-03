import {Images} from '../../../../Themes'

const manage_symptoms_positive_images_2 = [
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
        image: "https://cdn.pixabay.com/photo/2017/03/27/14/49/beach-2179183_960_720.jpg",
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
                    value: "manage-symptoms/positive-images/3.js",
                },
            ],
        },
        //options: ["Next"],
        //dialogue: ["manage-symptoms/positive-images/3.json"]
    }
]

export default manage_symptoms_positive_images_2;