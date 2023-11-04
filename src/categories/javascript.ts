import "../blocks/javascript/blocks";

export const javascriptCategory = {
  kind: "category",
  name: "Javascript",
  colour: "#5CA699",
  contents: [
    {
      'kind': 'category',
      'name': 'Main Functions',
      'contents': [
        {
          kind:"block",
          type: "javascript"
        },
        {
          kind: "block",
          type: "generate_form_id",
        }, 
        {
          kind: "block",
          type: "generate_id",
        }, 
        {
          kind: "block",
         type: "validate_and_handle_error", 
        },  
        {
         kind: "block",
         type: "custom_condition_input_length",
       }, 
       {
        kind: "block",
        type: "custom_condition_age",
      }, 
       {
         kind: "block", 
         type: "change_form_background_color",
       }, 
       {
         kind: "block",
         type: "show_data_in_alert_custom",
       },
      ]
    },
    {
      'kind': 'category',
      'name': 'Form Functions',
      'contents': [
        {
          kind:"block",
          type: "handle_form_submission"
        },
        {
          kind: "block",
          type: "fetch_block"
        },
        {
          kind: "block",
          type: "set_form_data_to",
        }, 
        {
          kind: "block",
          type: "create_variable"
        },
        {
          kind: "block",
          type: "clear_form_fields",
        }, 
        {
          kind: "block",
          type: "auto_fill_form_fields",
        }, 
        {
          kind: "block",
          type: "alert_block"
        },
      ]
    }
  ],
};
