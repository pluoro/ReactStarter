/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  homeTitle: {
    id: `${scope}.homeTitle`,
    defaultMessage: 'Become a product tester for free now!',
  },
  homeSubtitle:{
    id: `${scope}.homeSubtitle`,
    defaultMessage: 'Try cool Amazon products. You only have to submit a rating. PLUS many more interesting orders!'
  },
  homeRegisterButton:{
    id: `${scope}.homeRegisterButton`,
    defaultMessage: 'Register now as a tester',
  },
  card1Title:{
    id: `${scope}.card1Title`,
    defaultMessage: 'Gifted Product',
  },
  card2Title:{
    id: `${scope}.card2Title`,
    defaultMessage: 'Anytime',
  },
  card3Title:{
    id: `${scope}.card3Title`,
    defaultMessage: 'Free',
  },
  card1Subtitle:{
    id: `${scope}.card1Subtitle`,
    defaultMessage: 'In most cases you can keep the product!',
  },
  card2Subtitle:{
    id: `${scope}.card2Subtitle`,
    defaultMessage: 'You decide when you evaluate. Total freedom!',
  },
  card3Subtitle:{
    id: `${scope}.card3Subtitle`,
    defaultMessage: 'You have NO EXPENSES. With us you can only earn!',
  },

  step1Title:{
    id: `${scope}.step1Title`,
    defaultMessage: 'Select product',
  },
  step2Title:{
    id: `${scope}.step2Title`,
    defaultMessage: 'Shipping',
  },
  step3Title:{
    id: `${scope}.step3Title`,
    defaultMessage: 'Feedback',
  },
  step1Subtitle:{
    id: `${scope}.step1Subtitle`,
    defaultMessage: 'Just select the product you want to test.',
  },
  step2Subtitle:{
    id: `${scope}.step2Subtitle`,
    defaultMessage: 'The product will be sent by Amazon directly to your home.',
  },
  step3Subtitle:{
    id: `${scope}.step3Subtitle`,
    defaultMessage: 'After you have submitted your feedback, you are welcome to keep the product.',
  },


  reason1Title:{
    id: `${scope}.reason1Title`,
    defaultMessage: 'Low payout limit',
  },
  reason2Title:{
    id: `${scope}.reason2Title`,
    defaultMessage: 'Exclusive club for product testers',
  },
  reason3Title:{
    id: `${scope}.reason3Title`,
    defaultMessage: 'Every day new orders',
  },
  reason4Title:{
    id: `${scope}.reason4Title`,
    defaultMessage: 'You only rate what you want to rate!',
  },
  whyUs:{
    id: `${scope}.whyUs`,
    defaultMessage: 'Why Testerjob?',
  },
  preFooterMessage:{
    id: `${scope}.preFooterMessage`,
    defaultMessage: 'Become a product tester for free now!',
  },
  preFooterButton:{
    id: `${scope}.preFooterButton`,
    defaultMessage: 'Register now',
  }
});
