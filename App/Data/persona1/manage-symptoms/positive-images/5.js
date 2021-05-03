import {Images} from '../../../../Themes'

const manage_symptoms_positive_images_5 = [
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
        image: "https://cdn.pixabay.com/photo/2016/11/08/04/49/jungle-1807476_960_720.jpg",
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
                    value: "manage-symptoms/feel-bad.js",
                },
            ],
        },
        //options: ["Yes", "No"],
        //dialogue: ["manage-symptoms/feel-good.json", "manage-symptoms/feel-bad.json"]
    }
]

export default manage_symptoms_positive_images_5