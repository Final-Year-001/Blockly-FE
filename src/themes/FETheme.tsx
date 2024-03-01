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
          'colourPrimary': '#9b0151',
          'colourSecondary': '#64C7FF',
          'colourTertiary': '#C5EAFF'
       }
    },
    // Define category styles
    'categoryStyles': {
       'list_category': {
          'colour': '#4a148c'
       },
       'logic_category': {
          'colour': '#019b1b'
       },
       'html_category': {
        'colour': '#9b0151'
     }
    },
    // Define component styles
    'componentStyles': {
       'workspaceBackgroundColour': '#dbe7e5ab',
       'toolboxBackgroundColour': '#DDDDDD',
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