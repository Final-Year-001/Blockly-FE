import "../blocks/javascript/beginner";
import "../blocks/javascript/form_blocks";
import "../blocks/javascript/todo_blocks";

export const javascriptCategory = {
  kind: "category",
  name: "Javascript",
  colour: "#f39c12",
  contents: [
    {
      kind: "category",
      name: "JS Beginner",
      colour: "#FF007F",
      contents: [
        {
          kind:"block",
          type: "javascript"
        },
        {
          kind:"block",
          type: "create_variable"
        },
        {
          kind:"block",
          type: "generate_id" 
        },
        {
          kind: "block",
          type: "chnage_innerHTML"
        },
        {
          kind: "block",
          type: "console_log"
        },
        {
          kind: "block",
          type: "alert_block"
        },
        {
          kind: "block",
          type: "event_listener",
        }, 
        {
          kind: "block",
          type: "show_hidden_element", 
        },
        {
          kind: "block",
          type: "print_block",   
        },
        {
          kind: "block",
          type: "single_line_comment",  
        },
        {
          kind: "block",
          type: "multi_line_comment",  
        },
      ]
    },
    {
      kind: "category",
      name: "JS Form",
      colour: "#800080",
      contents: [
        {
          kind: "block",
          type: "handle_form_submission",
        }, 
        {
          kind:"block",
          type: "set_form_data_to"
        }, 
        {
          kind: "block",
          type: "fetch_block"
        },
        {
          kind: "block",
          type: "clear_form_fields",
        }, 
        {
          kind:"block",
          type: "auto_fill_form_fields" 
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
      kind: "category",
      name: "JS Todo",
      colour: "#FFD700",
      contents: [
        {
          kind:"block",
          type: "add_todo_task"
        },
      ]
    },
  ],
};
