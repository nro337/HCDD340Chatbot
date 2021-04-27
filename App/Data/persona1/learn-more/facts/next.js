import {Images} from '../../../../Themes'

const learn_more_facts_next = [
    {
        _id: 1,
        text: "Over 600,000 Veterans who used Veterans Affair services as recently as 2016 were diagnosed with PTSD",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 2,
        text: "5 out of every 100 active duty Service Members were estimated to have PTSD after deployment",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 3,
        text: "For those in infantry units that experienced combat, 13 out of every 100 Service Members had PTSD",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 4,
        text: "So, you are not alone!",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 5,
        text: "Don’t be afraid to seek out help and support to help you deal with any stress you’re experiencing.",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 6,
        text: "Do you want to know about PTSD more?",
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
                    value: "learn-more/choice.js",
                },
                {
                    title: 'No',
                    value: "get-support/other-tools.js",
                },

            ],
        },
        // options: ["Yes", "No"],
        // dialogue: ["learn-more/choice.json", "get-support/other-tools.json"]
    }
]

export default learn_more_facts_next