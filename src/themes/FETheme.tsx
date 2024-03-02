import Blockly from 'blockly';
// import DarkTheme from '@blockly/theme-dark';

export const FETheme = Blockly.Theme.defineTheme('myCustomTheme', {
    // Define the theme name
    'name': 'myCustomTheme',
    // Define block styles
    'blockStyles': {
       'html_blocks': {
          'colourPrimary': '#4a148c',
          'colourSecondary': '#AD7BE9',
          'colourTertiary': '#CDB6E9'
       },
       'logic_blocks': {
          'colourPrimary': '#3498db',
          'colourSecondary': '#64C7FF',
          'colourTertiary': '#C5EAFF'
       },
       'loops_blocks': {
         'colourPrimary': '#2ecc71',
         'colourSecondary': '#64C7FF',
         'colourTertiary': '#C5EAFF'
      },
      'variable_blocks': {
         'colourPrimary': '#e74c3c',
         'colourSecondary': '#64C7FF',
         'colourTertiary': '#C5EAFF'
      },
      'text_blocks': {
         'colourPrimary': '#008080',
         'colourSecondary': '#64C7FF',
         'colourTertiary': '#C5EAFF'
      },
      'math_blocks': {
         'colourPrimary': '#263585',
         'colourSecondary': '#64C7FF',
         'colourTertiary': '#C5EAFF'
      },
      'function_blocks': {
         'colourPrimary': '#783fa1',
         'colourSecondary': '#75604a',
         'colourTertiary': '#C5EAFF'
      },
      'color_blocks': {
         'colourPrimary': '#75604a',
         'colourSecondary': '#64C7FF',
         'colourTertiary': '#C5EAFF'
      },
      'list_blocks': {
         'colourPrimary': '#800080',
         'colourSecondary': '#64C7FF',
         'colourTertiary': '#C5EAFF'
      },
    },
   //  // Define category styles
   //  'categoryStyles': {
   //     'list_category': {
   //        'colour': '#4a148c'
   //     },
   //     'logic_category': {
   //        'colour': '#019b1b'
   //     },
   //     'html_category': {
   //      'colour': '#9b0151'
   //   }
   //  },
    // Define component styles
    'componentStyles': {
       'workspaceBackgroundColour': '#dbe7e5ab',
       'toolboxBackgroundColour': '#36454F',
       'toolboxForegroundColour': '#fff',
       'flyoutBackgroundColour': '#DDDDDD',
       'flyoutForegroundColour': '#fff',
       'flyoutOpacity': 1,
       'scrollbarColour': '#fff',
       'scrollbarOpacity': 0.5,
       'insertionMarkerColour': '#fff',
       'insertionMarkerOpacity': 0.3,
       'markerColour': '#fff',
       'cursorColour': '#fff'
    },
    // Define font styles
    'fontStyle': {
       'family': 'Arial, sans-serif',
       'weight': 'normal',
       'size': 14
    },
    // Optionally, set start hats
    'startHats': true
  });