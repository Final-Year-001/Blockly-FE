import Blockly from 'blockly';
import { htmlCategory } from '../categories/html';
import { HTMLBlockTheme } from './HTMLBlockStyle';
import { GoogleBlockTheme } from './GoogleBlockSyles';
import { CssBlockTheme } from './CssBlockStyles';
import { JsBlockTheme } from './JsBlocklyStyles';
// import DarkTheme from '@blockly/theme-dark';



export const FETheme = Blockly.Theme.defineTheme('myCustomTheme', {
   
    // Define the theme name
    'name': 'myCustomTheme',
    // Define block styles
    'blockStyles': {
      ...HTMLBlockTheme, 
      ...GoogleBlockTheme,
      ...CssBlockTheme,
      ...JsBlockTheme
   },

   // Define category styles 
    'categoryStyles': {
       'search': {
          'colour': '#4a148c'
       },
    },

    // Define component styles
    'componentStyles': {
       'workspaceBackgroundColour': '#daebfbab',
      //  'toolboxBackgroundColour': '#3d3d3dcc',
       'toolboxForegroundColour': '#e2e2e2',
       'flyoutBackgroundColour': '#a0a0a0e8', 
       'flyoutForegroundColour': '#fff',
       'flyoutOpacity': 1,
       'scrollbarColour': '#b0c8df',
       'scrollbarOpacity': 0.7,
       'insertionMarkerColour': '#fff',
       'insertionMarkerOpacity': 0.3,
       'markerColour': '#fff',
       'cursorColour': '#fff',
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