export const commonCategory = {
  kind: "category",
  name: "Google Blocks",
  colour: "#F4B400",
  contents: [
    {
        'kind': 'category',
        'name': 'Logic',
        'categorystyle': 'logic_category',
        'contents': [
          {
            'kind': 'block',
            'type': 'controls_if',
          },
          {
            'kind': 'block',
            'type': 'logic_compare',
          },
          {
            'kind': 'block',
            'type': 'logic_operation',
          },
          {
            'kind': 'block',
            'type': 'logic_negate',
          },
          {
            'kind': 'block',
            'type': 'logic_boolean',
          },
          {
            'kind': 'block',
            'type': 'logic_null',
          },
          {
            'kind': 'block',
            'type': 'logic_ternary',
          },
        ],
      },
      {
        'kind': 'category',
        'name': 'Loops',
        'categorystyle': 'loop_category',
        'contents': [
          {
            'kind': 'block',
            'type': 'controls_repeat_ext',
            'inputs': {
              'TIMES': {
                'shadow': {
                  'type': 'math_number',
                  'fields': {
                    'NUM': 10,
                  },
                },
              },
            },
          },
          {
            'kind': 'block',
            'type': 'controls_whileUntil',
          },
          {
            'kind': 'block',
            'type': 'controls_for',
            'inputs': {
              'FROM': {
                'shadow': {
                  'type': 'math_number',
                  'fields': {
                    'NUM': 1,
                  },
                },
              },
              'TO': {
                'shadow': {
                  'type': 'math_number',
                  'fields': {
                    'NUM': 10,
                  },
                },
              },
              'BY': {
                'shadow': {
                  'type': 'math_number',
                  'fields': {
                    'NUM': 1,
                  },
                },
              },
            },
          },
          {
            'kind': 'block',
            'type': 'controls_forEach',
          },
          {
            'kind': 'block',
            'type': 'controls_flow_statements',
          },
        ],
      },
      {
        'kind': 'category',
        'name': 'Variables',
        'categorystyle': 'variable_category',
        'custom': 'VARIABLE',
      },
  ],
};
