import {Images} from '../../../Themes'

const learn_more_init = [
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
        text: "Let's learn about PTSD together",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 3,
        text: "Post traumatic Stress Disorder (PTSD) is caused by witnessing, experiencing, or learning about someone close to you who experienced traumatic events.",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 4,
        text: "It might be actual or threatened death, serious injury, or sexual violence.",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 5,
        text: "Which of the following topics do you want to know more about?",
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
                    title: '4 types of symptoms',
                    value: "learn-more/symptoms/init.js",
                },
                {
                    title: 'PTSD facts',
                    value: "learn-more/facts/init.js",
                },
            ],
        },
        // options: ["4 types of symptoms", "PTSD facts"],
        // dialogue: ["learn-more/symptoms/init.js", "learn-more/facts/init.js"]
    }
]

export default learn_more_init