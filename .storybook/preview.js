/** @type { import('@storybook/react').Preview } */
import React from 'react';

import Theme from '../src/components/Theme';
import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from '@storybook/addon-viewport';

const preview = {
  parameters: {
    layout: 'centered', // centered, fullscreen, padded(default)
    options: {
      storySort: {
        order: [
          'Button',
          'Typography',
          'Inputs',
          'Form',
          'Table',
          'List',
          'Navigation',
          'Feedback',
          'ContentDisplay',
          'Layout',
          'Others',
          '*',
        ],
      },
    },
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...INITIAL_VIEWPORTS,
      },
    },
  },
  decorators: [Story => Theme({ children: React.createElement(Story, null) })],
};

export default preview;
