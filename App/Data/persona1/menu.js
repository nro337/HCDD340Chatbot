import {Images} from '../../Themes'

const menu = [
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
        text: "In this application, there are other dialogues:",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
        //options: ["Welcome", "Daily Check", "Activities"],
        //dialogue: ["welcome.js", "daily-check/init.js", "activities.js"]
        quickReplies: {
            type: 'radio', // or 'checkbox',
            keepIt: true,
            values: [
                {
                    title: 'Welcome',
                    value: "welcome.js",
                },
                {
                    title: 'Daily Check',
                    value: "daily-check/init.js",
                },
                {
                    title: 'Activities',
                    value: "activities.js",
                },
            ],
        },
    }
]

export default menu;