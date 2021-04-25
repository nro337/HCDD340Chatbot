import {Images} from '../../../Themes'

const take_assessment_survey = [
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
        text: "Instructions: Please select ONE option per question only. Once you have selected the answer for a particular question, click the Send button to submit that answer.",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 3,
        text: "1. Do you have repeated, disturbing memories, thoughts, or images of a stressful experience from the past?",
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
        // options: ["Not at all", "A little bit", "Moderately", "Quite a bit", "Extremely"]
    },
    {
        _id: 4,
        text: "2. Do you have repeated, disturbing dreams of a stressful experience from the past?",
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
        // options: ["Not at all", "A little bit", "Moderately", "Quite a bit", "Extremely"]
    },
    {
        _id: 5,
        text: "3. Are you suddenly acting or feeling as if a stressful experience were happening again?",
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
        _id: 6,
        text: "4. Do you feel very upset when something reminded you of a stressful experience from the past?",
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
        text: "5. Do you avoid thinking about or talking about a stressful experience from the past or avoid having feelings related to it?",
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
        text: "6. Do you avoid activities or situations because they remind you of a stressful experience from the past?",
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
        _id: 9,
        text: "7. Do you have trouble remembering important parts of a stressful experience from the past?",
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
        _id: 10,
        text: "8. Do you lose interest in things that you used to enjoy?",
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
        _id: 11,
        text: "9. Do you feel distant or cut off from other people?",
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
        _id: 12,
        text: "10. Do you feel emotionally numb or being unable to have loving feelings for those close to you?",
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
        _id: 13,
        text: "11. Do you feel as if your future will somehow be cut short?",
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
        _id: 14,
        text: "12. Do you have trouble falling or staying asleep?",
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
        _id: 15,
        text: "13. Do you feel irritable or having angry outbursts?",
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
        _id: 16,
        text: "14. Do you have difficulty concentrating?",
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
        _id: 17,
        text: "15. Are you 'super alert' or watchful on guard?",
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
        _id: 18,
        text: "16. Do you feel jumpy or easily startled?",
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
        //dialogue: ["take-assessment/score.js", "take-assessment/score.js", "take-assessment/score.js", "take-assessment/score.js", "take-assessment/score.js"]
    },
    {
        _id: 17,
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
                    value: "take-assessment/score.js",
                },
            ],
        },
    }
]

export default take_assessment_survey