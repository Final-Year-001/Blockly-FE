// import "../blocks/javascript/blocks";
import "../blocks/html/blocks";
import "../blocks/html/blocksWithStyle";
import book from '../assets/statusImages/book.gif'
import ProductLogo from "../assets/Logo";


export const htmlCategory = {
  kind: "category",
  name: "HTML",
  colour: "#4295f5",
  style: "HTML_blocks" ,
  contents: [
    {
      kind: "block",
      type: "html_html",
    },
    {
      kind: "block",
      type: "html_idClass",
    },
    {
      kind: "category",
      name: "Words",
      colour: "#74aff2",
      style: "HTML_text" ,
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
          // icons: { 
          //   comment: {
          //     text: "JavaScript code should be wrapped in this tag",
          //     pinned: false,
          //     height: 200,
          //     width: 360
          //   }
          // },
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
      style: "HTML_table" ,
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
      style: "HTML_form" ,
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
          type: "html_checkbox",
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
      style: "HTML_list" ,
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
      name: "Containers",
      colour: "#74aff2",
      style: "HTML_Containers",
      contents: [
        {
          kind: "block",
          type: "html_div1",
        },
      ],
    },
    {
      kind: "category",
      name: "Link",
      style: "HTML_links" ,
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
    {
      kind: "category",
      name: "More",
      colour: "#74aff2",
      style: "HTML_more" ,
      contents: [
        {
          kind: "block",
          type: "html_identifier",
        },
        {
          kind: "block",
          type: "html_name",
        },
      ],
    },
    {
      kind: "category",
      name: "Premade",
      colour: "#74aff2",
      style: "HTML_premade" ,
      contents: [
        {
          kind: "block",
          type: "preBlock_Card",
        },
        {
          kind: "block",
          type: "preBlock_div",
        },
        {
          kind: "block",
          type: "premade_dropdown",
        },
        {
          kind: "block",
          type: "premade_option",
        },
        {
          kind: "block",
          type: "preBlock_button",
        },
        {
          kind: "block",
          type: "preBlock_input",
        },
        {
          kind: "block",
          type: "preBlock_TableMain",
        },
        {
          kind: "block",
          type: "preBlock_TableNewRow",
        },
        {
          kind: "block",
          type: "preBlock_TableHeadingCell",
        },
        {
          kind: "block",
          type: "preBlock_TableNormalCell",
        },
        {
          kind: "block",
          type: "add_image_block",
        },
      ],
    },
  ],
};

