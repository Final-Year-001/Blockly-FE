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
        {
          kind: "block",
          type: "custom_function",
          icons: {
            comment: {
              text: "Create a custom function",
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
          icons: {
            comment: {
              text: "Handle form submission",
              pinned: true,
              height: 80,
              width: 160
            }
          }, 
        }, 
        {
          kind:"block",
          type: "set_form_data_to",
          icons: {
            comment: {
              text: "Set the form data to a variable",
              pinned: true,
              height: 80,
              width: 160
            }
          }, 
        }, 
        {
          kind: "block",
          type: "fetch_block",
          icons: {
            comment: {
              text: "Get the data to the backend",
              pinned: true,
              height: 80,
              width: 160
            }
          }, 
        },
        {
          kind: "block",
          type: "clear_form_fields",
          icons: {
            comment: {
              text: "Clear all input fields in a form",
              pinned: true,
              height: 80,
              width: 160
            }
          }, 
        }, 
        {
          kind:"block",
          type: "auto_fill_form_fields",
          icons: {
            comment: {
              text: "Auto fill name and age",
              pinned: true,
              height: 80,
              width: 160
            }
          }, 
        },
        {
          kind: "block",
         type: "validate_and_handle_error", 
         icons: {
          comment: {
            text: "Validate the name and age",
            pinned: true,
            height: 80,
            width: 160
          }
        }, 
        },  
        {
         kind: "block",
         type: "custom_condition_input_length",
         icons: {
          comment: {
            text: "Name condition",
            pinned: true,
            height: 80,
            width: 160
          }
        }, 
       }, 
       {
        kind: "block",
        type: "custom_condition_age",
        icons: {
          comment: {
            text: "Age condition",
            pinned: true,
            height: 80,
            width: 160
          }
        }, 
      }, 
       {
         kind: "block", 
         type: "change_form_background_color",
         icons: {
          comment: {
            text: "Change the background color of a form",
            pinned: true,
            height: 80,
            width: 160
          }
        }, 
       }, 
       {
         kind: "block",
         type: "show_data_in_alert_custom",
         icons: {
          comment: {
            text: "Show collected data in an alert",
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
      name: "JS Todo",
      colour: "#f9c975",
      contents: [
        {
          kind:"block",
          type: "create_task",
          icons: {
            comment: {
              text: "Create a new task with the specified name",
              pinned: true,
              height: 80,
              width: 160
            }
          }, 
        },
        {
          kind:"block",
          type: "read_tasks",
          icons: {
            comment: {
              text: "Read all tasks",
              pinned: true,
              height: 80,
              width: 160
            }
          }, 
        },
        {
          kind:"block",
          type: "update_task",
          icons: {
            comment: {
              text: "Update the task's name with a new one",
              pinned: true,
              height: 80,
              width: 160
            }
          }, 
        },
        {
          kind:"block",
          type: "delete_task",
          icons: {
            comment: {
              text: "Delete a task with the specified ID",
              pinned: true,
              height: 80,
              width: 160
            }
          }, 
        },
        {
          kind:"block",
          type: "search_task",
          icons: {
            comment: {
              text: "Search for tasks with the specified term",
              pinned: true,
              height: 80,
              width: 160
            }
          }, 
        },
      ]
    },
  ],
};
