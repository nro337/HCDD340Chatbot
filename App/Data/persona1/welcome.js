const welcome = [
    {
        _id: 1,
        text: "PERSONA",
        "persona-choice": "persona1",
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 2,
        text: "CLEAR"
    },
    {
        _id: 3,
        text: "Nice to meet you!",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 4,
        text: "I am your personal therapy chatbot",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 5,
        text: "I will help you understand PTSD symptoms, develop solutions for your concern, and assist you to make positive and lasting changes in your life",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 6,
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
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