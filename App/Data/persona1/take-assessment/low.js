import {Images} from '../../../Themes'

const take_assessment_low = [
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
        text: "Your score is 21.",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 3,
        text: "Happy to hear that you are feeling good!",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 4,
        text: "People who experience a trauma have this kind of reaction, at least for the first few weeks or months after the trauma.",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 5,
        text: "In this app, you can learn about PTSD. Do you want to learn more about PTSD?",
        quickReplies: {
            type: 'radio', // or 'checkbox',
            keepIt: true,
            values: [
                {
                    title: 'Yes',
                    value: "learn-more/init.js",
                },
                {
                    title: 'No',
                    value: "get-support/other-tools.js",
                },
            ],
        },
        // options: ["Yes","No"],
        // dialogue: ["learn-more/init.js","get-support/other-tools.js"]
    }
]

export default take_assessment_low