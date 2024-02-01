// import "../blocks/javascript/blocks";
import "../blocks/html/blocks";

export const htmlCategory = {
  kind: "category",
  name: "html",
  colour: "#4295f5",
  contents: [
    {
      kind: "block",
      type: "html_html",
    },
    {
      kind: "category",
      name: "Text",
      colour: "#74aff2",
      contents: [
        {
          kind: "block",
          type: "html_addtext",
        },
        {
          kind: "block",
          type: "html_textadd",
        },
        {
          kind: "block",
          type: "html_h",
        },
        {
          kind: "block",
          type: "html_p",
        },
        {
          kind: "block",
          type: "html_br",
        },
      ],
    },
    {
      kind: "category",
      name: "Table",
      colour: "#74aff2",
      contents: [
        {
          kind: "block",
          type: "html_table",
        },
        {
          kind: "block",
          type: "table_rows",
        },
        {
          kind: "block",
          type: "table_headings",
        },
        {
          kind: "block",
          type: "table_data",
        },
      ],
    },
    {
      kind: "category",
      name: "Form",
      colour: "#74aff2",
      contents: [
        {
          kind: "block",
          type: "html_form",
        },
        {
          kind: "block",
          type: "html_label",
        },
        {
          kind: "block",
          type: "html_input_field",
        },
        {
          kind: "block",
          type: "html_button",
        },
      ],
    },
    {
      kind: "category",
      name: "Lists",
      colour: "#74aff2",
      contents: [
        {
          kind: "block",
          type: "html_ol_list",
        },
        {
          kind: "block",
          type: "html_ul_list",
        },
        {
          kind: "block",
          type: "html_li",
        },
      ],
    },
    {
      kind: "category",
      name: "More",
      colour: "#74aff2",
      contents: [
        {
          kind: "block",
          type: "html_identifier",
        },
        {
          kind: "block",
          type: "html_name",
        },
        {
          kind: "block",
          type: "html_div",
        },
      ],
    },
    {
      kind: "category",
      name: "Multimedia",
      colour: "#74aff2",
      contents: [
        {
          kind: "block",
          type: "html_img",
        },
        {
          kind: "block",
          type: "html_a",
        },
      ],
    },
  ],
};
