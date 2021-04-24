import {Images} from '../../Themes'

const welcome = [
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
        text: "Nice to meet you!",
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 3,
        text: "I am your personal therapy chatbot",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 4,
        text: "I will help you understand PTSD symptoms, develop solutions for your concern, and assist you to make positive and lasting changes in your life",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 5,
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
        text: "Are you ready to start to recovery journey with me?",
        quickReplies: {
            type: 'radio', // or 'checkbox',
            keepIt: true,
            values: [
                {
                    title: 'Yes',
                    value: "start-conversation.js",
                },
                {
                    title: 'No',
                    value: "end-conversation.js",
                },
            ],
        },
        //dialogue: ["start-conversation.js","end-conversation.js"]
    }
]

export default welcome;