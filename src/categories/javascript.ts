import "../blocks/javascript/beginner";
import "../blocks/javascript/form_blocks";
import "../blocks/javascript/todo_blocks";

export const javascriptCategory = {
  kind: "category",
  name: "JavaScript",
  colour: "#f39c12",
  style: "JS_Beg" ,
  contents: [
    {
      kind:"block",
      type: "javascript",
      style: "JS_Beg" , 
      // icons: { 
      //   comment: {
      //     text: "JavaScript code should be wrapped in this tag",
      //     pinned: false,
      //     height: 80,
      //     width: 160
      //   }
      // },
    },
    {
      kind: "category",
      name: "Get Started",
      colour: "#E1AD01",
      style: "JS_Step1" , 
      contents: [
        {
          kind:"block",
          type: "create_variable",
          // icons: {
          //   comment: {
          //     text: "Create a custom variable",
          //     pinned: false,
          //     height: 80,
          //     width: 160
          //   }
          // },
        },
        {
          kind:"block",
          type: "generate_id",
          // icons: {
          //   comment: {
          //     text: "Give a unique element ID",
          //     pinned: false,
          //     height: 80,
          //     width: 160
          //   }
          // },
        },
        {
          kind: "block",
          type: "console_log",
          // icons: {
          //   comment: {
          //     text: "Log a message to the console",
          //     pinned: false,
          //     height: 80,
          //     width: 160
          //   }
          // },
        },
        {
          kind: "block",
          type: "print_block",
          // icons: {
          //   comment: {
          //     text: "Print the page",
          //     pinned: false,
          //     height: 80,
          //     width: 160
          //   }
          // },  
        },
        {
          kind: "block",
          type: "single_line_comment",
          // icons: {
          //   comment: {
          //     text: "Single-line comment",
          //     pinned: false,
          //     height: 80,
          //     width: 160
          //   }
          // },  
        },
        {
          kind: "block",
          type: "multi_line_comment",
          // icons: {
          //   comment: {
          //     text: "Multi-line comment",
          //     pinned: false,
          //     height: 80,
          //     width: 160
          //   }
          // }, 
        },
      ]
    },
    {
      kind: "category",
      name: "Action Blocks",
      colour: "#E1AD01",
      style: "JS_Step2" , 
      contents: [
        {
          kind: "block",
          type: "chnage_innerHTML",
          // icons: {
          //   comment: {
          //     text: "Change the content of an HTML element by ID",
          //     pinned: false,
          //     height: 80,
          //     width: 160
          //   }
          // },
        },
        {
          kind: "block",
          type: "alert_block",
          // icons: {
          //   comment: {
          //     text: "Generate a custom alert",
          //     pinned: false,
          //     height: 80,
          //     width: 160
          //   }
          // },
        },
        {
          kind: "block",
          type: "event_listener",
          // icons: {
          //   comment: {
          //     text: "Attach an event listener to an HTML element",
          //     pinned: false,
          //     height: 80,
          //     width: 160
          //   }
          // },
        }, 
        {
          kind: "block",
          type: "show_hidden_element",
          // icons: {
          //   comment: {
          //     text: "Show or hide an HTML element",
          //     pinned: false,
          //     height: 80,
          //     width: 160
          //   }
          // },
        }, 
        {
          kind: "block",
          type: "custom_function",
          // icons: {
          //   comment: {
          //     text: "Create a custom function",
          //     pinned: false,
          //     height: 80,
          //     width: 160
          //   }
          // }, 
        },
      ]
    },
    {
      kind: "category",
      name: "Sounds & Images",
      colour: "#E1AD01",
      style: "JS_Step3" , 
      contents: [
        {
          kind: "block",
          type: "play_sound_on_click",
          // icons: {
          //   comment: {
          //     text: "Play a sound when a button is clicked",
          //     pinned: false,
          //     height: 80,
          //     width: 160
          //   }
          // }, 
        }, 
        {
          kind: "block",
          type: "upload_display_image",
          // icons: {
          //   comment: {
          //     text: "Upload and display an image",
          //     pinned: false,
          //     height: 80,
          //     width: 160
          //   }
          // }, 
        },
        {
          kind: "block",
          type: "remove_image_on_button_click",
          // icons: {
          //   comment: {
          //     text: "Remove the image with a button click",
          //     pinned: false,
          //     height: 80,
          //     width: 160
          //   }
          // }, 
        },
      ]
    },
    {
      kind: "category",
      name: "Create A Form",
      colour: "#E1AD01",
      style: "JS_Step4" , 
      contents: [
        {
          kind: "block",
          type: "handle_form_submission",
          // icons: {
          //   comment: {
          //     text: "Handle form submission",
          //     pinned: false,
          //     height: 80,
          //     width: 160
          //   }
          // }, 
        }, 
        {
          kind:"block",
          type: "set_form_data_to",
          // icons: {
          //   comment: {
          //     text: "Set the form data to a variable use the lable block",
          //     pinned: false,
          //     height: 80,
          //     width: 160
          //   }
          // }, 
        }, 
        {
          kind: "block",
          type: "fetch_block",
          // icons: {
          //   comment: {
          //     text: "Pass the data to the backend",
          //     pinned: false,
          //     height: 80,
          //     width: 160
          //   }
          // }, 
        },
        {
          kind: "block",
          type: "clear_form_fields",
          // icons: {
          //   comment: {
          //     text: "Clear all input fields in a form",
          //     pinned: false,
          //     height: 80,
          //     width: 160
          //   }
          // }, 
        },
      ]
    },
    {
      kind: "category",
      name: "Create A Todo List",
      colour: "#E1AD01",
      style: "JS_Step5" , 
      contents: [
        {
          kind:"block",
          type: "create_task",
          // icons: {
          //   comment: {
          //     text: "Create a new task",
          //     pinned: false,
          //     height: 80,
          //     width: 160
          //   }
          // }, 
        },
        {
          kind:"block",
          type: "toggle_checkbox",
          // icons: {
          //   comment: {
          //     text: "Strike through a task",
          //     pinned: false,
          //     height: 80,
          //     width: 160
          //   }
          // }, 
        },
        {
          kind:"block",
          type: "delete_task",
          // icons: {
          //   comment: {
          //     text: "Delete a task",
          //     pinned: false,
          //     height: 80,
          //     width: 160
          //   }
          // }, 
        },
      ]
    },
  ],
};
