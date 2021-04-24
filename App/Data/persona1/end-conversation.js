import {Images} from '../../Themes'


const endconversation = [
    {
        _id: 1,
        text: "It was nice meeting you!",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 2,
        text: "Looking forward to talking to you soon.",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
        //options: ["MENU"],
        //dialogue: ["menu.js"]
        quickReplies: {
            type: 'radio', // or 'checkbox',
            keepIt: true,
            values: [
                {
                    title: 'Menu',
                    value: "menu.js",
                },
            ],
        },
    }
]

export default endconversation;