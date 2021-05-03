import {Images} from '../../../Themes'

const daily_check_survey = [
    {
        _id: 1,
        text: "Great! Let's start it",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 2,
        text: "1. Can you sleep well?",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
        quickReplies: {
            type: 'checkbox', // or 'checkbox',
            keepIt: true,
            values: [
                {
                    title: 'Not At All',
                    value: "not_at_all",
                },
                {
                    title: 'A Little Bit',
                    value: "a_little_bit",
                },
                {
                    title: 'Moderately',
                    value: "moderately",
                },
                {
                    title: 'Quite A Bit',
                    value: "quite_a_bit",
                },
                {
                    title: 'Extremely',
                    value: "extremely",
                },
            ],
        },
        //options: ["Not at all", "A little bit", "Moderately", "Quite a bit", "Extremely"]
    },
    {
        _id: 3,
        text: "2. Do you feel anger often?",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
        quickReplies: {
            type: 'checkbox', // or 'checkbox',
            keepIt: true,
            values: [
                {
                    title: 'Not At All',
                    value: "not_at_all",
                },
                {
                    title: 'A Little Bit',
                    value: "a_little_bit",
                },
                {
                    title: 'Moderately',
                    value: "moderately",
                },
                {
                    title: 'Quite A Bit',
                    value: "quite_a_bit",
                },
                {
                    title: 'Extremely',
                    value: "extremely",
                },
            ],
        },
        //options: ["Not at all", "A little bit", "Moderately", "Quite a bit", "Extremely"]
    },
    {
        _id: 4,
        text: "3. Do you feel worried or anxious often?",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
        quickReplies: {
            type: 'checkbox', // or 'checkbox',
            keepIt: true,
            values: [
                {
                    title: 'Not At All',
                    value: "not_at_all",
                },
                {
                    title: 'A Little Bit',
                    value: "a_little_bit",
                },
                {
                    title: 'Moderately',
                    value: "moderately",
                },
                {
                    title: 'Quite A Bit',
                    value: "quite_a_bit",
                },
                {
                    title: 'Extremely',
                    value: "extremely",
                },
            ],
        },
        //options: ["Not at all", "A little bit", "Moderately", "Quite a bit", "Extremely"]
    },
    {
        _id: 5,
        text: "4. Do you feel sad or hopeless often?",
        quickReplies: {
            type: 'checkbox', // or 'checkbox',
            keepIt: true,
            values: [
                {
                    title: 'Not At All',
                    value: "not_at_all",
                },
                {
                    title: 'A Little Bit',
                    value: "a_little_bit",
                },
                {
                    title: 'Moderately',
                    value: "moderately",
                },
                {
                    title: 'Quite A Bit',
                    value: "quite_a_bit",
                },
                {
                    title: 'Extremely',
                    value: "extremely",
                },
            ],
        },
        //options: ["Not at all", "A little bit", "Moderately", "Quite a bit", "Extremely"]
    },
    {
        _id: 6,
        text: "5. Do you think you are disconnected from reality?",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
        quickReplies: {
            type: 'checkbox', // or 'checkbox',
            keepIt: true,
            values: [
                {
                    title: 'Not At All',
                    value: "not_at_all",
                },
                {
                    title: 'A Little Bit',
                    value: "a_little_bit",
                },
                {
                    title: 'Moderately',
                    value: "moderately",
                },
                {
                    title: 'Quite A Bit',
                    value: "quite_a_bit",
                },
                {
                    title: 'Extremely',
                    value: "extremely",
                },
            ],
        },
        //options: ["Not at all", "A little bit", "Moderately", "Quite a bit", "Extremely"]
    },
    {
        _id: 7,
        text: "6. Do you think you are disconnected from people?",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
        quickReplies: {
            type: 'checkbox', // or 'checkbox',
            keepIt: true,
            values: [
                {
                    title: 'Not At All',
                    value: "not_at_all",
                },
                {
                    title: 'A Little Bit',
                    value: "a_little_bit",
                },
                {
                    title: 'Moderately',
                    value: "moderately",
                },
                {
                    title: 'Quite A Bit',
                    value: "quite_a_bit",
                },
                {
                    title: 'Extremely',
                    value: "extremely",
                },
            ],
        },
        //options: ["Not at all", "A little bit", "Moderately", "Quite a bit", "Extremely"]
    },
    {
        _id: 8,
        text: "7. Do you remind trauma often?",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
        quickReplies: {
            type: 'checkbox', // or 'checkbox',
            keepIt: true,
            values: [
                {
                    title: 'Not At All',
                    value: "not_at_all",
                },
                {
                    title: 'A Little Bit',
                    value: "a_little_bit",
                },
                {
                    title: 'Moderately',
                    value: "moderately",
                },
                {
                    title: 'Quite A Bit',
                    value: "quite_a_bit",
                },
                {
                    title: 'Extremely',
                    value: "extremely",
                },
            ],
        },
        //options: ["Not at all", "A little bit", "Moderately", "Quite a bit", "Extremely"],
        //dialogue: ["daily-check/score.js", "daily-check/score.js", "daily-check/score.js", "daily-check/score.js", "daily-check/score.js"]
    },
    {
        _id: 9,
        text: "Have you sent all your answers? If so, click next to see your score!",
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
                    value: "daily-check/score.js",
                },
            ],
        },
    }
]

export default daily_check_survey