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
      colour: "#f9c975",
      contents: [
        {
          kind:"block",
          type: "javascript",
          icons: {
            comment: {
              text: "JavaScript code should be wrapped in this tag",
              pinned: true,
              height: 80,
              width: 160
            }
          },
        },
        {
          kind:"block",
          type: "create_variable",
          icons: {
            comment: {
              text: "Create a custom variable",
              pinned: true,
              height: 80,
              width: 160
            }
          },
        },
        {
          kind:"block",
          type: "generate_id",
          icons: {
            comment: {
              text: "Create an element ID",
              pinned: true,
              height: 80,
              width: 160
            }
          },
        },
        {
          kind: "block",
          type: "chnage_innerHTML",
          icons: {
            comment: {
              text: "Change the content of an HTML element by ID",
              pinned: true,
              height: 80,
              width: 160
            }
          },
        },
        {
          kind: "block",
          type: "console_log",
          icons: {
            comment: {
              text: "Log a message to the console",
              pinned: true,
              height: 80,
              width: 160
            }
          },
        },
        {
          kind: "block",
          type: "alert_block",
          icons: {
            comment: {
              text: "Generate a custom alert",
              pinned: true,
              height: 80,
              width: 160
            }
          },
        },
        {
          kind: "block",
          type: "event_listener",
          icons: {
            comment: {
              text: "Attach an event listener to an HTML element",
              pinned: true,
              height: 80,
              width: 160
            }
          },
        }, 
        {
          kind: "block",
          type: "show_hidden_element",
          icons: {
            comment: {
              text: "Show or hide an HTML element",
              pinned: true,
              height: 80,
              width: 160
            }
          },
        },
        {
          kind: "block",
          type: "print_block",
          icons: {
            comment: {
              text: "Print the page",
              pinned: true,
              height: 80,
              width: 160
            }
          },  
        },
        {
          kind: "block",
          type: "single_line_comment",
          icons: {
            comment: {
              text: "Single-line comment",
              pinned: true,
              height: 80,
              width: 160
            }
          },  
        },
        {
          kind: "block",
          type: "multi_line_comment",
          icons: {
            comment: {
              text: "Multi-line comment",
              pinned: true,
              height: 80,
              width: 160
            }
          }, 
        },
      ]
    },
    {
      kind: "category",
      name: "JS Form",
      colour: "#f9c975",
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
      colour: "#f9c975",
      contents: [
        {
          kind:"block",
          type: "add_todo_task"
        },
      ]
    },
  ],
};
